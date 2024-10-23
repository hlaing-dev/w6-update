import React from "react";
import back from "../../assets/home/back.svg";
import { useNavigate } from "react-router-dom";
import hostMember from "../../components/home/host";
import "../../components/home/home.css";
import Layout from "../../Layout";
interface MyhostProps {}

const Myhost: React.FC<MyhostProps> = ({}) => {
  const navigate = useNavigate();
  return (
    <Layout>
    <div>
      <div className=" bg-white">
        {/* header */}
        <div className=" fixed top-0 w-full bg-white rounded-[37px] grid grid-cols-3  py-[8px]">
          <img
            className="pl-[20px]"
            onClick={() => navigate("/")}
            src={back}
            alt=""
          />
          <p className=" text-black text-[18px] font-[400] leading-[22px]">
            My Hosts (16)
          </p>
          <div className=""></div>
        </div>
        {/* host list */}
        <div className="px-[20px] pt-[40px] pb-[100px] flex flex-col gap-[12px]">
          {hostMember.map((p) => (
            <div
              key={p.id}
              className=" p-[16px] host_list_box flex gap-[2px] justify-between items-center"
            >
              <div className=" flex gap-[16px] relative">
                <img className=" w-[48px] h-[48px]" src={p.image} alt="" />
                <div className=" flex flex-col gap-[4px]">
                  <div className=" flex justify-center items-center gap-[4px]">
                    <p className=" text-[16px] font-[600] text-[#000]">
                      {p.name}
                    </p>
                    <span className="level_badge text-[11px] px-[9px] text-white">
                      Lvl 1
                    </span>
                  </div>

                  <p className=" text-[14px] font-[500] text-[#888]">
                    Live Account : {p.liveAcc}
                  </p>
                  <p className="text-[14px] font-[500] text-[#888]">
                    invited by Kizz
                  </p>
                </div>
              </div>
              <div className=" flex flex-col gap-[8px] items-end">
                <p className=" text-[14px] font-[500] text-[#155DFF]">
                  +{p.income}$
                </p>
                <p className=" text-[12px] font-[400] text-[#888]">
                  Join time :{p.time} ago
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Myhost;
