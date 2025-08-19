import svgPaths from "./svg-519i2onpj8";

function Logo() {
  return (
    <div className="absolute contents left-5 top-4" data-name="Logo">
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] left-5 not-italic text-[#1f1f1f] text-[16px] text-left text-nowrap top-7 translate-y-[-50%]">
        <p className="block leading-[24px] whitespace-pre">Significa</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-1.5 h-9 items-center justify-center px-3 py-1.5 relative shrink-0"
      data-name="button"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Get in Touch</p>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 right-6 top-3"
      data-name="actions"
    >
      <Button />
    </div>
  );
}

function Links() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row font-['Inter:Regular',_sans-serif] gap-10 items-start justify-start leading-[0] not-italic p-0 text-[#000000] text-[16px] text-center text-nowrap top-4 translate-x-[-50%]"
      data-name="Links"
      style={{ left: "calc(50% + 0.5px)" }}
    >
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">What we do</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Projects</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Work with us</p>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute bg-[#ffffff] h-14 left-0 top-0 w-[1440px]" data-name="Top Bar">
      <div className="absolute bg-[#f0f0f0] h-px left-0 top-14 w-[1440px]" data-name="line" />
      <Logo />
      <Actions />
      <Links />
    </div>
  );
}

function Showreel() {
  return (
    <div className="absolute h-[616px] left-5 top-[502px] w-[1400px]" data-name="showreel">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1400 616">
        <g id="showreel">
          <g id="image">
            <g clipPath="url(#clip0_1_1252)">
              <path d="M0 0L1400 616" id="line" stroke="var(--stroke-0, #141414)" strokeWidth="0.40625" />
              <path d="M1400 0L0 616" id="line_2" stroke="var(--stroke-0, #141414)" strokeWidth="0.40625" />
            </g>
            <rect
              height="615.594"
              stroke="var(--stroke-0, #141414)"
              strokeWidth="0.40625"
              width="1399.59"
              x="0.203125"
              y="0.203125"
            />
          </g>
          <path d={svgPaths.p3a799000} fill="var(--fill-0, black)" id="Polygon 1" />
        </g>
        <defs>
          <clipPath id="clip0_1_1252">
            <rect fill="white" height="616" width="1400" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TitleDescription() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="title+description"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[32px] text-center w-full">
        <p className="block leading-[36px]">
          {`From strategy to code, we deliver `}
          <br aria-hidden="true" />
          user-centred platforms for ambitious businesses.
        </p>
      </div>
    </div>
  );
}

function TitleDescriptionCta() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-6 items-center justify-start left-1/2 p-0 top-[1258px] translate-x-[-50%] w-[680px]"
      data-name="title+description+cta"
    >
      <TitleDescription />
    </div>
  );
}

function Frame427318951() {
  return (
    <div className="box-border content-stretch flex flex-row font-['Inter:Medium',_sans-serif] gap-3 items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[24px] text-left text-nowrap w-full">
      <div className="relative shrink-0">
        <p className="block leading-[36.364px] text-nowrap whitespace-pre">Recent Projects</p>
      </div>
      <div className="flex flex-col justify-center opacity-50 relative shrink-0">
        <p className="block leading-[32px] text-nowrap whitespace-pre">{`View all projects ->`}</p>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute bottom-0 left-0 right-[-0.33px] top-0" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 451 495">
        <g id="image">
          <g clipPath="url(#clip0_1_1258)">
            <rect fill="var(--fill-0, white)" height="495" width="451" />
            <path d="M0 0L451 495" id="line" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
            <path d="M451 0L0 495" id="line_2" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
          </g>
          <rect height="494" stroke="var(--stroke-0, #CCCCCC)" width="450" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1258">
            <rect fill="white" height="495" width="451" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[495px] overflow-clip relative shrink-0 w-full" data-name="Image">
      <Image1 />
    </div>
  );
}

function Frame2361() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Project Title</p>
      </div>
    </div>
  );
}

function Frame2362() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-50 relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Description</p>
      </div>
    </div>
  );
}

function Frame4846() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      <Frame2361 />
      <Frame2362 />
    </div>
  );
}

