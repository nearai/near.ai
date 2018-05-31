import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import LandingPopup from '../components/LandingPopup'
import LandingThank from '../components/LandingThank'
import request from 'superagent'

const SERVER_URL = "http://app.near.ai/early_access"
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class SiteIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {showPopup: false, email: '', user_id: -1, showThank: false, validEmail: false}
    }
    onChange = (event) => {
        console.log(validEmail)
        const validEmail = emailRegex.test(event.target.value.toLowerCase());
        this.setState({email: event.target.value, validEmail})
    }
    onFormSubmit = (event) => {
        event.preventDefault()
        request.post(SERVER_URL).type('form').send({ email: this.state.email }).then((resp) => {
            const result = JSON.parse(resp.text)
            this.setState({ showPopup: true, user_id: result.id })
        })
    }
    onPopupClick = (text) => {
        request.post(SERVER_URL).type('form').send({ id: this.state.user_id, usecase: text}).then((resp) => {
            this.setState({ showPopup: false, user_id: -1, email: "", showThank: true})
        })
    }
    onPopupClose = () => {
        this.setState({ showPopup: false })
    }
    onThankClose = () => {
        this.setState({ showThank: false})
    }
    render() {
        return (
            <DocumentTitle title={ config.siteTitle }>
            <div id="landing">
                <div id="text">
                    <h1>Design and build a mobile app from scratch with NEAR.</h1>
                    <p>No experience required.</p>

                    <table cellSpacing="0" cellPadding="0"><tbody>
                            <tr><td className='td_img'><img src="1.png" /></td><td><p> Upload your sketches, which will be rendered into designs</p></td></tr>
                            <tr><td className='td_img'><img src="2.png" /></td><td><p> Use simple language to describe what you want to build, our platform will handle the rest</p></td></tr>
                            <tr><td className='td_img'><img src="3.png" /></td><td><p> Launch a fully functioning mobile app using our proprietary technology</p></td></tr>
                    </tbody></table>

                        <form action="" method="post" id="" name="" className="validate" noValidate onSubmit={(event) => { this.onFormSubmit(event) }}>
                        <div>
                            <br />
                            <label htmlFor="mce-EMAIL">Get early access</label><br />
                            <input type="email" name="EMAIL" className="email" placeholder="email address" required value={this.state.email} onChange={this.onChange} />
                            <input type="submit" value="Submit" name="Submit" id="subscribe" className={`button ${this.state.validEmail ? "" : "disabled"}`} disabled={!this.state.validEmail} />
                            <br />
                            {this.state.email != '' && !this.state.validEmail && <span className="email-error">Enter a valid email</span>}
                        </div>
                    </form>
                </div>
                <div id="app">
                    <img src="mobile_app.svg" />
                </div>
                {this.state.showPopup && <LandingPopup onClick={(text) => this.onPopupClick(text)} onClose={this.onPopupClose} />}
                {this.state.showThank && <LandingThank onClose={this.onThankClose} />}
            </div>
            </DocumentTitle>
        )
    }
}

SiteIndex.propTypes = {
    route: React.PropTypes.object,
}

export default SiteIndex
