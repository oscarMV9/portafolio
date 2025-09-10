import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Index from "./pagiansPortafolio/inicio";

export default function App() {
    return(
        <Router basename="/portafolio">
            <Routes>
                <Route path="/" element={<Index/>}/>
            </Routes>
        </Router>
    )
}


