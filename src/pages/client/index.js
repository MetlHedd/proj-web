import React from "react";

const Client = () => {
  return (
    <div className="grow flex justify-center items-center">
      <div className="p-8 h-fit">
        <div className="text-center">
          <h2 className="font-bold text-4xl text-white mb-4 font-serif">Cadastro</h2>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <input type="text" placeholder="Nome" className="p-2 rounded border-2" style={{ borderColor: "#5e17eb" }} />
          </div>
          <div>
            <input type="text" placeholder="CPF" className="p-2 rounded border-2" style={{ borderColor: "#5e17eb" }} />
          </div>
          <div>
            <input
              type="text"
              placeholder="Data de nascimento"
              className="p-2 rounded border-2"
              style={{ borderColor: "#5e17eb" }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Endereco"
              className="p-2 rounded border-2"
              style={{ borderColor: "#5e17eb" }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Telefone"
              className="p-2 rounded border-2"
              style={{ borderColor: "#5e17eb" }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="p-2 rounded border-2"
              style={{ borderColor: "#5e17eb" }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              className="p-2 rounded border-2"
              style={{ borderColor: "#5e17eb" }}
            />
          </div>
        </div>
        <div className="justify-center items-center flex">
          <input
            className="text-white justify-center p-2 rounded my-2 cursor-pointer"
            type="button"
            value="Enviar"
            style={{ backgroundColor: "#5e17eb" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Client;
