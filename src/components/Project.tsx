export default function Project() {
  return (
    <div className="w-full flex gap-8 px-8 text-center">
      <div className="font-Gentium w-1/3 flex flex-col items-center gap-8 text-center h-full">
        <p className="font-Franklin font-black md:text-5xl lg:text-5xl leading-none">
          RADICLE DESIGN SYSTEM
        </p>
        <div className="w-12 h-[2px] bg-gray-800" />
        <div className="flex flex-col align-left text-left indent-4 gap-2">
          <p className="font-Franklin text-sm uppercase font-semibold">
            Consistency By Design
          </p>
          <p>
            Consistency in design ensures a cohesive user experience, making
            interfaces intuitive and predictable. By adhering to design
            guidelines and patterns, teams can create a unified visual language
            across all products.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-1 text-start items-start w-full">
          <p>1</p>
          <a href="/" className="underline">
            Radicle Tokens on Radicle
          </a>{" "}
          <a href="/" className="underline">
            Radicle UI Kit in Figma
          </a>
        </div>
        <div className="font-Gentium text-sm w-full flex align-left text-left gap-2">
          <p className="font-Gentium uppercase font-semibold">2024</p>
          <p>Visual Design, UI, Front End</p>
        </div>
      </div>
      <div className="w-[2px] h-full bg-gray-800" />
      <div className="font-Gentium flex w-full flex-col gap-4 h-full overflow-y-scroll overscroll-y-auto ">
        <div className="text-sm w-full text-center flex flex-col gap-8">
          <div className="flex border-b-[1px] pb-6 border-black">
            <p className="w-1/3 text-start font-bold">
              Stable Base Color Scales
            </p>
            <p className="w-2/3 text-start pr-[10%]">
              A design system is a comprehensive collection of design standards,
              documentation, and principles that guide the creation of
              consistent and cohesive user interfaces across a product or suite
              of products. It includes a library of reusable components, such as
              buttons, forms, and navigation elements, which are built to adhere
              to a unified visual language and interaction pattern. <br />{" "}
              <br /> By providing a single source of truth for designers and
              developers, a design system ensures that the user experience is
              seamless and intuitive, regardless of the platform or device. It
              also streamlines the design and development process, reducing
              redundancy and enabling teams to focus on solving complex problems
              rather than reinventing the wheel. Ultimately, a well-implemented
              design system enhances brand identity, improves accessibility, and
              accelerates the delivery of high-quality digital products.
            </p>
          </div>
        </div>
        <div className="text-sm border-black border-b-[1px] pb-6 w-full text-center flex flex-col gap-8">
          <div className="flex">
            <p className="w-1/3 text-start font-bold">Semantic Definitions</p>
            <p className="w-2/3 text-start pr-[10%]">
              emantic design tokens are a set of standardized variables that
              represent the core design decisions of a user interface, such as
              colors, typography, spacing, and other visual properties. Unlike
              traditional design tokens that might be named after their specific
              values (e.g., `primary-blue` or `font-size-16`), semantic design
              tokens are named based on their intended use and meaning within
              the design system (e.g., `primary-button-background` or
              `heading-font-size`). This approach promotes a more intuitive and
              maintainable design system by abstracting the underlying values
              and focusing on the purpose and context of each token. By using
              semantic design tokens, designers and developers can ensure
              consistency across different components and platforms, facilitate
              easier updates and theming, and enhance collaboration by providing
              a common language that bridges the gap between design and
              development.
            </p>
          </div>
        </div>
        <div className="text-sm  w-full text-center flex flex-col gap-8">
          <div className="flex">
            <p className="w-1/3 text-start font-bold">Semantic Definitions</p>
            <p className="w-2/3 text-start pr-[10%]">
              emantic design tokens are a set of standardized variables that
              represent the core design decisions of a user interface, such as
              colors, typography, spacing, and other visual properties. Unlike
              traditional design tokens that might be named after their specific
              values (e.g., `primary-blue` or `font-size-16`), semantic design
              tokens are named based on their intended use and meaning within
              the design system (e.g., `primary-button-background` or
              `heading-font-size`). This approach promotes a more intuitive and
              maintainable design system by abstracting the underlying values
              and focusing on the purpose and context of each token. By using
              semantic design tokens, designers and developers can ensure
              consistency across different components and platforms, facilitate
              easier updates and theming, and enhance collaboration by providing
              a common language that bridges the gap between design and
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
