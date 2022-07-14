import { useEffect, useState } from "react";
import Items, { NavItem } from "./items";
import Logo from "./logo";
import axios from "axios";
import { checkIsAdmin } from "../../utils/isAdmin";
import { checkIfisLogged } from "../../utils/logged";

const defaultLeftItems: NavItem[] = [
  {
    label: "Inicio",
    url: "/",
  },
  {
    label: "Rolês",
    url: "/parties",
  },
];
const defaultRightItems: NavItem[] = [
  {
    label: "Login",
    url: "/login",
  },
  {
    label: "Cadastre-se",
    url: "/client/register",
  },
];
const loggedInRightItems: NavItem[] = [
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
  {
    label: "Sair da conta",
    url: "/api/auth/logout",
  },
];
const adminRightItems: NavItem[] = [
  {
    label: "Gestão de Usuários",
    url: "/admin/user",
  },
];

async function getNavbarItems(setRightItems: Function) {
  if (await checkIsAdmin()) {
    setRightItems([...adminRightItems, ...loggedInRightItems]);
  } else if (await checkIfisLogged()) {
    setRightItems(loggedInRightItems);
  } else {
    setRightItems(defaultRightItems);
  }
}

function Section({ items }) {
  return (
    <div className="grow flex flex-col">
      <div className="px-6 grow flex text-center">
        <Items items={items} />
      </div>
      <div className="border-b-2 h-2 rounded border-pink-400"></div>
    </div>
  );
}

export default function Navbar() {
  const [leftItems, setLeftItems] = useState(defaultLeftItems);
  const [rightItems, setRightItems] = useState(defaultRightItems);

  useEffect(() => {
    getNavbarItems(setRightItems);
  }, []);

  return (
    <nav className="text-white p-3 flex gap-8 justify-between items-center w-full">
      <Section items={leftItems} />
      <Logo />
      <Section items={rightItems} />
    </nav>
  );
}
