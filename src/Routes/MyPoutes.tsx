import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Admin from "../pages/Admin/Admin";

const MyPoutes = () => {
  const Array = [
    {
      path: "/",
      element: <MainPage />,
      key: 1,
    },
    {
      path: "/admin",
      element: <Admin />,
      key: 2,
    },
  ];
  return (
    <Routes>
      {Array.map((el) => (
        <Route path={el.path} element={el.element} key={el.key} />
      ))}
    </Routes>
  );
};

export default MyPoutes;
