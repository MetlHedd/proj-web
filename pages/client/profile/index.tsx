import Button from "../../../components/button";
import Input from "../../../components/input";

const inputs = [
  { placeholder: "Nome", type: "text" },
  { placeholder: "CPF", type: "text" },
  { placeholder: "Data de nascimento", type: "text" },
  { placeholder: "Endereço", type: "text" },
  { placeholder: "Telefone", type: "text" },
  { placeholder: "Email", type: "text" },
  { placeholder: "Senha", type: "password" },
];

export default function Index() {
  return (
    <div className="flex justify-center items-center">
      <div className="p-8 h-fit">
        <div className="text-center">
          <h2 className="font-bold text-4xl text-white mb-4 font-serif">
            Editar pefil
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {
            inputs.map((input, index) => (
              <Input key={index} {...input} />
            ))
          }
        </div>
        <div className="justify-center items-center flex">
          <Button label="Salvar" />
        </div>
      </div>
    </div>
  );
}
