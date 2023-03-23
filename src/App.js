import { Routes, Route } from "react-router-dom";
import AppFive from "./AppFive";
import AppSix from "./AppSix";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppFive />} />
      <Route path="appsix" element={<AppSix />} />
    </Routes>
  );
}
