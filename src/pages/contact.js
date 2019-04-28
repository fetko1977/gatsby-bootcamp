import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
        <Head title="Contact" />
            <h1>Contact</h1>
            <p>Svetoslav Savov</p>
            <p><strong>Email: </strong>feddfriend77@gmail.com</p>
            <p><strong>Phone: </strong>+359894325963</p>
            <p><strong>LinkedIn: </strong><a href="https://www.linkedin.com/in/fetko/" target="_blank">Check my profile</a></p>
        </Layout>
    )
}

export default ContactPage