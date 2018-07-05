import React from 'react'

import Layout from '../components/layout'
import illia from '../images/illia.png'
import alex from '../images/alex.png'

const About = ({ location }) => (
    <Layout location={location}>
        <div className="container">
            <section className="text-center">
                <div className="container">
                    <h2 className="section-heading">Our mission is to give power of programming to everyone.</h2>
                    <hr className="primary" />
                        <p className="lead text-muted">We belive that programming should be as easy as talking to the computer.
    And we belive this will unlock advances in all areas of humanity.</p>
                        <p className="lead text-muted">Imagine how much faster can cancer research go, if the domain experts instead of having meetings with engineers could just directly ask computer to analyze required data streams.
                        Businesses won't need to wait for a crucial feature in the third-party SaaS while doing something manually.
    In the future they will be able to quickly build their own solution tailored to their needs.</p>
                        <p className="lead text-muted">"Software is eating the world" said Marc Andreessen, and we are on the mission to give the power of this transformation to everyone.</p>
  </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="section-heading">Team </h2>
                                <hr className="primary" />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={alex} alt="Alex" height="150px" />
        </div>
                            <div className="col-md-8 text-left">
                                <p className="lead text-muted">Alex Skidanov, CEO, co-founder</p>
                                <p className="lead text-muted">Previously Director of Engineering at MemSQL, ex-Microsoft.</p>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-md-3">
                                <img src={illia} alt="Illia" height="150px" />
        </div>
                            <div className="col-md-8 text-left">
                                <p className="lead text-muted">Illia Polosukhin, CTO, co-founder</p>
                                <p className="lead text-muted">Previously Engineering Manager at Google Research, Natural Language Researcher, major TensorFlow contributor.</p>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    </Layout>
)

export default About
