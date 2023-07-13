import { Link } from "react-router-dom"

export default function Landing() {
  return (
    <div className="landing-wrapper">
      <div className="slogan">
        <h1>Climb.</h1>
        <h1>Fall.</h1>
        <h1>Repeat.</h1>
        <Link to={'/shop'}><button>Shop Now</button></Link>
      </div>
    </div>
  )
}