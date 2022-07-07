import axios from "axios";
import { useEffect, useState } from "react";
import Party from "../../components/party";

export default function Index() {
  const [parties, setParties] = useState([]);

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const response = await axios.post("/api/party/getAll");
        const receivedData = [];

        for (const party of response.data.data) {
          receivedData.push({
            image: party.image,
            link: `/party/${party.name}`,
          });
        }

        setParties(receivedData);
      } catch (e) {}
    };

    asyncFunc();
  }, []);

  return (
    <>
      {parties.map((item) => {
        return <Party {...item} />;
      })}
    </>
  );
}
