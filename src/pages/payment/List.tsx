import { Dialog } from "@arco-design/mobile-react";
import { useState } from "react";

const List = ({
  setEditVisible,
  setEditData,
}: {
  setEditVisible: any;
  setEditData: any;
}) => {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const lists = [
    {
      type: "Kpay",
      name: "Kelly Dora Jenna",
      number: "+991272727",
    },
    {
      type: "Kpay",
      name: "Kelly",
      number: "+991272727",
    },
    {
      type: "Kpay",
      name: "Jenna",
      number: "+991272727",
    },
  ];

  const handleDeleteClick = (listItem: any) => {
    setSelectedItem(listItem); // Set the item to be deleted
    setVisible(true); // Show the dialog
  };

  const handleConfirmDelete = () => {
    console.log("Item deleted:", selectedItem);
    setVisible(false); // Close the dialog
    setSelectedItem(null); // Reset the selected item
  };

  const handleCancelDelete = () => {
    setVisible(false); // Close the dialog
    setSelectedItem(null); // Reset the selected item
  };

  const handleEditClick = (listItem: any) => {
    setEditData(listItem); // Pass the data to be edited
    setEditVisible(true); // Show the edit form
  };

  return (
    <div className="flex flex-col gap-y-1 px-2 mt-2 pb-[100px]">
      {lists.map((list, index) => (
        <div key={index} className="list_container">
          <div className="list_inner">
            <div className="flex gap-[6px]">
              <div className="blue-line mt-[5px]"></div>
              <div className="content">
                <h1>{list.type}</h1>
                <h2>{list.name}</h2>
                <h2>{list.number}</h2>
              </div>
            </div>
            <div className="actions">
              <button onClick={() => handleEditClick(list)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.7007 12.0515L17.977 10.3513C18.6094 9.50888 18.8756 8.47096 18.7269 7.42784C18.5782 6.38472 18.0332 5.46328 17.1908 4.83096C15.453 3.5268 12.9757 3.87728 11.6705 5.6172L4.64838 14.972C2.5559 17.7623 4.4175 21.0861 4.49758 21.2265C4.60574 21.4148 4.78774 21.5489 4.9999 21.5978C5.06022 21.6124 5.64262 21.7413 6.45486 21.7413C7.76838 21.7413 9.6799 21.4054 10.955 19.706L16.5383 12.268C16.5707 12.2375 16.601 12.2037 16.6287 12.1669C16.6564 12.13 16.6805 12.0914 16.7007 12.0515ZM5.6967 20.1324C6.50894 20.2312 8.55774 20.3009 9.70694 18.769L14.9029 11.847L11.0916 8.98547L5.89534 15.908C4.72326 17.4721 5.36806 19.3868 5.6967 20.1324ZM12.0278 7.73838L15.8396 10.5991L16.729 9.41424C17.5184 8.36384 17.3052 6.86728 16.2548 6.07792C15.2034 5.29064 13.7058 5.50384 12.9174 6.5532L12.0278 7.73838Z"
                    fill="black"
                  ></path>
                  <path
                    d="M20.5224 21.4682H13.8904C13.4598 21.4682 13.1104 21.1188 13.1104 20.6882C13.1104 20.2576 13.4598 19.9082 13.8904 19.9082H20.5224C20.953 19.9082 21.3024 20.2576 21.3024 20.6882C21.3024 21.1188 20.953 21.4682 20.5224 21.4682Z"
                    fill="black"
                  ></path>
                </svg>
              </button>
              <button onClick={() => handleDeleteClick(list)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M2.75 5.5H19.25"
                    stroke="black"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M17.4163 5.5V18.3333C17.4163 19.25 16.4997 20.1667 15.583 20.1667H6.41634C5.49967 20.1667 4.58301 19.25 4.58301 18.3333V5.5"
                    stroke="black"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M7.33301 5.49967V3.66634C7.33301 2.74967 8.24967 1.83301 9.16634 1.83301H12.833C13.7497 1.83301 14.6663 2.74967 14.6663 3.66634V5.49967"
                    stroke="black"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Dialog Component */}
      <Dialog
        visible={visible}
        onClose={handleCancelDelete}
        close={() => setVisible(false)}
        platform="android"
        footer={[
          {
            content: "Cancel",
            onClick: handleCancelDelete,
          },
          {
            content: "Remove",
            onClick: handleConfirmDelete,
          },
        ]}
      >
        <div className="flex items-center gap-[8px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9ZM8.25 11.25V12.75H9.75V11.25H8.25ZM9.75 10.5L9.75 5.25H8.25L8.25 10.5H9.75Z"
              fill="#FF7D00"
            />
          </svg>
          <span className="del_text">Are you sure you want to Remove?</span>
        </div>
      </Dialog>
    </div>
  );
};

export default List;
