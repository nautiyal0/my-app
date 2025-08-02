import React from 'react'
import PropTypes from 'prop-types'
// import{a} from 'react-router-dom'


const Navbar = (props) => {
  return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}  `}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#">{props.title}</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-a active mx-5" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-a" href="/about">{props.aboutText}</a>
        </li>

      </ul>
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className="form-check-label " htmlFor="switchCheckDefault">{props.mode==='light'?"Enable dark Mode":"Enable Light Mode"}</label>
</div>
    </div>
  </div>
</nav>
  )
}

export default Navbar

Navbar.propTypes = {title:PropTypes.string,
  aboutText:PropTypes.string
}

Navbar.defaultProps = {
  title:'Set title here',
  aboutText:'About text heree'
}