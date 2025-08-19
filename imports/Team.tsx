import svgPaths from "./svg-lezlac9fmh";

interface ImageProps {
  style?: "squared" | "circle";
}

function Image({ style = "squared" }: ImageProps) {
  const line = (
    <div className="absolute inset-0" data-name="line">
      <div className="absolute inset-[-0.11%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 422 422">
          <path d="M1 1L421 421" id="line" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
        </svg>
      </div>
    </div>
  );
  const line1 = (
    <div className="absolute inset-0" data-name="line">
      <div className="absolute inset-[-0.11%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 422 422">
          <path d="M421 1L1 421" id="line" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
        </svg>
      </div>
    </div>
  );
  if (style === "circle") {
    return (
      <div className="bg-[#ffffff] relative rounded-[1000px] size-full" data-name="style=circle">
        <div className="overflow-clip relative size-full">
          {line}
          {line1}
        </div>
        <div
          aria-hidden="true"
          className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[1000px]"
        />
      </div>
    );
  }
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="style=squared">
      <div className="relative size-full">
        {line}
        {line1}
      </div>
      <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TeamCard() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative size-full"
      data-name="Team Card"
    >
      <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative shrink-0 w-full" data-name="image">
        <TeamCard />
      </div>
      <div
        className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
        data-name="Content"
      >
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
          <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[18px] text-left">
            <p className="block leading-[24px]">Virginia Poundstone</p>
          </div>
        </div>
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
          <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-50 relative shrink-0 text-[#000000] text-[18px] text-left">
            <p className="block leading-[24px]">Content Curation Director</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute bg-[#ffffff] h-[640px] left-6 right-6 top-[432px]" data-name="image">
      <div className="overflow-clip relative size-full">
        <div className="absolute inset-0" data-name="line">
          <div className="absolute inset-[-0.09%_-0.02%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1394 642">
              <path d="M1 1L1393 641" id="line" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-0" data-name="line">
          <div className="absolute inset-[-0.09%_-0.02%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1394 642">
              <path d="M1393 1L1 641" id="line" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Avatar() {
  return (
    <div className="absolute left-6 size-5 top-[18px]" data-name="avatar">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <g id="avatar">
            <g clipPath="url(#clip0_3_13559)">
              <path d={svgPaths.p18b82000} fill="var(--fill-0, #CCCCCC)" id="lines" />
            </g>
            <rect height="21" rx="10.5" stroke="var(--stroke-0, #CCCCCC)" width="21" x="0.5" y="0.5" />
          </g>
          <defs>
            <clipPath id="clip0_3_13559">
              <rect fill="white" height="20" rx="10" width="20" x="1" y="1" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute contents left-6 top-4" data-name="Logo">
      <Avatar />
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] left-[60px] not-italic text-[#1f1f1f] text-[16px] text-left text-nowrap top-7 translate-y-[-50%]">
        <p className="block leading-[24px] whitespace-pre">Curationist</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-5" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <path d={svgPaths.p1f81f500} fill="var(--fill-0, #7A7A7A)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function SearchBar() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 items-center justify-start overflow-clip p-[8px] relative shrink-0 w-[140px]"
      data-name="search bar"
    >
      <Icon />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#7a7a7a] text-[14px] text-left">
        <p className="block leading-[20px]">Search by...</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1.5 h-9 items-center justify-center px-3 py-1.5 relative shrink-0"
      data-name="button"
    >
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[14px] text-center text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Log In</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[#1f1f1f] box-border content-stretch flex flex-row gap-1.5 h-9 items-center justify-center px-3 py-1.5 relative shrink-0"
      data-name="button"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Create account</p>
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
      <SearchBar />
      <Button />
      <Button1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-5" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <path
            d="M6 8.5L10 12.5L14 8.5"
            id="vector"
            stroke="var(--stroke-0, #1F1F1F)"
            strokeLinejoin="round"
            strokeWidth="1.3"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame4927() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-center text-nowrap">
        <p className="block leading-[24px] whitespace-pre">About</p>
      </div>
      <Icon1 />
    </div>
  );
}

function Links() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-10 items-start justify-start left-[193px] p-0 top-4"
      data-name="Links"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-center text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Works</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-center text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Curated Collections</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-center text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Editorial Features</p>
      </div>
      <Frame4927 />
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

function Icon2() {
  return (
    <div className="relative shrink-0 size-5" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <path
            d="M8 14.5L12 10.5L8 6.5"
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

function Frame4842() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-0.5 items-start justify-start left-6 p-0 top-20">
      <div className="font-['Inter:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">{`Home `}</p>
      </div>
      <Icon2 />
      <div className="font-['Inter:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Team</p>
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 324">
        <g id="image">
          <g clipPath="url(#clip0_3_13551)">
            <rect fill="var(--fill-0, white)" height="324" width="448" />
            <path d="M0 0L448 324" id="line" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
            <path d="M448 0L0 324" id="line_2" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
          </g>
          <rect height="323" stroke="var(--stroke-0, #CCCCCC)" width="447" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_3_13551">
            <rect fill="white" height="324" width="448" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2364() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Virginia Poundstone</p>
      </div>
    </div>
  );
}

function Frame2365() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-50 relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Content Curation Director</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Content"
    >
      <Frame2364 />
      <Frame2365 />
    </div>
  );
}

function TeamCard1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-5 h-[392px] items-start justify-start p-0 top-[1490px] w-[448px]"
      data-name="Team Card"
      style={{ left: "calc(33.333% + 16px)" }}
    >
      <Image2 />
      <Content1 />
    </div>
  );
}

function Image3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 324">
        <g id="image">
          <g clipPath="url(#clip0_3_13551)">
            <rect fill="var(--fill-0, white)" height="324" width="448" />
            <path d="M0 0L448 324" id="line" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
            <path d="M448 0L0 324" id="line_2" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
          </g>
          <rect height="323" stroke="var(--stroke-0, #CCCCCC)" width="447" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_3_13551">
            <rect fill="white" height="324" width="448" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2366() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Virginia Poundstone</p>
      </div>
    </div>
  );
}

