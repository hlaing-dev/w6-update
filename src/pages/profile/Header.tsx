// import { Button } from "@arco-design/mobile-react";
// import { Image } from "@arco-design/mobile-react";
// import EditIcon from "./Icons/EditIcon";

// const Header = ({
//   isLoggedIn,
//   setIsEditMode,
// }: {
//   isLoggedIn: any;
//   setIsEditMode: any;
// }) => {
//   const user = {
//     image:
//       "https://sf1-cdn-tos.toutiaostatic.com/obj/arco-mobile/_static_/small_image_5.jpg",
//     name: "Jenna",
//     country: "Thailand",
//     phnumber: "+959224143223",
//     level: "Lvl 1",
//   };

//   const handleEditOpen = () => {
//     setIsEditMode(true);
//   };

//   return (
//     <div>
//       <div className="h-[280px] bg-[#155DFF] rounded-b-[37px] flex justify-center items-center text-center">
//         {isLoggedIn ? (
//           <>
//             <div className="mt-0">
//               <div className="flex flex-col items-center gap-[8px]">
//                 <div className="relative">
//                   <Image
//                     fit="fill"
//                     showLoading={true}
//                     showError={true}
//                     src="https://sf1-cdn-tos.toutiaostatic.com/obj/arco-mobile/_static_/small_image_5.jpg"
//                     style={{
//                       width: "50px",
//                       height: "50px",
//                       border: "2px solid white",
//                       borderRadius: "50%",
//                     }}
//                   />
//                   {/* <Avatar
//                     size="large"
//                     src={user.image}
//                     style={{
//                       border: "2px solid white",
//                       borderRadius: "50%",
//                     }}
//                   /> */}
//                   <div className="level">{user.level}</div>
//                 </div>

//                 <div>
//                   <div className="flex items-baseline">
//                     <span className="name mr-[4px]">{user.name}</span>
//                     <span className="country">({user.country})</span>
//                   </div>
//                   <div className="phnumber">{user.phnumber}</div>
//                 </div>

//                 <Button
//                   inline
//                   onClick={handleEditOpen}
//                   size="medium"
//                   icon={<EditIcon />}
//                   style={{
//                     alignItems: "center",
//                     background: "rgba(255, 255, 255, 0.1)",
//                     borderRadius: "12px",
//                     fontSize: "14px",
//                     fontStyle: "normal",
//                     fontWeight: "500",
//                     lineHeight: "22px",
//                   }}
//                 >
//                   Edit Profile
//                 </Button>
//               </div>
//             </div>
//           </>
//         ) : (
//           <div className="mt-0">
//             <div className="flex flex-col items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="61"
//                 height="60"
//                 viewBox="0 0 61 60"
//                 fill="none"
//               >
//                 <g clip-path="url(#clip0_29_802)">
//                   <path
//                     d="M0.5 30C0.5 13.4315 13.9315 0 30.5 0C47.0685 0 60.5 13.4315 60.5 30C60.5 46.5685 47.0685 60 30.5 60C13.9315 60 0.5 46.5685 0.5 30Z"
//                     fill="#447EFF"
//                   />
//                   <path
//                     fill-rule="evenodd"
//                     clip-rule="evenodd"
//                     d="M34.8913 30.149H27.3168C23.5523 30.149 20.5 33.2015 20.5 36.9658V40.6129C20.4981 41.4613 20.9715 42.2414 21.7233 42.6315L21.7252 42.6334C27.8551 45.7769 34.0945 45.8034 40.4532 42.6259H40.4551C41.2201 42.2395 41.703 41.4556 41.703 40.5997C41.7087 39.7532 41.7087 38.3974 41.7087 36.9658C41.7087 33.2013 38.6561 30.149 34.8919 30.149L34.8913 30.149ZM31.1041 15C27.3414 15 24.2873 18.0544 24.2873 21.8168C24.2873 25.5792 27.3417 28.6336 31.1041 28.6336C34.8664 28.6336 37.9209 25.5792 37.9209 21.8168C37.9209 18.0544 34.8664 15 31.1041 15Z"
//                     fill="white"
//                   />
//                 </g>
//                 <defs>
//                   <clipPath id="clip0_29_802">
//                     <rect
//                       width="60"
//                       height="60"
//                       fill="white"
//                       transform="translate(0.5)"
//                     />
//                   </clipPath>
//                 </defs>
//               </svg>
//               <Button
//                 className="mt-2"
//                 inline
//                 size="medium"
//                 style={{
//                   background: "rgba(255, 255, 255, 0.1)",
//                   borderRadius: "12px",
//                   fontSize: "14px",
//                   fontStyle: "normal",
//                   fontWeight: "500",
//                   lineHeight: "22px",
//                 }}
//               >
//                 LogIn
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;

