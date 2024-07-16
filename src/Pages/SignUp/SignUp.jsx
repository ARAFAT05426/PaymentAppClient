import { Link } from "react-router-dom";
import PrimaryButton from "../../Components/Buttons/Primary/PrimaryButton";
import TextField from "../../Components/InputFields/TextField/TextField";
import bg from "/login.jpg";
import useAxiosCommon from "../../Hooks/axiosCommon/useAxiosCommon.jsx";
import { toast } from "sonner";
const SignUp = () => {
  const commonaxios = useAxiosCommon();
  const handleUser = async (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const email = target.email.value;
    const number = target.number.value;
    const password = target.password.value;
    if(typeof password === "number" || password.length !== 5){
      return toast.error("password must be 5 digit number")
    }
    try {
      const { data } = await commonaxios.put("/users/auth", {
        name,
        email,
        number,
        password,
      });
      if (data.success) {
        toast.success("Sign Up sucesfull");
        e.target.reset();
      } else {
        toast.error("account already exist");
        e.target.reset();
      }
    } catch (error) {
      console.log(error);
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
          Get Verified!
        </h1>
        <p className="max-w-lg mt-4">
          Every day, KwickPay makes thousands of customers happy. Join us today
          and experience seamless financial transactions.
        </p>
      </div>
      <div className="md:w-1/2 w-full flex flex-col justify-center gap-5 px-36">
        <h1 className="pl-1 font-medium text-3xl">Sign Up</h1>
        <form onSubmit={handleUser} className="w-full flex flex-col gap-4">
          <TextField
            icon="/icons/pen-tool.png"
            name="name"
            placeholder="Enter your name"
          />
          <TextField
            icon="/icons/user.png"
            name="email"
            placeholder="Enter your email"
          />
          <TextField
            icon="/icons/phone.png"
            name="number"
            placeholder="Enter your phone number"
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
          Already have an account?
          <Link
            className="text-center font-semibold text-xs text-primary"
            to={"/login"}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
