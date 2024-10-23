import React, { useEffect } from "react";
import { Popup } from "@arco-design/mobile-react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthModel } from "../../store/slices/login/ModelSlice";
import "./loginModal.css";
import close from "../../assets/login/close.svg";
import eye from "../../assets/login/eye.svg";

const LoginModel: React.FC = () => {
  const dispatch = useDispatch();
  const { openAuthModel } = useSelector((state: any) => state.model);
  const handleClose = () => {
    dispatch(setAuthModel(false)); // Close the modal
  };
  const renderLoginContent = () => (
    <div className=" px-[20px] py-[10px] w-[393px h-[383px] flex flex-col justify-cente items-cente">
      <div className=" relative flex flex-col gap-[10px] justify-center items-center">
        <p className=" w-[62px] h-[5px] rounded-[10px] bg-[#CCC]"></p>
        <div className="popup-demo-title text-black text-[20px] font-[600] leading-[20px]">
          Log in{" "}
        </div>
        <img
          onClick={handleClose}
          className="close_button p-[10px] absolute right-[10px] top-[8px]"
          src={close}
          alt=""
        />
      </div>
      <div className="">
        <form className=" flex flex-col">
          <div className=" w-full h-[75px] border-b border-b-black/60">
            <input
              className=" w-full placeholder:text-[14px] placeholder:text-[#777] text-[14px] text-black "
              required
              type="text"
              placeholder="Enter Phone Number or Email"
            />
          </div>
          <div className=" w-full h-[75px] border-b border-b-black/60 relative ">
            <input
              className=" w-full placeholder:text-[14px] placeholder:text-[#777] text-[14px] text-black "
              required
              type="password"
              placeholder="Please Enter Your Passwords"
            />
            <img className=" absolute right-0 bottom-[10px]" src={eye} alt="" />
          </div>
          <p className=" text-[12px] font-[500] leading-[20px] text-[#155DFF] text-end pt-[10px] pb-[40px]">
            Forgot Your Password?
          </p>
          <button
            type="submit"
            className=" w-full login_btn text-white text-[15px] font-[700] leading-[20px] py-[16px] px-[24px]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );

  useEffect(() => {
    if (openAuthModel) {
      window.modalInstance = Popup.open({
        contentStyle: { borderRadius: "37px 37px 0 0" },
        children: renderLoginContent(),
        onClose: () => {
          dispatch(setAuthModel(false));
        },
      });
    } else {
      if (window.modalInstance) {
        window.modalInstance.close(); // Call the close method
      }
    }
  }, [openAuthModel, dispatch]);

  return null;
};

export default LoginModel;
