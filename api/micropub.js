import querystring from "node:querystring";
import slugify from "@sindresorhus/slugify";
import { Octokit } from "@octokit/rest";
import commitPlugin from "octokit-commit-multiple-files";

const OctokitWithPlugin = Octokit.plugin(commitPlugin);
const octokit = new OctokitWithPlugin({
  auth: process.env.GITHUB_ACCESS_TOKEN,
});

const getURLDate = (str) => {
  const time = str.toLocaleString("sv-SE", {
    timeZone: "America/Denver",
    hour12: false,
  });
  return time;
};

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");

  // Add OPTIONS method handling
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Check authorization
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== "Bearer " + process.env.QUILL_TOKEN) {
    return res.status(401).json({
      error: "Unauthorized: Invalid bearer token",
    });
  }
  const body = typeof req.body === "string" ? req.body : JSON.stringify(req.body);
  const { content } = querystring.parse(body);
  try {
    const { content } = querystring.parse(req.body);
    const date = new Date();
    const filename = slugify(getURLDate(date));

    const template = `---\ndate: ${date.toISOString()}\n---\n${decodeURIComponent(content)}`;

    await octokit.createOrUpdateFiles({
      owner: process.env.GITHUB_USERNAME,
      repo: process.env.GITHUB_REPO_NAME,
      branch: "main",
      changes: [
        {
          message: `📝 - Adding note: ${filename}`,
          files: {
            [`notes/${filename}.md`]: {
              contents: Buffer.from(template).toString("base64"),
            },
            "functions/micropub-latest.json": `{ "latest": "notes/${filename}.md" }`,
          },
        },
      ],
    });

    res.setHeader("Location", `http://${process.env.DOMAIN_NAME}/notes`);
    return res.status(201).end();
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
}
