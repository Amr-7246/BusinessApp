import React, { useRef , useState } from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChartBar, faCopy, faMarker, faUserGear, faCoins } from '@fortawesome/free-solid-svg-icons';

export default function Services() {
// ********************* start refs
    const [mousPosition, setMousPosition] = useState({x: 100 , y: 100})
    const [isHoverd, setIsHoverd] = useState(1)
    const [isInto, setIsInto] = useState(false)
    const cursor = useRef()
// ********************* end refs
// ********************* start logic
const handelCusorMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const Cleft = e.clientX - rect.left - 25
    const CTop = e.clientY - rect.top - 25
    setMousPosition({x : Cleft , y : CTop})
}
const handelCusorEnter = (e) => {
    setIsHoverd(e)
    setIsInto(!isInto)
}

// const light = () => (
//     <div>
//         light
//     </div>
// )
// document.addEventListener('oninter' , light )
// ********************* end logic
    // Icons
    const faLaptopCodeIcon = <FontAwesomeIcon icon={faLaptopCode} />
    const faChartBarIcon = <FontAwesomeIcon icon={faChartBar} />
    const faCopyIcon = <FontAwesomeIcon icon={faCopy} />
    const faMarkerIcon = <FontAwesomeIcon icon={faMarker} />
    const faUserGearIcon = <FontAwesomeIcon icon={faUserGear} />
    const faCoinsIcon = <FontAwesomeIcon icon={faCoins} />
return (
    <>
    <div id="services">
        <div className="container">
            <div className="title_headling">
                <h3>What's Services We Are Offering to Our Customers</h3>
                <p>Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
            </div>
            <div className="service_wrapper">
            {/* ################ */}
                <div className="service_box relative   overflow-hidden"   onMouseMove={handelCusorMove} 
                            onMouseEnter={() => handelCusorEnter(0)} 
                            onMouseLeave={() => handelCusorEnter(0)} 
                    >
                    { isInto && isHoverd == 0 && <span  style={{  top: mousPosition.y , left: mousPosition.x}}  className={`absolute blur-[40px] w-[50px] h-[50px] z-10 bg-white/100`} />}
                    <div className="service_icon blue_icon">{faLaptopCodeIcon}</div>
                    <h4 className="number">01</h4>
                    <div className="service_content">
                        <h5>Cloud Computing</h5>
                        <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit. doloret quas saepe autem, dolor set.</p>
                        <a href="/" className="read">Read more</a>
                    </div>
                </div> 
            {/* ################ */}
                <div className="service_box relative overflow-hidden"   onMouseMove={handelCusorMove} 
                            onMouseEnter={() => handelCusorEnter(1)} 
                            onMouseLeave={() => handelCusorEnter(1)} >
                    { isInto && isHoverd == 1 && <span  style={{  top: mousPosition.y , left: mousPosition.x}}  className={`absolute blur-[40px] w-[50px] h-[50px] z-10 bg-white/100`} />}
                    <div className="service_icon">{faChartBarIcon}</div>
                    <h4 className="number">02</h4>
                    <div className="service_content">
                        <h5>Business Strategy</h5>
                        <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit. doloret quas saepe autem, dolor set.</p>
                        <a href="/" className="read">Read more</a>
                    </div>
                </div>
            {/* ################ */}
                <div className="service_box relative overflow-hidden"   onMouseMove={handelCusorMove} 
                            onMouseEnter={() => handelCusorEnter(2)} 
                            onMouseLeave={() => handelCusorEnter(2)} >
                    { isInto && isHoverd == 2 && <span  style={{  top: mousPosition.y , left: mousPosition.x}}  className={`absolute blur-[40px] w-[50px] h-[50px] z-10 bg-white/100`} />}
                    <div className="service_icon green_icon">{faCopyIcon}</div>
                    <h4 className="number">03</h4>
                    <div className="service_content">
                        <h5>Reports Analysis</h5>
                        <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit. doloret quas saepe autem, dolor set.</p>
                        <a href="/" className="read">Read more</a>
                    </div>
                </div>
            {/* ################ */}
                <div className="service_box relative overflow-hidden"   onMouseMove={handelCusorMove} 
                            onMouseEnter={() => handelCusorEnter(3)} 
                            onMouseLeave={() => handelCusorEnter(3)} >
                    { isInto &&  isHoverd == 3 && <span  style={{  top: mousPosition.y , left: mousPosition.x}}  className={`absolute blur-[40px] w-[50px] h-[50px] z-10 bg-white/100`} />}
                    <div className="service_icon">{faMarkerIcon}</div>
                    <h4 className="number">04</h4>
                    <div className="service_content">
                        <h5>Decision Maker</h5>
                        <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit. doloret quas saepe autem, dolor set.</p>
                        <a href="/" className="read">Read more</a>
                    </div>
                </div>
            {/* ################ */}
                <div className="service_box relative overflow-hidden"   onMouseMove={handelCusorMove} 
                            onMouseEnter={() => handelCusorEnter(4)} 
                            onMouseLeave={() => handelCusorEnter(4)} >
                    { isInto && isHoverd == 4 && <span  style={{  top: mousPosition.y , left: mousPosition.x}}  className={`absolute blur-[40px] w-[50px] h-[50px] z-10 bg-white/100`} />}
                    <div className="service_icon green_icon">{faUserGearIcon}</div>
                    <h4 className="number">05</h4>
                    <div className="service_content">
                        <h5>Customer Oriented</h5>
                        <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit. doloret quas saepe autem, dolor set.</p>
                        <a href="/" className="read">Read more</a>
                    </div>
                </div>
            {/* ################ */}
                <div className="service_box relative overflow-hidden"   onMouseMove={handelCusorMove} 
                            onMouseEnter={() => handelCusorEnter(5)} 
                            onMouseLeave={() => handelCusorEnter(5)} >
                    { isInto && isHoverd == 5 && <span  style={{  top: mousPosition.y , left: mousPosition.x}}  className={`absolute blur-[40px] w-[50px] h-[50px] z-10 bg-white/100`} />}
                    <div className="service_icon blue_icon">{faCoinsIcon}</div>
                    <h4 className="number">06</h4>
                    <div className="service_content">
                        <h5>Solution Focused</h5>
                        <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit. doloret quas saepe autem, dolor set.</p>
                        <a href="/" className="read">Read more</a>
                    </div>
                </div>
            {/* ################ */}
            </div>
        </div>
     </div>
    </>
  )
}
