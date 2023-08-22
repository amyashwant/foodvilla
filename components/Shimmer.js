const Shimmer = () => {
  return (
    <div className="restaurant-list" data-testid="shimmer">
        {Array(20).fill("").map((e,index)=>{
            return (  <div key={index} className="shimmer-card"></div> )
        })}
    
    </div>
  );
};
export default Shimmer;
