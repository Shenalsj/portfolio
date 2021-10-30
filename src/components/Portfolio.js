import React from "react";
import websitebuilder from "../images/websitebuilder.png";
import Crypto from "../images/cryptoapp.png";
// import portfolio from "../images/portfolio.png";
// import taskManager from "../images/task-manager.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Pofrfolio = () => {

  // Netflix
  const openPopupboxwebsitebuilder = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={websitebuilder} alt="Website Builder..." />
        <p>Created a Websitebuilder for UEF Project.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://cs.uef.fi/~shenal/quicksite/", "_blank")}>https://cs.uef.fi/~shenal/quicksite/</a>
        <br/>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Shenalsj")}>https://github.com/Shenalsj</a>
      </>
    )
    PopupboxManager.open({ content })
    PopupboxManager.update({
      content,
      config:{
        titleBar:{
          text:"Website Builder",
        },
      },
    })
  }

  const popupboxConfigwebsitebuilder = {
    titleBar: {
      enable: true,
      text: "Website Builder."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // City Guide App
  const openPopupboxCrypto = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={Crypto} alt="Crypto App Project..." />
        <p>A crypto currency app.</p>

        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://sjcryptoapp.netlify.app/", "_blank")}>https://sjcryptoapp.netlify.app/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Shenalsj/crypto_app", "_blank")}>https://github.com/Shenalsj/crypto_app</a>
      </>
    )
    PopupboxManager.open({ content })
    PopupboxManager.update({
      content,
      config:{
        titleBar:{
          text:"Crypto App",
        },
      },
    })
  }

  const popupboxConfigCrypto = {
    titleBar: {
      enable: true,
      text: "Crypto App project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Portfolio Project
  // const openPopupboxPortfolio = () => {
  //   const content = (
  //     <>
  //       <img className="portfolio-image-popupbox" src={portfolio} alt="Portfolio Project..." />
  //       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
  //       <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://portfolio-rea-and-material-ui.herokuapp.com/", "_blank")}>https://portfolio-rea-and-material-ui.herokuapp.com/</a>
  //       <br />
  //       <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/portfilio", "_blank")}>https://github.com/8020Coding/portfilio</a>
  //     </>
  //   )
  //   PopupboxManager.open({ content })
  // }

  // const popupboxConfigPortfolio = {
  //   titleBar: {
  //     enable: true,
  //     text: "Poftfolio React and Material UI project."
  //   },
  //   fadeIn: true,
  //   fadeInSpeed: 500
  // }

  // Task Manager React and Redux Project
  // const openPopupboxTaskManager = () => {
  //   const content = (
  //     <>
  //       <img className="portfolio-image-popupbox" src={taskManager} alt="Task Manager React and Redux Project..." />
  //       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
  //       <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://react-redux-task-manager.herokuapp.com/", "_blank")}>https://react-redux-task-manager.herokuapp.com/</a>
  //       <br />
  //       <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/task-manager", "_blank")}>https://github.com/8020Coding/task-manager</a>
  //     </>
  //   )
  //   PopupboxManager.open({ content })
  // }

  // const popupboxConfigTaskManager = {
  //   titleBar: {
  //     enable: true,
  //     text: "Task Manager React and Redux project."
  //   },
  //   fadeIn: true,
  //   fadeInSpeed: 500
  // }


  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxwebsitebuilder}>
            <img className="portfolio-image" src={websitebuilder} alt="Netflix Clone Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxCrypto}>
            <img className="portfolio-image" src={Crypto} alt="Crypto Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            
          </div>
          {/* - */}
          {/* <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img className="portfolio-image" src={portfolio} alt="Portfolio React and Material UI Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div> */}
          {/* - */}
          {/* <div className="portfolio-image-box" onClick={openPopupboxTaskManager}>
            <img className="portfolio-image" src={taskManager} alt="Task Manager React and Redux Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div> */}
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigwebsitebuilder} />
       <PopupboxContainer {...popupboxConfigCrypto} />
      {/* <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigTaskManager} /> */}
    </div>
  )
}

export default Pofrfolio;
