import { NavBar } from "@arco-design/mobile-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar
        style={{
          color: "#000",
          fontFamily: "Montserrat",
          fontSize: "18",
          fontStyle: "normal",
          fontWeight: "normal",
          lineHeight: "22px",
        }}
        fixed={true}
        title="Payment"
        hasBottomLine={false}
        onClickLeft={() => {
          navigate("/profile");
        }}
      />
    </>
  );
}
