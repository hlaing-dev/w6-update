import React from "react";
import back from "../../assets/home/back.svg";
import { useNavigate } from "react-router-dom";
import liveacc from "../../components/home/liveacc";
import "../../components/home/home.css";

interface LiveAccProps {}

const LiveAcc: React.FC<LiveAccProps> = ({}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="">
        {/* header */}
        <div className=" fixed top-0 w-full bg-white rounded-[37px] grid grid-cols-3  py-[8px]">
          <img
            className="pl-[20px]"
            onClick={() => navigate("/")}
            src={back}
            alt=""
          />
          <p className=" text-black text-[16px] font-[400] leading-[22px]">
            Live Account(3)
          </p>
          <div className=""></div>
        </div>
        {/* acc list */}
        <div className="px-[20px] pt-[40px] pb-[100px] flex flex-col gap-[12px]">
          {liveacc.map((a) => (
            <div
              key={a.id}
              className="p-[16px] host_list_box flex flex-col gap-[24px] justify-between items-start"
            >
              {/* image and name */}
              <div className=" flex justify-center items-center gap-[16px]">
                <img className=" w-[48px] h-[48px]" src={a.image} alt="" />
                <div className=" flex flex-col gap-[6px]">
                  <p className=" flex gap-[4px] text-black text-[16px] font-[600] leading-[20px]">
                    {a.name}
                    <span className=" text-[14px] font-[400] text-[#777]">
                      (@ {a.liveAcc})
                    </span>
                  </p>
                  <p className=" text-[14px] font-[400] leading-[21px] text-[#888]">
                    ID:{a.id}
                  </p>
                </div>
              </div>
              {/* live */}
              <div className=" flex justify-between items-center w-full">
                <p className=" text-[#000] text-[14px] font-[500] leading-[21px] flex gap-[4px]">
                  {a.company}{" "}
                  <span className=" text-[#888]">({a.country})</span>
                </p>
                <p className="text-[#888] text-[14px] font-[500] leading-[21px]">{a.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveAcc;
