import { useLocation } from 'react-router-dom'
import React, { useState } from 'react';
import Jumbotron from '../components/Jumbotron';
import Navigation from "../components/Navigation"
import Home from "../pages/Home"
import About from "../pages/About"
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Footer from "../components/Footer"
import Signup from '../pages/Signup';


const header = {
    position: "sticky",
    top: "0",
    zIndex: "1000",
}

// Used to add new pages to the navbar
const routes = {
    "/": {
        name: "Home",
        thumbnail: "https://wallpapercave.com/wp/wp6092911.jpg",
        component: <Home />,
        displayInNav: true,
        displayParallax: true
    },
    "/about": {
        name: "About",
        thumbnail: "https://a-static.besthdwallpaper.com/australian-shepherd-dog-wallpaper-1920x1280-54743_38.jpg",
        component: <About />,
        displayInNav: true,
        displayParallax: true
    },
    "/login": {
        name: "Login",
        thumbnail: "https://a-static.besthdwallpaper.com/australian-shepherd-dog-wallpaper-1920x1280-54743_38.jpg",
        component: <Login />,
        displayInNav: true,
        displayParallax: false
    },
    "/signup": {
        name: "Signup",
        thumbnail: "https://a-static.besthdwallpaper.com/australian-shepherd-dog-wallpaper-1920x1280-54743_38.jpg",
        component: <Signup />,
        displayInNav: true,
        displayParallax: false
    },
    "/404": {
        name: "404",
        thumbnail: "https://atlassianblog.wpengine.com/wp-content/uploads/2017/12/44-incredible-404-error-pages@3x.png",
        component: <NotFound/>,
        displayInNav: false,
        displayParallax: false
    }
}


const Default = ({ children }) => {

    // Get the location
    const location = useLocation();

    // Check to see if we are aware of that page
    const isUnknownPage = ! Object.keys(routes).includes(location.pathname)
    

    let current
    if (isUnknownPage) {
        current = routes["/404"].name
        location.pathname = "/404"
    } else {
        current = routes[location.pathname].name
    }
    
    const [currentLocation, setCurrentLocation] = useState(location.pathname)
    const [currentContent, setCurrentContent] = useState(current)

    function handleContentChange(navigationData) {
        setCurrentContent(routes[navigationData].name)
        setCurrentLocation(navigationData)
        window.history.replaceState(null, routes[navigationData].name, navigationData)
    }

    const styles = {
        parallax: {
            backgroundImage: `url("${routes[currentLocation].thumbnail}")`,
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
                <Navigation options={routes} active={currentContent} handleCallback={handleContentChange} />
            </div>

            <div className="content">
                {routes[currentLocation].displayParallax ? <div style={styles.parallax}></div> : null}
                {routes[currentLocation].component}
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Default;
