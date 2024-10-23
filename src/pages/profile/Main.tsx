import { Cell } from "@arco-design/mobile-react";
import WalletIcon from "./Icons/WalletIcon";
import HostIcon from "./Icons/HostIcon";
import PaymentIcon from "./Icons/PaymentIcon";
import LiveIcon from "./Icons/LiveIcon";
import LockIcon from "./Icons/LockIcon";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-2">
      <Cell.Group bordered={false}>
        <Cell
          onClick={() => navigate("/payment")}
          className="text-center mt-1"
          icon={<WalletIcon />}
          label={<span className="ml-[3px]">My Wallets</span>}
          showArrow
          bordered={false}
        />
        <Cell
          className="text-center mt-1"
          icon={<HostIcon />}
          label={<span className="ml-[3px]">My Hosts</span>}
          showArrow
          bordered={false}
        />
        <Cell
          onClick={() => navigate("/payment")}
          className="text-center mt-1"
          icon={<PaymentIcon />}
          label={<span className="ml-[7px]">Payment</span>}
          showArrow
          bordered={false}
        />
        <Cell
          className="text-center mt-1"
          icon={<LiveIcon />}
          label={<span className="ml-[9px]">My Live Account</span>}
          showArrow
          bordered={false}
        />
        <Cell
          className="text-center mt-1"
          icon={<LockIcon />}
          label={<span className="ml-[9px]">Change Password</span>}
          showArrow
          bordered={false}
        />
      </Cell.Group>
    </div>
  );
};

export default Main;
