import React, { useContext } from 'react'
import './Services.css'
import CV from './CV.pdf'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'

function Services() {

  const transition = {duration : 1, type: 'spring'}

  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className='services' id='Services'>
      
      {/* left side */}
      <div className="awesome">
        <span style={{color:darkMode? 'white' : ''}}>My Awesome</span>
        <span>services</span>
        <span>Lorem ipsum dolor sit amet  consectetur adipisicing elit. <br /> Deserunt,  perspiciatis commodi reiciendis.</span>
        <a href={CV} download>
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
      </div>
      
      {/* right side */}
      <div className="cards">

        <motion.div initial={{left: '28rem'}} whileInView={{left:'21rem'}} transition={transition}  style={{left:'14rem'}}>
            <Card emoji = {HeartEmoji} heading = {'Web Design'} detail={"Adobe Photoshop , Html , Css , Scss, Bootstrap"}/>
        </motion.div>

        <motion.div initial={{left: '-9rem'}} whileInView={{left:'0rem'}} transition={transition} style={{top:"12rem", left:"-4rem"}}>
        <Card emoji = {Glasses} heading = {'Web Developer'} detail={" JavaScript+JQuery , Nodejs , MongoDB, Express , React , Angular "}/>
        </motion.div>

        <motion.div initial={{left: '28rem'}} whileInView={{left:'19rem'}} transition={transition} style={{top:"19rem", left:"12rem"}}>
        <Card emoji = {Humble} heading = {'UI/UX'} detail={"Real World UI/UX MERN & MEAN Projects"}/>
        </motion.div>

        <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
      </div>
    </div>
  )
}

export default Services
