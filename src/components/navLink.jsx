"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLink = ({ link }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Link
      className={`rounded p-1 ${
        pathname === link.url && "bg-black text-white "
      }`}
      href={link.url}
    >
      <h1>{link.title}</h1>
    </Link>
  );
};

export default NavLink;
