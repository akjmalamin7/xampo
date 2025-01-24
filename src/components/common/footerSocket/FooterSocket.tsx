import Container from "@/components/common/container";
import GenericText from "@/shared/ui/genericText";
import SocketMenu from "./SocketMenu";
const currentYear = new Date().getFullYear();
const FooterSocket = () => {
  return (
    <div className="bg-customcolor-500 py-[26px]">
      <Container width="lg">
        <div className="flex flex-col items-center gap-y-[16px] lg:flex-row lg:justify-between ">
          <div>
            <GenericText className="text-[14px] lg:text-[15px]" color="text-1" fontWeight="regular">
              &copy; {currentYear} Xampro
            </GenericText>
          </div>
          <SocketMenu />
        </div>
      </Container>
    </div>
  );
};

export default FooterSocket;
