import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import LandingPopup from '../components/LandingPopup'


class SiteIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {showPopup: false}
    }
    onFormSubmit(event) {
        this.setState({showPopup: true})
        event.preventDefault()
    }
    render() {
        return (
            <DocumentTitle title={ config.siteTitle }>
            <div id="landing">
                <div id="text">
                    <h1>Design and build a mobile app from scratch with Mobility.</h1>
                    <p>No experience required.</p>

                    <p><img src="1.svg" /> Upload your sketches, which will be rendered into designs</p>
                    <p><img src="2.svg" /> Use simple language to describe what you want to build, our platform will handle the rest</p>
                    <p><img src="3.svg" /> Launch a fully functioning mobile app using our proprietary technology</p>

                        <form action="" method="post" id="" name="" className="validate" noValidate onSubmit={(event) => { this.onFormSubmit(event) }}>
                        <div>
                            <label htmlFor="mce-EMAIL">Get early access</label><br />
                            <input type="email" value="" name="EMAIL" className="email" placeholder="email address" required />
                            <input type="submit" value="Submit" name="Submit" id="subscribe" className="button" />
                        </div>
                    </form>
                </div>
                <div id="app">
                    <img src="mobile_app.svg" />
                </div>
                {this.state.showPopup && <LandingPopup />}
            </div>
            </DocumentTitle>
        )
    }
}

SiteIndex.propTypes = {
    route: React.PropTypes.object,
}

export default SiteIndex
