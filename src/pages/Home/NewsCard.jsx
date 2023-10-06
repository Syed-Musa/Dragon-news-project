/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NewsCard = ({newsData}) => {
  const { _id, title, image_url, details } = newsData;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {
            details.length > 200 ?
            <p>{details.slice(0, 200)}
            <Link to={`/newsData/${_id}`} className="text-blue-600 font-bold text-xl">Read More...</Link>
            </p>:
            <p>{details}</p>
        }
        
      </div>
    </div>
  );
};

export default NewsCard;
