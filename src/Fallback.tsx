import { Loading } from "@arco-design/mobile-react";

const Fallback = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Loading type="spin" />
    </div>
  );
};

export default Fallback;
