import { Divider } from "@arco-design/mobile-react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { paths } from "../routes/paths";

const WithdrawCard = ({ status }: any) => {
  return (
    <Link
      to={paths.getWithdrawDetail(status)}
      className="border p-[16px] rounded-[10px] shadow-lg flex flex-col gap-[4px]"
    >
      <div className={`flex justify-between items-center`}>
        <h3 className="text-[20px] font-semibold text-[#155DFF]">-20.08$</h3>
        <button
          className={`flex items-center gap-[4px] px-[12px] py-[8px] rounded-full 
            ${
              (status == "Processing" && "text-[#155DFF] bg-[#155DFF1F]") ||
              (status == "Pending" && "text-[#FF8700] bg-[#FF870033]") ||
              (status == "Success" && "text-[#007A1D] bg-[#43FF7033]") ||
              (status == "Failed" && "text-[#FF000C] bg-[#FF000C1F]") ||
              (status == "Waiting for receipt" &&
                "text-[#155DFF] bg-[#155DFF1F]") ||
              (status == "Complected" && "text-[#007A1D] bg-[#43FF7033]") ||
              (status == "Cancelled" && "text-[#FF000C] bg-[#FF000C1F]")
            }
            `}
        >
          <span className="text-[14px]">{status}</span>
          <FaAngleRight className="text-[15px]" />
        </button>
      </div>

      <div className="">
        <p className="text-[#888888] text-[14px] mb-1">Country : Myanmar</p>
        <p className="text-[#888888] text-[14px]">
          Payment Method : Bank Transfer
        </p>
      </div>
      <Divider />
      <div className="text-[#888888] text-[14px] flex justify-between items-center">
        <p>2025-19-21 15:39</p>
        <p>Remaining : 50$</p>
      </div>
    </Link>
  );
};

export default WithdrawCard;
