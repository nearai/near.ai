import React from 'react'


export default class LandingPopup extends React.Component {
    render() {
        return (
            <div id="popup">
                <div id="building"><img src="building_blocks.svg" /></div>
                <h2>Hi! You caught us before we're ready.</h2>

                <p>We’re working hard to put on the finishing touches. To speed things up, let us know what you’re trying to build, and we will get back to you to learn more about your needs:</p>
                <textarea placeholder="What kind of app are you trying to build?" required></textarea>
                <p><input type="submit" value="Submit" name="Submit" id="subscribe" className="button" /></p>
            </div>            
        )
    }
}