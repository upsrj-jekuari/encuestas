import { useState } from "react";
import Logo from "../../Logo/Logo";
import SimplifiedInput from "../../molecules/Forms/SimplifiedInput/SimplifiedInputField/SimplifiedInput";
import Button from "../../atoms/Button/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-screen h-screen grid grid-cols-5">
      <div
        style={{
          backgroundImage: "url(/METRA_CENTER.png)",
        }}
        className="col-span-2 bg-cover flex flex-col items-center justify-center w-full h-full gap-[35px]"
      >
        <Logo color="clear" />
        <img
          src="/BIS_LOGO.png"
          alt="Logo bilingual international sustainable"
        />
      </div>
      <div className="col-span-3 flex flex-col items-center justify-center w-full h-full">
        <div className="w-full max-w-[600px] flex flex-col items-center justify-center">
          <Logo className="w-full object-cover" />
          <div className="w-full flex flex-col gap-4 items-center">
            <SimplifiedInput
              inputFieldProps={{
                value: email,
                setter: setEmail,
                id: "login-email",
                placeholder: "Email",
              }}
              title="email"
            />
            <SimplifiedInput
              inputFieldProps={{
                value: password,
                setter: setPassword,
                id: "login-password",
                placeholder: "Password",
                type: "password",
              }}
              title="password"
            />
            <Button
              onClick={(e) => {
                e.preventDefault();
                console.log("Log in");
              }}
            >
              Iniciar Sesión
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
