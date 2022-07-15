import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { createState } from "../../utils/state";
import Button from "../button";
import Input from "../input";
import Modal from "../modal";

interface Props {
  qrCode: string;
  image: string;
  title: string;
  id: string;
}

export default function Ticket({ qrCode, image, title, id }: Props) {
  const router = useRouter();
  const transfertTicketInput = {
    placeholder: "Email para transferir o rolê",
    type: "email",
    state: createState(""),
    ready: false,
  };

  const transfer = async () => {
    try {
      const response = await axios.post("/api/user/transfer", {
        id: id,
        newEmail: transfertTicketInput.state.value,
      });
      console.log({id: id,
        newEmail: transfertTicketInput.state.value});
      console.log(response);

      if (response.status === 200) {
        router.reload();
      }
    } catch(e) {
      modal.showModal(`Erro: ${e.response.data.error}`);
    }
  }

  const transferTicketElemet = (
    <>
      <div>
        <div>Transferir ticket</div>
        <div>
          <Input {...transfertTicketInput} focusColor="black" />
        </div>
        <div>
          <Button label="Transferir" color="green" click={() => {
            transfer();
          }} />
        </div>
      </div>
    </>
  );
  const modal = Modal();

  useEffect(() => {
    modal.setModalText(transferTicketElemet);

  }, [transfertTicketInput.state.value]);

  return (
    <div className="flex flex-row gap-8">
      <div>
        <img className="border" src={qrCode} />
      </div>
      <div className="grow flex flex-col">
        <div
          className="bg-center bg-local bg-cover flex flex-col justify-center items-center text-4xl h-48"
          style={{ backgroundImage: `url("${image}")` }}
        />
        <div className="text-center font-bold text-4xl self-center justify-self-center">
          {title}
        </div>
        <div></div>
        <div className="self-end justify-self-end">
          <Button
            label="Fazer transferência"
            click={() => {
              transfertTicketInput.ready = true;
              modal.showModal(transferTicketElemet);
            }}
          />
        </div>
      </div>
      {modal.element}
    </div>
  );
}
