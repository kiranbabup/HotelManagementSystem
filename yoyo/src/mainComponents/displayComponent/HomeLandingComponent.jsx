import './displayComponent.css';
import leftBed from '../../assets/images/leftBed.jpg'
import midBed from '../../assets/images/middleBed.jpg'
import rightBed from '../../assets/images/rightBed.jpg'
import { useState } from 'react';
import UserLoggedIn from '../../UserLogged/userLoggedIn';
const HomeLandingComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [show,setShow] = useState(false)

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
   
  }; 

  const handleSearchClick = ()=>{
    setShow(true)
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
        <input
            className='searchInput'
            type="text"
            placeholder='Search by name, location, cost'
            value={searchTerm}
            onChange={handleSearchChange}
          />          <select className='searchSelector' name="" id="">
          <option value="select">1 Room</option>
          <option value="two">2 Rooms</option>
          <option value="three">3 Rooms</option>
          <option value="four">4 Rooms</option>
          </select>
          <button className='searchButton'  onClick={handleSearchClick} >Search</button>
        </div>
      </div>
      {
        show ? 
      <UserLoggedIn searchTerm={searchTerm}/>
:
<div className='partTwo'>
        <h2>Book your favorite hotels accross India</h2>
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
      </div>
      }
     
      
    </div>
  );
}

export default HomeLandingComponent;