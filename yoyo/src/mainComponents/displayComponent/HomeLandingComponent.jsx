import './displayComponent.css';
import leftBed from '../../assets/images/leftBed.jpg'
import midBed from '../../assets/images/middleBed.jpg'
import rightBed from '../../assets/images/rightBed.jpg'
import React, { useState } from 'react';
import HotelList from './hotelList/HotelList';
import UserLoggedIn from '../../UserLogged/userLoggedIn';
import { usersStore } from '../../App';

const HomeLandingComponent = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isSearchCalled, setIsSearchCalled] = useState(false);
  const {updateSearchData}=usersStore();

  const onSearchClicked = ()=>{
    setIsSearchCalled(true);
    updateSearchData(searchValue);
    console.log(searchValue);
  }
  return (
    <div className="DisplayComponent">
      <div className='locationDiv'>
        <div className='locationBox'>Bangalore</div>
        <div className='locationBox'>Chennai</div>
        <div className='locationBox'>Delhi</div>
        <div className='locationBox'>Gurgaon</div>
        <div className='locationBox'>Hyderabad</div>
        <div className='locationBox'>Kolkata</div>
        <div className='locationBox'>Mumbai</div>
        <div className='locationBox'>Noida</div>
        <div className='locationBox'>Pune</div>
        <div className='locationBox'>All Cities</div>
      </div>

      <div className='searchDiv'>
        <p id='searchTitle'>Search for Hotels and Resorts across India</p>
        <div className='searchField'>
          <input className='searchInput' type="text" placeholder='Search by Hotel name, Location, Cost' 
              id='searchValue'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              required/>
          <select className='searchSelector' name="" id="">
          <option value="select">1 Room</option>
          <option value="two">2 Rooms</option>
          <option value="three">3 Rooms</option>
          <option value="four">4 Rooms</option>
          </select>
          <button className='searchButton' onClick={() => onSearchClicked()}>Search</button>
        </div>
      </div>
      {
        !isSearchCalled ? <>
        <HotelList/>
        <div className='partTwo'>
        <h2 className='bedImagesTitle'>Book your favorite hotels accross India</h2>
        <div className='imageDiv'>
          <div className='imgCon'>
            <img className='homePageBedsImage' src={leftBed} alt="Hotle Bed room" />
          </div>
          <div className='imgCon'>
            <img className='homePageBedsImage' src={midBed} alt="Hotle Bed room" />
          </div>
          <div className='imgCon'>
            <img className='homePageBedsImage' src={rightBed} alt="Hotle Bed room" />
          </div>
        </div>
      </div></> : <UserLoggedIn/>
      }
      
      
    </div>
  );
}

export default HomeLandingComponent;