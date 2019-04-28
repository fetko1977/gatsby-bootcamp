import React from 'react'
import { Link } from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
        <Head title="About" />
            <h1>About</h1>
            <p>I'm Fetko from Rousse. I'm a frontend developer in S1.</p>
            <p>If you want to reach me - <Link to="/contact">Please click here.</Link></p>
        </Layout>
    )
}

export default AboutPage