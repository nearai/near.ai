import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import LandingPage from '../components/LandingPage'

class Excel extends React.Component {
    render() {
        const steps = [
            { image: "/1.png", text: "Connect your existing online spreadsheet (Google, Excel etc)" },
            { image: "/2.png", text: "Describe connection between spreadsheet and UI" },
            { image: "/3.png", text: "Launch a fully functioning mobile app using our AI technology" },
        ];
        return (
            <DocumentTitle title={ config.siteTitle }>
                <LandingPage landingKey="excel" title="Make an app using data from your spreadsheets." subtitle="No code required." steps={steps} main_image="/spreadsheet.svg" />
            </DocumentTitle>
        )
    }
}

Excel.propTypes = {
    route: React.PropTypes.object,
}

export default Excel
