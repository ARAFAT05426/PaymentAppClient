import PropTypes from "prop-types";

const Td = ({ children, className }) => {
  return <td className={`px-6 py-4 whitespace-nowrap ${className}`}>{children}</td>;
};

Td.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Td.defaultProps = {
  className: "",
};

export default Td;
