import Link from "next/link";
import CartButton from "./cart-button";

const Menu = () => {
  return (
    <div className="flex justify-end">
      <nav className="md:flex gap-3 hidden w-full">
        <Link href="/signin" className="flex items-center header-button">
          Hello, Sign In
        </Link>

        <CartButton />
      </nav>
    </div>
  );
};

export default Menu;
