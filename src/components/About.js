import React from 'react'
import PropTypes from 'prop-types'

function About(props) {
  return (
    <div className='container-fluid' style={props.cssMode}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="p-4">{props.aboutHeading}</h1>
                </div>
                <div className="col-6 p-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptatibus expedita.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptatibus expedita.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptatibus expedita.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptatibus expedita.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptatibus expedita.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptatibus expedita.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptatibus expedita.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptatibus expedita.
                </div>
                <div className="col-6 p-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptatibus expedita.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptatibus expedita.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptatibus expedita.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptatibus expedita.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptatibus expedita.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptatibus expedita.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptatibus expedita.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptatibus expedita.
                </div>
            </div>
        </div>
    </div>
  )
}

About.propTypes = {
    aboutHeading: PropTypes.string.isRequired
}
About.defaultProps = {
    aboutHeading: "About Us Page Heading Write Here...."
}

export default About
