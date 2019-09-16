import React, { Component } from 'react';
import Layout from './components/layout/layout';
import Divistion from './components/divistions/divistion';
import Schedule from './components/schedules/schedule';
import DivistionAndBannerData from './assets/DivistionAndBanners.json';
import './App.css';
import 'antd/dist/antd.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      banners: [],
      divisions: [],
      isDivisionAndBanner: false,
      isBanner: false,
      isDivision: false,
      checkedBannerLength: 0,
      checkedDivisionLength: 0,

    }
  }
  componentDidMount() {
    const { banners, divisions } = DivistionAndBannerData;
    this.setState({
      banners,
      divisions
    })
  }
  toggleDivisionAndBanners = () => {
    this.setState({
      isDivisionAndBanner: !this.state.isDivisionAndBanner
    })
  }
  toggleBanner = () => {
    this.setState({
      isBanner: !this.state.isBanner
    })
  }
  toggleDivision = () => {
    this.setState({
      isDivision: !this.state.isDivision
    })
  }
  selectedAll = (data, checked) => {
    return data.map((item) => {
      let itemObj = item
      itemObj.states.map((state) => {
        let obj = state;
        obj.checked = checked;
        return obj;
      })
      return itemObj;
    })
  }
  handeleSelectAll = (e) => {
    const { banners, divisions } = this.state;
    let checked = e.target.checked;
    let bannerData = this.selectedAll(banners, checked);
    let divisionsData = this.selectedAll(divisions, checked);
    let checkedBannerLength = this.handleSelectedCount(bannerData);
    let checkedDivisionLength = this.handleSelectedCount(divisionsData);
    this.setState({
      banners: [...bannerData],
      divisions: [...divisionsData],
      checkedBannerLength,
      checkedDivisionLength
    })
  }
  handleSelect(obj, data, isChecked) {
    return data.map((item) => {
      let itemObj = item;
      itemObj.states.map((state) => {
        let stateobj = state;
        stateobj.checked = stateobj.state === obj.state ? isChecked : stateobj.checked
        return stateobj
      })
      return itemObj;
    })
  }
  handleSelectedCount(data) {
    let count = 0;
    data.forEach((item) => {
      let checkedLength = item.states.filter((state) => {
        return state.checked;
      }).length;
      count += checkedLength;
    })
    return count;
  }
  handleCheck = (name, state, event) => {
    const { banners, divisions } = this.state;
    const isChecked = event.target.checked;
    if (name === 'banners') {
      let bannerData = this.handleSelect(state, banners, isChecked);
      let count = this.handleSelectedCount(bannerData);
      this.setState({ banners: bannerData, checkedBannerLength: count })
    } else {
      let divisionsData = this.handleSelect(state, divisions, isChecked);
      let count = this.handleSelectedCount(divisionsData);
      this.setState({ divisions: divisionsData, checkedDivisionLength: count })
    }
  }
  render() {
    const {
      banners,
      divisions,
      isDivisionAndBanner,
      isBanner,
      isDivision,
      checkedBannerLength,
      checkedDivisionLength 
    } = this.state;
    return (
      <div className="App">
        <Layout />
        <Divistion banners={banners}
          divisions={divisions}
          toggleDivisionAndBanners={this.toggleDivisionAndBanners}
          toggleBanner={this.toggleBanner}
          toggleDivision={this.toggleDivision}
          isDivisionAndBanner={isDivisionAndBanner}
          isBanner={isBanner}
          isDivision={isDivision}
          handeleSelectAll={this.handeleSelectAll}
          handleCheck={this.handleCheck}
          checkedBannerLength={checkedBannerLength}
          checkedDivisionLength={checkedDivisionLength}
        />
        <Schedule />
      </div>
    )
  }
}

export default App;
