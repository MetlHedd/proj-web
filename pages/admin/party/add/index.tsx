import Button from "../../../../components/button";

export default function Add() {
  return (
    <div className="flex flex-col justify-center items-center p-8 w-full">
      <div className="p-8 flex flex-col gap-4 w-full">
        <div className="text-white text-4xl text-center">Adicionar rolê</div>
        <div className="border border-dashed w-32 h-32 text-white font-bold text-xl rounded-full flex self-center justify-self-center">
          <div className="self-center justify-self-center grow text-center">
            Adicionar foto
          </div>
        </div>
        <div className="flex flex-row w-full gap-12">
          <div className="flex flex-col gap-2 grow">
            <div className="text-white text-xl">Nome do rolê:</div>
            <div>
              <input
                type="text"
                placeholder="Nome"
                className="p-2 rounded border-2 w-full"
                style={{ borderColor: "#5e17eb" }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 grow">
            <div className="text-white text-xl">Descricao do role:</div>
            <div>
              <input
                type="text"
                placeholder="Descricao"
                className="p-2 rounded border-2 w-full"
                style={{ borderColor: "#5e17eb" }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full gap-12">
          <div className="flex flex-col gap-2 grow">
            <div className="text-white text-xl">Tags:</div>
            <div>
              <input
                type="text"
                placeholder="Nome"
                className="p-2 rounded border-2 w-full"
                style={{ borderColor: "#5e17eb" }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 grow">
            <div className="text-white text-xl">Data:</div>
            <div>
              <input
                type="text"
                placeholder="Descricao"
                className="p-2 rounded border-2 w-full"
                style={{ borderColor: "#5e17eb" }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 grow">
            <div className="text-white text-xl">Local:</div>
            <div>
              <input
                type="text"
                placeholder="Descricao"
                className="p-2 rounded border-2 w-full"
                style={{ borderColor: "#5e17eb" }}
              />
            </div>
          </div>
        </div>
        <div className="text-xl font-bold self-center justify-self-center">
          <Button label="Adicionar" />
        </div>
      </div>
    </div>
  );
}
