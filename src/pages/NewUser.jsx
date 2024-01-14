import InputNewUser from "../components/NewUserComponents/InputNewUser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewUser() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [lastName, setLastName] = useState("");
  const [userImg, setUserImg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function onNameChange(event) {
    setName(event.target.value);
  }
  function onUserNameChange(event) {
    setUsername(event.target.value);
  }
  function onLastNameChange(event) {
    setLastName(event.target.value);
  }
  function onUserImgChange(event) {
    setUserImg(event.target.value);
  }
  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        username,
        lastName,
        userImg,
        email,
        password,
      }),
      headers: { "Content-Type": "application/Json" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.token != null) {
          localStorage.setItem("token", data.token);
          setIsLoading(false);
          setIsFailed(false);
          navigate("/");
        } else {
          setIsLoading(false);
          setIsFailed(true);
        }
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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
            <InputNewUser
              infToAsk="Profile Image"
              typeOfInput="text"
              onChange={onUserImgChange}
              value={userImg}
              required
            />
            <InputNewUser
              infToAsk="Name"
              typeOfInput="text"
              onChange={onNameChange}
              value={name}
              required
            />

            <InputNewUser
              infToAsk="LastName"
              typeOfInput="text"
              onChange={onLastNameChange}
              value={lastName}
              required
            />

            <InputNewUser
              infToAsk="UserName"
              typeOfInput="text"
              onChange={onUserNameChange}
              value={username}
              required
            />
            <InputNewUser
              infToAsk="Email"
              typeOfInput="text"
              onChange={onEmailChange}
              value={email}
              required
            />

            <InputNewUser
              infToAsk="Password"
              typeOfInput={isPasswordVisible ? "text" : "password"}
              onChange={onPasswordChange}
              value={password}
              required
            />

            <input
              type="submit"
              disabled={isLoading} //esto desabilita el boton y no permite que clicken denuevo si la function isLoading esta activa
              value={isLoading ? "wait ..." : "Sign up"}
              className="bg-blue-600 hover:bg-indigo-700 text-white w-full rounded p-2 cursor-pointer"
            />
            {isFailed && ( //Esto es conditional Rendering, si isFailed renderiza "P"
              <p className=" pt-2 bg-red-500 text-white p-2 rounded w-full">
                Datos invalidos
              </p>
            )}
          </div>
        </section>
      </form>
    </>
  );
}
