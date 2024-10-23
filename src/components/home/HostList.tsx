import React from "react";
import hostMember from "./host";
import './home.css'
interface HostListProps {}

const HostList: React.FC<HostListProps> = ({}) => {
  return (
    <div>
      <div className=" pt-[20px] pb-[100px] flex flex-col gap-[12px]">
        {hostMember.map((p) => (
          <div key={p.id} className=" p-[16px] host_list_box flex justify-between items-center">
            <div className=" flex gap-[16px]">
              <img className=" w-[48px] h-[48px]" src={p.image} alt="" />
              <div className=" flex flex-col gap-[8px]">
                <p className=" text-[16px] font-[600] text-[#000]">{p.name}</p>
                <p className=" text-[14px] font-[500] text-[#888]">Live Account : {p.liveAcc}</p>
              </div>
            </div>
            <div className=" flex flex-col gap-[8px] items-end">
                <p className=" text-[14px] font-[500] text-[#155DFF]">+{p.income}$</p>
                <p className=" text-[14px] font-[400] text-[#888]">{p.time} ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HostList;
