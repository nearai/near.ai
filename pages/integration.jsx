import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import LandingPage from '../components/LandingPage'

class Integration extends React.Component {
    render() {
        const steps = [
            { image: "/1.png", text: "Automate your manual tasks on the go" },
            { image: "/2.png", text: "Integrate the tools you use so you can be more productive" },
            { image: "/3.png", text: "Replace your repetitive tasks with one tool that does it all" },
        ];
        return (
            <DocumentTitle title={ config.siteTitle }>
                <LandingPage landingKey="integration" title="Make your workflow smoother." subtitle="" steps={steps} main_image="/sync.svg" />
            </DocumentTitle>
        )
    }
}

Integration.propTypes = {
    route: React.PropTypes.object,
}

export default Integration
