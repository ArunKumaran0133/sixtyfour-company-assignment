const Constructor = props => {
  const {getTrueOrNot} = props
  return (
    <div className="construction-page-container">
      <h1 className="error-message">OOPS WE ARE WORKING ON IT!!!</h1>
      <img
        src="https://th.bing.com/th/id/R.afe1465e67bad888eb3858b11a20c470?rik=FF89FttF05et6Q&riu=http%3a%2f%2fpageunderconstruction.weebly.com%2fuploads%2f1%2f1%2f4%2f1%2f11410642%2fpage-under-construction_orig.jpg&ehk=28ZwWQzUal0CCQxYtJylJSW8tX%2fFdK3yx1ATs2pUPWw%3d&risl=&pid=ImgRaw&r=0"
        alt="construction"
        className="view-construction"
      />
      <button
        type="button"
        className="back-to-home-btn"
        onClick={() => getTrueOrNot('InActive')}
      >
        Back to Home
      </button>
    </div>
  )
}

export default Constructor
