import React from "react";
import user from "../../assets/home/user.svg";
import right from "../../assets/home/right.svg";
import right2 from "../../assets/home/right2.svg";
import bell from "../../assets/home/bell.svg";
import { Badge } from "@arco-design/mobile-react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { setAuthModel } from "../../store/slices/login/ModelSlice";
import { useNavigate } from "react-router-dom";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { openAuthModel } = useSelector((state: any) => state.model);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(openAuthModel);
  const handleForLogin = () => {
    dispatch(setAuthModel(true));
  };
  return (
    <div className="bg-[#155DFF] h-[280px] rounded-b-[20px] px-[20px] py-[30px]">
      {/* user */}
      <div className=" flex justify-between items-center">
        {/* user */}
        <div className="flex gap-[16px]">
          <img
            src={user}
            className="bg-[#447EFF] rounded-full px-[15px] py-[12px]"
            alt="user"
          />
          <div
            onClick={handleForLogin}
            className="flex gap-[6px] justify-center items-center"
          >
            <p className="text-white text-[18px] font-[500] leading-[22px]">
              Hello, Please Login
            </p>
            <img src={right} alt="arrow" />
          </div>
        </div>
        {/* notification */}
        <div className="relative flex">
          <img
            className="bell rounded-full px-[11px] py-[10px]"
            src={bell}
            alt="bell"
          />
          <Badge dot className=" absolute right-[2px] top-[4px]" />{" "}
          {/* Adjust badge position */}
        </div>
      </div>
      {/* earning */}
      <div className=" py-[20px] flex flex-col gap-[10px]">
        <p className=" text-white text-[12px] font-[500] leading-[22px]">
          Cashable Earnings (USD)
        </p>
        <p className=" text-white font-[600] leading-[22px] tracking-[1px]">
          {" "}
          <span className=" text-[34px]">$0.</span>
          <span className=" text-[14px]">00</span>
        </p>
        <p className=" text-white text-[12px] font-[600] leading-[22px]">
          Cumulative income : $748.00
        </p>
      </div>
      {/* information */}
      <div className="information_box p-[16px] flex justify-around items-center mt-[10px]">
        {/* live account */}
        <div
          onClick={() => navigate("/live_acc")}
          className=" flex flex-col justify-center items-center gap-[8px]"
        >
          <p className=" text-[18px] font-[600] leading-[22px] text-[#666]">
            {"2"}
          </p>
          <div className=" flex items-center gap-[6px]">
            <p className=" text-[14px] font-[600] leading-[22px] text-[#888]">
              Live Accounts
            </p>
            <img src={right2} alt="" />
          </div>
        </div>
        <p className=" w-[1px] h-[25px] bg-[#BBB] mx-[30px]"></p>
        {/* host */}
        <div
          onClick={() => navigate("/my_host")}
          className=" flex flex-col justify-center items-center gap-[8px]"
        >
          <p className=" text-[18px] font-[600] leading-[22px] text-[#666]">
            {"2"}
          </p>
          <div className=" flex items-center gap-[6px]">
            <p className=" text-[14px] font-[600] leading-[22px] text-[#888]">
              My Hosts
            </p>
            <img src={right2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
