import {Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Security from "../Pages/Security";
import Team from "../Pages/Team";
import Careers from "../Pages/Careers";
import Insights from "../Pages/Insights";
import Contact from "../Pages/Contact";

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/services" element={<Services />}></Route>
                <Route path="/security" element={<Security />}></Route>
                <Route path="/team" element={<Team />}></Route>
                <Route path="/careers" element={<Careers />}></Route>
                <Route path="/insights" element={<Insights />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </div>
    )
}

export {AllRoutes}