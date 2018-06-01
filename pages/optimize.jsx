import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import LandingPage from '../components/LandingPage'

class Optimize extends React.Component {
    render() {
        const steps = [
            { image: "/1.png", text: "Automate the problems you have in your life" },
            { image: "/2.png", text: "More efficiently organize your daily processes" },
            { image: "/3.png", text: "Build your own automation app: fitness, nutrition-tracking, or any topic of your choice" },
        ];
        return (
            <DocumentTitle title={ config.siteTitle }>
                <LandingPage landingKey="optimize" title="Engineer your life." subtitle="More efficiently organize your life." steps={steps} main_image="/mobile_app.svg" />
            </DocumentTitle>
        )
    }
}

Optimize.propTypes = {
    route: React.PropTypes.object,
}

export default Optimize
