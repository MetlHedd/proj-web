import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Button from "../../../components/button";
import Input from "../../../components/input";
import onlyAccesIfLoggedIn from "../../../utils/onlyLogged";
import { createState } from "../../../utils/state";

export default function Index() {
  const router = useRouter();

  const inputs = [
    { placeholder: "Nome", type: "text", state: createState("") },
    { placeholder: "CPF", type: "text", state: createState("") },
    { placeholder: "Data de nascimento", type: "date", state: createState("") },
    { placeholder: "Endereço", type: "text", state: createState("") },
    { placeholder: "Telefone", type: "text", state: createState("") },
    { placeholder: "Email", type: "text", state: createState(""), disabled: true },
    { placeholder: "Senha", type: "password", state: createState("") },
  ];
  useEffect(() => {
    const asynFunc = async () => {
      try {
        const response = await axios.post("/api/user/get");
        
        inputs[0].state.set(response.data.data.name);
        inputs[1].state.set(response.data.data.cpf);
        inputs[2].state.set(response.data.data.birthDate);
        inputs[3].state.set(response.data.data.address);
        inputs[4].state.set(response.data.data.phone);
        inputs[5].state.set(response.data.data.email);
        inputs[6].state.set(response.data.data.password);
      } catch(e) {
        // router.push("/404");
      }
    }

    asynFunc();
  }, []);
  const send = async () => {
    try {
      const response = await axios.post("/api/user/edit",
      {
        name: inputs[0].state.value,
        cpf: inputs[1].state.value,
        birthDate: inputs[2].state.value,
        address: inputs[3].state.value,
        phone: inputs[4].state.value,
        email: inputs[5].state.value,
        password: inputs[6].state.value,
      });

      if (response.status === 200) {
        router.reload();
      }
    } catch(e) {
      
    }
  };
  onlyAccesIfLoggedIn();

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
        </div>
        <div className="justify-center items-center flex">
          <Button label="Cadastro" click={send} />
        </div>
      </div>
    </div>
  );
}
