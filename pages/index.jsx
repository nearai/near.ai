import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import LandingPage from '../components/LandingPage'

class SiteIndex extends React.Component {
    render() {
        const steps = [
            { image: "1.png", text: "Upload your sketches, which will be rendered into designs" },
            { image: "2.png", text: "Use simple language to describe what you want to build, our platform will handle the rest" },
            { image: "3.png", text: "Launch a fully functioning mobile app using our proprietary technology" },
        ];
        return (
            <DocumentTitle title={ config.siteTitle }>
                <LandingPage key="app_builder" title="Design and build a mobile app from scratch with NEAR." subtitle="No experience required." steps={steps} main_image="mobile_app.svg" />
            </DocumentTitle>
        )
    }
}

SiteIndex.propTypes = {
    route: React.PropTypes.object,
}

export default SiteIndex
