import React from 'react'

import Job from '../../components/job'

const SWE = ({ location }) => (
    <Job 
        location={location} 
        title="Software Engineer" 
        description="We are looking for a software engineer who will be responsible for bringing no coding world into user’s hands. This involves touching various layers of the stack: from building backend infra/services, to developing specific algorithms and improving ML models, to designing the end-user UX that help solve real world use cases."
        extra="Knowledge of machine learning or data science is very welcomed and will be directly applied."
    >
        <ul>
            <li>full stack development experience (setting up Cloud infrastructure, building API / Services, developing frontend)</li>
            <li>proficient in Python, with experience using Tornado or Flask</li>
            <li>knowledge of Javascript ES6 and React</li>
        </ul>
    </Job>
)

export default SWE
