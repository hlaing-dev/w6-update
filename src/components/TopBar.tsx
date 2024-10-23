import { useNavigate } from "react-router-dom";
import back from "../assets/svgs/goback.svg";
import menu from "../assets/svgs/menu.svg";
import { Picker, Cell } from "@arco-design/mobile-react";
import React from "react";

const TopBar = ({ title, showMenuIcon }: any) => {
  const navigate = useNavigate();
  const [singleVisible, setSingleVisible] = React.useState(false);
  const [singleValue, setSingeValue] = React.useState(["All"]);
  const single = React.useMemo(() => {
    return [
      [
        { label: "All", value: "All" },
        { label: "Pending", value: "Pending" },
        { label: "Success", value: "Success" },
        { label: "Failed", value: "Failed" },
      ],
    ];
  }, []);
  return (
    <div className="flex justify-between items-center py-[8px] sticky top-0 z-50 bg-white shadow-sm px-[20px]">
      <img src={back} onClick={() => navigate(-1)} alt="back" />
      <h3 className="font-semibold text-[18px]">{title}</h3>
      {showMenuIcon ? (
        <img
          onClick={() => {
            setSingleVisible(true);
          }}
          src={menu}
          alt="menu"
        />
      ) : (
        <div></div>
      )}
      <>
        <Picker
          visible={singleVisible}
          cascade={false}
          data={single}
          maskClosable={true}
          onHide={() => {
            setSingleVisible(false);
          }}
          onOk={(val, data) => {
            console.log("------demo onOk", val, data);
          }}
          value={singleValue}
        />
      </>
    </div>
  );
};

export default TopBar;
