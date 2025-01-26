export default function GetInTouch() {
  return (
    <div className="bg-neutral-300 flex flex-col items-start p-4 gap-4 z-50">
      <p className="w-full text-start font-Franklin uppercase">
        Need help with your design system?
      </p>
      <div className="w-full text-start">
        Inconsistent design or inefficient design system? <br /> Too much bloat? Don't have a design
        system at all? I'm here to help!
      </div>
      <ul className="capitalize text-start">
        <li>design audit</li>
        <li>UI kits</li>
        <li>design tokens</li>
        <li>workflow improvements</li>
      </ul>
      <button className="px-8 py-4 bg-white w-fit">Get in touch</button>
    </div>
  );
}
