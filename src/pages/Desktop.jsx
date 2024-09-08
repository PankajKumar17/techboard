import InnerLeft from "../components/InnerLeft";
import PageFooter from "../components/PageFooter";
import Navbar from "../components/Navbar";


const Desktop = () => {
  return (
    <div className="w-full h-[300vh] relative bg-gray overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[629.9px] box-border gap-[101.9px] leading-[normal] tracking-[normal] mq450:gap-[25px] mq1050:h-auto mq725:gap-[51px]">
      <Navbar />
      <section className="w-full !m-[0] absolute bottom-40 left-[0px] flex items-center justify-center flex-row max-w-full">
        <InnerLeft />
      </section>
      <PageFooter />
    </div>
  );
};

export default Desktop;
