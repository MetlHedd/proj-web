import { useEffect, useState } from "react";
import Button from "../button";

export default function Modal() {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");

  let element = <></>;

  if (visible) {
    element = (
      <div className="fixed break-all inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <div className="flex flex-col justify-center items-center">
            <div>{text}</div>
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

  const showModal = (text: any) => {
    setText(text);
    setVisible(true);
  };

  const setModalText = (text: any) => {
    setText(text);
  }

  return {
    element,
    showModal,
    setModalText,
  };
}