function Content() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Content"
    >
      <Frame4846 />
    </div>
  );
}

function FeatureCard() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-5 grow h-full items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Feature Card"
    >
      <Image2 />
      <Content />
    </div>
  );
}

function ProjectImages() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="projectImages"
    >
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        {[...Array(3).keys()].map((_, i) => (
          <FeatureCard key={i} />
        ))}
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0" />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0" />
    </div>
  );
}

function Articles() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="articles"
    >
      <Frame427318951 />
      <ProjectImages />
    </div>
  );
}

function Frame427318952() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-10 items-start justify-start left-1/2 p-0 top-[1446px] translate-x-[-50%] w-[1400px]">
      <Articles />
    </div>
  );
}

function Image8() {
  return (
    <div
      className="absolute h-[464px] left-1/2 overflow-clip top-[4540px] translate-x-[-50%] w-[800px]"
      data-name="Image"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 800 464">
        <g id="image">
          <g clipPath="url(#clip0_1_1235)">
            <rect fill="var(--fill-0, white)" height="464" width="800" />
            <path d="M0 0L800 464" id="line" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
            <path d="M800 0L0 464" id="line_2" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
          </g>
          <rect height="463" stroke="var(--stroke-0, #CCCCCC)" width="799" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1235">
            <rect fill="white" height="464" width="800" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Metric() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Inter:Medium',_sans-serif] gap-1 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-left w-40"
      data-name="metric"
    >
      <div className="relative shrink-0 text-[40px] w-full">
        <p className="block leading-[40px]">98%</p>
      </div>
      <div className="flex flex-col justify-center opacity-50 relative shrink-0 text-[20px] w-full">
        <p className="block leading-[16px]">Metric</p>
      </div>
    </div>
  );
}

function Metric1() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Inter:Medium',_sans-serif] gap-1 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-left w-40"
      data-name="metric"
    >
      <div className="relative shrink-0 text-[40px] w-full">
        <p className="block leading-[40px]">30</p>
      </div>
      <div className="flex flex-col justify-center opacity-50 relative shrink-0 text-[20px] w-full">
        <p className="block leading-[16px]">Metric</p>
      </div>
    </div>
  );
}

function Metric2() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Inter:Medium',_sans-serif] gap-1 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-left w-40"
      data-name="metric"
    >
      <div className="relative shrink-0 text-[40px] w-full">
        <p className="block leading-[40px]">+9</p>
      </div>
      <div className="flex flex-col justify-center opacity-50 relative shrink-0 text-[20px] w-full">
        <p className="block leading-[16px]">Metric</p>
      </div>
    </div>
  );
}

function Metric3() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Inter:Medium',_sans-serif] gap-1 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-left"
      data-name="metric"
    >
      <div className="relative shrink-0 text-[40px] w-full">
        <p className="block leading-[40px]">3.4</p>
      </div>
      <div className="flex flex-col justify-center opacity-50 relative shrink-0 text-[20px] w-full">
        <p className="block leading-[16px]">Metric</p>
      </div>
    </div>
  );
}

function Metrics() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-start p-0 top-[6194px] translate-x-[-50%]"
      data-name="metrics"
      style={{ left: "calc(50% + 0.5px)" }}
    >
      <Metric />
      <Metric1 />
      <Metric2 />
      <Metric3 />
    </div>
  );
}

function TitleDescription1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="title+description"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center relative shrink-0 text-[#000000] text-[32px] w-full">
        <p className="block leading-[36px]">
          We are a team of designers, developers, and product managers working as one.
        </p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.8)] w-full">
        <p className="block leading-[24px]">
          When you work with us, you get the whole team to turn your ideas into seamless experiences. Whether its an
          e-commerce platform, a mobile app, a SaaS product, we’ll build it with care, curiosity, backed by 10 years of
          expertise, recognised by international awards.
        </p>
      </div>
    </div>
  );
}

function TitleDescriptionCta1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-6 items-center justify-start leading-[0] left-1/2 not-italic p-0 text-center top-[2226px] translate-x-[-50%] w-[680px]"
      data-name="title+description+cta"
    >
      <TitleDescription1 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center opacity-50 relative shrink-0 text-[#000000] text-[24px] w-full">
        <p className="block leading-[32px]">{`Explore our services ->`}</p>
      </div>
    </div>
  );
}

