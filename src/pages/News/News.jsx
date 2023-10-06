import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideMap from "../Shared/RightSIdeMap/RightSideMap";


const News = () => {

    const {id} = useParams();

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid lg:grid-cols-4 ">
                <div className="col-span-3">
                    <h2 className="text-3xl font-bold">News Details</h2>
                    <p>{id}</p>
                    
                </div>

                <div>
                    <RightSideMap></RightSideMap>
                </div>
            </div>
        </div>
    );
};

export default News;