import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'

const Index = ({ location }) => (
    <Layout location={location}>
    <section className="text-left">
    <div className="container">
        <h2 className="section-heading">Working at NEAR</h2>
        <p>NEAR's mission is to give the power of programming to everyone.</p>
        <p>We are building a service that enables creating feature-rich mobile apps without writing a single line of code, by hand drawing a sketch of the interface, and explaining the functionality with natural language. The rest is handled by NEAR's proprietary technology.</p>
    </div>
    <div className="container">
        <p className="lead text-muted">Apply at <a href="mailto:careers@near.ai">careers@near.ai</a></p>
        <h2>Current Job Openings At NEAR</h2>
        <br />
        <p>
            <Link className="lead" to="/careers/research_scientist/">Research Scientist</Link><br />
            San Francisco, CA
        </p>
        <p>
            <Link className="lead" to="/careers/software_engineer/">Software Engineer</Link><br />
            San Francisco, CA
        </p>
        <p>
            <Link className="lead" to="/careers/frontend_engineer/">Frontend Engineer</Link><br />
            San Francisco, CA
        </p>
    </div>
    </section>
    </Layout>
)

export default Index
