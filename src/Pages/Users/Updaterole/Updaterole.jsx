import PropTypes from "prop-types";
import PrimaryButton from "../../../Components/Buttons/Primary/PrimaryButton";

const Updaterole = ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="font-semibold text-xl mb-4">Change account status {user?.status}</h1>
      {/* Example: Select role dropdown */}
      <select className="border p-2 mb-4 w-full outline-none rounded-none">
        <option className="" value="active">
          active
        </option>
        <option className="select-option" value="block">
          block
        </option>
      </select>
      <PrimaryButton text="Update" />
    </div>
  );
};

Updaterole.propTypes = {
  user: PropTypes.object
};

export default Updaterole;
