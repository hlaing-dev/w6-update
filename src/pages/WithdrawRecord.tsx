import TopBar from "../components/TopBar";
import WithdrawCard from "../components/WithdrawCard";
const WithdrawRecord = () => {
  return (
    <div className="relative">
      <TopBar title="Withdraw Record" showMenuIcon={true} />
      <div className="px-[20px]">
        <div className="flex flex-col gap-[16px] pt-[20px] pb-[128px]">
          <WithdrawCard status="Processing" />
          <WithdrawCard status="Pending" />
          <WithdrawCard status="Success" />
          <WithdrawCard status="Failed" />
          <WithdrawCard status="Cancelled" />
          <WithdrawCard status="Complected" />
          <WithdrawCard status="Waiting for receipt" />
        </div>
      </div>
    </div>
  );
};

export default WithdrawRecord;
