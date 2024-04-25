import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const ReactSlick = props => {
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  const {getTrueOrNot} = props

  const btnClicked = () => {
    getTrueOrNot('Active')
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide-container">
          <img
            src="https://static-marketfy.s3.amazonaws.com/media/images/512x288/53173df6360bb0b309887bee2b903447"
            alt="market"
            className="image-slide"
          />
          <div className="slide-content-container">
            <h1 className="slide-heading">State of Markets</h1>
            <p className="slide-para">
              The market: It is an institution comprised of rules for
              controlling voluntary transactions under the parameter of prices.
            </p>
          </div>
        </div>
        <div className="slide-container">
          <img
            src="https://static-marketfy.s3.amazonaws.com/media/images/512x288/53173df6360bb0b309887bee2b903447"
            alt="market"
            className="image-slide"
          />
          <div className="slide-content-container">
            <h1 className="slide-heading">State of Markets</h1>
            <p className="slide-para">
              The market: It is an institution comprised of rules for
              controlling voluntary transactions under the parameter of prices.
            </p>
          </div>
        </div>
        <div className="slide-container">
          <img
            src="https://static-marketfy.s3.amazonaws.com/media/images/512x288/53173df6360bb0b309887bee2b903447"
            alt="market"
            className="image-slide"
          />
          <div className="slide-content-container">
            <h1 className="slide-heading">State of Markets</h1>
            <p className="slide-para">
              The market: It is an institution comprised of rules for
              controlling voluntary transactions under the parameter of prices.
            </p>
          </div>
        </div>
        <div className="slide-container">
          <img
            src="https://static-marketfy.s3.amazonaws.com/media/images/512x288/53173df6360bb0b309887bee2b903447"
            alt="market"
            className="image-slide"
          />
          <div className="slide-content-container">
            <h1 className="slide-heading">State of Markets</h1>
            <p className="slide-para">
              The market: It is an institution comprised of rules for
              controlling voluntary transactions under the parameter of prices.
            </p>
          </div>
        </div>
      </Slider>
      <div className="button-container">
        <button type="button" className="view-more-btn" onClick={btnClicked}>
          View More
        </button>
      </div>
    </div>
  )
}

export default ReactSlick
