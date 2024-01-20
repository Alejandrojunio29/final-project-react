// import InputNewUser from "../components/NewUserComponents/InputNewUser";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function NewUser() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const response = await fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        lastName: data.lastName,
        userName: data.userName,
        email: data.email,
        password: data.password,
        userImg: data.userImg,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      navigate("/login");
    } else {
      alert("User was not created, try again");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="container mx-auto flex  justify-center pt-8 ">
          <div className="flex flex-col  border  px-36 py-12 ">
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
            <h1 className="flex text-lg font-bold"> Create your account</h1>
            <div className="flex flex-col ">
              <h2>Profile image</h2>
              <div className="pt-2">
                <input type="file" className="file-input  max-w-xs" />
              </div>
            </div>
            {/* <InputNewUser
              infToAsk="Profile Image"
              typeOfInput="text"
              {...register("userImg", {
                required: { value: true, message: "Profile image is required" },
              })}
            />
            {errors.name && (
              <p className="text-red-700 text-xs">{errors.userImg?.message}</p>
            )} */}
            <div className="flex flex-col pt-3">
              <h2 className="text-base font-semibold pb-1">Profile Img 1</h2>
              <input
                type="text"
                className="w-full border rounded input-sm"
                {...register("userImg", {
                  required: {
                    value: true,
                    message: "Profile image is required",
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-700 text-xs">
                  {errors.userImg?.message}
                </p>
              )}
            </div>
            {/* <InputNewUser
              infToAsk="Name"
              typeOfInput="text"
              {...register("name", {
                required: { value: true, message: "Name is required" },
              })}
            />
            {errors.name && (
              <p className="text-red-700 text-xs">{errors.name?.message}</p>
            )} */}
            <div className="flex flex-col pt-3">
              <h2 className="text-base font-semibold pb-1">Name 1</h2>
              <input
                type="text"
                className="w-full border rounded input-sm"
                {...register("name", {
                  required: { value: true, message: "Name is required" },
                })}
              />
              {errors.name && (
                <p className="text-red-700 text-xs">{errors.name?.message}</p>
              )}
            </div>
            {/* <InputNewUser
              infToAsk="Last Name"
              typeOfInput="text"
              {...register("lastName", {
                required: { value: true, message: "Last name is required" },
              })}
            />
            {errors.lastName && (
              <p className="text-red-700 text-xs">{errors.lastName?.message}</p>
            )} */}
            <div className="flex flex-col pt-3">
              <h2 className="text-base font-semibold pb-1">Last Name 1</h2>
              <input
                type="text"
                className="w-full border rounded input-sm"
                {...register("lastName", {
                  required: { value: true, message: "Last name is required" },
                })}
              />
              {errors.lastName && (
                <p className="text-red-700 text-xs">
                  {errors.lastName?.message}
                </p>
              )}
            </div>
            {/* <InputNewUser
              infToAsk="User Name"
              typeOfInput="text"
              {...register("userName", {
                required: { value: true, message: "User Name is required" },
              })}
            />
            {errors.userName && (
              <p className="text-red-700 text-xs">{errors.userName?.message}</p>
            )} */}
            <div className="flex flex-col pt-3">
              <h2 className="text-base font-semibold pb-1">User Name 1</h2>
              <input
                type="text"
                className="w-full border rounded input-sm"
                {...register("userName", {
                  required: { value: true, message: "User Name is required" },
                })}
              />
              {errors.userName && (
                <p className="text-red-700 text-xs">
                  {errors.userName?.message}
                </p>
              )}
            </div>
            {/* <InputNewUser
              infToAsk="Email"
              typeOfInput="text"
              {...register("email", {
                required: { value: true, message: "Email is required" },
              })}
            />
            {errors.email && (
              <p className="text-red-700 text-xs">{errors.email?.message}</p>
            )} */}
            <div className="flex flex-col pt-3">
              <h2 className="text-base font-semibold pb-1">Email 1</h2>
              <input
                type="text"
                className="w-full border rounded input-sm"
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                })}
              />
              {errors.email && (
                <p className="text-red-700 text-xs">{errors.email?.message}</p>
              )}
            </div>
            {/* <InputNewUser
              infToAsk="Password"
              typeOfInput="password"
              {...register("password", {
                required: { value: true, message: "Password is required" },
              })}
            />
            {errors.password && (
              <p className="text-red-700 text-xs">{errors.password?.message}</p>
            )} */}
            <div className="flex flex-col pt-3">
              <h2 className="text-base font-semibold pb-1">Password 1</h2>
              <input
                type="password"
                className="w-full border rounded input-sm"
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                })}
              />
              {errors.password && (
                <p className="text-red-700 text-xs">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <input
              type="submit"
              value="Sign up"
              className="bg-blue-600 hover:bg-indigo-700 text-white w-full rounded p-2 cursor-pointer"
            />{" "}
          </div>
        </section>
      </form>
    </>
  );
}
