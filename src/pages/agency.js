import React from 'react'
import request from 'superagent'

import Layout from '../components/layout'
import gears from '../images/icons-8-gears-64.png'
import average from '../images/icons-8-average-2-64.png'
import timer from '../images/icons-8-timer-64.png'

const SERVER_URL = 'https://app.near.ai/agency_quote'

class Agency extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: '', email: '', description: '', phone: '', details: '', company: ''}
    }
    scrollToQuote = () => {
        window.scrollTo(0, this.quote.offsetTop)
    }
    onSubmit = (event) => {
        request.post(SERVER_URL).type('form').send({
            name: this.state.name,
            email: this.state.email,
            company: this.state.company,
            phone: this.state.phone,
            details: this.state.details,
        }).then(() => {
            window.location = '/'
        })
    }
    onNameChange = (event) => this.setState({name: event.target.value})
    onEmailChange = (event) => this.setState({ email: event.target.value })
    onCompanyChange = (event) => this.setState({ company: event.target.value })
    onPhoneChange = (event) => this.setState({ phone: event.target.value })
    onDetailsChange = (event) => this.setState({ details: event.target.value })
    render() {
        return (
            <div>
                <Layout location={this.props.location}>
                <div id="agency-landing">
                    <div className="jumbatron">
                        <h1 className="title">Develop an app without headache</h1>
                        <div className="subtitle-holder">
                            <p className="subtitle">We handle the end-to-end process of developing a mobile app, from concept to design, to prototype, to backend development, using a highly optimized process.</p>
                        </div>
                        <button onClick={this.scrollToQuote}>Get a Quote</button>
                    </div>
                    <div className="badges">
                        <div className="badge">
                            <img src={gears} alt="Quality" />
                            <p className="badge-title">Quality</p>
                            <p className="badge-subtitle">Best in class engineers</p>
                        </div>
                        <div className="badge">
                            <img src={average} alt="Affordability" />
                            <p className="badge-title">Affordability</p>
                            <p className="badge-subtitle">We’ll work with your budget</p>
                        </div>
                        <div className="badge">
                            <img src={timer} alt="Efficiency" />
                            <p className="badge-title">Efficiency</p>
                            <p className="badge-subtitle">Timely execution & delivery</p>
                        </div>
                    </div>
                    <div className="quote" ref={elem => (this.quote = elem)}>
                        <h2>Get a Quote</h2>
                        <div className="form">
                            <div className="">
                                <input name="name" placeholder="Your Name*" value={this.state.name} onChange={this.onNameChange} />
                                <input name="email" placeholder="Email*" value={this.state.email} onChange={this.onEmailChange} />
                            </div>
                            <div className="">
                                <input name="company" placeholder="Company / Organization" value={this.state.company} onChange={this.onCompanyChange} />
                                <input name="phone" placeholder="Phone*" value={this.state.phone} onChange={this.onPhoneChange} />
                            </div>
                            <div className="">
                                <p>Project Details*</p>
                                <textarea name="details" placeholder="Please describe your requirements for your project in as much details as you can" value={this.state.details} onChange={this.onDetailsChange} />
                            </div>
                            <button onClick={this.onSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </Layout>
            </div>
        )
    }
}

export default Agency