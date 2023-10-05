import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex bg-gray-200 p-3 rounded-lg">
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee pauseOnHover={true} speed={150}>
        <Link className="mr-10" to="/">I can be a React component, multiple React components......</Link>
        <Link className="mr-10" to="/">Today Match: England vs NewZealand 2:30 pm......</Link>
        <Link to="/">All the best team Bangladesh in the mission ICC World Cup....</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
