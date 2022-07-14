import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Links from "./links";

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
  const [parties, setParties] = useState([]);

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const response = await axios.post("/api/party/getAll");
        const receivedData = [];
        let index = 0;

        for (const party of response.data.data) {
          receivedData.push({
            label: party.name,
            href: `/party/${party.name}`,
          });

          index++;

          if (index == 2) {
            break;
          }
        }

        setParties(receivedData);
      } catch (e) {}
    };

    asyncFunc();
  }, []);

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
            <Links title="Principais rolês" links={parties} />
            <Links {...rightLinks} />
          </div>
        </div>
      </div>
    </footer>
  );
}
