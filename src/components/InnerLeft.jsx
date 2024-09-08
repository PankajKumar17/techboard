import PropTypes from "prop-types";

const InnerLeft = ({ className = "" }) => {
  return (
    <div className="mb-60">
      <img
          className="h-100relative max-w-full overflow-hidden z-[1]"
          alt=""
          src="/image1.png"
        />
    </div>
  );
};

InnerLeft.propTypes = {
  className: PropTypes.string,
};

export default InnerLeft;