function Frame2367() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-50 relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Content Curation Director</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Content"
    >
      <Frame2366 />
      <Frame2367 />
    </div>
  );
}

function TeamCard2() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-5 h-[392px] items-start justify-start p-0 top-[1490px] w-[448px]"
      data-name="Team Card"
      style={{ left: "calc(66.667% + 8px)" }}
    >
      <Image3 />
      <Content2 />
    </div>
  );
}

function Image4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 324">
        <g id="image">
          <g clipPath="url(#clip0_3_13551)">
            <rect fill="var(--fill-0, white)" height="324" width="448" />
            <path d="M0 0L448 324" id="line" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
            <path d="M448 0L0 324" id="line_2" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
          </g>
          <rect height="323" stroke="var(--stroke-0, #CCCCCC)" width="447" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_3_13551">
            <rect fill="white" height="324" width="448" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2368() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Virginia Poundstone</p>
      </div>
    </div>
  );
}

function Frame2369() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-50 relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Content Curation Director</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Content"
    >
      <Frame2368 />
      <Frame2369 />
    </div>
  );
}

function TeamCard3() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-5 h-[392px] items-start justify-start left-6 p-0 top-[1914px] w-[448px]"
      data-name="Team Card"
    >
      <Image4 />
      <Content3 />
    </div>
  );
}

function Image5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 324">
        <g id="image">
          <g clipPath="url(#clip0_3_13551)">
            <rect fill="var(--fill-0, white)" height="324" width="448" />
            <path d="M0 0L448 324" id="line" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
            <path d="M448 0L0 324" id="line_2" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
          </g>
          <rect height="323" stroke="var(--stroke-0, #CCCCCC)" width="447" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_3_13551">
            <rect fill="white" height="324" width="448" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2370() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Virginia Poundstone</p>
      </div>
    </div>
  );
}

function Frame2371() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-50 relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Content Curation Director</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Content"
    >
      <Frame2370 />
      <Frame2371 />
    </div>
  );
}

