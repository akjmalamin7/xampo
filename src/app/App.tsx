import { router } from "@/app/routes/routes";
import useAuthCheck from "@/shared/hooks/useAuthChecked";
import Loader from "@/shared/ui/loader";
import { RouterProvider } from "react-router-dom";

const App = () => {
  const authChecked = useAuthCheck();
  if (!authChecked) {
    return <Loader />;
  }
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
