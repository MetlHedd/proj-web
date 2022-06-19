import React from "react";

const Login = () => {
  return (
    <div className="grow flex justify-center items-center">
      <div className="p-8 h-fit">
        <div className="text-center">
          <h2 className="font-bold text-4xl mb-4 text-white font-serif">Login</h2>
        </div>
        <div className="text-white font-serif">
          <p>Se você já possui um cadastro é só entrar, se não vamos criar seu acesso agora!</p>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              placeholder="Email"
              className="p-2 rounded border-2 w-full"
              style={{ borderColor: "#5e17eb" }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              className="p-2 rounded border-2 w-full"
              style={{ borderColor: "#5e17eb" }}
            />
          </div>
        </div>
        <div className="justify-center items-center flex">
          <input
            className="text-white justify-center p-2 rounded my-2 cursor-pointer"
            type="button"
            value="Logar"
            style={{ backgroundColor: "#5e17eb" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
