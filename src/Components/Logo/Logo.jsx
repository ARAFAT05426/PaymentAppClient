import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="flex items-center gap-1">
      <img src="/logo.png" alt="" />
      <h1
        className="italic font-black"
        style={{ fontFamily: `"Playwrite PE", cursive` }}
      >
        Kwickpay
      </h1>
    </Link>
  );
};
export default Logo;
