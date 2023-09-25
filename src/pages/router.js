import { Routes, Route } from "react-router-dom";
import Home from "./home";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<div>blank page</div>} />
        </Routes>
    );
}