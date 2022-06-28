import axios from "axios";
import { useRouter } from "next/router";
import Button from "../../../components/button";
import Input from "../../../components/input";
import { createState } from "../../../utils/state";

export default function Index() {
  const router = useRouter();

  const inputs = [
    { placeholder: "Nome", type: "text", state: createState("") },
    { placeholder: "CPF", type: "text", state: createState("") },
    { placeholder: "Data de nascimento", type: "date", state: createState("") },
    { placeholder: "Endereço", type: "text", state: createState("") },
    { placeholder: "Telefone", type: "text", state: createState("") },
    { placeholder: "Email", type: "text", state: createState("") },
    { placeholder: "Senha", type: "password", state: createState("") },
  ];
  const send = async () => {
    try {
      const response = await axios.post("/api/auth/register",
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
        router.push("/login");
      }
    } catch(e) {
      router.push("/error?message=invalid request");
    }
  };

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
