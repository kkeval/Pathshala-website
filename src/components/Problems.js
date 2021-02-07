import Heading from '../images/section_title.png'
import '../Problems.css'
import one from '../images/icons/1.png';
import two from '../images/icons/2.png';
import three from '../images/icons/3.png';
import four from '../images/icons/4.png';
import five from '../images/icons/5.png';
import six from '../images/icons/6.png';
import seven from '../images/icons/7.png';



const Problems = () => {
    return (
        <div className="Problems">
            <div className="container heading">
                <img src={Heading} alt="" />
            </div>
            <div className="container makecenter">

                <div className="row wmya">
                    <div className="col s12 m6 l3">
                        <img src={one} alt=""/>

                    </div>
                    <div className="col s12 m6 l3">
                        <img src={two} alt=""/>
                    </div>
                    <div className="col s12 m6 l3">
                        <img src={three} alt=""/>
                    </div>
                    <div className="col s12 m6 l3">
                        <img src={four} alt=""/>
                    </div>
                    <div className="col s12 m6 l3">
                        <img src={five} alt=""/>
                    </div>
                    <div className="col s12 m6 l3">
                        <img src={six} alt=""/>
                    </div>
                    <div className="col s12 m6 l3">
                        <img src={seven} alt=""/>
                    </div>
                </div>

            </div>
            
        </div >


    )

}
export default Problems;