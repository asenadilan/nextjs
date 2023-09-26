import Logo from "./ui/Logo";
import { BiSolidUser } from "react-icons/bi";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div className="h-[5.5rem] bg-secondary ">
      <div
        className="container mx-auto text-white flex 
      justify-between h-full items-center"
      >
        <div>
          <Logo />
        </div>
        <nav>
          <ul className="flex gap-x-2 ">
            <li
              className="px-[0.313rem] py-[0.625rem] font-sans uppercase 
            hover:text-primary cursor-pointer"
            >
              <a href="">Home</a>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] font-sans uppercase hover:text-primary cursor-pointer ">
              <a href="">Menu</a>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] font-sans uppercase hover:text-primary cursor-pointer ">
              <a href="">About</a>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] font-sans uppercase hover:text-primary cursor-pointer">
              <a href="">Book Table</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-4 items-center">
          <a href="">
            <BiSolidUser />
          </a>
          <a href="">
            <FaShoppingCart />
          </a>
          <a href="">
            <FaSearch />
          </a>
          <a href=""> <button className="btn-primary">Order Online</button></a>
        </div>
      </div>
    </div>
  );
};
export default Header;
