import { Routes, Route } from "react-router-dom";
import Layout from "@components/layout/Layout";
import {routes} from "./routes";

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
