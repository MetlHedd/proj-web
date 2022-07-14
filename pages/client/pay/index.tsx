import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Button from "../../../components/button";
import Modal from "../../../components/modal";
import createCart from "../../../utils/cart";
import { checkIfisLogged } from "../../../utils/logged";
import onlyAccesIfLoggedIn from "../../../utils/onlyLogged";

export default function Index() {
  const router = useRouter();
  const cart = createCart();
  const modal = Modal();

  onlyAccesIfLoggedIn();

  const send = async () => {
    try {
      const response = await axios.post("/api/cart/send", {
        ...cart.getCart(),
      });
  
      if (response.status === 200) {
        cart.handleClear();
        router.push("/client/tickets");
      }
    } catch(e) {
      modal.showModal(`Erro encontrado: ${e.response.data.error}`);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="p-8 h-fit">
        <div className="text-center">
          <h2 className="font-bold text-4xl mb-4 text-white font-serif">
            Pagamento
          </h2>
        </div>
        <div className="text-white font-serif">
          <p>
            Utilize o QRCode abaixo para pagar com pix!
          </p>
        </div>
        <div className="flex flex-col gap-4 text-center p-2 border bg-white">
          <img src="https://chart.googleapis.com/chart?cht=qr&chl=SOON&chs=240x240&choe=UTF-8&chld=L|2" />
        </div>
        <div className="justify-center items-center flex">
          <Button label="Confirmar pagamento" click={() => {
            send();
          }} color="green" />
        </div>
      </div>
      {modal.element}
    </div>
  );
}
