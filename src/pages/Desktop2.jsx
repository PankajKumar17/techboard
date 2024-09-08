import Navbar from "../components/Navbar";
import PageFooter from "../components/PageFooter";
import EventCard from "../components/EventCard"

const Desktop2 = () => {
  return (
    <div className="w-full h-[3040px] relative bg-gray overflow-hidden leading-[normal] tracking-[normal] mq800:h-auto mq800:min-h-[3040]">
      <Navbar/>
      <main className="w-full h-full flex flex-col gap-32 justify-start items-center">
      <div className="h-[20vh] w-[70vw] text-center flex items-center justify-center text-white rounded-3xs bg-darkslateblue-600 z-[1]" >
          <h1 className=" font-light font-josefin-sans text-[4vw]">Events</h1>
        </div>
        <div className="events flex flex-wrap gap-24 w-[80vw]">
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
        </div>
      </main>
      <PageFooter/>
    </div>
  );
};

export default Desktop2;
