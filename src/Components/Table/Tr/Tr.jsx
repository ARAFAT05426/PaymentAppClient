import PropTypes from "prop-types";

const Tr = ({ children, className }) => {
  return (
    <tr className={`bg-white ${className}`}>
      {children}
    </tr>
  );
};

Tr.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Tr.defaultProps = {
  className: "",
};

export default Tr;
