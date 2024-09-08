import PropTypes from "prop-types";

const ExpandedGalleryContainer = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-row items-start justify-end pt-0 pb-[134px] pl-[42px] pr-10 box-border max-w-full shrink-0 mq700:pl-[21px] mq700:pb-[57px] mq700:box-border mq975:pb-[87px] mq975:box-border ${className}`}
    >
      <div className="w-[1030.7px] flex flex-row items-start justify-start flex-wrap content-start gap-[40.3px] min-h-[820px] max-w-full mq700:gap-5">
      </div>
    </section>
  );
};

ExpandedGalleryContainer.propTypes = {
  className: PropTypes.string,
};

export default ExpandedGalleryContainer;
