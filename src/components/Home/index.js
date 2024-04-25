import {HiSearch} from 'react-icons/hi'
import {IoMdHeadset, IoMdSettings} from 'react-icons/io'
import {CgCalendar} from 'react-icons/cg'
import {
  AiOutlineClockCircle,
  AiOutlineDollarCircle,
  AiOutlineDesktop,
} from 'react-icons/ai'
import {IoNotificationsOutline} from 'react-icons/io5'
import {FaBook, FaRegQuestionCircle} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {useState} from 'react'

import ReactSlick from '../ImageSlider'
import Constructor from '../Constructor'
import SliderBar from '../SmallSlideBar'

import './index.css'

const Home = () => {
  const [isAnyBtnClicked, getAction] = useState('')
  const [isMenuBtnClicked, getBtnClicked] = useState('')
  const getTrueOrNot = res => {
    getAction(res)
    console.log(isAnyBtnClicked)
  }

  const getBtnClickedRes = res => {
    getBtnClicked(res)
    console.log(isMenuBtnClicked)
  }

  const className =
    isMenuBtnClicked === 'Active'
      ? 'slider-menu-container'
      : 'slider-menu-container-false'
  console.log(className)

  const cartcontainer = () => (
    <div className="library-cart-container">
      <div className="library-cart">
        <FaBook className="library-icon" style={{color: '#98C9FA'}} />
        <h1 className="library-heading">My Saved Library 1</h1>
        <p className="library-date">dd-mm-yy</p>
      </div>
      <div className="library-cart">
        <FaBook className="library-icon" style={{color: '#4978EE'}} />
        <h1 className="library-heading">My Saved Library 2</h1>
        <p className="library-date">dd-mm-yy</p>
      </div>
      <div className="library-cart">
        <FaBook className="library-icon" style={{color: 'red'}} />
        <h1 className="library-heading">My Saved Library 3</h1>
        <p className="library-date">dd-mm-yy</p>
      </div>
      <div className="library-cart">
        <FaBook className="library-icon" style={{color: '#EC6C3D'}} />
        <h1 className="library-heading">My Saved Library 4</h1>
        <p className="library-date">dd-mm-yy</p>
      </div>
      <div className="library-cart">
        <FaBook className="library-icon" style={{color: '#3FF451'}} />
        <h1 className="library-heading">My Saved Library 5</h1>
        <p className="library-date">dd-mm-yy</p>
      </div>
    </div>
  )

  const navContainer = () => (
    <div className="nav-container">
      <img
        src="https://static.vecteezy.com/system/resources/previews/009/462/983/non_2x/letter-q-logo-icon-design-with-swoosh-and-creative-curved-cut-shape-vector.jpg"
        alt="logo"
        className="logo"
      />
      <div className="large-nav-container">
        <HiSearch
          className="nav-icons"
          onClick={() => getTrueOrNot('Active')}
        />
        <AiOutlineDesktop
          className="nav-icons"
          onClick={() => getTrueOrNot('Active')}
        />
        <FaRegQuestionCircle
          className="nav-icons"
          onClick={() => getTrueOrNot('Active')}
        />
        <CgCalendar
          className="nav-icons"
          onClick={() => getTrueOrNot('Active')}
        />
        <AiOutlineDollarCircle
          className="nav-icons"
          onClick={() => getTrueOrNot('Active')}
        />
        <IoMdHeadset
          className="nav-icons"
          onClick={() => getTrueOrNot('Active')}
        />
      </div>
      <IoMdSettings
        className="nav-icons"
        onClick={() => getTrueOrNot('Active')}
      />
    </div>
  )

  const bottomContainer = () => (
    <div className="bottom-container">
      <div>{cartcontainer()}</div>
      <div className="country-slider-container">
        <div className="slide-container-main">
          <ReactSlick getTrueOrNot={getTrueOrNot} />
        </div>
        <div className="country-container">
          <div className="country-list-container">
            <p className="county-heading">Recent releases</p>
            <select className="countries" id="county">
              <option value="india">India</option>
              <option value="america">America</option>
              <option value="england">England</option>
              <option value="russia">Russia</option>
            </select>
          </div>
          <hr />
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/192/089/original/website-under-construction-illustration-vector.jpg"
            className="construction-image-country"
            alt="construction"
          />
        </div>
      </div>
    </div>
  )

  return (
    <div className="main-container">
      <SliderBar
        getTrueOrNot={getTrueOrNot}
        getBtnClickedRes={getBtnClickedRes}
        className={className}
      />
      {isAnyBtnClicked === 'Active' ? '' : navContainer()}
      <div className="bottom-container-main">
        <div className="header-container">
          <div className="heading-container">
            <div>
              <GiHamburgerMenu
                className="menu-button"
                type="button"
                onClick={() => getBtnClickedRes('Active')}
              />
            </div>
            <div>
              <h1 className="home-header">Good Afternoon, Arun</h1>
              <p className="home-para">You are subscribed to retail plan</p>
            </div>
          </div>
          <div className="home-timing-date-container">
            <div className="icon-container">
              <CgCalendar className="icon" />
              <p className="home-timing-det">Today, 14 February</p>
            </div>
            <div className="icon-container">
              <AiOutlineClockCircle className="icon" />
              <p className="home-timing-det">16:45</p>
            </div>
            <IoNotificationsOutline className="icon" />
          </div>
        </div>
        {isAnyBtnClicked === 'Active' ? (
          <Constructor getTrueOrNot={getTrueOrNot} />
        ) : (
          bottomContainer()
        )}
      </div>
    </div>
  )
}

export default Home
