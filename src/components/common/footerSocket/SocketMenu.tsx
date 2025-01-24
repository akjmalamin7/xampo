import GenericText from "@/shared/ui/genericText";
import { Link } from "react-router-dom";
interface Menu {
  id: string;
  title: string;
  path: string;
}
const menus: Menu[] = [
  {
    id: "1",
    title: "Terms & Condition",
    path: "#",
  },
  {
    id: "2",
    title: "TPrivacy Policy",
    path: "#",
  },
  {
    id: "3",
    title: "Refund Policy",
    path: "#",
  },
  {
    id: "4",
    title: "FAQ",
    path: "#",
  },
];
const SocketMenu = () => {
  return (
    <ul className="flex flex-wrap justify-center gap-[12px] lg:justify-end gap-x-[16px] xl:gap-x-[24px]">
      {menus.map((menu) => (
        <li key={menu.id}>
          <GenericText className="text-[14px] lg:text-[15px]" color="text-1" fontWeight="regular">
            <Link to={menu.path}>{menu.title}</Link>
          </GenericText>
        </li>
      ))}
    </ul>
  );
};

export default SocketMenu;
