import { Button } from "@arco-design/mobile-react";

const Logout = () => {
  return (
    <div className="mx-[0.32rem] mt-2">
      <Button
        className="logout_text"
        type="default"
        needActive
        style={{
          background: "rgba(245, 63, 63, 0.20)",
          borderRadius: "12px",
          color: "#F53F3F",
        }}
      >
        Log Out
      </Button>
    </div>
  );
};

export default Logout;
