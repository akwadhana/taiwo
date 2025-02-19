import { useRoutes } from "react-router-dom";
import { AuthRoutes, HomeRoutes } from "./AppRoutes";

const Routes = () => useRoutes([HomeRoutes,AuthRoutes]);

export default Routes;
