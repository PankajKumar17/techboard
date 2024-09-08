import Navbar from "../components/Navbar";
import EmissionsChartHeader from "../components/Navbar";
import PageFooter from "../components/PageFooter";

const Desktop3 = () => {
  return (
    <div className="w-full h-[300vh] relative bg-gray overflow-hidden flex flex-col items-start justify-start gap-[530px] leading-[normal] tracking-[normal] mq450:gap-[132px] mq700:gap-[265px]">
     
      
      <main className="self-stretch flex flex-col items-center justify-start gap-[74px] w-full mq450:gap-[18px] mq700:gap-[37px]">
        <Navbar />
        <section className="self-stretch flex flex-row items-center justify-center pt-0 pb-[136px] box-border max-w-full text-left text-21xl text-white font-josefin-sans  mq450:box-border  mq700:box-border">
          <div className="w-[100vw] flex text-center flex-row items-start justify-start relative max-w-full">
            <img
              className="h-[586px] w-[100vw] absolute !m-[0] top-[-260px] object-cover"
              alt=""
              src="/tech-background-1@2x.png"
            />
            <h1 className="m-0 h-[153px] flex-1 relative text-inherit font-normal font-[inherit] inline-block [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] max-w-full z-[1] mq450:text-5xl mq900:text-[32px]">
              TECHNICAL BOARD
            </h1>
            <img
              className="h-[237px] w-[226px] absolute  !m-[0] bottom-[-131px] left-[43vw] object-cover z-[2]"
              alt=""
              src="/whatsapp-image-20240201-at-185312-d25e2b2eremovebgpreview-2-1@2x.png"
            />
          </div>
        </section>
        <div className="h-[20vh] w-[70vw] text-center flex items-center justify-center text-white rounded-3xs bg-darkslateblue-600 z-[1]" >
          <h1 className=" font-light font-josefin-sans text-[4vw]">About</h1>
        </div>
        <div className="p text-white relative font-josefin-sans w-[70vw] font-thin text-xl mb-44">
          <img src="/Ellipse1.png" alt="" className="w-50 absolute top-[-12vh] right-[-12vw] w-[60vw] h-[70vh]"/>
        <p className="z-[2] absolute top-0 left-0">Lorem ipsum dolor sit amet. A molestias dicta est laboriosam internos qui animi dignissimos et assumenda porro. Aut numquam praesentium et fugiat nobis est perferendis aperiam. Qui galisum corrupti sit earum similique ex repellendus laboriosam. Id totam ipsam et vero voluptatem sit omnis modi et nostrum rerum sit architecto facilis sit distinctio necessitatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, tempora? Alias ex culpa repellendus odio et quae eius omnis eveniet iure suscipit quod ipsam voluptatibus natus sit ea quia minima cumque, distinctio aut laboriosam amet, aliquid incidunt? Incidunt tenetur inventore aliquam atque sit cumque veniam recusandae commodi dolores nulla? Quaerat!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eligendi tenetur ullam temporibus dicta vero dolorem illum consequatur minima eveniet? Voluptas et, dolore veniam at neque asperiores beatae! Minima consectetur nihil ratione obcaecati nam enim deserunt est incidunt corporis. In pariatur est fuga nostrum, animi voluptatem dolores inventore accusamus fugit architecto hic possimus excepturi suscipit quod, fugiat consectetur. Ipsa voluptate, ipsum nulla est dolore aut alias sit nihil natus quos facere porro officiis aliquam autem illum rerum tempore tenetur amet? Aliquid unde perspiciatis, laboriosam ipsam voluptates cupiditate minima eius repudiandae magni ad, distinctio repellat molestiae aut nobis perferendis enim iusto. Nesciunt quidem vero illo sunt laboriosam autem explicabo optio aperiam iusto quo. Rerum possimus ab impedit sapiente et, enim exercitationem saepe esse, reprehenderit id alias animi atque eveniet, neque corporis voluptatibus non commodi necessitatibus veniam nemo sit deleniti? Beatae corrupti aut maxime rem laborum nulla quod dolores error placeat numquam?
        Lorem ipsum dolor sit amet. A molestias dicta est laboriosam internos qui animi dignissimos et assumenda porro. Aut numquam praesentium et fugiat nobis est perferendis aperiam. Qui galisum corrupti sit earum similique ex repellendus laboriosam. Id totam ipsam et vero voluptatem sit omnis modi et nostrum rerum sit architecto facilis sit distinctio necessitatibus.</p>
        </div>
        
      </main>
      <PageFooter />
    </div>
  );
};

export default Desktop3;
