import ArrowIcon from "@/assets/icons/arrowIcon/ArrowIcon";
import Button from "@/shared/ui/button";
import GenericText from "@/shared/ui/genericText";
import Input from "@/shared/ui/Input";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form>
      <div className="flex flex-col gap-[12px] lg:gap-[16px] mt-[20px]">
        <div>
          <Input className="border-[#D6D6D6]" placeholder="Email Address" />
        </div>
        <div>
          <Input className="border-[#D6D6D6]" placeholder="Password" />
        </div>
        <div>
          <GenericText className="text-md text-[#4E4B66]">
            <Link to={"#"}>Forgot Password</Link>
          </GenericText>
        </div>
        <div>
          <Button size="size-5" variant="primary" width="full">
            Login In <ArrowIcon size="line" color="white" />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
