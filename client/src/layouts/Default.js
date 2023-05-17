import { useLocation } from 'react-router-dom'
import Jumbotron from '../components/Jumbotron';
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"


const header = {
    position: "sticky",
    top: "0",
    zIndex: "1000",
}

const images = {
    "/": "https://wallpapercave.com/wp/wp6092911.jpg",
    "/about": "https://a-static.besthdwallpaper.com/australian-shepherd-dog-pup-wallpaper-1440x900-42310_4.jpg",
    "/other": "https://a-static.besthdwallpaper.com/australian-shepherd-dog-wallpaper-1920x1280-54743_38.jpg"
}

const Default = ({ children }) => {
    const location = useLocation();
    const styles = {
        parallax: {
            backgroundImage: `url("${images[location.pathname]}")`,
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
                <Navigation active={location.pathname} />
            </div>

            <div className="content">
                <div style={styles.parallax}></div>
                {children}
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Default;
