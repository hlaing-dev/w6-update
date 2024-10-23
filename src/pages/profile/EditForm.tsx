import { useMemo, useState } from "react";
import editUser from "./images/editUser.png";
import { Button, Picker } from "@arco-design/mobile-react";
import { Input, Image } from "@arco-design/mobile-react";

const EditForm = () => {
  const [isImage, setIsImage] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState(["Myanmar"]);
  const [gender, setGender] = useState(["Other"]);
  const [address, setAddress] = useState("");
  const [countryVisible, setCountryVisible] = useState(false);
  const [genderVisible, setGenderVisible] = useState(false);

  const countries = useMemo(() => {
    return [
      [
        { label: "Myanmar", value: "Myanmar" },
        { label: "Thailand", value: "Thailand" },
        { label: "Vietnam", value: "Vietnam" },
      ],
    ];
  }, []);

  const genders = useMemo(() => {
    return [
      [
        { label: "Male", value: "Male" },
        { label: "Female", value: "Female" },
        { label: "Other", value: "Other" },
      ],
    ];
  }, []);

  const handleImageClick = () => {
    // Trigger click on hidden file input to open file picker
    document.getElementById("imageInput")?.click();
  };

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        // setImageSrc(reader.result); // Update the image source with the new image
        setIsImage(true);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-[150px]">
        {isImage ? (
          <img src={editUser} alt="" className="w-[70px] h-[70px]" />
        ) : (
          <div
            className="relative"
            onClick={handleImageClick}
            style={{ cursor: "pointer" }}
          >
            <Image
              fit="cover"
              showLoading={true}
              showError={true}
              src={
                "https://sf1-cdn-tos.toutiaostatic.com/obj/arco-mobile/_static_/small_image_5.jpg"
              }
              style={{
                width: "80px",
                height: "80px",
                border: "2px solid white",
                borderRadius: "50%",
                objectFit: "cover", // Ensures the image covers the entire space
                overflow: "hidden", // Ensures no part of the image goes out of the circle
              }}
            />
            <div className="editBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <g filter="url(#filter0_b_125_5168)">
                  <rect
                    width="28"
                    height="28"
                    rx="14"
                    fill="black"
                    fill-opacity="0.12"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.9025 13.4182L17.7858 12.2413C18.2235 11.6583 18.4078 10.9399 18.3048 10.2179C18.2019 9.49585 17.8247 8.85807 17.2416 8.42041C16.0388 7.51773 14.3241 7.76032 13.4207 8.96461L8.56036 15.4396C7.11204 17.3709 8.40055 19.6715 8.45598 19.7687C8.53084 19.899 8.65682 19.9918 8.80366 20.0257C8.84542 20.0357 9.24853 20.125 9.81072 20.125C10.7199 20.125 12.0429 19.8925 12.9255 18.7163L16.79 13.568C16.8125 13.5469 16.8334 13.5235 16.8526 13.498C16.8718 13.4724 16.8884 13.4457 16.9025 13.4182ZM9.28596 19.0114C9.84815 19.0798 11.2662 19.128 12.0617 18.0677L15.6581 13.2766L13.0201 11.296L9.42345 16.0874C8.61219 17.1701 9.05849 18.4953 9.28596 19.0114ZM13.6681 10.4328L16.3064 12.4128L16.922 11.5928C17.4684 10.8657 17.3208 9.82986 16.5938 9.2835C15.866 8.73858 14.8295 8.88615 14.2838 9.61247L13.6681 10.4328Z"
                    fill="white"
                  />
                  <path
                    d="M19.5478 19.9367H14.9574C14.6593 19.9367 14.4175 19.6948 14.4175 19.3968C14.4175 19.0988 14.6593 18.8569 14.9574 18.8569H19.5478C19.8458 18.8569 20.0877 19.0988 20.0877 19.3968C20.0877 19.6948 19.8458 19.9367 19.5478 19.9367Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_125_5168"
                    x="-32"
                    y="-32"
                    width="92"
                    height="92"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="16" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_125_5168"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_125_5168"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
              >
                <g filter="url(#filter0_b_125_5093)">
                  <rect
                    x="0.5"
                    width="28"
                    height="28"
                    rx="14"
                    fill="black"
                    fill-opacity="0.12"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.4025 13.4182L18.2858 12.2413C18.7235 11.6583 18.9078 10.9399 18.8048 10.2179C18.7019 9.49585 18.3247 8.85807 17.7416 8.42041C16.5388 7.51773 14.8241 7.76032 13.9207 8.96461L9.06036 15.4396C7.61204 17.3709 8.90055 19.6715 8.95598 19.7687C9.03084 19.899 9.15682 19.9918 9.30366 20.0257C9.34542 20.0357 9.74853 20.125 10.3107 20.125C11.2199 20.125 12.5429 19.8925 13.4255 18.7163L17.29 13.568C17.3125 13.5469 17.3334 13.5235 17.3526 13.498C17.3718 13.4724 17.3884 13.4457 17.4025 13.4182ZM9.78596 19.0114C10.3482 19.0798 11.7662 19.128 12.5617 18.0677L16.1581 13.2766L13.5201 11.296L9.92345 16.0874C9.11219 17.1701 9.55849 18.4953 9.78596 19.0114ZM14.1681 10.4328L16.8064 12.4128L17.422 11.5928C17.9684 10.8657 17.8208 9.82986 17.0938 9.2835C16.366 8.73858 15.3295 8.88615 14.7838 9.61247L14.1681 10.4328Z"
                    fill="white"
                  />
                  <path
                    d="M20.0478 19.9367H15.4574C15.1593 19.9367 14.9175 19.6948 14.9175 19.3968C14.9175 19.0988 15.1593 18.8569 15.4574 18.8569H20.0478C20.3458 18.8569 20.5877 19.0988 20.5877 19.3968C20.5877 19.6948 20.3458 19.9367 20.0478 19.9367Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_125_5093"
                    x="-31.5"
                    y="-32"
                    width="92"
                    height="92"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="16" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_125_5093"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_125_5093"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg> */}
            </div>
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
        )}
      </div>
      <div className="px-2">
        <div className="border-b-[1px] mb-1">
          <Input
            className=""
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            border="none"
          />
        </div>
        <div className="border-b-[1px] mb-1">
          <Input
            placeholder="Enter Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            border="none"
          />
        </div>
        <div className="border-b-[1px] mb-1">
          <Input
            placeholder="Enter E-Mail Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            border="none"
          />
        </div>
        <div className="mb-1 mt-2 flex items-center gap-1">
          <div className="flex flex-col gap-[2px] w-1/2">
            <span className="selectTitle">Select Country</span>
            <div
              onClick={() => setCountryVisible(true)}
              style={{
                borderRadius: "12px",
                border: "1px solid rgba(221, 221, 221, 0.87)",
                background: "#FFF",
                display: "flex",
                padding: "12px",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  border: "none",
                  outline: "none",
                  flex: 1,
                  color: "#000",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "20px",
                }}
              >
                {country}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                style={{ marginLeft: "8px" }}
              >
                <path
                  d="M8.82628 0.205987C8.88135 0.270848 8.92504 0.347901 8.95485 0.432731C8.98466 0.517561 9 0.608502 9 0.700346C9 0.79219 8.98466 0.883131 8.95485 0.967961C8.92504 1.05279 8.88135 1.12984 8.82628 1.1947L4.89527 5.83664C4.85151 5.88843 4.79953 5.92951 4.7423 5.95754C4.68507 5.98557 4.62373 6 4.56177 6C4.49982 6 4.43847 5.98557 4.38125 5.95754C4.32402 5.92951 4.27204 5.88843 4.22828 5.83664L0.297265 1.1947C0.0654726 0.920991 0.0654726 0.4797 0.297265 0.205987C0.529058 -0.0677252 0.902764 -0.0677252 1.13456 0.205987L4.56414 4.25023L7.99372 0.200402C8.22078 -0.0677242 8.59922 -0.0677252 8.82628 0.205987Z"
                  fill="#888888"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-[2px] w-1/2">
            <span className="selectTitle">Select Gender</span>
            <div
              onClick={() => setGenderVisible(true)}
              style={{
                borderRadius: "12px",
                border: "1px solid rgba(221, 221, 221, 0.87)",
                background: "#FFF",
                display: "flex",
                padding: "12px",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  border: "none",
                  outline: "none",
                  flex: 1,
                  color: "#000",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "20px",
                }}
              >
                {gender}
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                style={{ marginLeft: "8px" }}
              >
                <path
                  d="M8.82628 0.205987C8.88135 0.270848 8.92504 0.347901 8.95485 0.432731C8.98466 0.517561 9 0.608502 9 0.700346C9 0.79219 8.98466 0.883131 8.95485 0.967961C8.92504 1.05279 8.88135 1.12984 8.82628 1.1947L4.89527 5.83664C4.85151 5.88843 4.79953 5.92951 4.7423 5.95754C4.68507 5.98557 4.62373 6 4.56177 6C4.49982 6 4.43847 5.98557 4.38125 5.95754C4.32402 5.92951 4.27204 5.88843 4.22828 5.83664L0.297265 1.1947C0.0654726 0.920991 0.0654726 0.4797 0.297265 0.205987C0.529058 -0.0677252 0.902764 -0.0677252 1.13456 0.205987L4.56414 4.25023L7.99372 0.200402C8.22078 -0.0677242 8.59922 -0.0677252 8.82628 0.205987Z"
                  fill="#888888"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="border-b-[1px] mb-1">
          <Input
            placeholder="Enter Home Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            border="none"
          />
        </div>
      </div>
      <div className="mt-2 fixed bottom-2 w-full px-2">
        <Button
          style={{
            borderRadius: "12px",
          }}
          type="primary"
          className="w-full"
          // onClick={() => setIsEditMode(false)}
        >
          Save
        </Button>
      </div>
      <Picker
        okText="Save"
        dismissText="Cancel"
        title="Select Gender"
        visible={genderVisible}
        cascade={false}
        data={genders}
        maskClosable={true}
        onHide={() => {
          setGenderVisible(false);
        }}
        onOk={(val: any) => {
          setGender(val);
        }}
        value={gender}
        cols={3}
        rows={3}
      />
      <Picker
        okText="Save"
        dismissText="Cancel"
        title="Select Country"
        visible={countryVisible}
        cascade={false}
        data={countries}
        maskClosable={true}
        onHide={() => {
          setCountryVisible(false);
        }}
        onOk={(val: any) => {
          setCountry(val);
        }}
        value={country}
        cols={3}
        rows={3}
      />
    </div>
  );
};

export default EditForm;
