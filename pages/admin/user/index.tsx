import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../../../components/button";
import Modal from "../../../components/modal";
import onlyAccesIfLoggedIn from "../../../utils/onlyLogged";

function User({ email, removeFunction }) {
  return (
    <div className="flex flex-row gap-2">
      <div className="self-center text-white font-bold">
        {email}
      </div>
      <div>
        <Button label="Editar" link={`/admin/user/edit/${email}`} />
      </div>
      <div>
        <Button label="Remover" color="red" click={removeFunction} />
      </div>
    </div>
  );
}

export default function Index() {
  const router = useRouter();
  const modal = Modal();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const response = await axios.post("/api/user/getAll");

        setUsers(response.data.data);
      } catch(e) {
        modal.showModal(<>
          <div className="flex flex-col gap-2">
            <div className="text-black font-bold">
              Erro:
            </div>
            <div>
              <code>
                {JSON.stringify(e.response.data, null, 2)}
              </code>
            </div>
          </div>
        </>);
      }
    };

    asyncFunc();
  }, []);

  onlyAccesIfLoggedIn(true);

  const remove = async (email) => {
    try {
      const response = await axios.get("/api/user/remove?email=" + email);

      if (response.status === 200) {
        router.reload();
      }
    } catch(e) {
      modal.showModal(<>
        <div className="flex flex-col gap-2">
          <div className="text-black font-bold">
            Erro:
          </div>
          <div>
            <code>
              {JSON.stringify(e.response.data, null, 2)}
            </code>
          </div>
        </div>
      </>);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="p-8 h-fit">
          <div className="text-center">
            <h2 className="font-bold text-4xl mb-4 text-white font-serif">
              Usuários
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {users.map(user => (
              <User key={user.email} email={user.email} removeFunction={() => {
                remove(user.email);
              }} />
            ))}
          </div>
          <div>
            <Button label="Adicionar novo usuário" link="/admin/user/add" color="green" />
          </div>
        </div>
      </div>
    </>
  );
}
