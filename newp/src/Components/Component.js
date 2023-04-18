import Navbar from "./Navbar/Navbar";
import HeroFunc from "./Header/Header";
import Dishes from "./dishes/dishes";
import Pack from "./pack/pack";
import Custom from "./Customer/Custom";
import Update from "./Update/Update";
import Video from "./Video/Video";
import Gallery from "./Gallery/Gallery";
import Footer from "./Footer/Footer";
console.log(Custom);
function Component() {
    return (
    <>
    <Navbar/>
    <HeroFunc/>  
    <Dishes/> 
    <Pack/>
    <Custom/>
    <Update/>
    <Video/>
    <Gallery/>
    <Footer/>
    </>  
    )
}
export default Component;