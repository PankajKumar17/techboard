const Navbar = ({
  className = "",
}) => {

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-6 pb-[131px] pl-[186px] pr-5 box-border mb-12 relative min-h-[193px] [row-gap:20px] text-left text-xl text-whitesmoke font-josefin-sans mq450:pl-5 mq450:box-border mq900:flex-wrap mq900:pl-[93px] mq900:box-border ${className}`}
    >
      <a href="/desktop-3" className="[text-decoration:none] w-[73.7px] relative text-[inherit] inline-block shrink-0 z-[2] mq450:text-base">
        Home
      </a>
      <div className="w-[83.4px] flex flex-col items-start justify-start py-0 pl-0 pr-2.5 box-border">
        <a href="/" className="[text-decoration:none] self-stretch relative text-[inherit] z-[2] mq450:text-base">
          About
        </a>
      </div>
      <a href="/desktop-2" className="[text-decoration:none] h-[25px] w-[84.5px] relative text-[inherit] inline-block shrink-0 z-[2] mq450:text-base">
        Events
      </a>
      <div className="flex flex-row items-start justify-start py-0 pl-0 pr-2.5 gap-[9.8px]">
        <a href="/desktop-1" className="[text-decoration:none] w-[95.3px] relative text-[inherit] inline-block shrink-0 z-[2] mq450:text-base">
          Members
        </a>
        <a
          className="[text-decoration:none] h-[26px] w-[115.9px] relative text-[inherit] inline-block shrink-0 z-[2] mq450:text-base"
        >
          Testimonial
        </a>
      </div>
      <a className="[text-decoration:none] h-[30px] w-[113.8px] relative text-[inherit] inline-block shrink-0 z-[2] mq450:text-base">
        Contact
      </a>
        <div className="absolute top-[0px] left-[0px] bg-gainsboro-300 w-full h-14 z-[1]" />
        <img
          className="absolute top-[7px] left-[102.9px] w-[43.3px] h-10 object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/whatsapp-image-20240201-at-185312-d25e2b2eremovebgpreview-2@2x.png"
          />
    </section>
  );
};

export default Navbar;
