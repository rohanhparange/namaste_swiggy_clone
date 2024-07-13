
import { useState } from 'react';
import {DATA} from '../../utils/constant';
import RestroCard from '../cards/RestroCard';


const Body = ()=>{
    const [restroList,setRestroList] = useState(DATA);

    const filterData =()=>{
      const filteredList = restroList.filter((data)=>data?.info?.avgRatingString > 4)
      setRestroList(filteredList);
    }

    return (
    <div>
      <div className="search-div">
          <div className="filter-btn">
              <button onClick={filterData}>Filter Data</button>
          </div>
          <div className="search-card">
              <input id="search-input" placeholder="Search Hotel"></input>
          </div>
      </div>

      <div className='res-container'>
      {
        restroList.map((restruant)=>{
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
    </div>
  </div>)
}

export default Body;