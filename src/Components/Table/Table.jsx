import PropTypes from "prop-types";

const Table = ({ children, className }) => {
  return (
    <table className={`min-w-full divide-y divide-gray-200 ${className} bg-white rounded-sm shadow-2xl overflow-hidden`}>
      {children}
    </table>
  );
};

Table.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Table;
