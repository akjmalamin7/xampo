import ArrowIcon from "@/assets/icons/arrowIcon/ArrowIcon";
import CartIcon from "@/assets/icons/cartIcon";
import GoogleIcon from "@/assets/icons/googleIcon";
import LineArrow from "@/assets/icons/lineArrow";
import Button from "@/shared/ui/button";
import GenericText from "@/shared/ui/genericText";

const Home = () => {
  return (
    <div>
      <GenericText fontWeight="bold" elementType="p" size="2xl" color="text-6">
        Generic Text
      </GenericText>
      <p className="text-customcolor-300">dfsfasdfasf</p>
      <ArrowIcon size="lg" rotate="top"/>
      <CartIcon/>
      <LineArrow/>
      <Button children={<><GoogleIcon/> Google</>} variant="tertiary" type="outline" width="auto" size="size-1"/>
    </div>
  );
};

export default Home;