import { Button, Image } from "@arco-design/mobile-react";
import EditIcon from "./Icons/EditIcon";

const Header = ({
  isLoggedIn,
  setIsEditMode,
}: {
  isLoggedIn: any;
  setIsEditMode: any;
}) => {
  const user = {
    image:
      "https://sf1-cdn-tos.toutiaostatic.com/obj/arco-mobile/_static_/small_image_5.jpg",
    name: "Jenna",
    country: "Thailand",
    phnumber: "+959224143223",
    level: "Lvl 1",
  };

  const handleEditOpen = () => {
    setIsEditMode(true);
  };

  return (
    <div>
      <div className="h-[280px] bg-[#155DFF] rounded-b-[37px] flex justify-center items-center text-center">
        {isLoggedIn ? (
          <>
            <div className="mt-0">
              <div className="flex flex-col items-center gap-[8px]">
                <div className="relative">
                  <Image
                    fit="cover"
                    showLoading={true}
                    showError={true}
                    src={user.image}
                    style={{
                      width: "80px",
                      height: "80px",
                      border: "2px solid white",
                      borderRadius: "50%",
                      objectFit: "cover", // Ensures the image covers the entire space
                      overflow: "hidden", // Ensures no part of the image goes out of the circle
                    }}
                  />
                  <div className="level">{user.level}</div>
                </div>

                <div>
                  <div className="flex items-baseline">
                    <span className="name mr-[4px]">{user.name}</span>
                    <span className="country">({user.country})</span>
                  </div>
                  <div className="phnumber">{user.phnumber}</div>
                </div>

                <Button
                  inline
                  onClick={handleEditOpen}
                  size="medium"
                  icon={<EditIcon />}
                  style={{
                    alignItems: "center",
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "22px",
                  }}
                >
                  Edit Profile
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="mt-0">
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="60"
                viewBox="0 0 61 60"
                fill="none"
              >
                <g clipPath="url(#clip0_29_802)">
                  <path
                    d="M0.5 30C0.5 13.4315 13.9315 0 30.5 0C47.0685 0 60.5 13.4315 60.5 30C60.5 46.5685 47.0685 60 30.5 60C13.9315 60 0.5 46.5685 0.5 30Z"
                    fill="#447EFF"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M34.8913 30.149H27.3168C23.5523 30.149 20.5 33.2015 20.5 36.9658V40.6129C20.4981 41.4613 20.9715 42.2414 21.7233 42.6315L21.7252 42.6334C27.8551 45.7769 34.0945 45.8034 40.4532 42.6259H40.4551C41.2201 42.2395 41.703 41.4556 41.703 40.5997C41.7087 39.7532 41.7087 38.3974 41.7087 36.9658C41.7087 33.2013 38.6561 30.149 34.8919 30.149L34.8913 30.149ZM31.1041 15C27.3414 15 24.2873 18.0544 24.2873 21.8168C24.2873 25.5792 27.3417 28.6336 31.1041 28.6336C34.8664 28.6336 37.9209 25.5792 37.9209 21.8168C37.9209 18.0544 34.8664 15 31.1041 15Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_29_802">
                    <rect
                      width="60"
                      height="60"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <Button
                className="mt-2"
                inline
                size="medium"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "22px",
                }}
              >
                LogIn
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
