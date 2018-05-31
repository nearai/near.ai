import React from 'react'


class LandingPopup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ""}
    }
    onChange = (event) => {
        this.setState({value: event.target.value})
    }
    render() {
        return (
            <div id="popupcontainer">
                <div id="popup">
                    <div id="building"><img src="building_blocks.svg" /><p className="close" onClick={this.props.onClose}>X</p></div>
                    <h2>Hi! You caught us before we're ready.</h2>

                    <p>We’re working hard to put on the finishing touches. To speed things up, let us know what you’re trying to build, and we will get back to you to learn more about your needs:</p>
                    <textarea placeholder="What kind of app are you trying to build?" value={this.state.value} onChange={this.onChange} required></textarea>
                    <p><input type="submit" value="Submit" name="Submit" id="subscribe" className="button" onClick={() => {this.props.onClick(this.state.value)}} /></p>
                </div>
            </div>
        )
    }
}

export default LandingPopup
