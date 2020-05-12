import React from 'react';

const Community = () => {
    return (
    <div className='fr-community'>
        <section>
            <h4>Libraries</h4>
            <ul>
                <li><a href='https://sap.github.io/fundamental-styles/'>Fundamental Library <strong>Styles</strong></a></li>
                <li><a href='https://sap.github.io/fundamental-ngx/'>Fundamental Library for <strong>Angular</strong></a></li>
                <li><a href='https://sap.github.io/fundamental-react/'>Fundamental Library for <strong>React</strong></a></li>
                <li><a href='https://sap.github.io/fundamental-vue/'>Fundamental Library for <strong>Vue</strong></a></li>
            </ul>
        </section>
        <section>
        <h4>Community</h4>
            <ul>
                <li><a href='https://github.com/sap/fundamental-styles'><img src='./assets/github.png' alt='github logo'/>github.com/sap/fundamental-styles</a></li>
                <li><a href='https://twitter.com/fundamental_lib'><img src='./assets/twitter.png' alt='twitter logo'/>twitter.com/fundamental_lib</a></li>
                <li><a href='https://join.slack.com/t/ui-fundamentals/shared_invite/enQtNTIzOTU0Mzc2NTc5LWQzZWI5MWFhYjE5OTc4YzliN2JhOTc1ZjQxZTg1YjZiMWZiYzRkNjMwYzgyMmFkYmNhZDVjMWE5MDIzOWEzMmM'>
                    <img src='./assets/slack.png' alt='slack logo'/>ui-fundamentals-slack.com</a></li>
                <li><a href='https://www.linkedin.com/company/sap-graph/'><img src='./assets/linkedin.png' alt='linkedin logo'/>linkedin.com/company/sap-graph/</a></li>
            </ul>
        </section>
    </div>
    )
}

Community.displayName = 'Community';

export default Community;
