import PropTypes from "prop-types";

const LogoContainer = ({ className = "" }) => {
  return (
    <div
      className={`w-[1098px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0 text-center text-xl text-black font-inter ${className}`}
    >
      <div className="w-[798px] flex flex-col items-start justify-start gap-[155px] max-w-full mq450:gap-[39px] mq800:gap-[77px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[120px] max-w-full mq450:gap-[30px] mq800:gap-[60px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-[157px] max-w-full mq450:gap-[39px] mq800:gap-[78px]">

            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[157px] mq450:gap-[39px] mq800:gap-[78px] mq800:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[208px] mq800:flex-1">
              <div className="self-stretch h-[489px] rounded-6xl bg-darkslateblue-300 flex flex-col items-start justify-start pt-[51px] px-[25px] pb-[35px] box-border gap-5 z-[3]">
                <div className="w-80 h-[489px] relative rounded-6xl bg-darkslateblue-300 hidden" />
                <div className="self-stretch flex-1 relative rounded-6xl bg-steelblue z-[4]" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-6 pr-[26px]">
                  <div className="h-[58px] flex-1 relative inline-block z-[4] mq450:text-base">
                    Technical Akriti
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[784px] h-[489px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="self-stretch w-80 rounded-6xl bg-darkslateblue-300 flex flex-col items-start justify-start pt-[51px] px-[25px] pb-[35px] box-border gap-5 z-[2]">
            <div className="w-80 h-[489px] relative rounded-6xl bg-darkslateblue-300 hidden" />
            <div className="self-stretch flex-1 relative rounded-6xl bg-steelblue z-[1]" />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-6 pr-[26px]">
              <div className="h-[58px] flex-1 relative inline-block z-[1] mq450:text-base">
                Technical Akriti
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LogoContainer.propTypes = {
  className: PropTypes.string,
};

export default LogoContainer;
