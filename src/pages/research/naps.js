import React from 'react'

import Research from '../../components/research'

const Index = ({ location }) => (
    <Research location={location} slug="naps">
        <div className="dataset-cover">
            <div className="container">
                <h1 className="title">NAPS</h1>
                <h2>Natural Program Synthesis Dataset</h2>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h3>What is NAPS?</h3>
                    <hr />
                    <p><b>NA</b>tural <b>P</b>rogram <b>S</b>ynthesis Dataset is a dataset of natural language descriptions of problems and programs solving them. The problem statements were collected via crowdsourcing and the program solutions were extracted from human-written solutions in programming competitions, accompanied by input/output examples. We propose using this dataset for the program synthesistasks aimed for working with real user-generated data.</p>
                    <a href="https://arxiv.org/abs/1807.03168" className="btn btn-outline-primary btn-block mb-2">NAPS paper (Zavershynskyi et al. '18)</a>

                    <h3 className="mt-4">Getting Started</h3>
                    <hr />
                    <p>We've built a few resources to help you get started with the dataset.</p>
                    <a href="https://goo.gl/WaBdbb" className="btn btn-outline-primary btn-block mb-2">Download dataset</a>
                    <p>For baseline models, evaluation and other tools check out GitHub.</p>
                    <a href="https://github.com/nearai/program_synthesis/tree/master/program_synthesis/naps" className="btn btn-outline-primary btn-block mb-2">Program Synthesis - NAPS</a>

                    <h3 className="mt-4">Have questions?</h3>
                    <hr />
                    <p>Ask us questions at contact@near.ai</p>
                </div>
                <div className="col-md-6">
                    <h3>Leaderboard</h3>
                    <table className="table table-striped leaderboard">
                        <thead>
                            <tr><th>Model</th><th>Acc</th><th>50% Acc</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Seq2Tree 
                                    <p className="institution">NEAR.ai</p>
                                    <a href="https://arxiv.org/abs/1807.03168">(Zavershynskyi et al. '18)</a>
                                </td>
                                <td><b>8.8</b></td><td><b>11.2</b></td>
                            </tr>
                            <tr>
                                <td>Seq2Seq</td><td>4.7</td><td>7.0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </Research>
)

export default Index
