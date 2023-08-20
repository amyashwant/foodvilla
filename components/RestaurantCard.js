import { IMG_CDN_URL } from "../Constant";

export const RestaurantCard = ({ name, cuisine, area, cloudinaryImageId }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="" className="" />
      <h2> {name} </h2>
      <h4> {cuisine} </h4>
      <h4> {area} </h4>
    </div>
  );
};
