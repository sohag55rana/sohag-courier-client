import { useForm } from "react-hook-form"
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" {...register("email", { required: true })} className="input" placeholder="Email" />
                        {errors.email?.type === "required" && (
                            <p className="text-red-700">Email is required</p>
                        )}
                        <label className="label">Password</label>
                        <input type="password" {...register("password", { required: true, minLength: 6 })} className="input" placeholder="Password" />
                        {errors.password?.type === "required" && (
                            <p className="text-red-700">Password is required</p>
                        )}
                        {errors.password?.type === "minLength" && (
                            <p className="text-red-700">Password at least 6 caracters long</p>
                        )}
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </div>
            </div>
        </form>
    );
};

export default Login;