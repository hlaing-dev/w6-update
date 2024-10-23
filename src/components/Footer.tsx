import home from "../assets/footer/home.svg";
import homeSelected from "../assets/footer/homeSelected.svg";
import host from "../assets/footer/host.svg";
import hostSelected from "../assets/footer/hostSelected.svg";
import wallet from "../assets/footer/wallet.svg";
import profile from "../assets/footer/profile.svg";
import walletSelected from "../assets/footer/walletSelected.svg";
import profileSelected from "../assets/footer/profileSelected.svg";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Check current path to determine active menu
  const currentPath = location.pathname;

  const goTo = (tmpMenu: string) => {
    navigate(`/${tmpMenu}`);
  };

  return (
    <div className="fixed z-[99] w-screen md:w-[500px] bottom-0 p-[16px] footer">
      <div className="flex justify-between items-center">
        <div onClick={() => goTo('home')} className="flex flex-col gap-[] justify-center items-center px-[10px]">
          <img className="w-[24px] h-[24px]" src={currentPath === '/home' ? homeSelected : home} alt="Home" />
          <p className={`text-[12px] font-[400] ${currentPath === '/home' ? 'text-[#155DFF]' : 'text-[#777]'}`}>Home</p>
        </div>
        <div onClick={() => goTo('my_host')} className="flex flex-col gap-[] justify-center items-center px-[10px]">
          <img className="w-[24px] h-[24px]" src={currentPath === '/my_host' ? hostSelected : host} alt="My Hosts" />
          <p className={`text-[12px] font-[400] ${currentPath === '/my_host' ? 'text-[#155DFF]' : 'text-[#777]'}`}>My Hosts</p>
        </div>
        <div onClick={() => goTo('wallet')} className="flex flex-col gap-[] justify-center items-center px-[10px]">
          <img className="w-[24px] h-[24px]" src={currentPath === '/wallet' ? walletSelected : wallet} alt="Wallet" />
          <p className={`text-[12px] font-[400] ${currentPath === '/wallet' ? 'text-[#155DFF]' : 'text-[#777]'}`}>Wallet</p>
        </div>
        <div onClick={() => goTo('profile')} className="flex flex-col gap-[] justify-center items-center px-[10px]">
          <img className="w-[24px] h-[24px]" src={currentPath === '/profile' ? profileSelected : profile} alt="Profile" />
          <p className={`text-[12px] font-[400] ${currentPath === '/profile' ? 'text-[#155DFF]' : 'text-[#777]'}`}>Profile</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;