function TeamCard4() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-5 h-[392px] items-start justify-start left-6 p-0 top-[2338px] w-[448px]"
      data-name="Team Card"
    >
      <Image5 />
      <Content4 />
    </div>
  );
}

function Image6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 324">
        <g id="image">
          <g clipPath="url(#clip0_3_13551)">
            <rect fill="var(--fill-0, white)" height="324" width="448" />
            <path d="M0 0L448 324" id="line" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
            <path d="M448 0L0 324" id="line_2" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
          </g>
          <rect height="323" stroke="var(--stroke-0, #CCCCCC)" width="447" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_3_13551">
            <rect fill="white" height="324" width="448" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2372() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Virginia Poundstone</p>
      </div>
    </div>
  );
}

function Frame2373() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-50 relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Content Curation Director</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Content"
    >
      <Frame2372 />
      <Frame2373 />
    </div>
  );
}

function TeamCard5() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-5 h-[392px] items-start justify-start p-0 top-[1914px] w-[448px]"
      data-name="Team Card"
      style={{ left: "calc(33.333% + 16px)" }}
    >
      <Image6 />
      <Content5 />
    </div>
  );
}

function Image7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 324">
        <g id="image">
          <g clipPath="url(#clip0_3_13551)">
            <rect fill="var(--fill-0, white)" height="324" width="448" />
            <path d="M0 0L448 324" id="line" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
            <path d="M448 0L0 324" id="line_2" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
          </g>
          <rect height="323" stroke="var(--stroke-0, #CCCCCC)" width="447" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_3_13551">
            <rect fill="white" height="324" width="448" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2374() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Virginia Poundstone</p>
      </div>
    </div>
  );
}

function Frame2375() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-50 relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Content Curation Director</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Content"
    >
      <Frame2374 />
      <Frame2375 />
    </div>
  );
}

function TeamCard6() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-5 h-[392px] items-start justify-start p-0 top-[2338px] w-[448px]"
      data-name="Team Card"
      style={{ left: "calc(33.333% + 16px)" }}
    >
      <Image7 />
      <Content6 />
    </div>
  );
}

function Image8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 324">
        <g id="image">
          <g clipPath="url(#clip0_3_13551)">
            <rect fill="var(--fill-0, white)" height="324" width="448" />
            <path d="M0 0L448 324" id="line" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
            <path d="M448 0L0 324" id="line_2" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
          </g>
          <rect height="323" stroke="var(--stroke-0, #CCCCCC)" width="447" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_3_13551">
            <rect fill="white" height="324" width="448" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2376() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Virginia Poundstone</p>
      </div>
    </div>
  );
}

function Frame2377() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-50 relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Content Curation Director</p>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Content"
    >
      <Frame2376 />
      <Frame2377 />
    </div>
  );
}

function TeamCard7() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-5 h-[392px] items-start justify-start p-0 top-[1914px] w-[448px]"
      data-name="Team Card"
      style={{ left: "calc(66.667% + 8px)" }}
    >
      <Image8 />
      <Content7 />
    </div>
  );
}

function TabsItem() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1.5 items-start justify-start px-3 py-1.5 relative shadow-[0px_1px_0px_0px_#1f1f1f] shrink-0"
      data-name="tabs.item"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[14px] text-center text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Leadership (8)</p>
      </div>
    </div>
  );
}

function TabsItem1() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1.5 items-start justify-start px-3 py-1.5 relative shrink-0"
      data-name="tabs.item"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] text-center text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Editors (123)</p>
      </div>
    </div>
  );
}

function TabsItem2() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1.5 items-start justify-start px-3 py-1.5 relative shrink-0"
      data-name="tabs.item"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] text-center text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Digital Archivist (243)</p>
      </div>
    </div>
  );
}

function TabsItem3() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1.5 items-start justify-start px-3 py-1.5 relative shrink-0"
      data-name="tabs.item"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] text-center text-nowrap">
        <p className="block leading-[20px] whitespace-pre">IT Sector (8)</p>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-row gap-1.5 items-start justify-start left-6 p-0 shadow-[0px_1px_0px_0px_#e0e0e0] top-[1426px]"
      data-name="tabs"
    >
      <TabsItem />
      <TabsItem1 />
      <TabsItem2 />
      <TabsItem3 />
    </div>
  );
}

