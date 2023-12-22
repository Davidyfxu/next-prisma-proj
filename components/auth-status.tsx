import { getServerSession } from "next-auth/next";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";

export default async function AuthStatus() {
  const session = await getServerSession();
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">SYY</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/christmas">
            Christmas
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/" aria-current="page" color="secondary">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/protected">
            TodoList
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {session ? (
          <p className="text-inherit">{session.user?.email}</p>
        ) : (
          <NavbarItem className="hidden lg:flex">
            <Link href="/">Login</Link>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
}
