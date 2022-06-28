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
          <div className="grow" key={`${item.label}-${item.url}`}>
            <Link href={item.url}>
              <span className="hover:underline cursor-pointer">
                {item.label}
              </span>
            </Link>
          </div>
        );
      })}
    </>
  );
}
