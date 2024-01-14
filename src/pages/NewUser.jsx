import InputNewUser from "../components/NewUserComponents/InputNewUser";

export default function NewUser() {
  return (
    <>
      <section className="container mx-auto flex  justify-center pt-8 ">
        <div className="flex flex-col  border  px-36 py-12 ">
          <h1 className="flex text-lg font-bold"> Create your account</h1>
          <div className="flex flex-col ">
            <h2>Profile image</h2>
            <div className="pt-2">
              <input type="file" className="file-input  max-w-xs" />
            </div>
          </div>

          <InputNewUser infToAsk="Name" typeOfInput="text" />
          <InputNewUser infToAsk="UserName" typeOfInput="text" />
          <InputNewUser infToAsk="Email" typeOfInput="text" />
          <InputNewUser infToAsk="Password" typeOfInput="Password" />
          <InputNewUser
            infToAsk="Password Confirmation"
            typeOfInput="Password"
          />
          <div className="pt-4">
            <button className="btn btn-primary text-md text-white">
              Sign Up
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