function Frame4727() {
  return (
    <div className="absolute h-[260px] left-6 top-[3180px] w-[330px]">
      <div className="h-[260px] overflow-clip relative w-[330px]">
        <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] left-[165.5px] not-italic text-[#000000] text-[18px] text-center text-nowrap top-[130px] translate-x-[-50%] translate-y-[-50%]">
          <p className="block leading-[24px] whitespace-pre">Creative Commons</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame4728() {
  return (
    <div className="absolute h-[260px] top-[3180px] w-[330px]" style={{ left: "calc(25% + 18px)" }}>
      <div className="h-[260px] overflow-clip relative w-[330px]">
        <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] left-[165.5px] not-italic text-[#000000] text-[18px] text-center text-nowrap top-[130px] translate-x-[-50%] translate-y-[-50%]">
          <p className="block leading-[24px] whitespace-pre">Critical Minded</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame4729() {
  return (
    <div className="absolute h-[260px] top-[3180px] w-[330px]" style={{ left: "calc(50% + 12px)" }}>
      <div className="h-[260px] overflow-clip relative w-[330px]">
        <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] left-[165px] not-italic text-[#000000] text-[18px] text-center text-nowrap top-[130px] translate-x-[-50%] translate-y-[-50%]">
          <p className="block leading-[24px] whitespace-pre">Grant for the Web</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame4730() {
  return (
    <div className="absolute h-[260px] top-[3180px] w-[330px]" style={{ left: "calc(75% + 6px)" }}>
      <div className="h-[260px] overflow-clip relative w-[330px]">
        <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] left-[165px] not-italic text-[#000000] text-[18px] text-center text-nowrap top-[130px] translate-x-[-50%] translate-y-[-50%]">
          <p className="block leading-[24px] whitespace-pre">Smithsonian OpanAccess</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Image9() {
  return (
    <div className="absolute inset-0" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 244">
        <g id="image">
          <g clipPath="url(#clip0_3_9853)">
            <rect fill="var(--fill-0, white)" height="244" width="448" />
            <path d="M0 0L448 244" id="line" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
            <path d="M448 0L0 244" id="line_2" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
          </g>
          <rect height="243" stroke="var(--stroke-0, #CCCCCC)" width="447" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_3_9853">
            <rect fill="white" height="244" width="448" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-5" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <path d={svgPaths.p34084700} fill="var(--fill-0, #7A7A7A)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1.5 items-center justify-center p-[6px] right-4 top-4"
      data-name="button"
    >
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <Icon3 />
    </div>
  );
}

function Image10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Image">
      <Image9 />
      <Button2 />
    </div>
  );
}

function Frame2378() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Swords that Tell Stories: Plunder and Trade from India to Europe</p>
      </div>
    </div>
  );
}

function Frame2379() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-50 relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Author · May 2022 · 5 min read</p>
      </div>
    </div>
  );
}

function Frame4846() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      <Frame2378 />
      <Frame2379 />
    </div>
  );
}

function Frame2363() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">
          The story of one sword can span thousands of miles and hundreds of years. From the Mughals to...
        </p>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Content"
    >
      <Frame4846 />
      <Frame2363 />
    </div>
  );
}

function FeatureCard() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-5 h-[390px] items-start justify-start left-6 p-0 top-24 w-[448px]"
      data-name="Feature Card"
    >
      <Image10 />
      <Content8 />
    </div>
  );
}

function Image11() {
  return (
    <div className="absolute inset-0" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 244">
        <g id="image">
          <g clipPath="url(#clip0_3_9853)">
            <rect fill="var(--fill-0, white)" height="244" width="448" />
            <path d="M0 0L448 244" id="line" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
            <path d="M448 0L0 244" id="line_2" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
          </g>
          <rect height="243" stroke="var(--stroke-0, #CCCCCC)" width="447" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_3_9853">
            <rect fill="white" height="244" width="448" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-5" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <path d={svgPaths.p34084700} fill="var(--fill-0, #7A7A7A)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1.5 items-center justify-center p-[6px] right-4 top-4"
      data-name="button"
    >
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <Icon4 />
    </div>
  );
}

function Image12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Image">
      <Image11 />
      <Button3 />
    </div>
  );
}

