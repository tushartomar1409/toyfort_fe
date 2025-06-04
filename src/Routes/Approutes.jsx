import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const Approutes = () => {
  let privateRoutes;

  privateRoutes = [
    // { path: "/dashboard", component: Dashboard },
  ];

  const publicRoutes = [{ path: "/", component: Dashboard }];

  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((data, index) => (
          <Route key={index} path={data.path} element={<data.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Approutes;
