import React from 'react'

import Job from '../../components/job'

const FE = ({ location }) => (
    <Job 
        location={location} 
        title="Frontend Engineer" 
        description="We are looking for a senior front end developer who will own end-to-end the development of the user-facing part of the service."
        extra=""
    >
        <ul>
            <li>at least 3 years of experience working with React</li>
            <li>experience of working with RESTful APIs</li>
            <li>good understanding of HTML, CSS, JavaScript and jQuery</li>
            <li>knowledge of Git</li>
        </ul>
    </Job>
)

export default FE
