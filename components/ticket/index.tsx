import Button from "../button";

interface Props {
  qrCode: string;
  image: string;
  title: string;
}

export default function Ticket({ qrCode, image, title }: Props) {
  return (
    <div className="flex flex-row gap-8">
      <div>
        <img
          className="border"
          src={qrCode}
        />
      </div>
      <div className="grow flex flex-col">
        <div
          className="bg-center bg-local bg-cover flex flex-col justify-center items-center text-4xl h-48"
          style={{ backgroundImage: `url("${image}")` }}
        />
        <div className="text-center font-bold text-4xl self-center justify-self-center">
          {title}
        </div>
        <div>
        </div>
        <div className="self-end justify-self-end">
          <Button label="Transferir" />
        </div>
      </div>
    </div>
  );
}
