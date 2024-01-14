import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ButtonLogin from "../components/LoginComponents/ButtonLogin";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    if (responseData?.token) {
      localStorage.setItem("token", responseData.token);
      navigate("/");
    } else {
      setError("root", { message: "Invalid data, try again." });
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.root && (
          <p
            className="bg-red-500/50
                text-white
                w-full
                rounded-md
                p-1
                border border-red-500"
          >
            {errors.root?.message}
          </p>
        )}
        <section className="container mx-auto flex justify-around pt-8  ">
          <div className="flex flex-col  ">
            <div className="flex flex-wrap justify-center">
              <img
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
                alt=""
                className="w-16 flex  cursor-pointer "
                onClick={() => {
                  navigate("/");
                }}
              />
            </div>
            <div className="flex justify-center pt-4">
              <h1 className="text-2xl font-bold">Join the DEV community</h1>
            </div>
            <div className="flex justify-center pt-2">
              <h3>
                DEV community is a community of 1,236,828 amazing developers
              </h3>
            </div>
            <div className="py-2">
              <ButtonLogin
                logoImg="https://img.icons8.com/ios-filled/50/mac-os.png"
                brand="Apple"
              />
              <ButtonLogin
                logoImg="https://img.icons8.com/ios-filled/50/impossible-shapes.png"
                brand="Forem"
              />
              <ButtonLogin
                logoImg="https://img.icons8.com/ios-filled/50/github.png"
                brand="GitHub"
              />
              <ButtonLogin
                logoImg="https://img.icons8.com/color/48/twitter--v1.png"
                brand="Twitter"
              />
            </div>
            <div className="pt-4 ">
              <hr></hr>
              <div className="flex justify-center -mt-3">OR</div>
            </div>

            <div className="pt-3 ">
              <h2 className="text-lg font-bold">Email</h2>
              <input
                type="text"
                className=" w-full border rounded input-sm"
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email?.message}</p>
              )}
            </div>
            <div className="pt-3">
              <h2 className="text-lg font-bold">Password</h2>
              <input
                type="password"
                className="w-full border rounded input-sm"
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div>
              <div className="form-control flex flex-row justify-between pt-2  ">
                <div className="flex flex-row ">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                    />
                    <span className="label-text ps-2">Remember me</span>
                  </label>
                </div>
                <h3 className=" text-indigo-500 pt-2 cursor-pointer text-sm">
                  Forgot Password?
                </h3>
              </div>
            </div>
            <div className="pt-3">
              <input
                type="submit"
                className="bg-blue-600 hover:bg-indigo-700 text-white w-full rounded p-2 cursor-pointer"
              />
            </div>

            <div className=" flex flex-row">
              <h3 className="flex text-sm py-4">
                By signing in, you are agreeing to our
                <p className="flex text-indigo-500 cursor-pointer justify-center">
                  privacy policy, terms of use and code of conduct.
                </p>
              </h3>
            </div>
            <hr></hr>
            <div className="flex flex-row pt-3 pb-8 justify-center gap-2">
              <h3 className="flex">
                New to DEV community?
                <p
                  onClick={() => navigate("/createAccount")}
                  className=" flex text-indigo-500 cursor-pointer"
                >
                  Create account
                </p>
              </h3>
            </div>
          </div>
        </section>
      </form>
    </>
  );
}
