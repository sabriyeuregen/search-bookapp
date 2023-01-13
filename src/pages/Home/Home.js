import homeImg from "../../assets/home-img.jpg";
import "./Home.scss";
const Home = () => {
  return (
    <div className="container home-page">
        <h1>Book</h1>
        <img className="home-img" src={homeImg} alt="home-img"></img>
      </div>
  )
}

export default Home