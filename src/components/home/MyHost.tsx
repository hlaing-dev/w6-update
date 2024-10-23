import React from "react";
import right2 from "../../assets/home/right2.svg";
import hostList from "../../assets/home/hostList.svg";
import HostList from "./HostList";
type MyHostProps = object

const MyHost: React.FC<MyHostProps> = () => {
  return (
    <div className="mx-[16px] my-[20px] flex flex-col">
      {/* header */}
      <div className=" flex justify-between w-full items-center ">
        <p className=" text-[14px] text-[#888]">My Hosts</p>
        <div className=" flex gap-[4px]">
          <p className=" text-[14px] text-[#888]">All</p>
          <img src={right2} alt="" />
        </div>
      </div>
      {/* host list */}
      <HostList />
      {/* no host */}
      <div className=" fle justify-center py-[80px] hidden">
        <div className=" flex flex-col justify-center items-center">
          <img className=" w-[47px] h-[47px]" src={hostList} alt="" />
          <p className=" text-[14px] font-[500] text-[#AAA]">No Hosts</p>
        </div>
      </div>
    </div>
  );
};

export default MyHost;
