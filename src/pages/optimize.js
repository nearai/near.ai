import React from 'react'

import Layout from '../components/layout'
import LandingPage from '../components/LandingPage'
import step1 from '../images/1.png'
import step2 from '../images/2.png'
import step3 from '../images/3.png'
import mobile_app from '../images/mobile_app.svg'

class Optimize extends React.Component {
    render() {
        const steps = [
            { image: step1, text: "Automate the problems you have in your life" },
            { image: step2, text: "More efficiently organize your daily processes" },
            { image: step3, text: "Build your own automation app: fitness, nutrition-tracking, or any topic of your choice" },
        ];
        return (
            <Layout location={this.props.location}>
                <LandingPage landingKey="optimize" title="Engineer your life." subtitle="More efficiently organize your life." steps={steps} main_image={mobile_app} />
            </Layout>
        )
    }
}

export default Optimize
