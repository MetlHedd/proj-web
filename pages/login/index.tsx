import Button from "../../components/button";
import Input from "../../components/input";

const inputs = [
  {
    placeholder: "Email",
    type: "text",
  },
  {
    placeholder: "Senha",
    type: "text",
  },
];

export default function Index() {
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
          <Button label="Login" />
        </div>
      </div>
    </div>
  );
}
