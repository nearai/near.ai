import React from 'react'


class LandingThank extends React.Component {
    render() {
        return (
            <div id="popupcontainer">
                <div id="popup">
                    <p className="close" onClick={this.props.onClose}>X</p>
                    <div id="building"><img src="building_blocks.svg" /></div>
                    <h2>Thank you! We will reach out to you shortly.</h2>
                </div>  
            </div>
        )
    }
}

export default LandingThank
