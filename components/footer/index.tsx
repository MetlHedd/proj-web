import Link from "next/link";
import Links from "./links";

const leftLinks = {
  links: [
  {
    href: "/party/1",
    label: "Rolê 1",
  },
  {
    href: "/party/2",
    label: "Rolê 2",
  },
  {
    href: "/party/3",
    label: "Rolê 3",
  }],
  title: "Principais rolês"
};
const rightLinks = {
  links: [
  {
    href: "/parties",
    label: "Ver todos os rolês disponíveis",
  },
  {
    href: "/client/profile",
    label: "Ver a minha conta",
  },
  {
    href: "/client/cart",
    label: "Ver o meu carrinho",
  }],
  title: "Informações"
};

export default function Footer() {
  return (
    <footer className="text-white text-center p-12 bg-black">
      <div className="flex justify-center items-center">
        <div className="basis-1/4">
          <div>
            <Link href="/">
              <span
                className="font-bold text-2xl cursor-pointer"
                style={{ backgroundColor: "#E61997" }}
              >
                ROLE.COM
              </span>
            </Link>
          </div>
          <div>A sua central de rolês!</div>
        </div>
        <div className="grow">
          <div className="flex gap-8 justify-center items-center">
            <Links {...leftLinks} />
            <Links {...rightLinks} />
          </div>
        </div>
      </div>
    </footer>
  );
}
