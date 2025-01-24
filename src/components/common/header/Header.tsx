import ArrowIcon from "@/assets/icons/arrowIcon/ArrowIcon";
import CartIcon from "@/assets/icons/cartIcon";
import HamburgerIcon from "@/assets/icons/hamburgerIcon";
import AVATAR_IMG from "@/assets/images/avatar.png";
import IMG from "@/assets/images/logo.png";
import Avatar from "@/shared/ui/avatar";
import Button from "@/shared/ui/button";
import GenericText from "@/shared/ui/genericText";
import { Link } from "react-router-dom";
import Container from "../container";
const Header = () => {
  return (
    <header>
      <div className="bg-customcolor-100 h-[60px] md:h-[70px] lg:h-[88px] flex items-center">
        <Container>
          <div className="header grid grid-cols-12">
            {/* @____# logo #______@ */}
            <div className="col-span-3">
              <Link to={"/"}>
                <img src={IMG} alt="logo" className="h-[40px] md:h-[48px] lg:h-[66px]" />
              </Link>
            </div>
            {/* @____# Menu #______@ */}
            <div className="col-span-9 flex items-center justify-end">
              <div className="menu hidden lg:block">
                <ul className="flex items-center gap-[24px] mr-[24px]">
                  <li>
                    <Link to={"#"} className="flex items-center gap-[8px]">
                      <GenericText color="text-5" size="lg" fontWeight="regular">
                        Exam Packages
                      </GenericText>
                      <ArrowIcon
                        rotate="right"
                        size="sm"
                        style={{ width: "14px" }}
                        className="mt-[0px]"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="flex items-center">
                      <GenericText color="text-5" size="lg" fontWeight="regular">
                        Free Test
                      </GenericText>
                    </Link>
                  </li>
                </ul>
              </div>
              {/*@______# Cart #______@ */}
              <div className=" lg:h-[40px] pr-[16px] lg:pr-[24px] lg:pl-[24px] lg:border-l-2 lg:flex lg:items-center border-l-customcolor-250">
                <Button type="text" customClass="relative pl-0 pr-0">
                  <CartIcon className="w-[22px] lg:w-[33px] lg:h-[28px]" />
                  <span className="bg-customcolor-700 text-[11px] absolute text-customcolor-500 w-[16px] h-[16px] rounded-full  right-[-5px] top-[0px]">
                    0
                  </span>
                </Button>
              </div>
              {/* @_____# Hamburger icon #______@ */}
              <div className="h-[20px] flex lg:hidden pl-[0px] border-l-2 border-l-customcolor-250 ">
                <Button type="text" customClass="pl-[16px] pr-0">
                  <HamburgerIcon />
                </Button>
              </div>
              {/* @____# Avatar #______@ */}
              <div className="hidden lg:block h-[30px] lg:h-[40px] pl-[24px] border-l-2 border-l-customcolor-250">
                <Avatar name="Esther" url={AVATAR_IMG} />
              </div>
            </div>
          </div>
        </Container>
      </div>
       
    </header>
  );
};

export default Header;
