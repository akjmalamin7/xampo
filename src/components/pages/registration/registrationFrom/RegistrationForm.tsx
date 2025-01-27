import ArrowIcon from "@/assets/icons/arrowIcon/ArrowIcon";
import Button from "@/shared/ui/button";
import GenericText from "@/shared/ui/genericText";
import Input from "@/shared/ui/Input";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  return (
    <form>
      <div className="flex flex-col gap-[12px] lg:gap-[16px] mt-[20px]">
          <Input className="border-[#D6D6D6]" placeholder="Name" />
          <Input className="border-[#D6D6D6]" placeholder="Phone" />
          <Input className="border-[#D6D6D6]" placeholder="Email" />
          <Input className="border-[#D6D6D6]" placeholder="Password" />
          <Input className="border-[#D6D6D6]" placeholder="Confirm Password" />
          <GenericText className="text-md text-[#4E4B66]">
            <Link to={"#"}>Forgot Password</Link>
          </GenericText>
          <Button size="size-5" variant="primary" width="full">
            Registration <ArrowIcon size="line" color="white" />
          </Button>
      </div>
    </form>
  );
};

export default RegistrationForm;
