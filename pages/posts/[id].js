
import { useState } from "react"

const Post = (props) => {

    const [ show, setShow ] = useState(false)

    return(
        <>
            <h1> SSG (Post) {props.post?.title} </h1>
            <button onClick={() => setShow((old) => !old)}> Toggle </button>
            {
                show && <p> {props.posts.userId} </p>
            }            
        </>
    )
}

export async function getStaticProps( {params} ) {

    const post = await fetch('https://jsonplaceholder.typicode.com/posts/'+params.id)
    const postData = await post.json()
    
    return{
        props: {
            date: new Date().getTime(),
            name: 'renatoDomingues',
            id: params.id,
            posts: postData
        },
        revalidate: 60,
    }
}

export async function getStaticPaths(){

    const posts = await fetch('http://jsonplaceholder.typicode.com/posts')
    const postsData = await posts.json()

    const paths = postsData.map(post => {
        return {
            params: {
                id: post.id.toString(),
            }
        }
    })

    return{
        paths: paths, //[{ params: { id: '1'}}, { params: { id: '5'} }],
        fallback: 'blocking',
    }
}

export default Post