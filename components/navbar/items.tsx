import Link from "next/link";

interface Props {
  items: NavItem[];
}

export interface NavItem {
  label: string;
  url: string;
}

export default function Items({ items }: Props) {
  return (
    <>
      {items.map((item: NavItem) => {
        return (
          <div className="grow p-4" key={`${item.label}-${item.url}`}>
            <Link href={item.url}>
              <span className="hover:underline cursor-pointer border-b-2 border-t-2 border-pink-200 rounded p-2 hover:border-pink-400">
                {item.label}
              </span>
            </Link>
          </div>
        );
      })}
    </>
  );
}
