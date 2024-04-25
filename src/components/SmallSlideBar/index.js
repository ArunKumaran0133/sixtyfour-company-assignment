import './index.css'
import {HiSearch} from 'react-icons/hi'
import {IoMdHeadset, IoMdSettings, IoMdClose} from 'react-icons/io'
import {CgCalendar} from 'react-icons/cg'
import {AiOutlineDollarCircle, AiOutlineDesktop} from 'react-icons/ai'

import {FaRegQuestionCircle} from 'react-icons/fa'

const SliderBar = props => {
  const {getTrueOrNot, getBtnClickedRes, className} = props
  console.log(className)

  return (
    <div className={className}>
      <div>
        <div className="small-menu-logo">
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/462/983/non_2x/letter-q-logo-icon-design-with-swoosh-and-creative-curved-cut-shape-vector.jpg"
            alt="logo"
            className="logo"
          />
          <IoMdClose
            className="small-dev-nav"
            type="button"
            onClick={() => getBtnClickedRes('InActive')}
          />
        </div>
      </div>
      <div>
        <div className="small-menu menu-btn">
          <HiSearch
            className="small-dev-nav"
            onClick={() => getTrueOrNot('Active')}
          />
          <p
            className="menu-word"
            onClick={() => getTrueOrNot('Active')}
            type="button"
          >
            SEARCH
          </p>
        </div>
        <div className="small-menu menu-btn">
          <AiOutlineDesktop
            className="small-dev-nav"
            onClick={() => getTrueOrNot('Active')}
          />
          <p
            className="menu-word"
            onClick={() => getTrueOrNot('Active')}
            type="button"
          >
            DESK
          </p>
        </div>
        <div className="small-menu menu-btn">
          <FaRegQuestionCircle
            className="small-dev-nav"
            onClick={() => getTrueOrNot('Active')}
          />
          <p
            className="menu-word"
            onClick={() => getTrueOrNot('Active')}
            type="button"
          >
            FAQ
          </p>
        </div>
        <div className="small-menu menu-btn">
          <CgCalendar
            className="small-dev-nav"
            onClick={() => getTrueOrNot('Active')}
          />
          <p
            className="menu-word"
            onClick={() => getTrueOrNot('Active')}
            type="button"
          >
            CALENDAR
          </p>
        </div>
        <div className="small-menu menu-btn">
          <AiOutlineDollarCircle
            className="small-dev-nav"
            onClick={() => getTrueOrNot('Active')}
          />
          <p
            className="menu-word"
            onClick={() => getTrueOrNot('Active')}
            type="button"
          >
            MONEY
          </p>
        </div>
        <div className="small-menu menu-btn">
          <IoMdHeadset
            className="small-dev-nav"
            onClick={() => getTrueOrNot('Active')}
          />
          <p
            className="menu-word"
            onClick={() => getTrueOrNot('Active')}
            type="button"
          >
            STUDY
          </p>
        </div>
      </div>
      <div className="small-menu menu-btn">
        <IoMdSettings
          className="small-dev-nav"
          onClick={() => getTrueOrNot('Active')}
        />
        <p
          className="menu-word"
          onClick={() => getTrueOrNot('Active')}
          type="button"
        >
          SETTINGS
        </p>
      </div>
    </div>
  )
}

export default SliderBar
