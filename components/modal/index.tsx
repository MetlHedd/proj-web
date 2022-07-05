import { useEffect, useState } from "react";
import Button from "../button";

interface Props {
  children: any;
  toggle: number;
}

export default function Modal({ children, toggle }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    if (toggle > 0) {
      setVisible(true);
      console.log("aaa");
    }
  }, [toggle]);

  if (!visible) {
    return <></>;
  }

  return (
    <div className="fixed break-all inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="flex flex-col justify-center items-center">
          <div>{children}</div>
          <div>
            <div>
              <Button
                label="Fechar"
                click={() => {
                  setVisible(false);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
