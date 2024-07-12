
import {DATA} from '../../utils/constant';
import RestroCard from '../cards/RestroCard';


const Body = ()=>{
    return (<div className='res-container'>
    {
      DATA.map((restruant)=>{
        return <RestroCard key={restruant?.info?.id}
          name={restruant?.info?.name}
          imageId={restruant?.info?.cloudinaryImageId}
          cuisines={restruant?.info?.cuisines}
          avgRatingString={restruant?.info?.avgRatingString}
          costForTwo={restruant?.info?.costForTwo}
          sla={restruant?.info?.sla}
        ></RestroCard>
      })

    }
  </div>)
}

export default Body;