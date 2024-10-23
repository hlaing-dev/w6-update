import { useState } from "react";
import Header from "./Header";
import Logout from "./Logout";
import Main from "./Main";
import "./profile.css";
import Edit from "./Edit";
import Layout from "../../Layout";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);
  return (
    <Layout>
      {isEditMode ? (
        <Edit setIsEditMode={setIsEditMode} />
      ) : (
        <div className="pb-[100px] bg-white">
          <Header setIsEditMode={setIsEditMode} isLoggedIn={isLoggedIn} />
          <Main />
          {isLoggedIn && <Logout />}
        </div>
      )}
    </Layout>
  );
};

export default Profile;
