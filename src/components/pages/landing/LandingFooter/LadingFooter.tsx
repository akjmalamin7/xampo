import LocationIcon from "@/assets/icons/locationIcon";
import MailIcon from "@/assets/icons/mailIcon";
import LOGO from "@/assets/images/logoForFooter.png";
import MAAC_LOGO from "@/assets/images/MAAC.png";
import PAYMENT_GETWAY from "@/assets/images/paymentGetway.png";
import FooterSocket from "@/components/common/footerSocket/FooterSocket";
import GenericText from "@/shared/ui/genericText";
import { Link } from "react-router-dom";
import Container from "../../../common/container";
const LadingFooter = () => {
  return (
    <footer>
      <div className="bg-customcolor-500 pt-[50px] pb-[30px] lg:pt-[95px] lg:pb-[45px] border-b border-b-[#253642]">
        <Container width="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[35px]">
            <div className="col-span-4">
              <div className="mb-[18px] lg:mb-[28px]">
                <img src={LOGO} alt="Logo" />
              </div>
              <GenericText size="2xl" color="text-1" fontWeight="regular">
                Need a solution for mockup exams? Or perhaps exam supervision? Xampro Is the answer.
              </GenericText>
            </div>
            <div className="col-span-5">
              <div className="mb-[18px] lg:mb-[28px]">
                <GenericText size="3xl" fontWeight="bold" color="text-1">
                  Get in touch
                </GenericText>
              </div>
              <ul className="flex flex-col gap-y-[12px] lg:gap-y-[18px]">
                <li className="flex gap-[12px]">
                  <div className="flex items-start">
                    <LocationIcon />
                  </div>
                  <GenericText size="2xl" fontWeight="regular" color="text-1">
                    Registered Address: Ta-143/A, Moddho Badda (3rd Floor), Gulshan, Badda,
                    Dhaka-1212
                  </GenericText>
                </li>
                <li className="flex gap-[12px]">
                  <div className="flex items-start">
                    <LocationIcon />
                  </div>
                  <GenericText size="2xl" fontWeight="regular" color="text-1">
                    House 15, Road24, Gulshan- 2Dhaka-1212
                  </GenericText>
                </li>
                <li className="flex gap-[12px]">
                  <div className="flex items-start">
                    <MailIcon />
                  </div>
                  <GenericText size="2xl" fontWeight="regular" color="text-1">
                    <Link to="mailto:solutionmaac@gmail.com">solutionmaac@gmail.com</Link>
                  </GenericText>
                </li>
              </ul>
            </div>
            <div className="col-span-3 ">
              <div className="mb-[18px] lg:mb-[28px]">
                <GenericText size="3xl" fontWeight="bold" color="text-1">
                  Want Some Insights?
                </GenericText>
              </div>
              <div className="flex mb-[10px]">
                <img src={MAAC_LOGO} alt="Maac logo" />
              </div>
              <GenericText size="2xl" fontWeight="regular" color="text-1">
                Insights
              </GenericText>
            </div>
          </div>
          <div className="flex justify-center mt-[30px] lg:[65px]">
            <img src={PAYMENT_GETWAY} alt="payment getaway" className="w-full" />
          </div>
        </Container>
      </div>
      <FooterSocket />
    </footer>
  );
};

export default LadingFooter;
