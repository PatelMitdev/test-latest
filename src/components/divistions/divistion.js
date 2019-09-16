import React from 'react';
import { Checkbox, Icon } from 'antd';
// import 'antd/dist/antd.css';
import './divistion.css';


const ListElement = ({ stateData, name, handleCheck }) => {
	return (
		<ul className="list-items">
			{stateData.map((state) => {
				return (
					<li key={state.state}>
						<Checkbox checked={state.checked} onChange={(e)=>{
							handleCheck(name, state, e)
						}} >{state.state}</Checkbox>
					</li>)
			})}
		</ul>
	)
}

const Divistion = ({
    banners,
	divisions,
	toggleDivisionAndBanners,
	isDivisionAndBanner,
	toggleBanner,
	toggleDivision,
	isBanner,
	isDivision,
	handeleSelectAll,
	handleCheck,
	checkedBannerLength,
	checkedDivisionLength,
 }) => {
	return (
		<div className="division-container">
			<div className="header">
				<div className="icon--image">
				{isDivisionAndBanner? <Icon type="caret-right"  onClick={toggleDivisionAndBanners}/>: <Icon type="caret-down" onClick={toggleDivisionAndBanners}/>}					
					<h3 >Banners && Divistions</h3>
					<sapn className="banners">{checkedBannerLength}:Banners</sapn>
					<span className="banners">{checkedDivisionLength}:Divistions</span>
				</div>
				<div className="select-divisions">
					<Checkbox onChange={handeleSelectAll}>SelectAll</Checkbox>
				</div>
			</div>
			{!isDivisionAndBanner && <div className="divisionsAndBanners">

				<div className="krogger-container">
					<div className="icon--image">
					{isBanner? <Icon type="caret-right"  onClick={toggleBanner}/>: <Icon type={"caret-down"} onClick={toggleBanner}/>}
						<h3><Checkbox></Checkbox><span>Kroger</span></h3>
					</div>
					{!isBanner && <div className="checkbox-container">

						{banners.map((banner, ind) => {
							return (
								<ListElement key={ind} name="banners" handleCheck={handleCheck} stateData={banner.states} />
							)
						})
						}
					</div>}
				</div>

				<div className="krogger-container">
					<div className="icon--image">
					{isDivision? <Icon type="caret-right"  onClick={toggleDivision}/>: <Icon type={"caret-down"} onClick={toggleDivision}/>}
						<h3><Checkbox></Checkbox><span>Food4less</span></h3>
					</div>
					{!isDivision && <div className="checkbox-container">

						{divisions.map((division, ind) => {
							return (
								<ListElement key={ind} name="division" handleCheck={handleCheck} stateData={division.states} />
							)
						})
						}
					</div>}
				</div>

			</div>
			}
		</div>
	)

}

export default Divistion;
