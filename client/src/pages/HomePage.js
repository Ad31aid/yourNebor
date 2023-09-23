import '../styles/global.css'
import Background from '../images/background-img.png'
import { Button } from "@chakra-ui/react";

const HomePage = () => {

  const img = {
    width: '100%'
  }

  const buttonStyles = {
    position: "fixed",
    top: 150,
    right: "6%",
    padding: 2,
    zIndex: 999
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="header-text" style={{ position: "fixed" }}>
          Connecting communties  <br/>
          ithrough mutual needs and wants
          </h1>
      </div>
      <div className="img-container">
        <img className="img" style={img} src={Background} alt='garden'/>
      </div>
      <div className="home-container">
        <div style={{ position: "fixed" }}>
          <Button
            className='homeButton'
            colorScheme="orange"
            onClick={() => {
              window.open("https://www.johnsoncountyiowa.gov/service-directory/food-nutrition/food-pantries", "_blank");
            }}
            style={buttonStyles}
            size="lg"
          >
            Click for Resources <br />
            to local food pantries!
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HomePage