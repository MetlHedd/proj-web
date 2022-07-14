import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import Modal from "../../components/modal";
import { createState } from "../../utils/state";

export default function Index() {
  const router = useRouter();
  const modal = Modal();
  const inputs = [
    {
      placeholder: "Email",
      type: "email",
      state: createState(""),
    },
    {
      placeholder: "Senha",
      type: "password",
      state: createState(""),
    },
  ];
  const checkIfisLogged = async () => {
    try {
      const response = await axios.get("/api/auth/login");

      if (response.data.data.email) {
        router.push("/");
      }
    } catch (e) {
      // just continue
    }
  };
  const send = async () => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: inputs[0].state.value,
        password: inputs[1].state.value,
      });

      if (response.status === 200) {
        router.reload();
      }
    } catch (e) {
      modal.showModal("Invalid Credentials");
    }
  };

  useEffect(() => {
    checkIfisLogged();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="p-8 h-fit">
        <div className="text-center">
          <h2 className="font-bold text-4xl mb-4 text-white font-serif">
            Login
          </h2>
        </div>
        <div className="text-white font-serif">
          <p>
            Se você já possui um cadastro é só entrar, se não vamos criar seu
            acesso agora!
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {inputs.map((input, index) => (
            <div className="self-center">
              <Input key={index} {...input} />
            </div>
          ))}
        </div>
        <div className="justify-center items-center flex">
          <Button label="Login" click={() => send()} />
        </div>
        {modal.element}
      </div>
    </div>
  );
}
