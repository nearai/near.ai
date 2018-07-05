import React from 'react'

import Layout from '../components/layout'
import LandingPage from '../components/LandingPage'
import step1 from '../images/1.png'
import step2 from '../images/2.png'
import step3 from '../images/3.png'
import sync from '../images/sync.svg'

class Integration extends React.Component {
    render() {
        const steps = [
            { image: step1, text: "Automate your manual tasks on the go" },
            { image: step2, text: "Integrate the tools you use so you can be more productive" },
            { image: step3, text: "Replace your repetitive tasks with one tool that does it all" },
        ];
        return (
            <Layout location={this.props.location}>
                <LandingPage landingKey="integration" title="Make your workflow smoother." subtitle="" steps={steps} main_image={sync} />
            </Layout>
        )
    }
}

export default Integration
