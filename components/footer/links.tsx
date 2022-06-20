import Link from "next/link";

interface Link {
  href: string;
  label: string;
}

interface Props {
  links: Link[];
  title: string;
}

export default function Links({ links, title }: Props) {
  return (
    <div>
      <div className="font-bold">{title.toUpperCase()}</div>
      <div>
        {links.map((link: Link) => {
          return (
            <div key={`${link.label}-${link.href}`}>
              <Link href={link.href}>
                <span className="cursor-pointer hover:underline">
                  {link.label.toUpperCase()}
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
