import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Navigate } from "react-router-dom";
import SinglePropery from "./pages/SinglePropery";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Navigate
                        to={`/properties?location=london`}
                        replace={true}
                    />
                }
            />
            <Route path="/properties" element={<Home />} />
            <Route path="/property/:id" element={<SinglePropery />} />
        </Routes>
    );
}

export default App;
