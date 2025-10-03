import { useForm } from "react-hook-form";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  // console.log(watch("example"))

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
      <div className="card-body ">
        <h1 className="text-4xl font-bold">Login now!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="label">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="input mb-5"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-600">Email is required</p>
          )}

          <label className="label">Password</label>
          <input
            {...register("password", { required: true, minLength: 6 })}
            type="password"
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-600">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-600">Password at least 6 caracters long</p>
          )}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn bg-[#CAEB66] mt-4 w-full rounded-sm">
            Login
          </button>

          {errors.exampleRequired && <span>This field is required</span>}
        </form>
        <p>
          Don’t have any account?
          <Link className="btn btn-link" to="/register">
            Register
          </Link>{" "}
        </p>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
