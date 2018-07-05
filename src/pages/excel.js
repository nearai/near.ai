import React from 'react'

import Layout from '../components/layout'
import LandingPage from '../components/LandingPage'
import step1 from '../images/1.png'
import step2 from '../images/2.png'
import step3 from '../images/3.png'
import spreadsheet from '../images/spreadsheet.svg'

class Excel extends React.Component {
    render() {
        const steps = [
            { image: step1, text: "Connect your existing online spreadsheet (Google, Excel etc)" },
            { image: step2, text: "Describe connection between spreadsheet and UI" },
            { image: step3, text: "Launch a fully functioning mobile app using our AI technology" },
        ];
        return (
            <Layout location={this.props.location}>
                <LandingPage landingKey="excel" title="Make an app using data from your spreadsheets." subtitle="No code required." steps={steps} main_image={spreadsheet} />
            </Layout>
        )
    }
}

export default Excel
