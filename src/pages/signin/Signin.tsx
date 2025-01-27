import AuthBanner from "@/components/common/authBanner";
import AuthFrame from "@/components/common/authFrame";
import LoginForm from "@/components/pages/login/LoginForm";

const Signin = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      {/* Left Side with Auth Banner */}
      <div className="h-full bg-customcolor-750 hidden lg:block">
        <AuthBanner />
      </div>

      {/* Right Side */}
    <AuthFrame formTitle="Login">
      <LoginForm/>
    </AuthFrame>
    </div>
  );
};

export default Signin;
