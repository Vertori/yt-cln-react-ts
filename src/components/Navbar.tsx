import { Link } from "react-router-dom";
import ytLogo from "../assets/yt-icon.png";
import Searchbar from "./SearchBar";

const Navbar = (): JSX.Element => {
  return (
    <nav className="w-full h-[90px] bg-[#000] flex justify-between items-center sticky top-0 py-4 px-6">
      <Link to="/">
        <img className="w-[60px]" src={ytLogo} alt="YouTube Logo" />
      </Link>
      <Searchbar />
    </nav>
  );
};

export default Navbar;