function Frame2380() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Swords that Tell Stories: Plunder and Trade from India to Europe</p>
      </div>
    </div>
  );
}

function Frame2381() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-50 relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Author · May 2022 · 5 min read</p>
      </div>
    </div>
  );
}

function Frame4847() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      <Frame2380 />
      <Frame2381 />
    </div>
  );
}

function Frame2382() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">
          The story of one sword can span thousands of miles and hundreds of years. From the Mughals to...
        </p>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Content"
    >
      <Frame4847 />
      <Frame2382 />
    </div>
  );
}

function FeatureCard1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-5 h-[390px] items-start justify-start left-[496px] p-0 top-24 w-[448px]"
      data-name="Feature Card"
    >
      <Image12 />
      <Content9 />
    </div>
  );
}

function Image13() {
  return (
    <div className="absolute inset-0" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 244">
        <g id="image">
          <g clipPath="url(#clip0_3_9853)">
            <rect fill="var(--fill-0, white)" height="244" width="448" />
            <path d="M0 0L448 244" id="line" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
            <path d="M448 0L0 244" id="line_2" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="1.3" />
          </g>
          <rect height="243" stroke="var(--stroke-0, #CCCCCC)" width="447" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_3_9853">
            <rect fill="white" height="244" width="448" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-5" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <path d={svgPaths.p34084700} fill="var(--fill-0, #7A7A7A)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1.5 items-center justify-center p-[6px] right-4 top-4"
      data-name="button"
    >
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <Icon5 />
    </div>
  );
}

function Image14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Image">
      <Image13 />
      <Button4 />
    </div>
  );
}

function Frame2383() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Swords that Tell Stories: Plunder and Trade from India to Europe</p>
      </div>
    </div>
  );
}

function Frame2384() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-50 relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">Author · May 2022 · 5 min read</p>
      </div>
    </div>
  );
}

function Frame4848() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      <Frame2383 />
      <Frame2384 />
    </div>
  );
}

function Frame2385() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[24px]">
          The story of one sword can span thousands of miles and hundreds of years. From the Mughals to...
        </p>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Content"
    >
      <Frame4848 />
      <Frame2385 />
    </div>
  );
}

function FeatureCard2() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-5 h-[390px] items-start justify-start left-[968px] p-0 top-24 w-[448px]"
      data-name="Feature Card"
    >
      <Image14 />
      <Content10 />
    </div>
  );
}

function Button5() {
  return (
    <div
      className="absolute bg-[#1f1f1f] box-border content-stretch flex flex-row gap-1.5 h-10 items-center justify-center px-3 py-1.5 top-44 translate-x-[-50%]"
      data-name="button"
      style={{ left: "calc(50% - 0.5px)" }}
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Create account</p>
      </div>
    </div>
  );
}

