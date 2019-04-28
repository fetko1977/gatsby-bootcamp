import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Head from '../components/head'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql `
        query {
            allContentfulBlogPost(
                sort: {
                    fields: publishedDate,
                    order: DESC
                }
            ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `);
    console.log(data);

    return (
        <Layout>
            <Head title="Blog" />
            <h1>Blog</h1>
            <p>Post will be here</p>
            {
                data.allContentfulBlogPost.edges.length > 0 &&
                <ol className={blogStyles.posts}>
                    {
                        data.allContentfulBlogPost.edges.map((edge, index) => (
                            <li key={index} className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <h2>{edge.node.title}</h2>
                                    <p>{edge.node.publishedDate}</p>
                                </Link>
                            </li>
                        ))
                    }
                </ol>
            }
        </Layout>
    )
}

export default BlogPage