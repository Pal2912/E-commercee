import FeatureProduct from "./components/FeatureProduct";
import Homesec from "./components/Homesec";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
const Home=()=>{
    const storename={nameofstore:"Smart Store"}
return(<>
    <Homesec storename={storename}></Homesec>
    <FeatureProduct></FeatureProduct>
    <Services></Services>
    <Trusted></Trusted>
    </>
)
};


export default Home;
