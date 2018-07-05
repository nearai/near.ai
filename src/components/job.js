import React from 'react'

import Layout from './layout'

const Job = ({ title, description, children, extra, location }) => (
    <Layout location={location}>
        <section className="text-left">
        <div className="container">
            <h2 className="section-heading">Working at NEAR</h2>
            <p>NEAR's mission is to give the power of programming to everyone.</p>
            <p>We are building a service that enables creating feature-rich mobile apps without writing a single line of code, by hand drawing a sketch of the interface, and explaining the functionality with natural language. The rest is handled by NEAR's proprietary technology.</p>
        </div>
        <div className="container">
            <p className="lead text-muted">Apply at <a href="mailto:careers@near.ai">careers@near.ai</a></p>
        </div>
        <br />
        <article>
            <div className="container">
                <header>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </header>
                <footer>
                <p>The candidate must have:</p>
                {children}
                <p>{extra}</p>
                </footer>
            </div>
        </article>
        <div className="container">
            <p>The benefits of working for NEAR:</p>
            <ul>
                <li>Early stage company, with a lot of freedom to create and room for growth.</li>
                <li>An all-star multi-disciplinary tech team. We have major TensorFlow contributors, ICPC gold medalists, and several people with over 10 years of engineering experience.</li>
                <li>All standard things: free lunches, health/dental/vision.</li>
            </ul>
        </div>
        <br />
        <div className="container">
            <p className="lead text-muted">Apply at <a href="mailto:careers@near.ai">careers@near.ai</a></p>
        </div>
        </section>
    </Layout>
)

export default Job
