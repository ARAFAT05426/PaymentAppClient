import { Link } from "react-router-dom";
import PrimaryButton from "../../Components/Buttons/Primary/PrimaryButton";
import TextField from "../../Components/InputFields/TextField/TextField";
import bg from "/login.jpg";
import useAxiosCommon from "../../Hooks/axiosCommon/useAxiosCommon";
import { toast } from "sonner";
const Login = () => {
  const commonaxios = useAxiosCommon();
  const handleAgent = async (e) => {
    e.preventDefault();
    const target = e.target;
    const account = target.account.value;
    const password = target.password.value;
    if (typeof password === "number" || password.length !== 5) {
      return toast.error("password must be 5 digit number");
    }
    try {
      const { data } = await commonaxios.post("/users/auth", {
        account,
        password,
      });
      console.log(data);
    } catch (error) {
      return toast.error("Internel server error! Plz try again")
    }
  };
  return (
    <div className="h-screen overflow-hidden flex flex-col md:flex-row">
      <div
        className="md:w-1/2 w-full bg-center bg-cover bg-no-repeat text-white flex flex-col justify-center p-8 md:pl-28 relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 255, 0.7), rgba(0, 0, 0, 0.7)), url(${bg})`,
        }}
      >
        <h1
          style={{ fontFamily: `"Playwrite PE", cursive` }}
          className="font-bold text-2xl italic absolute top-8 md:top-28 md:left-28"
        >
          KwickPay
        </h1>
        <h1 className="text-4xl md:text-5xl font-semibold mt-16 md:mt-0">
          Welcome Back
        </h1>
        <p className="max-w-lg mt-4">Start earning money</p>
      </div>
      <div className="md:w-1/2 w-full flex flex-col justify-center gap-5 px-36">
        <h1 className="pl-1 font-medium text-3xl">Login</h1>
        <form onSubmit={handleAgent} className="w-full flex flex-col gap-4">
          <TextField
            icon="/icons/user.png"
            name="account"
            placeholder="Enter your email / phonenumber"
          />
          <TextField
            icon=""
            name="password"
            placeholder="Enter your password"
            type="password"
          />
          <PrimaryButton text="Login" />
        </form>
        <div className="flex gap-2 items-center justify-center text-sm font-medium">
          Don't have an account?
          <Link
            className="text-center font-semibold text-xs text-primary"
            to={"/signup"}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
