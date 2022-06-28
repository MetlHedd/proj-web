interface Props {
  title: string;
  description: string;
}

export default function Categoria({ title, description }: Props) {
  return (
    <div
      className="flex justify-between text-white text-xl text-center p-8 rounded-full w-40 h-40"
      style={{ backgroundColor: "#5E17EB" }}
    >
      <div className="grow flex justify-center items-center flex-col">
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
}
