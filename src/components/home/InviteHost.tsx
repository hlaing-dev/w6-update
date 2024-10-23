import React from "react";
import "./home.css";
import { Button } from "@arco-design/mobile-react";
import invite from "../../assets/home/invite.png";
interface InviteHostProps {}

const InviteHost: React.FC<InviteHostProps> = ({}) => {
  const colorConfig = {
    normal: "#FFF",
    active: "#F53F3F",
    disabled: "#FBACA3",
  };

  const ghostBgColor = {
    normal: "rgba(255, 255, 255, 0.37)",
    active: "#fbe1d9",
    disabled: "#FFF",
  };
  return (
    <div>
      <div className="invite_host mx-[16px] my-[20px] flex justify-end px-[25px] items-center relative">
        <img className=' w-[54px] h-[54px] absolute bottom-0 left-0' src={invite} alt="" />
        <div className=" py-[30px] flex justify-between gap-[20px] items-end pl-[20px]">
          {/* context */}
          <div className=" text-white text-[14px] font-[700] flex flex-col ">
            <span>Grow your network</span>
            <span>Boost your earnings</span>
          </div>
          {/* button */}
          <Button
            type="ghost"
            inline
            style={{ borderRadius:"8px" }}
            color={colorConfig}
            bgColor={ghostBgColor}
            
            // className=" button_invite"
          >
            Invite Host
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InviteHost;
