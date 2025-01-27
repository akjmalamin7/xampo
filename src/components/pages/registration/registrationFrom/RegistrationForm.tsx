import ArrowIcon from "@/assets/icons/arrowIcon/ArrowIcon";
import { UserSchema } from "@/redux/features/auth/auth.schema";
import { useRegistrationMutation } from "@/redux/features/auth/authApi";
import Button from "@/shared/ui/button";
import GenericText from "@/shared/ui/genericText";
import Input from "@/shared/ui/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { REGISTRATION_SCHEMA } from "./registration.schema";



const RegistrationForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchema>({
    resolver: yupResolver(REGISTRATION_SCHEMA),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const [registration, { isLoading }] = useRegistrationMutation();
  const onSubmit: SubmitHandler<UserSchema> = async (data) => {
    try {
      await registration(data).unwrap();
      navigate("/login");
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-[12px] lg:gap-[16px] mt-[20px]">
        <div>
          <Input {...register("fullName")} className="border-[#D6D6D6]" placeholder="Name" />
          {errors.fullName && <GenericText size="xsm" className="text-red-500">{errors.fullName.message}</GenericText>}
        </div>
        <div>
          <Input {...register("phoneNumber")} className="border-[#D6D6D6]" placeholder="Phone" />
          {errors.phoneNumber && (
           <GenericText size="xsm" className="text-red-500">{errors.phoneNumber.message}</GenericText>
          )}
        </div>
        <div>
          <Input {...register("email")} className="border-[#D6D6D6]" placeholder="Email" />
          {errors.email && <GenericText size="xsm" className="text-red-500">{errors.email.message}</GenericText>}
        </div>
        <div>
          <Input
            {...register("password")}
            type="password"
            className="border-[#D6D6D6]"
            placeholder="Password"
          />
          {errors.password && <GenericText size="xsm" className="text-red-500">{errors.password.message}</GenericText>}
        </div>
        <div>
          <Input
            {...register("confirmPassword")}
            type="password"
            className="border-[#D6D6D6]"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <GenericText size="xsm" className="text-red-500">{errors.confirmPassword.message}</GenericText>
          )}
        </div>
        <GenericText className="text-md text-[#4E4B66]">
          <Link to={"#"}>Forgot Password</Link>
        </GenericText>
        <Button
          buttonType="submit"
          size="size-5"
          variant="primary"
          width="full"
          loading={isLoading}
        >
          {isLoading ? "Submitting..." : "Registration"} <ArrowIcon size="line" color="white" />
        </Button>
      </div>
    </form>
  );
};

export default RegistrationForm;
