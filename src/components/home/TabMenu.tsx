import React from "react";
import withd from "../../assets/home/withd.png";
import income from "../../assets/home/income.png";
import pay from "../../assets/home/pay.png";
import transit from "../../assets/home/transit.png";
import { useNavigate } from "react-router-dom";

interface TabMenuProps {}

const TabMenu: React.FC<TabMenuProps> = ({}) => {
  const navigate = useNavigate();
  const goTo = (menu: string) => {
    navigate(`/${menu}`)
  }
  return (
    <div>
      <div className=" flex pt-[50px] px-[22px] justify-around items-center">
        <div onClick={()=>goTo('home')} className=" flex flex-col items-center gap-[10px]">
          <img src={transit} className=" w-[48px] h-[48px]" alt="" />
          <p className=" text-[13px] font-[500] leading-[15px] text-[]#818197">
            Transition
          </p>
        </div>
        <div onClick={()=>goTo('withdraw_record')} className=" flex flex-col items-center gap-[10px]">
          <img src={withd} className=" w-[48px] h-[48px]" alt="" />
          <p className=" text-[13px] font-[500] leading-[15px] text-[]#818197">
            Withdraw
          </p>
        </div>
        <div onClick={()=>goTo('income')} className=" flex flex-col items-center gap-[10px]">
          <img src={income} className=" w-[48px] h-[48px]" alt="" />
          <p className=" text-[13px] font-[500] leading-[15px] text-[]#818197">
            Income
          </p>
        </div>
        <div onClick={()=>goTo('home')} className=" flex flex-col items-center gap-[10px]">
          <img src={pay} className=" w-[48px] h-[48px]" alt="" />
          <p className=" text-[13px] font-[500] leading-[15px] text-[]#818197">
            Payment
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabMenu;
