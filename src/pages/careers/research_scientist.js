import React from 'react'

import Job from '../../components/job'

const RE = ({ location }) => (
    <Job 
        location={location} 
        title="Research Scientist" 
        description="We are looking for a research scientist who would be responsible for pushing research in program synthesis forward. That includes setting up ML experiments, developing new Deep Learning architectures and publishing papers."
        extra="Knowledge and practical experience with NLP and structured predictions is welcomed."
    >
        <ul>
            <li>great knowledge of ML fundamentals and ability to translate insights into code</li>
            <li>experience with machine learning frameworks (Tensorflow, Keras, PyTorch)</li>
            <li>knowledge of recent advances in Deep Learning (or alternatively very strong PL background)</li>
        </ul>
    </Job>
)

export default RE
