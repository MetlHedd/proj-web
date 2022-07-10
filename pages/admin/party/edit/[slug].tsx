import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../../../../components/button";
import Input from "../../../../components/input";
import Modal from "../../../../components/modal";
import { createState } from "../../../../utils/state";

function InputDiv({ placeholder, type, state, disabled }: any) {
  return (
    <div className="flex flex-col gap-2 grow">
      <div className="text-white text-xl">{placeholder}:</div>
      <div>
        <Input placeholder={placeholder} type={type} state={state} disabled={disabled} />
      </div>
    </div>
  );
}

export default function Edit() {
  const router = useRouter();
  const inputs = [
    {
      placeholder: "Nome do rolê",
      type: "text",
      state: createState(""),
      disabled: true,
    },
    {
      placeholder: "Descricao do rolê",
      type: "text",
      state: createState(""),
    },
    {
      placeholder: "Imagem do rolê",
      type: "text",
      state: createState(""),
    },
    {
      placeholder: "Tags (separada por virgula)",
      type: "text",
      state: createState(""),
    },
    {
      placeholder: "Lineup (separada por virgula)",
      type: "text",
      state: createState(""),
    },
    {
      placeholder: "Data",
      type: "date",
      state: createState(""),
    },
    {
      placeholder: "Horário",
      type: "text",
      state: createState(""),
    },
    {
      placeholder: "Local",
      type: "text",
      state: createState(""),
    },
    {
      placeholder: "Preço",
      type: "number",
      state: createState(""),
    },
    {
      placeholder: "Tickets disponíveis",
      type: "text",
      state: createState(""),
    },
  ];
  const [modalToggle, setModalToggle] = useState(0);
  const [requestError, setRequestError] = useState("");

  const send = async () => {
    try {
      const response = await axios.post("/api/party/edit", {
        name: inputs[0].state.value,
        description: inputs[1].state.value,
        image: inputs[2].state.value,
        tags: inputs[3].state.value,
        lineup: inputs[4].state.value,
        date: inputs[5].state.value,
        hours: inputs[6].state.value,
        address: inputs[7].state.value,
        price: inputs[8].state.value,
        ticketsAvalaible: inputs[9].state.value,
      });

      router.push(`/party/${response.data.data.name}`);
    } catch (e) {
      setRequestError(JSON.stringify(e.response.data));
      setModalToggle(new Date().getTime());
    }
  };

  useEffect(() => {
    const asyncFunc = async () => {
      if (!router.isReady) {
        return;
      }

      try {
        const response = await axios.post("/api/party/get", {
          name: router.query.slug,
        });

        inputs[0].state.set(response.data.data.name);
        inputs[1].state.set(response.data.data.description);
        inputs[2].state.set(response.data.data.image);
        inputs[3].state.set(response.data.data.tags);
        inputs[4].state.set(response.data.data.lineup);
        inputs[5].state.set(response.data.data.date);
        inputs[6].state.set(response.data.data.hours);
        inputs[7].state.set(response.data.data.address);
        inputs[8].state.set(response.data.data.price);
        inputs[9].state.set(response.data.data.ticketsAvalaible);
      } catch(e) {
        router.push("/");
      }
    }

    asyncFunc();
  }, [router.isReady]);

  return (
    <div className="flex flex-col justify-center items-center p-8 w-full">
      <div className="p-8 flex flex-col gap-4 w-full">
        <div className="text-white text-4xl text-center">Editar rolê</div>
        <div className="flex flex-row w-full gap-12">
          <InputDiv {...inputs[0]} />
          <InputDiv {...inputs[1]} />
          <InputDiv {...inputs[2]} />
        </div>
        <div className="flex flex-row w-full gap-12">
          <InputDiv {...inputs[3]} />
          <InputDiv {...inputs[4]} />
        </div>
        <div className="flex flex-row w-full gap-12">
          <InputDiv {...inputs[5]} />
          <InputDiv {...inputs[6]} />
          <InputDiv {...inputs[7]} />
        </div>
        <div className="flex flex-row w-full gap-12">
          <InputDiv {...inputs[8]} />
          <InputDiv {...inputs[9]} />
        </div>
        <div className="text-xl font-bold self-center justify-self-center">
          <Button label="Adicionar" click={send} />
        </div>
      </div>
      <Modal toggle={modalToggle}>
        {requestError}
      </Modal>
    </div>
  );
}
