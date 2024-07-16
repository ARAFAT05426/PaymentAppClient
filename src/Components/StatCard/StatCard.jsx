import PropTypes from "prop-types";

const StatCard = ({ icon: Icon, title, value, className }) => {
  return (
    <div
      className={`relative w-full max-w-sm flex flex-col rounded-lg bg-gradient-to-br shadow-lg ${className}`}
    >
      <div
        className={`mx-4 rounded-lg bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="p-4 text-right">
        <p className="text-sm font-normal text-gray-200">{title}</p>
        <h4 className="text-2xl font-bold text-white">{value}</h4>
      </div>
    </div>
  );
};

StatCard.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string,
  value: PropTypes.number,
  className: PropTypes.string,
};

export default StatCard;
