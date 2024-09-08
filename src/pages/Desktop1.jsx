import Navbar from "../components/Navbar";
import PageFooter from "../components/PageFooter";

const Desktop1 = () => {
  return (
    <div className="w-full h-[3040px] relative bg-gray overflow-hidden leading-[normal] tracking-[normal] mq800:h-auto mq800:min-h-[3040]">
      <Navbar/>
      <PageFooter/>
    </div>
  );
};

export default Desktop1;
