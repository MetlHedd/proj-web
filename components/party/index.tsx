import Link from "next/link";

interface Props {
  image: string;
  link: string;
}

export default function Party({ image, link }: Props) {
  return (
    <div className="p-8">
      <Link href={link}>
        <div
          className="bg-center bg-local bg-cover border-dashed border-2 flex flex-col justify-center items-center text-4xl h-96 event-effect cursor-pointer"
          style={{ backgroundImage: `url("${image}")` }}
        >
          Mostrar mais informações
        </div>
      </Link>
    </div>
  );
}
