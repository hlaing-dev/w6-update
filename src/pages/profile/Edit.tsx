import EditForm from "./EditForm";
import Navbar from "./Navbar";

const Edit = ({ setIsEditMode }: { setIsEditMode: any }) => {
  return (
    <div>
      <Navbar setIsEditMode={setIsEditMode} />
      <EditForm />
    </div>
  );
};

export default Edit;
