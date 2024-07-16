import PropTypes from "prop-types";
import { useState } from "react";

const TextField = ({ icon, name, placeholder, type = "text" }) => {
  const [isFocused, setFocused] = useState(false);
  const [isPassword, setPassword] = useState(type === "password" ? true : false);

  return (
    <div
      className={`flex items-center border transition duration-300 ease-in-out pr-2 w-full ${
        isFocused ? "border-primary" : ""
      } rounded-sm`}
    >
      <input
        className="bg-transparent w-full py-3 px-3 placeholder-black/75 text-sm text-black outline-none"
        type={isPassword ? "password" : "text"}
        required
        name={name}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {type === "password" ? (
        <img
          onClick={() => setPassword(!isPassword)}
          src={isPassword ? "/icons/show.png" : "/icons/hide.png"}
          alt="Toggle visibility"
          className="w-5 h-5 cursor-pointer"
        />
      ) : (
        <img src={icon} alt={name} className="w-5 h-5" />
      )}
    </div>
  );
};

TextField.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default TextField;
