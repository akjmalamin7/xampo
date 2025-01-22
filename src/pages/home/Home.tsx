import ArrowIcon from "@/assets/icons/arrowIcon/ArrowIcon";
import CartIcon from "@/assets/icons/cartIcon";
import LineArrow from "@/assets/icons/lineArrow";
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
    </div>
  );
};

export default Home;
