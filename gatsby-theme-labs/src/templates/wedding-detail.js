import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Layout } from 'theme-ui';

const WeddingDetailTemplate = () => {
    const data = useStaticQuery(graphql`
        query {
            allWeddingDetail(sort: { fields: startDate, order: ASC }) {
                nodes {
                    id
                    location
                    startDate
                    startTime
                }
            }
        }
    `)

    const details = data.allWeddingDetail.nodes[0];
    console.log(details);

    return(
        <Layout>
            <h1>Test</h1>
            <p>{details[0].location}</p>
            <p>{details[0].startDate}</p>
        </Layout>
    )
}

export default WeddingDetailTemplate;