const RestroCard=({name,imageId,cuisines,avgRatingString,costForTwo,sla})=>{
    return (
        <div className="restro-card" style={{backgroundColor:"#f0f0f0"}}>
            <div className="restro-img">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imageId}></img>
            </div>
            <div className="restro-details">
                <h3>{name}</h3>
                <h4>{cuisines.join(",")}</h4>
                <h4>{avgRatingString}</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.deliveryTime} minutes</h4>
            </div>

        </div>
    )
}

export default RestroCard;