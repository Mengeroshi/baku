import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { CrowdloanHome } from "../pages/CrowdloanHome";
import { Registration } from "../pages/Registration";
import { StatusTable } from "../pages/StatusTable";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/leos" element={<Home />} />
        <Route path="/crowd-loan-info" element={<CrowdloanHome />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/crowd-status" element={<StatusTable />} />
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </BrowserRouter>
  );
};
