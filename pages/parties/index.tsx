import Party from "../../components/party";

const parties = [
  {
    image: "./images/main_event.png",
    link: "/party/1",
  },
  {
    image: "./images/main_event.png",
    link: "/party/1",
  }
];

export default function Index() {
  return (
    <>
      {
        parties.map((item) => {
          return (
            <Party {...item} />
          )
        })
      }
    </>
  );
}
