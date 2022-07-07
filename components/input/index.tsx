import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  placeholder: string;
  type: string;
  state: State;
}

interface State {
  value: string;
  set: Dispatch<SetStateAction<string>>;
}

export default function Input({ placeholder, type, state }: Props) {
  const [focused, setFocues] = useState(false);

  const handleInputUpdate = (event) => {
    state.set(event.target.value);
  };

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="p-2 rounded border-b-4 border-purple-600 w-full focus:outline-none focus:ring"
        value={state.value}
        onChange={handleInputUpdate}
        onFocus={() => setFocues(true)}
        onBlur={() => setFocues(false)}
      />
      {(() => {
        if (focused) {
          return <span className="text-white font-bold">{placeholder}</span>;
        }

        return <></>;
      })()}
    </div>
  );
}
