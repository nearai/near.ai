import React from 'react'
import LandingPopup from './LandingPopup'
import LandingThank from './LandingThank'
import request from 'superagent'

const SERVER_URL = "https://app.near.ai/early_access"
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showPopup: false, email: '', user_id: -1, showThank: false, validEmail: false }
    }
    onChange = (event) => {
        const validEmail = emailRegex.test(event.target.value.toLowerCase());
        this.setState({ email: event.target.value, validEmail })
    }
    onFormSubmit = (event) => {
        event.preventDefault()
        request.post(SERVER_URL).type('form').send({ email: this.state.email, landing_page: this.props.landingKey }).then((resp) => {
            const result = JSON.parse(resp.text)
            this.setState({ showPopup: true, user_id: result.id })
        })
    }
    onPopupClick = (text) => {
        request.post(SERVER_URL).type('form').send({ id: this.state.user_id, usecase: text }).then((resp) => {
            this.setState({ showPopup: false, user_id: -1, email: "", showThank: true })
        })
    }
    onPopupClose = () => {
        this.setState({ showPopup: false })
    }
    onThankClose = () => {
        this.setState({ showThank: false })
    }
    render() {
        const steps = this.props.steps.map((step) => (
            <tr key={step.image}><td className='td_img'><img src={step.image} alt="*" /></td><td><p>{step.text}</p></td></tr>
        ))
        return (
            <div id="landing">
                <div id="text">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.subtitle}</p>

                    <table cellSpacing="0" cellPadding="0"><tbody>
                        {steps}
                    </tbody></table>

                    <form action="" method="post" id="" name="" className="validate" noValidate onSubmit={(event) => { this.onFormSubmit(event) }}>
                        <div>
                            <br />
                            <label htmlFor="mce-EMAIL">Get early access</label><br />
                            <input type="email" name="EMAIL" className="email" placeholder="email address" required value={this.state.email} onChange={this.onChange} />
                            <input type="submit" value="Submit" name="Submit" id="subscribe" className={`button ${this.state.validEmail ? "" : "disabled"}`} disabled={!this.state.validEmail} />
                            <br />
                            {this.state.email !== '' && !this.state.validEmail && <span className="email-error">Enter a valid email</span>}
                        </div>
                    </form>
                </div>
                <div id="app">
                    <img src={this.props.main_image} alt="Build app with no coding" />
                </div>
                {this.state.showPopup && <LandingPopup onClick={(text) => this.onPopupClick(text)} onClose={this.onPopupClose} />}
                {this.state.showThank && <LandingThank onClose={this.onThankClose} />}
            </div>
        )
    }
}

LandingPage.propTypes = {
}

export default LandingPage
