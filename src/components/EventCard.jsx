import React from 'react'

const EventCard = () => {
  return (
    <>
      <div className="h-[489px] w-80 font-josefin-sans rounded-6xl bg-darkslateblue-200 flex flex-col items-center justify-start pt-[51px] px-[25px] pb-[35px] box-border gap-5 shrink-0 mq725:pt-[33px] mq725:pb-[23px] mq725:box-border">
        <div className="w-80 h-[489px] relative rounded-6xl bg-darkslateblue-200 hidden" />
        <div className="self-stretch flex-1 relative rounded-6xl bg-steelblue z-[1]" />
        <h2>Technical Akriti</h2>
      </div>
    </>
  )
}

export default EventCard;
