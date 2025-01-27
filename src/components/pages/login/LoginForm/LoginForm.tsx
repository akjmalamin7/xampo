import ArrowIcon from "@/assets/icons/arrowIcon/ArrowIcon";
import { LOGIN_SCHEMA } from "@/redux/features/auth/auth.schema";
import { LoginData } from "@/redux/features/auth/auth.types";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import Button from "@/shared/ui/button";
import GenericText from "@/shared/ui/genericText";
import Input from "@/shared/ui/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const {register, handleSubmit, formState:{errors,isValid}} = useForm<LoginData>({
    resolver:yupResolver(LOGIN_SCHEMA),
    defaultValues:{
      email:"",
      password:""
    }
  })

  const [login,{isLoading}] = useLoginMutation()
  const onSubmit:SubmitHandler<LoginData> = async(data)=>{
    try {
      await login(data).unwrap();
      navigate("/packages");
    } catch (err) {
      console.error("Registration failed:", err);
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-[12px] lg:gap-[16px] mt-[20px]">
        <div>
          <Input {...register("email")} className="border-[#D6D6D6]" placeholder="Email Address" />
          {errors.email && <GenericText size="xsm" className="text-red-500">{errors.email.message}</GenericText>}
        </div>
        <div>
          <Input {...register("password")} className="border-[#D6D6D6]" placeholder="Password" />
          {errors.password && <GenericText size="xsm" className="text-red-500">{errors.password.message}</GenericText>}
        </div>
        <div>
          <GenericText className="text-md text-[#4E4B66]">
            <Link to={"#"}>Forgot Password</Link>
          </GenericText>
        </div>
        <div>
          <Button loading={isLoading}  disabled={!isValid}  buttonType="submit" size="size-5" variant="primary" width="full">
          Login In  <ArrowIcon size="line" color="white" />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
