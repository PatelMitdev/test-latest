import React from 'react';
import layoutData from "../../assets/data.json"; 
import './layout.css';
import {Button } from 'antd';

const Layout = () => {
	const{data} = layoutData
  return(
    <div className="layout-banner">
    <Button>Preview</Button>
     <ul className="layout">
    {data.map((layout, ind)=>{
      return(
        <li key={ind}>
          <span>{layout.backers}</span>
           <span>{layout.market}</span>
           <span>{layout.dillions}</span>
           <span>{layout.food}</span>
           <span>{layout.foodsCo}</span>
            <span>{layout.fred}</span>
        </li>
      )
    })}
     </ul>
    </div>
  );
}
export default Layout;