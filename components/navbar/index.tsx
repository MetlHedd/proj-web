import Link from "next/link";
import Items from "./items";
import Logo from "./logo";

const leftItems = [
  {
    label: "Inicio",
    url: "/",
  },
  {
    label: "Rolês",
    url: "/parties",
  },
];
const rightItems = [
  {
    label: "Ingressos",
    url: "/client/tickets",
  },
  {
    label: "Minha Conta",
    url: "/client/profile",
  },
  {
    label: "Carrinho",
    url: "/client/cart",
  },
];

function Section({ items }) {
  return (
    <div className="grow flex flex-col">
        <div className="px-6 grow flex text-center">
          <Items items={items} />
        </div>
        <div className="border-b-2 h-2 rounded border-pink-400">
          
        </div>
      </div>
  )
}

export default function Navbar() {
  return (
    <nav className="text-white p-3 flex gap-8 justify-between items-center w-full">
      <Section items={leftItems} />
      <Logo />
      <Section items={rightItems} />
    </nav>
  );
}