function CreateAccountCta() {
  return (
    <div className="absolute inset-[45.91%_1.67%_28.71%_50.83%]" data-name="Create account CTA">
      <div className="overflow-clip relative size-full">
        <div className="absolute font-['Inter:Medium',_sans-serif] leading-[0] left-[342px] not-italic text-[#000000] text-[24px] text-center text-nowrap top-[88px] translate-x-[-50%]">
          <p className="block leading-[32px] whitespace-pre">Create an account.</p>
        </div>
        <div className="absolute font-['Inter:Medium',_sans-serif] leading-[0] left-[342px] not-italic opacity-50 text-[#000000] text-[24px] text-center text-nowrap top-[120px] translate-x-[-50%]">
          <p className="block leading-[32px] whitespace-pre">Save content for further reading.</p>
        </div>
        <Button5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-5" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <path d={svgPaths.p26846500} fill="var(--fill-0, #7A7A7A)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div
      className="bg-[#cccccc] box-border content-stretch flex flex-row gap-1.5 items-center justify-center px-3 py-1.5 relative shrink-0"
      data-name="button"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Subscribe</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute left-40 top-44 w-[364px]" data-name="input">
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start overflow-clip pl-3 pr-1 py-1 relative w-[364px]">
        <Icon6 />
        <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#7a7a7a] text-[14px] text-left">
          <p className="block leading-[20px]">Subscribe to Newsletter.</p>
        </div>
        <Button6 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e0e0e0] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function ResgistrationCta() {
  return (
    <div className="absolute inset-[45.91%_50.83%_28.71%_1.67%]" data-name="Resgistration CTA">
      <div className="overflow-clip relative size-full">
        <div className="absolute font-['Inter:Medium',_sans-serif] leading-[0] left-[342.5px] not-italic text-[#000000] text-[24px] text-center text-nowrap top-[88px] translate-x-[-50%]">
          <p className="block leading-[32px] whitespace-pre">We’re just getting started!</p>
        </div>
        <div className="absolute font-['Inter:Medium',_sans-serif] leading-[0] left-[342px] not-italic opacity-50 text-[#000000] text-[24px] text-center text-nowrap top-[120px] translate-x-[-50%]">
          <p className="block leading-[32px] whitespace-pre">Sign up to receive updates as we evolve.</p>
        </div>
        <Input />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Content11() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[16px] text-left"
      data-name="Content"
    >
      <div className="font-['Inter:Medium',_sans-serif] relative shrink-0 text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Curationist</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] relative shrink-0 w-[419px]">
        <p className="block leading-[24px]">
          Curationist connects people to cultural knowledge from all over the world.
        </p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-5" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <path
            d={svgPaths.p2352dc00}
            id="vector"
            stroke="var(--stroke-0, #7A7A7A)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.3"
          />
          <path
            d="M17 7L17 3H13"
            id="vector_2"
            stroke="var(--stroke-0, #7A7A7A)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.3"
          />
          <path
            d="M17 3L9.5 10.5"
            id="vector_3"
            stroke="var(--stroke-0, #7A7A7A)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.3"
          />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1.5 items-center justify-center pl-1.5 pr-3 py-1.5 relative shrink-0"
      data-name="button"
    >
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[14px] text-center text-nowrap">
        <p className="block leading-[20px] whitespace-pre">{`Donate & Support`}</p>
      </div>
      <Icon7 />
    </div>
  );
}

function Donation() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-6 items-start justify-start left-6 p-0 top-8"
      data-name="Donation"
    >
      <Content11 />
      <Button7 />
    </div>
  );
}

function Frame509() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Works</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Editorial Features</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Curated Collections</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Museum Archives</p>
      </div>
    </div>
  );
}

function Resources() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-3 items-start justify-start left-[732px] p-0 top-8"
      data-name="Resources"
    >
      <div className="font-['Inter:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Resources</p>
      </div>
      <Frame509 />
    </div>
  );
}

function Frame511() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">About us</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Our Partners</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Open Calls</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Contacts</p>
      </div>
    </div>
  );
}

function Curationist() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-3 items-start justify-start left-[909px] p-0 top-8"
      data-name="Curationist"
    >
      <div className="font-['Inter:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Curationist</p>
      </div>
      <Frame511 />
    </div>
  );
}

function Frame510() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Fellows Program</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Critics of Color</p>
      </div>
    </div>
  );
}

function Programs() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-3 items-start justify-start left-[1086px] p-0 top-8"
      data-name="Programs"
    >
      <div className="font-['Inter:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Programs</p>
      </div>
      <Frame510 />
    </div>
  );
}

function Frame513() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Twitter</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[24px] text-nowrap whitespace-pre">Facebook</p>
      </div>
    </div>
  );
}

function FollowUs() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-3 items-start justify-start left-[1263px] p-0 top-8"
      data-name="Follow Us"
    >
      <div className="font-['Inter:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Follow Us</p>
      </div>
      <Frame513 />
    </div>
  );
}

