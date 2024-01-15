import { useNavigate } from "react-router-dom";
import ButtonLogin from "../components/LoginComponents/ButtonLogin";

export default function CreateAccount() {
  const navigate = useNavigate();
  return (
    <>
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

            <div className="flex grow pt-3 ">
              <button
                onClick={() => navigate("/newUser")}
                className="btn btn-wide bg-transparent flex grow "
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/mail.png"
                  alt=""
                  className="w-6 "
                />
                Continue with Email
              </button>
            </div>
          </div>

          <div className=" flex flex-row">
            <h3 className="flex text-sm py-4">
              By signing in, you are agreeing to our
              <h3 className="flex text-indigo-500 cursor-pointer justify-center">
                privacy policy, terms of use and code of conduct.
              </h3>
            </h3>
          </div>
          <hr></hr>
          <div className="flex flex-row pt-3 pb-8 justify-center gap-2">
            <h4 className="flex">
              Already have an account?
              <h3
                onClick={() => navigate("/login")}
                className=" flex text-indigo-500 cursor-pointer"
              >
                Log in
              </h3>
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}
