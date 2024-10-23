import { Link } from "react-router-dom";
import IncomeCard from "../components/IncomeCard";
import TopBar from "../components/TopBar";
import { IoDownloadSharp } from "react-icons/io5";
import { paths } from "../routes/paths";

const Income = () => {
  return (
    <div className="relative">
      <TopBar title="Income" showMenuIcon={true} />
      <div className="px-[20px]">
        <div className="flex flex-col gap-[8px] pt-[20px] pb-[128px]">
          <IncomeCard />
          <IncomeCard />
          <IncomeCard />
          <IncomeCard />
          <IncomeCard />
          <IncomeCard />
        </div>
      </div>
      <div className="fixed bottom-0 w-full px-[10px] py-[10px] bg-white">
        <Link
          to={paths.withdraw_record}
          className="py-[16px] flex bg-[#155DFF] w-full justify-center gap-[8px] text-white rounded-[10px]"
        >
          <span className="text-[15px]">Withdraw</span>
          <IoDownloadSharp className="text-[18px]" />
        </Link>
      </div>
    </div>
  );
};

export default Income;
