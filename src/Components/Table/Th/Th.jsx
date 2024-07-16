import PropTypes from "prop-types";

const Th = ({ children, className }) => {
  return <th className={`px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider ${className}`}>{children}</th>;
};

Th.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Th;
