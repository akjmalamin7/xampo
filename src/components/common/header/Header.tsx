import ArrowIcon from "@/assets/icons/arrowIcon/ArrowIcon";
import CartIcon from "@/assets/icons/cartIcon";
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
      <div className="header-section h-[88px] border-b flex items-center">
        <Container>
          <div className="header grid grid-cols-12">
            <div className="col-span-3">
              <Link to={"/"}>
                <img src={IMG} alt="logo" />
              </Link>
            </div>
            <div className="col-span-9 flex items-center justify-end">
              <div className="menu hidden md:block">
                <ul className="flex items-center gap-[24px] mr-[24px]">
                  <li>
                    <Link to={"#"} className="flex items-center gap-[8px]">
                    <GenericText color="text-5" size="lg" fontWeight="regular">Exam Packages</GenericText>
                    <ArrowIcon rotate="right" size="sm" style={{width:"14px"}} />
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="flex items-center">
                    <GenericText color="text-5" size="lg" fontWeight="regular">Free Test</GenericText>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="cart_area  h-[40px] border-l-2 border-l-customcolor-250">
                <Button type="text">
                  <CartIcon/>
                </Button>
              </div>
              <div className="avatar_area h-[40px] pl-[24px] border-l-2 border-l-customcolor-250 ">
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
