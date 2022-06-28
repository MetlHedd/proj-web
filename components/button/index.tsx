import Link from "next/link";

interface Props {
  label: string;
  link?: string;
  type?: "div" | "span";
  className?: string;
  color?: "red" | "green" | "purple";
  click?: Function;
}

function Element({ label, type, click, color }: Props) {
  const clickFunction = () => {
    console.log("test");
    if (click) {
      click();
    }
  };
  const classes: string[] = [
    "text-white",
    "justify-center",
    "p-2",
    "rounded",
    "my-2",
    "cursor-pointer",
    "border-b-4",
    "transition",
    "text-center",
  ];

  if (color === "red") {
    classes.push(...["bg-red-600", "hover:bg-red-700", "border-red-900"]);
  } else if (color === "green") {
    classes.push(...["bg-green-600", "hover:bg-green-700", "border-green-900"]);
  } else {
    classes.push(
      ...["bg-purple-600", "hover:bg-purple-700", "border-purple-900"]
    );
  }

  if (type === "span") {
    return (
      <span className={classes.join(" ")} onClick={clickFunction}>
        {label}
      </span>
    );
  }

  return (
    <div className={classes.join(" ")} onClick={clickFunction}>
      {label}
    </div>
  );
}

export default function Button({
  label,
  link,
  type,
  className,
  color,
  click,
}: Props) {
  const element = (
    <Element
      label={label}
      type={type}
      className={className}
      color={color}
      click={click}
    />
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
