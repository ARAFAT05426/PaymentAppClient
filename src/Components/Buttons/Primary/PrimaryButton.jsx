import PropTypes from "prop-types";

const PrimaryButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-10 py-3.5 overflow-hidden group bg-primary/75 hover:bg-primary/90 text-white transition-all ease-out duration-300 relative rounded-sm"
    >
      <span className="absolute right-0 w-10 h-full top-0 transition-all duration-700 transform translate-x-12 bg-white opacity-25 -skew-x-12 group-hover:right-full ease"></span>
      <span className="relative text-lg font-semibold">{text}</span>
    </button>
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default PrimaryButton;
