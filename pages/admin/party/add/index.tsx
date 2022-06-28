import { useState } from "react";
import Button from "../../../../components/button";
import Input from "../../../../components/input";
import { createState } from "../../../../utils/state";

function ChangeImage({ image }: { image: string }) {
  if (image !== "") {
    return (
      <div
        className="border border-dashed w-32 h-32 text-white font-bold text-xl rounded-full flex self-center justify-self-center cursor-pointer bg-cover"
        style={{ backgroundImage: `url("${image}")` }}
      >
        <div className="self-center justify-self-center grow text-center">
          Editar foto
        </div>
      </div>
    );
  }

  return (
    <div className="border border-dashed w-32 h-32 text-white font-bold text-xl rounded-full flex self-center justify-self-center cursor-pointer hover:bg-purple-600">
      <div className="self-center justify-self-center grow text-center">
        Adicionar foto
      </div>
    </div>
  );
}

function InputDiv({ placeholder, type, state }) {
  return (
    <div className="flex flex-col gap-2 grow">
      <div className="text-white text-xl">{placeholder}:</div>
      <div>
        <Input placeholder={placeholder} type={type} state={state} />
      </div>
    </div>
  );
}

export default function Add() {
  const [eventImage, setEventImage] = useState("");
  const inputs = [
    {
      placeholder: "Nome do rolê",
      type: "text",
      state: createState(""),
    },
    {
      placeholder: "Descricao do rolê",
      type: "text",
      state: createState(""),
    },
    {
      placeholder: "Tags (separada por virgula)",
      type: "text",
      state: createState(""),
    },
    {
      placeholder: "Data",
      type: "date",
      state: createState(""),
    },
    {
      placeholder: "Local",
      type: "text",
      state: createState(""),
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center p-8 w-full">
      <div className="p-8 flex flex-col gap-4 w-full">
        <div className="text-white text-4xl text-center">Adicionar rolê</div>
        <ChangeImage image={eventImage} />
        <div className="flex flex-row w-full gap-12">
          <InputDiv {...inputs[0]} />
          <InputDiv {...inputs[1]} />
        </div>
        <div className="flex flex-row w-full gap-12">
          <InputDiv {...inputs[2]} />
          <InputDiv {...inputs[3]} />
          <InputDiv {...inputs[4]} />
        </div>
        <div className="text-xl font-bold self-center justify-self-center">
          <Button label="Adicionar" />
        </div>
      </div>
    </div>
  );
}
