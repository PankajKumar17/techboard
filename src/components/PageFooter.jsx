import React from "react";
const PageFooter = () => {
  return (
    <>
    <footer
      className={`ml-[-3px] absolute bottom-0 self-stretch bg-black flex flex-col items-center justify-center pt-11 pb-3 pl-[302px] w-full pr-[222px] box-border gap-14 max-w-full text-left text-xl text-white font-josefin-sans mq450:pl-5 mq450:pr-5 mq450:box-border mq700:gap-7 mq700:pl-[151px] mq700:pr-[111px] mq700:box-border `}
    >
      <div className="w-[513px] flex flex-row items-start justify-center max-w-full">
        <div className="w-[297px] flex flex-col items-end justify-start gap-[30px]">
          <div className="flex flex-row items-start justify-start gap-[26px] mq700:flex-wrap">
            <img
              className="h-20 w-20 relative min-h-[80px] z-[1]"
              loading="lazy"
              alt=""
              src="/group-34.svg"
            />
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[5px]">
              <img
                className="w-20 h-20 relative z-[1]"
                loading="lazy"
                alt=""
                src="/group-33.svg"
              />
            </div>
            <img
              className="h-20 w-20 relative min-h-[80px] z-[1]"
              loading="lazy"
              alt=""
              src="/group-32.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[66px] pr-[62px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="h-0.5 flex-1 relative border-white border-t-[2px] border-solid box-border z-[1]" />
          </div>

        </div>
      </div>
      
              <div
                className="flex flex-row items-start justify-start gap-[10.8px]"
              >
                <div className="w-[73.7px] relative inline-block shrink-0 z-[1] mq450:text-base">
                  Home
                </div>
                <div className="w-[72.6px] relative inline-block shrink-0 z-[1] mq450:text-base">
                  About
                </div>
                <div
                  className="h-[25px] w-[84.5px] relative inline-block shrink-0 z-[1] mq450:text-base"
                >
                  Events
                </div>
                <div className="w-[95.3px] relative inline-block shrink-0 z-[1] mq450:text-base">
                  Members
                </div>
                <div
                  className="h-[26px] w-[115.9px] relative inline-block shrink-0 z-[1] mq450:text-base"
                >
                  Testimonial
                </div>
                <div className="h-[30px] w-[113.8px] relative inline-block shrink-0 z-[1] mq450:text-base">
                  Contact
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-[38px] box-border max-w-full text-xs text-darkslateblue-100">
              <div className="flex flex-row items-start justify-start [row-gap:20px] mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1.5 text-xl text-mediumpurple">
                  <div
                    className="relative z-[1] mq450:text-base"
                  >
                    ©
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[3px] px-2 pb-0 ml-[-6px]">
                  <div className="relative z-[2]" >
                    TECHNICAL BOARD
                  </div>
                </div>
                <div className="h-[15px] flex flex-row items-start justify-start gap-[5px] ml-[-6px]">
                  <div className="h-4 w-px relative border-white border-r-[1px] border-solid box-border z-[3]" />
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <div className="relative z-[3]">ALL RIGHTS RESERVED</div>
                  </div>
                </div>
              </div>
      </div>
            
    </footer>
    </>
  );
};

export default PageFooter;
