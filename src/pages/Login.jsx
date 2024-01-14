import ButtonLogin from "../components/LoginComponents/ButtonLogin";

export default function Login() {
  return (
    <>
      <section className="container mx-auto flex justify-around pt-8  ">
        <div className="flex flex-col  ">
          <div className="flex flex-wrap justify-center">
            <img
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
              alt=""
              className="w-16 flex  "
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
              name=""
              id=""
              className=" w-full border rounded input-sm"
            />
          </div>
          <div className="pt-3">
            <h2 className="text-lg font-bold">Password</h2>
            <input
              type="Password"
              name=""
              id=""
              className="w-full border rounded input-sm"
            />
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
            <button className="btn btn-wide w-full text-white bg-blue-600 hover:bg-blue-700">
              Log in
            </button>
          </div>
          <div className=" flex flex-row">
            <h3 className="flex text-sm py-4">
              By signing in, you are agreeing to our
              <h3 className="flex text-indigo-500 cursor-pointer justify-center">
                {" "}
                privacy policy, terms of use and code of conduct.
              </h3>
            </h3>
          </div>
          <hr></hr>
          <div className="flex flex-row pt-3 pb-8 justify-center gap-2">
            <h4 className="flex">
              New to DEV community?
              <h3 className=" flex text-indigo-500 cursor-pointer">
                Create account
              </h3>
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}
