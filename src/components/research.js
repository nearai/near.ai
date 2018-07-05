import React from 'react'
import { Link } from 'gatsby'

import Layout from './layout'

const Research = ({ children, location, slug }) => (
    <Layout location={location}>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <ul className="list-group">
                        <li className={location.pathname === '/research' ? "list-group-item list-group-item-action active" : "list-group-item"}><Link to="/research">Publications</Link></li>
                        <li className={location.pathname === '/research/naps' ? "list-group-item list-group-item-action active" : "list-group-item"}><Link to="/research/naps">NAPS Dataset</Link></li>
                    </ul>
                </div>
                <div className="col-md-9">
                    {children}
                </div>
            </div>
        </div>
    </Layout>
)

export default Research
