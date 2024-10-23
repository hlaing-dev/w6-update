/* eslint-disable @typescript-eslint/no-unused-vars */
import TopBar from "../components/TopBar";
import { FaAngleRight } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { ImagePicker } from "@arco-design/mobile-react";
import { Dialog } from "@arco-design/mobile-react";
import { AiTwotoneExclamationCircle } from "react-icons/ai";

const WithdrawDetail = () => {
  const { id } = useParams();
  const status = id;

  return (
    <div className="relative">
      <TopBar title="Details" />
      <div className="px-[20px]">
        <div className="flex flex-col items-center gap-[16px] pt-[20px] pb-[128px]">
          <h1 className="text-[#155DFF] text-[26px] font-bold">-20.08 $</h1>
          <button
            className={`flex items-center gap-[4px] px-[12px] py-[8px] rounded-[10px] 
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
          <div className="py-[0.5px] my-[28px] bg-gray-200 w-full"></div>
          <div className="w-full flex flex-col gap-[32px] text-[14px] text-[#888888]">
            <div className="flex justify-between w-full">
              <p>Withdraw Amount</p>
              <p>-20.08 $</p>
            </div>
            <div className="flex justify-between w-full">
              <p>Status</p>
              <p>Pending</p>
            </div>
            <div className="flex justify-between w-full">
              <p>Withdraw Time</p>
              <p>2025-19-21 15:39:21</p>
            </div>
            <div className="flex justify-between w-full">
              <p>Country</p>
              <p>Myanmar</p>
            </div>
            <div className="flex justify-between w-full">
              <p>Payment Method</p>
              <p>KBZPay</p>
            </div>
            <div className="flex justify-between w-full">
              <p>Transfer to</p>
              <p>Jenna (********3223)</p>
            </div>
            <div className="">
              <textarea
                name=""
                className="border bg-[#F5F5F5] w-full h-[80px] p-[12px]"
                id=""
              >
                Note : For Christmas Holiday
              </textarea>
            </div>
            {status == "Waiting for receipt" && (
              <div className="">
                <p className="mb-2">Upload receipt</p>
                <ImagePicker images={[]} onChange={() => {}} />
              </div>
            )}
            {status == "Complected" && (
              <div className="">
                <p className="mb-2">Upload receipt</p>
                <div className="flex gap-1">
                  <div className="w-[48px] h-[48px]">
                    <img
                      src="https://i.pinimg.com/control/236x/26/cf/3c/26cf3c80b7b5923f89fba8fe140dd660.jpg"
                      className="object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-[48px] h-[48px]">
                    <img
                      src="https://i.pinimg.com/control/236x/26/cf/3c/26cf3c80b7b5923f89fba8fe140dd660.jpg"
                      className="object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-[48px] h-[48px]">
                    <img
                      src="https://i.pinimg.com/control/236x/26/cf/3c/26cf3c80b7b5923f89fba8fe140dd660.jpg"
                      className="object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full px-[20px] py-[20px] bg-white">
        {status == "Pending" && (
          <button
            onClick={() => {
              window.modalInstance = Dialog.alert({
                children: (
                  <div className="">
                    <p className="text-[14px] flex items-start">
                      <AiTwotoneExclamationCircle className="mt-[4px] text-red-500" />
                      <span>
                        Are you sure do you want to Cancel this withdraw?
                      </span>
                    </p>
                  </div>
                ),
                platform: "ios",
                okText: (
                  <div className="flex gap-[4px] justify-end w-full px-[10px]">
                    <button className="text-[#4E5969] rounded-[5px] bg-[#F2F3F5] text-[14px] px-[16px] py-[5px]">
                      Cancel
                    </button>
                    <button className="text-[#FF000C] rounded-[5px] bg-[#FF000C1F] text-[14px] px-[16px] py-[5px]">
                      Confirm
                    </button>
                  </div>
                ),
              });
            }}
            className="py-[16px] flex bg-[#FF000C1F] w-full justify-center gap-[8px] text-white rounded-[10px]"
          >
            <span className="text-[15px] text-[#FF000C]">Cancel Withdraw</span>
          </button>
        )}
        {status == "Processing" && (
          <button className="py-[16px] flex w-full justify-center gap-[8px] rounded-[10px]">
            <span className="text-[15px] text-[#888888]">
              No operation can be performed
            </span>
          </button>
        )}
        {status == "Failed" && (
          <button className="py-[16px] flex w-full justify-center gap-[8px] rounded-[10px]">
            <span className="text-[15px] text-[#FF000C]">
              This withdraw has failed due to lack of withdraw reciept
            </span>
          </button>
        )}
        {status == "Cancelled" && (
          <button className="py-[16px] flex w-full justify-center gap-[8px] rounded-[10px]">
            <span className="text-[15px] text-[#888888]">
              This Withdraw has been cancelled
            </span>
          </button>
        )}
        {status == "Waiting for receipt" && (
          <button className="py-[16px] flex w-full justify-center gap-[8px] rounded-[10px]">
            <span className="text-[15px] text-[#888888]">
              The payment has been made, but a receipt is required.
            </span>
          </button>
        )}
        {status == "Complected" && (
          <button className="py-[16px] flex w-full justify-center gap-[8px] rounded-[10px]">
            <span className="text-[15px] text-[#888888]">
              This withdraw has completed successfully
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default WithdrawDetail;
