import { BrowserRouter, Routes, Route } from "react-router-dom"
import "../src/index.css";
import Navbar from "../src/components/Navbar/Navbar.jsx";
import SiteCard from "../src/components/SiteCard/SiteCard.jsx";
import Filter from '../src/filter.jsx'
function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                <Route path="/" element={<Route><h1>Hello there!</h1> <img src="https://media.tenor.com/Hi1vE3-WGWgAAAAC/hello-there-no-text.gif"/></Route>} />
                    <Route path="/contact" element={<h2>Contact me at</h2>} />

                    <Route path="/posts" element={<SiteCard />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;