import { router } from "@/app/routes/routes";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
