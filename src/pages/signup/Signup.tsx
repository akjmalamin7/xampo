import AuthBanner from "@/components/common/authBanner";
import AuthFrame from "@/components/common/authFrame";
import RegistrationForm from "@/components/pages/registration/registrationFrom";

const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      {/* Left Side with Auth Banner */}
      <div className="h-full bg-customcolor-750 hidden lg:block">
        <AuthBanner />
      </div>

      {/* Right Side */}
      <AuthFrame formTitle="Registration">
        <RegistrationForm />
      </AuthFrame>
    </div>
  );
};

export default Signup;