function TitleDescription2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="title+description"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center relative shrink-0 text-[#000000] text-[32px] w-full">
        <p className="block leading-[36px]">We do business for good, building with impact in mind.</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.8)] w-full">
        <p className="block leading-[24px]">
          As a certified B Corp and member of 1% for the Planet, we are committed to designing and building ethically,
          inclusively, and sustainably.
        </p>
      </div>
    </div>
  );
}

function TitleDescriptionCta2() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-6 items-center justify-start leading-[0] left-1/2 not-italic p-0 text-center top-[4296px] translate-x-[-50%] w-[680px]"
      data-name="title+description+cta"
    >
      <TitleDescription2 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center opacity-50 relative shrink-0 text-[#000000] text-[24px] w-full">
        <p className="block leading-[32px]">{`Learn more ->`}</p>
      </div>
    </div>
  );
}

function TitleDescription3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="title+description"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[32px] text-center w-full">
        <p className="block leading-[36px]">Thinking, building, sharing.</p>
      </div>
    </div>
  );
}

function TitleDescriptionCta3() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-6 items-center justify-start left-1/2 p-0 top-[3614px] translate-x-[-50%] w-[680px]"
      data-name="title+description+cta"
    >
      <TitleDescription3 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#000000] text-[24px] text-center w-full">
        <p className="block leading-[32px]">{`View all posts ->`}</p>
      </div>
    </div>
  );
}

function TitleDescription4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="title+description"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center relative shrink-0 text-[#000000] text-[32px] w-full">
        <p className="block leading-[36px]">We have fun!</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.8)] w-full">
        <p className="block leading-[24px]">
          {`Our Playground is where we let our creativity run wild. As avid contributors `}
          <br aria-hidden="true" />
          {`to the Open Source community, we are proud to share some of the tools `}
          <br aria-hidden="true" />
          we’ve built.
        </p>
      </div>
    </div>
  );
}

function TitleDescriptionCta4() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-6 items-center justify-start leading-[0] left-1/2 not-italic p-0 text-center top-[5144px] translate-x-[-50%] w-[680px]"
      data-name="title+description+cta"
    >
      <TitleDescription4 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center opacity-50 relative shrink-0 text-[#000000] text-[24px] w-full">
        <p className="block leading-[32px]">{`View all experiments ->`}</p>
      </div>
    </div>
  );
}

function TitleDescription5() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="title+description"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center relative shrink-0 text-[#000000] text-[32px] w-full">
        <p className="block leading-[36px]">
          We love what we do, and so
          <br aria-hidden="true" />
          do our clients.
        </p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.8)] w-full">
        <p className="block leading-[24px]">
          Our clients don’t just get great products, they enjoy the process too. An independent entity runs customer
          satisfaction surveys and interviews to help us understand how we can keep continuously improving.
        </p>
      </div>
    </div>
  );
}

function TitleDescriptionCta5() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-6 items-center justify-start leading-[0] left-1/2 not-italic p-0 text-center top-[5926px] translate-x-[-50%] w-[680px]"
      data-name="title+description+cta"
    >
      <TitleDescription5 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center opacity-50 relative shrink-0 text-[#000000] text-[24px] w-full">
        <p className="block leading-[32px]">{`Link to CX ->`}</p>
      </div>
    </div>
  );
}

function Image9() {
  return (
    <div className="absolute bottom-0 left-0 right-[-0.33px] top-0" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 451 322">
        <g id="image">
          <g clipPath="url(#clip0_1_1262)">
            <rect fill="var(--fill-0, white)" height="322" width="451" />
            <path d="M0 0L451 322" id="line" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
            <path d="M451 0L0 322" id="line_2" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
          </g>
          <rect height="321" stroke="var(--stroke-0, #CCCCCC)" width="450" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1262">
            <rect fill="white" height="322" width="451" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Image10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Image">
      <Image9 />
    </div>
  );
}

function Frame2367() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Blog title</p>
      </div>
    </div>
  );
}

