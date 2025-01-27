import FacebookIcon from "@/assets/icons/facebookIcon";
import GoogleIcon from "@/assets/icons/googleIcon";
import LOGO from "@/assets/images/logo.png";
import Button from "@/shared/ui/button";
import GenericText from "@/shared/ui/genericText";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
type ActiveFormType = "login" | "registration";
interface AuthFrameProps {
  formTitle?: string;
  children?: React.ReactNode;
}
const AuthFrame = ({ formTitle, children }: AuthFrameProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeForm, setActiveForm] = useState<ActiveFormType>("login");

  // Update activeForm based on the route
  useEffect(() => {
    if (location.pathname === "/login") {
      setActiveForm("login");
    } else if (location.pathname === "/registration") {
      setActiveForm("registration");
    }
  }, [location.pathname]); // Runs whenever the route changes

  const handleActiveForm = (value: ActiveFormType) => {
    setActiveForm(value);
    if (value === "login") {
      navigate("/login");
    } else if (value === "registration") {
      navigate("/registration");
    }
  };
  return (
    <div className="flex w-full pt-[40px]">
      <div className="max-w-[448px] w-full mx-auto px-[20px]">
        {/* Logo */}
        <div>
          <div className="flex justify-center lg:justify-end mb-6">
            <img src={LOGO} alt="logo" />
          </div>

          {/* Buttons */}
          <div className="flex">
            {/* Login Button */}
            <Button
              variant={activeForm === "login" ? "primary" : "tertiary"}
              size="size-5"
              width="full"
              customClass="font-regular"
              onClick={() => handleActiveForm("login")}
            >
              <GenericText
                size="xlg"
                fontWeight="regular"
                color={activeForm === "login" ? "text-1" : "text-5"}
              >
                Login
              </GenericText>
            </Button>

            {/* Registration Button */}
            <Button
              variant={activeForm === "registration" ? "primary" : "tertiary"}
              size="size-5"
              width="full"
              customClass="font-regular"
              onClick={() => handleActiveForm("registration")}
            >
              <GenericText
                size="xlg"
                fontWeight="regular"
                color={activeForm === "registration" ? "text-1" : "text-5"}
              >
                Registration
              </GenericText>
            </Button>
          </div>
        </div>
        <div>
          {/* title */}
          <div className="mt-[20px] lg:mt-[30px]">
            <GenericText elementType="h1" size="9xl" color="text-5" fontWeight="bold">
              {formTitle}
            </GenericText>
          </div>
          {/* Children */}
          {children}
        </div>
        <div>
        <div className="flex flex-col items-center mt-[16px] lg:mt-[30px] mb-[16px] lg:mb-[20px] gap-[8px]">
          <GenericText size="md" fontWeight="regular" color="text-5">
          Need to create a account? <Link className="text-customcolor-750" to={activeForm === "login" ?"/registration":"/login"}>{activeForm === 'login'?"Sign Up":"Sign in"}</Link>
          </GenericText>
        <GenericText size="md" fontWeight="regular" className="text-[#4E4B66]" textAlign="center" >Or</GenericText>
        </div>
        </div>
        <div className="flex flex-col md:flex-row  gap-[12px] md:gap-[28px]">
          <Button
            type="outline"
            variant="secondary"
            width="full"
            customClass="border border-[#D0D5DD] font-regular"
          >
            <GoogleIcon />
            <GenericText size="md" fontWeight="regular">
              Google
            </GenericText>
          </Button>
          <Button
            type="outline"
            variant="secondary"
            width="full"
            customClass="border border-[#D0D5DD] font-regular rounded-[]"
            
          >
            <FacebookIcon />
            <GenericText size="md" fontWeight="regular" color="text-6">
              Facebook
            </GenericText>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthFrame;
