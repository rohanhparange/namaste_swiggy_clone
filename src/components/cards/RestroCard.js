import {IMAGE_SOURCE_URL} from '../../utils/constant';

const RestroCard=({name,imageId,cuisines,avgRatingString,costForTwo,sla})=>{
    return (
        <div className="restro-card" style={{backgroundColor:"#f0f0f0"}}>
            <div className="restro-img">
                <img src={IMAGE_SOURCE_URL+imageId}></img>
            </div>
            <div className="restro-details">
                <h3>{name}</h3>
                <h5>{cuisines.join(",")}</h5>
                <h5>{avgRatingString}</h5>
                <h5>{costForTwo}</h5>
                <h5>{sla.deliveryTime} minutes</h5>
            </div>

        </div>
    )
}

export default RestroCard;