function Frame2368() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-50 relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Descripion</p>
      </div>
    </div>
  );
}

function Frame4849() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      <Frame2367 />
      <Frame2368 />
    </div>
  );
}

function Content3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Content"
    >
      <Frame4849 />
    </div>
  );
}

function FeatureCard3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-5 grow h-[390px] items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Feature Card"
    >
      <Image10 />
      <Content3 />
    </div>
  );
}

function Frame427318959() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-6 items-start justify-center left-1/2 p-0 top-[3766px] translate-x-[-50%] w-[1400px]">
      {[...Array(3).keys()].map((_, i) => (
        <FeatureCard3 key={i} />
      ))}
    </div>
  );
}

function Frame2373() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Title</p>
      </div>
    </div>
  );
}

function Frame427318965() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
      <Frame2373 />
    </div>
  );
}

function Frame2374() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-50 relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Description</p>
      </div>
    </div>
  );
}

function Frame427318967() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      <Frame427318965 />
      <Frame2374 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Industry</p>
      </div>
    </div>
  );
}

function Frame427318966() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Frame427318967 />
    </div>
  );
}

function Frame427318969() {
  return (
    <div className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-full">
      <Frame427318966 />
    </div>
  );
}

function Image16() {
  return (
    <div className="h-[322px] overflow-clip relative shrink-0 w-full" data-name="Image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 688 322">
        <g id="image">
          <g clipPath="url(#clip0_1_1231)">
            <rect fill="var(--fill-0, white)" height="322" width="688" />
            <path d="M0 0L688 322" id="line" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
            <path d="M688 0L0 322" id="line_2" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
          </g>
          <rect height="321" stroke="var(--stroke-0, #CCCCCC)" width="687" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1231">
            <rect fill="white" height="322" width="688" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FeatureCard6() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Feature Card"
    >
      <Frame427318969 />
      <Image16 />
    </div>
  );
}

function Frame427318962() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 items-start justify-center p-0 relative shrink-0 w-full">
      {[...Array(2).keys()].map((_, i) => (
        <FeatureCard6 key={i} />
      ))}
    </div>
  );
}

function Frame427318968() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-10 items-start justify-start left-5 p-0 top-[2518px] w-[1400px]">
      {[...Array(2).keys()].map((_, i) => (
        <Frame427318962 key={i} />
      ))}
    </div>
  );
}

function Image23() {
  return (
    <div className="absolute bottom-0 left-0 right-[-0.33px] top-0" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 451 322">
        <g id="image">
          <g clipPath="url(#clip0_1_1262)">
            <rect fill="var(--fill-0, white)" height="322" width="451" />
            <path d="M0 0L451 322" id="line" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
            <path d="M451 0L0 322" id="line_2" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
          </g>
          <rect height="321" stroke="var(--stroke-0, #CCCCCC)" width="450" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1262">
            <rect fill="white" height="322" width="451" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Image24() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Image">
      <Image23 />
    </div>
  );
}

function Frame2381() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Project Title</p>
      </div>
    </div>
  );
}

function Frame2382() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-50 relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Descripion</p>
      </div>
    </div>
  );
}

function Frame4852() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      <Frame2381 />
      <Frame2382 />
    </div>
  );
}

function Content6() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Content"
    >
      <Frame4852 />
    </div>
  );
}

function FeatureCard10() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-5 grow h-[390px] items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Feature Card"
    >
      <Image24 />
      <Content6 />
    </div>
  );
}

function Frame427318963() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-6 items-start justify-center left-1/2 p-0 top-[5396px] translate-x-[-50%] w-[1400px]">
      {[...Array(3).keys()].map((_, i) => (
        <FeatureCard10 key={i} />
      ))}
    </div>
  );
}

function TitleDescription6() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 h-[92px] items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-center w-full"
      data-name="title+description"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center relative shrink-0 text-[#000000] text-[32px] w-full">
        <p className="block leading-[36px]">We are ready to grow your business.</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.8)] w-full">
        <p className="block leading-[24px]">
          {`Are you? Let’s get the conversation going… or keep browsing and see `}
          <br aria-hidden="true" />
          if we’re the right fit!
        </p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-1.5 h-10 items-center justify-center px-3 py-1.5 relative shrink-0"
      data-name="button"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Get in Touch</p>
      </div>
    </div>
  );
}