function Frame2354() {
  return (
    <div className="box-border content-stretch flex flex-row font-['Inter:Regular',_sans-serif] gap-4 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
      <div className="relative shrink-0">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[20px] text-nowrap whitespace-pre">
          Privacy Policy
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[20px] text-nowrap whitespace-pre">
          Open Access Policy
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[20px] text-nowrap whitespace-pre">
          Terms of use
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
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[20px]">
          CC Free for Public Use
        </p>
      </div>
      <Frame2354 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#ffffff] bottom-0 h-80 left-0 w-[1440px]" data-name="Footer">
      <div className="h-80 overflow-clip relative w-[1440px]">
        <Donation />
        <Resources />
        <Curationist />
        <Programs />
        <FollowUs />
        <div className="absolute h-0 left-6 top-[252px] w-[1392px]" data-name="Line">
          <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1392 2">
              <path d="M0 1H1392" id="Line" opacity="0.2" stroke="var(--stroke-0, black)" />
            </svg>
          </div>
        </div>
        <LegalAndPrivacy />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FooterAndPreFooter() {
  return (
    <div className="absolute h-[1198px] left-0 overflow-clip top-[3560px] w-[1440px]" data-name="Footer and Pre-footer">
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] left-6 not-italic text-[#000000] text-[24px] text-left text-nowrap top-4 translate-y-[-50%]">
        <p className="block leading-[32px] whitespace-pre">Most Viewed</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] left-6 not-italic opacity-50 text-[#000000] text-[24px] text-left text-nowrap top-12 translate-y-[-50%]">
        <p className="block leading-[32px] whitespace-pre">This are the most viewed articles</p>
      </div>
      <FeatureCard />
      <FeatureCard1 />
      <FeatureCard2 />
      <CreateAccountCta />
      <ResgistrationCta />
      <Footer />
    </div>
  );
}

export default function Team() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="Team">
      <div className="absolute font-['Inter:Medium',_sans-serif] leading-[0] left-6 not-italic text-[#000000] text-[64px] text-left top-44 w-[1274px]">
        <p className="block leading-[68px]">
          We are artists, educators, critics, archivists, and open knowledge makers.
        </p>
      </div>
      <Image1 />
      <TopBar />
      <div
        className="absolute box-border content-stretch flex flex-col gap-5 h-[392px] items-start justify-start left-6 p-0 top-[1490px] w-[448px]"
        data-name="Team Card"
      >
        <TeamCard />
      </div>
      <Frame4842 />
      <TeamCard1 />
      <TeamCard2 />
      <TeamCard3 />
      <TeamCard4 />
      <TeamCard5 />
      <TeamCard6 />
      <TeamCard7 />
      <div className="absolute font-['Inter:Medium',_sans-serif] leading-[0] left-6 not-italic text-[#000000] text-[48px] text-left top-[1192px] w-[965px]">
        <p className="block leading-[56px]">Meet the Curationist team.</p>
      </div>
      <div className="absolute font-['Inter:Medium',_sans-serif] leading-[0] left-6 not-italic opacity-[0.45] text-[#000000] text-[48px] text-left top-[1250px] w-[1038px]">
        <p className="block leading-[56px]">We curate art and culture for you.</p>
      </div>
      <Tabs />
      <div className="absolute font-['Inter:Medium',_sans-serif] leading-[0] left-6 not-italic text-[#000000] text-[48px] text-left top-[2850px] w-[965px]">
        <p className="block leading-[56px]">Our community is our backbone.</p>
      </div>
      <div className="absolute font-['Inter:Medium',_sans-serif] leading-[0] left-6 not-italic opacity-[0.45] text-[#000000] text-[48px] text-left top-[2908px] w-[1038px]">
        <p className="block leading-[56px]">Essential to create meaningful change.</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] left-6 not-italic text-[#000000] text-[24px] text-left text-nowrap top-[3100px] translate-y-[-50%]">
        <p className="block leading-[32px] whitespace-pre">In community</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] justify-center leading-[0] left-6 not-italic opacity-50 text-[#000000] text-[24px] text-left text-nowrap top-[3132px] translate-y-[-50%]">
        <p className="block leading-[32px] whitespace-pre">{`Meet our Partners ->`}</p>
      </div>
      <Frame4727 />
      <Frame4728 />
      <Frame4729 />
      <Frame4730 />
      <FooterAndPreFooter />
    </div>
  );
}