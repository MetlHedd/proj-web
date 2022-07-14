import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../../../../components/button";
import Input from "../../../../components/input";
import Modal from "../../../../components/modal";
import onlyAccesIfLoggedIn from "../../../../utils/onlyLogged";
import { createState } from "../../../../utils/state";

export default function Index() {
  const router = useRouter();
  const modal = Modal();

  const inputs = [
    { placeholder: "Nome", type: "text", state: createState("") },
    { placeholder: "CPF", type: "text", state: createState("") },
    { placeholder: "Data de nascimento", type: "date", state: createState("") },
    { placeholder: "Endereço", type: "text", state: createState("") },
    { placeholder: "Telefone", type: "text", state: createState("") },
    { placeholder: "Email", type: "text", state: createState("") },
    { placeholder: "Senha", type: "password", state: createState("") },
  ];
  const [checkbox, setCheckbox] = useState(false);
  const send = async () => {
    try {
      const response = await axios.post("/api/user/add",
      {
        name: inputs[0].state.value,
        cpf: inputs[1].state.value,
        birthDate: inputs[2].state.value,
        address: inputs[3].state.value,
        phone: inputs[4].state.value,
        email: inputs[5].state.value,
        password: inputs[6].state.value,
        admin: checkbox,
      });

      if (response.status === 200) {
        router.push("/admin/user");
      }
    } catch(e) {
      modal.showModal(<>
        <div className="flex flex-col gap-2">
          <div className="text-black font-bold">
            Erro:
          </div>
          <div>
            <code>
              {JSON.stringify(e.response.data, null, 2)}
            </code>
          </div>
        </div>
      </>);
    }
  };
  onlyAccesIfLoggedIn(true);

  return (
    <div className="flex justify-center items-center">
      <div className="p-8 h-fit">
        <div className="text-center">
          <h2 className="font-bold text-4xl text-white mb-4 font-serif">
            Cadastro
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {inputs.map((input, index) => (
            <Input key={index} {...input} />
          ))}
          <div className="flex flex-row gap-2">
            <div>
              <input type="checkbox" onChange={() => setCheckbox(!checkbox)} checked={checkbox} />
            </div>
            <div className="text-white font-bold">
              Is Admin?
            </div>
          </div>
        </div>
        <div className="justify-center items-center flex">
          <Button label="Cadastro" click={send} />
        </div>
        {modal.element}
      </div>
    </div>
  );
}
