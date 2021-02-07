import one from "../images/icons/one.png";
import two from "../images/icons/two.png";
import three from "../images/icons/three.png";
import four from "../images/icons/four.png";
import middle from "../images/five_idiyas.png";
import { Link } from "react-router-dom";
import "../App.css";
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations'

const MainPage = () => {

    const bounceAnimation = keyframes`${bounce}`;

    const BouncyDiv = styled.div`
    animation: 1s ${bounceAnimation};
  `;
  return (
      <div className="main mainpage"  style={{BouncyDiv}}>
        <main className="left-imgs">
          <div className="image1 icon-top">
            <Link to="/Problems">
              <span className="numbering num1">1</span>
              <img src={one} alt="" />
            </Link>
          </div>

          <div className="image2 icon-top">
            <a href="">
              <span className="numbering num2">4</span>
              <img src={four} alt="" />
            </a>
          </div>
        </main>

        <main className="right-imgs">
          <div className="image3 icon-bottom">
            <a href="">
              <span className="numbering num3">2</span>
              <img src={two} alt="" />
            </a>
          </div>

          <div className="image4 icon-bottom ">
            <a href="">
              {" "}
              <span className="numbering num4">3</span>
              <img src={three} alt="" />
            </a>
          </div>
        </main>
        <div className="middle-img responsive">
          <img src={middle} alt="" />
        </div>
      </div>
  );
};

export default MainPage;
