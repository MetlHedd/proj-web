import Link from "next/link";

interface Props {
  label: string;
  link?: string;
  type?: "div" | "span";
  className?: string;
  color?: string;
}

function Element({ label, type, className, color }: Props) {
  let elementClass = "text-white justify-center p-2 rounded my-2 cursor-pointer border-b-4 transition text-center";
  elementClass += ` bg-purple-600 hover:bg-purple-700 border-purple-900`;

  if (type === "span") {
    return <span className={elementClass}>{label}</span>;
  }

  return <div className={elementClass}>{label}</div>;
}

export default function Button({ label, link, type, className, color }: Props) {
  const element = (
    <Element label={label} type={type} className={className} color={color} />
  );

  if (link) {
    return (
      <Link href={link}>
        <a>{element}</a>
      </Link>
    );
  }

  return element;
}