function Frame427318970() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-6 items-center justify-start left-1/2 p-0 top-20 translate-x-[-50%] w-[680px]">
      <TitleDescription6 />
      <Button1 />
    </div>
  );
}

function ConversionCta() {
  return (
    <div className="absolute h-[316px] left-1/2 top-[6394px] translate-x-[-50%] w-[1400px]" data-name="conversion CTA">
      <div className="h-[316px] overflow-clip relative w-[1400px]">
        <Frame427318970 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame2387() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Why should I work with Significa?</p>
      </div>
    </div>
  );
}

function Frame4806() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Frame2387 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-6" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path
            d={svgPaths.p25e957c0}
            id="vector"
            stroke="var(--stroke-0, #7A7A7A)"
            strokeLinejoin="round"
            strokeWidth="1.3"
          />
        </g>
      </svg>
    </div>
  );
}

function Content9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-0.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Content"
    >
      <Frame4806 />
      <Icon />
    </div>
  );
}

function Frame2388() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">What is it like to collaborate with Significa?</p>
      </div>
    </div>
  );
}

function Frame4807() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Frame2388 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-6" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path
            d={svgPaths.p25e957c0}
            id="vector"
            stroke="var(--stroke-0, #7A7A7A)"
            strokeLinejoin="round"
            strokeWidth="1.3"
          />
        </g>
      </svg>
    </div>
  );
}

function Content10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-0.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Content"
    >
      <Frame4807 />
      <Icon1 />
    </div>
  );
}

function Frame2389() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">How long does a project take from start until launch?</p>
      </div>
    </div>
  );
}

function Frame4808() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Frame2389 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-6" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path
            d={svgPaths.p25e957c0}
            id="vector"
            stroke="var(--stroke-0, #7A7A7A)"
            strokeLinejoin="round"
            strokeWidth="1.3"
          />
        </g>
      </svg>
    </div>
  );
}

function Content11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-0.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Content"
    >
      <Frame4808 />
      <Icon2 />
    </div>
  );
}

function Frame427318971() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-4 items-start justify-start left-1/2 p-0 top-[6946px] translate-x-[-50%] w-[800px]">
      <Content9 />
      <div className="h-0 relative shrink-0 w-[800px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 800 2">
            <path d="M0 1H800" id="Vector 245" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
      <Content10 />
      <div className="h-0 relative shrink-0 w-[800px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 800 2">
            <path d="M0 1H800" id="Vector 245" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
      <Content11 />
      <div className="h-0 relative shrink-0 w-[800px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 800 2">
            <path d="M0 1H800" id="Vector 245" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
      <Content9 />
      <div className="h-0 relative shrink-0 w-[800px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 800 2">
            <path d="M0 1H800" id="Vector 245" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
      <Content10 />
      <div className="h-0 relative shrink-0 w-[800px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 800 2">
            <path d="M0 1H800" id="Vector 245" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content14() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[16px] text-left"
      data-name="Content"
    >
      <div className="font-['Inter:Medium',_sans-serif] relative shrink-0 text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Significa</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] relative shrink-0 w-[419px]">
        <p className="block leading-[24px]">
          Think. Design.
          <br aria-hidden="true" />
          Develop. Launch.
          <br aria-hidden="true" />
          Repeat.
        </p>
      </div>
    </div>
  );
}

function Donation() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-6 items-start justify-start left-6 p-0 top-8"
      data-name="Donation"
    >
      <Content14 />
    </div>
  );
}

function Frame509() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">What we do</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">CX</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Projects</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Blog</p>
      </div>
    </div>
  );
}

function Resources() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0"
      data-name="Resources"
    >
      <div className="font-['Inter:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Significa</p>
      </div>
      <Frame509 />
    </div>
  );
}

function Frame511() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Link</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Link</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Link</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Link</p>
      </div>
    </div>
  );
}

function Curationist() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0"
      data-name="Curationist"
    >
      <div className="font-['Inter:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Link</p>
      </div>
      <Frame511 />
    </div>
  );
}

