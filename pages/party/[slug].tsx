import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../../components/button";

export default function Party() {
  const router = useRouter();
  
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [lineup, setLineup] = useState([]);
  const [hours, setHours] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const asyncFunc = async () => {
      if (!router.isReady) {
        return;
      }

      try {
        const response = await axios.post("/api/party/get", {
          name: router.query.slug,
        });

        setImageUrl(response.data.data.image);
        setTitle(response.data.data.name);
        setTags(response.data.data.tags.split(","));
        setLineup(response.data.data.lineup.split(","));
        setHours(response.data.data.hours);
        setDate(response.data.data.date);
        setPrice(response.data.data.price);
      } catch(e) {
        router.push("/");
      }
    }

    asyncFunc();
  }, [router.isReady]);

  return (
    <>
      <div
        className="bg-center bg-cover bg-local justify-center items-center h-96"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      />
      <div className="px-32 py-4 mx-auto bg-white">
        <div>
          <h2 className="text-center text-4xl font-bold">{title}</h2>
          <div className="flex flex-row">
            <div className="grow my-4" style={{ color: "#e61997" }}>
              <ul>
                {tags.map((tag) => {
                  return <li key={`tag-${tag}`}>{tag}</li>;
                })}
              </ul>
            </div>
            <div className="my-4" style={{ color: "#e61997" }}>
              <ul>
                {lineup.map((artist) => {
                  return <li key={`lineup-${artist}`}>{artist}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="py-4">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="flex flex-row">
            <div className="grow">
              <div>{hours}</div>
              <div>{date}</div>
            </div>
            <div>
              <h2 className="font-bold text-4xl">${price}</h2>
              <div>
                <Button label="Comprar" link="/client/cart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
