import React from 'react'
import PropTypes from 'prop-types'

function Navbar(props) {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">{props.fsLink} <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">{props.ssLink}</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    <div className="custom-control custom-switch mx-4">
                        <input type="checkbox" className="custom-control-input" onClick={props.toggleMode} id="customSwitch1" />
                        <label className="custom-control-label" htmlFor="customSwitch1"><b>{props.mode}</b></label>
                    </div>
                </form>
            </div>
        </nav>
    </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    fsLink: PropTypes.string.isRequired,
    ssLink: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set Name",
    fsLink: "Set Links Name",
    ssLink: "Set Links Name"
}

export default Navbar