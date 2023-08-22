import { IMG_CDN_URL } from "../Constant";

export const RestaurantCard = ({
  name,
  cuisines,
  areaName,
  cloudinaryImageId,
}) => {
  const arr = cuisines;
  console.log(arr);
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="" className="" />
      <h2> {name} </h2>
      <h4>
        {arr.map((a, i) => {
          return <>{`${a} `}</>;
        })}
      </h4>
      <h4> {areaName} </h4>
    </div>
  );
};
