import React, { useState } from 'react';
import Jumbotron from '../components/Jumbotron';
import Navigation from "../components/Navigation"
import Home from "../pages/Home"
import About from "../pages/About"
import Footer from "../components/Footer"
import { Spinner } from 'react-bootstrap';


const header = {
    position: "sticky",
    top: "0",
    zIndex: "1000",
}

// Used to add new pages to the navbar
const routes = {
    "Home": {
        thumbnail: "https://wallpapercave.com/wp/wp6092911.jpg",
        component: <Home />
    },
    "About": {
        thumbnail: "https://a-static.besthdwallpaper.com/australian-shepherd-dog-wallpaper-1920x1280-54743_38.jpg",
        component: <About />
    },
}

const Default = ({ children }) => {

    const [currentContent, setCurrentContent] = useState("Home")
    function handleContentChange(navigationData) {
        setCurrentContent(navigationData)
    }

    const styles = {
        parallax: {
            backgroundImage: `url("${routes[currentContent].thumbnail}")`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "500px",
            width: "100vw",
        }
    };

    return (
        <div className="default-layout">

            <Jumbotron />

            <div style={header}>
                <Navigation options={Object.keys(routes)} active={currentContent} handleCallback={handleContentChange} />
            </div>

            <div className="content">
                <div style={styles.parallax}></div>
                {routes[currentContent].component}
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Default;
