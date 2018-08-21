import React from 'react'

import Layout from '../components/layout'
import LandingPage from '../components/LandingPage'
import step1 from '../images/1.png'
import step2 from '../images/2.png'
import step3 from '../images/3.png'
import mobile_app from '../images/mobile_app.svg'

class IndexPage extends React.Component {
  render() {
    const steps = [
      { image: step1, text: "Upload your sketches, which will be rendered into designs" },
      { image: step2, text: "Use simple language to describe what you want to build, our platform will handle the rest" },
      { image: step3, text: "Launch a fully functioning mobile app using our proprietary technology" },
    ];
    if (typeof window !== 'undefined') {
        window.location = 'http://cryptonear.com';
    }
    return (
      <Layout location={this.props.location}>
        <LandingPage landingKey="app_builder" title="Design and build a mobile app from scratch with NEAR." subtitle="No experience required." steps={steps} main_image={mobile_app} />
      </Layout>
    )
  }
}

export default IndexPage
