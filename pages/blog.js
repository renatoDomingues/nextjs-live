
import Link from 'next/link'

const Blog = ({ posts }) => {
    return(
        <>
            <h1> SSG </h1>
            <ul>
                {posts.map((post) => {
                    return (
                        <li> 
                            <Link href={'/posts/'+post.id}> 
                                <a> {post.title} </a>
                            </Link> 
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export async function getStaticProps(context) {

    const posts = await fetch('http://jsonplaceholder.typicode.com/posts')
    const postsData = await posts.json()

    return{
        props: {
            date: new Date().getTime(),
            name: 'renatoDomingues',
            posts: postsData,
        },
    }
}

export default Blog