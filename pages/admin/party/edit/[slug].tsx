import Button from "../../../../components/button";

export default function Edit() {
  return (
    <div className="grow flex flex-col justify-center items-center p-8 w-full">
      <div className="p-8 flex flex-col gap-4 w-full">
        <div className="text-white text-4xl text-center">Editar rolê</div>
        <div className="border border-dashed h-48 w-full text-white font-bold text-xl flex self-center justify-self-center">
          <div
            className="bg-center bg-local bg-cover flex flex-col justify-center items-center text-4xl h-48 grow cursor-pointer"
            style={{ backgroundImage: 'url("/images/main_event.png")' }}
          />
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
          <Button label="Editar" />
        </div>
      </div>
    </div>
  );
}
