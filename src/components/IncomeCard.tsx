import { Divider } from "@arco-design/mobile-react";

const IncomeCard = () => {
  return (
    <div className="border p-[10px] rounded-[10px] shadow-lg flex flex-col gap-[8px]">
      <div className="flex justify-between items-end">
        <h3 className="w-[70%] text-[16px] tracking-wide">
          <span className="font-bold">Streaming</span> : Tiktok streaming Income
          for September 14th Session
        </h3>
        <p className="w-[30%] text-right text-[#155DFF] text-[14px] font-semibold">
          +20.08$
        </p>
      </div>

      <div className="">
        <p className="text-[#888888] text-[14px]">
          Note : Thanks For Streaming
        </p>
      </div>
      <Divider />
      <div className="text-[#888888] text-[14px] flex justify-between items-center">
        <p>12-10-2024 , 12:20 P.M</p>
        <p>Remaining : 9,280$</p>
      </div>
    </div>
  );
};

export default IncomeCard;
