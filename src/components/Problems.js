import Heading from "../images/section_title.png";
import "../Problems.css";
import one from "../images/icons/1.png";
import two from "../images/icons/2.png";
import three from "../images/icons/3.png";
import four from "../images/icons/4.png";
import five from "../images/icons/5.png";
import six from "../images/icons/6.png";
import seven from "../images/icons/7.png";
import Button from "react-bootstrap/Button";
import { Link, withRouter } from "react-router-dom";
import { useState } from "react";
import Homeicon from '../images/download.png';

function Problems() {
  return (
    <div className="content">
      <div className="Problems">
      <div className="nav">
            <Link to="/Home">
                <img src={Homeicon} alt="" />
            </Link>
        </div>
        <div className="container heading">
          <Link>
            <img src={Heading} alt="" />
          </Link>
        </div>

        <div className="container makecenter">
          <div className="row wmya">
            <div className="col s12 m6 l3">
              <img className="imgone" src={one} alt="" />
              <img className="text1 cmntxt" src={one} alt="" />
            </div>
            <div className="col s12 m6 l3">
              <img className="imgtwo" src={two} alt="" />
              <img className="text2 cmntxt" src={two} alt="" />
            </div>
            <div className="col s12 m6 l3">
              <img className="imgthree" src={three} alt="" />
              <img className="text3 cmntxt" src={three} alt="" />
            </div>
            <div className="col s12 m6 l3">
              <img className="imgfour" src={four} alt="" />
              <img className="text4 cmntxt" src={four} alt="" />
            </div>
            <div className="col s12 m6 l3">
              <img className="imgfive" src={five} alt="" />
              <img className="text5 cmntxt" src={five} alt="" />
            </div>
            <div className="col s12 m6 l3">
              <img className="imgsix" src={six} alt="" />
              <img className="text6 cmntxt" src={six} alt="" />
            </div>
            <div className="col s12 m6 l3">
              <img className="imgseven" src={seven} alt="" />
              <img className="text7 cmntxt" src={seven} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Problems);
