import { NavBar } from "@arco-design/mobile-react";

export default function Navbar({ setIsEditMode }: { setIsEditMode: any }) {
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
        fixed={false}
        title="Edit Profile"
        hasBottomLine={false}
        onClickLeft={() => {
          setIsEditMode(false);
        }}
      />
    </>
  );
}
