interface Props {
  placeholder: string;
  type: string;
}

export default function Input({ placeholder, type }: Props) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="p-2 rounded border-b-4 border-purple-600"
      />
    </div>
  );
}