import { FC } from "react";
import logo from "../assets/Nidec-All-For-Dreams.svg";
import { Grid8 } from "iconsax-react";
import mexico from "../assets/flag-round-500.png";

const Header: FC = () => {
  return (
    <div className="h-24 border-b flex justify-between px-16 bg-black items-center">
      <div className="flex items-center gap-8 w-1/3">
        <img src={logo} className="w-32" />
        <span className="w-fit text-nidec-green font-semibold flex">
          <Grid8 className="bg-black mr-2" color="#ffff" size={24} />
          Indicadores
        </span>
      </div>
      <div className="w-1/3 flex justify-center">
        <h1 className="text-white font-bold text-3xl">PRE ENSAMBLE ES</h1>
      </div>
      <div className="flex items-center w-1/3 justify-end">
        <img
          className="bg-nidec-green w-8 h-8 rounded-full bg-hoverTextSidebar"
          src={mexico}
          width="12"
          height="12"
          alt="User"
        />
        <span className="text-white font-semibold truncate ml-2 text-sm group-hover:text-hoverTextSidebar">
          MÉXICO
        </span>
      </div>
    </div>
  );
};

export default Header;
