import React from 'react'
import {Link} from 'gatsby'

import Research from '../../components/research'

const Index = ({ location }) => (
    <Research location={location} slug="publications">
        <div className="container">
            <h2 className="section-heading">Publications</h2>
            <hr className="primary" />
            <article>
                <div className="container">
                    <header>
                        <p className="lead">NAPS: Natural Program Synthesis Dataset</p>
                        <p><b>Authors:</b> <span className="text-muted">M. Zavershynskyi, A. Skidanov, I. Polosukhin</span></p>
                    </header>
                    <footer>
                        <a href="https://arxiv.org/abs/1807.03168" className="px-2"> > View publication</a>
                        <a href="https://arxiv.org/pdf/1807.03168.pdf" className="px-2"> > Download publication</a>
                        <Link to="/research/naps" className="px-2"> > Dataset & Leaderboard</Link>
                    </footer>
                </div>
            </article>
            <hr />
            <article>
                <div className="container">
                    <header>
                        <p className="lead">Towards Specification-Directed Program Repair</p>
                        <p><b>Authors:</b> <span className="text-muted">R. Shin, I. Polosukhin, D. Song</span></p>
                    </header>
                    <footer>
                        <a href="https://openreview.net/forum?id=B1iZRFkwz" className="px-2"> > View publication</a>
                        <a href="https://openreview.net/pdf?id=B1iZRFkwz" className="px-2"> > Download publication</a>
                    </footer>
                </div>
            </article>
            <hr />
            <article>
                <div className="container">
                    <header>
                        <p className="lead">Neural Program Search: Solving Programming Tasks from Description and Examples</p>
                        <p><b>Authors:</b> <span className="text-muted">I. Polosukhin, A. Skidanov</span></p>
                    </header>
                    <footer>
                        <a href="https://arxiv.org/abs/1802.04335" className="px-2"> > View publication</a>
                        <a href="https://arxiv.org/pdf/1802.04335.pdf" className="px-2"> > Download publication</a>
                        <a href="/articles/2018-05-07-Neural-Program-Search-Paper/"> > Read the blog</a>
                    </footer>
                </div>
            </article>
        </div>
    </Research>
)

export default Index