function Frame510() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Link</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Link</p>
      </div>
    </div>
  );
}

function Programs() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0"
      data-name="Programs"
    >
      <div className="font-['Inter:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Link</p>
      </div>
      <Frame510 />
    </div>
  );
}

function Frame513() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Link</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Link</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Link</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Link</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Link</p>
      </div>
    </div>
  );
}

function FollowUs() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0"
      data-name="Follow Us"
    >
      <div className="font-['Inter:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Follow Us</p>
      </div>
      <Frame513 />
    </div>
  );
}

function Frame427318972() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-[73px] items-start justify-start left-[913px] p-0 top-8">
      <Resources />
      <Curationist />
      <Programs />
      <FollowUs />
    </div>
  );
}

function Frame2354() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[20px] whitespace-pre">
          Legal
        </p>
      </div>
    </div>
  );
}

function LegalAndPrivacy() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-6 items-start justify-start left-6 p-0 top-[268px] w-[1392px]"
      data-name="Legal and Privacy"
    >
      <div className="basis-0 font-['Inter:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[14px] text-left">
        <p className="block leading-[20px]">{`Significa — Digital Product Design & Development Agency`}</p>
      </div>
      <Frame2354 />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="relative shrink-0 size-[46px]" data-name="avatar">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
          <g id="avatar">
            <g clipPath="url(#clip0_1_1213)">
              <path d={svgPaths.p185c4580} fill="var(--fill-0, #CCCCCC)" id="lines" />
            </g>
            <rect
              height="48.3"
              rx="24.15"
              stroke="var(--stroke-0, #CCCCCC)"
              strokeWidth="2.3"
              width="48.3"
              x="1.85"
              y="1.85"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_1213">
              <rect fill="white" height="46" rx="23" width="46" x="3" y="3" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="relative shrink-0 size-[46px]" data-name="avatar">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
          <g id="avatar">
            <g clipPath="url(#clip0_1_1198)">
              <path d={svgPaths.p2575e200} fill="var(--fill-0, #CCCCCC)" id="lines" />
            </g>
            <rect
              height="48.3"
              rx="24.15"
              stroke="var(--stroke-0, #CCCCCC)"
              strokeWidth="2.3"
              width="48.3"
              x="1.85"
              y="1.85"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_1198">
              <rect fill="white" height="46" rx="23" width="46" x="3" y="3" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame427318973() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-5 items-center justify-start left-6 p-0 top-[182px]">
      <Avatar1 />
      <Avatar2 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#ffffff] bottom-0 h-80 left-1/2 translate-x-[-50%] w-[1440px]" data-name="Footer">
      <div className="h-80 overflow-clip relative w-[1440px]">
        <Donation />
        <Frame427318972 />
        <div className="absolute h-0 left-6 top-[252px] w-[1392px]" data-name="Line">
          <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1392 2">
              <path d="M0 1H1392" id="Line" opacity="0.2" stroke="var(--stroke-0, black)" />
            </svg>
          </div>
        </div>
        <LegalAndPrivacy />
        <Frame427318973 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function HomeDesktop() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="Home/Desktop">
      <TopBar />
      <div className="absolute font-['Inter:Medium',_sans-serif] leading-[0] left-[720px] not-italic text-[#000000] text-[48px] text-center top-52 translate-x-[-50%] w-[823px]">
        <p className="block leading-[56px]">
          We are a design and development agency building digital products that work people love to use
        </p>
      </div>
      <Showreel />
      <TitleDescriptionCta />
      <Frame427318952 />
      <Image8 />
      <Metrics />
      <TitleDescriptionCta1 />
      <TitleDescriptionCta2 />
      <TitleDescriptionCta3 />
      <TitleDescriptionCta4 />
      <TitleDescriptionCta5 />
      <Frame427318959 />
      <Frame427318968 />
      <Frame427318963 />
      <ConversionCta />
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#000000] text-[32px] text-center top-[6868px] translate-x-[-50%] translate-y-[-50%] w-[612px]">
        <p className="block leading-[36px]">FAQs</p>
      </div>
      <Frame427318971 />
      <Footer />
    </div>
  );
}