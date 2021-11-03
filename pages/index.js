
import { useState, useEffect } from 'react'
import useSWR from 'swr'
import Link from 'next/link'

/*
// conceito 01, pois é uma pagina estatica
const Home = () => {
    return <h1> Olá DevPleno!</h1>
}
*/

// conceito 02, pois podemos mesclar uma pagina ESTATICA com uma pagina DINAMICA
const Home = () => {
    //vai ser rodado só no cliente, no browser, esse trecho pequeno abaixo é dinamica
    const [ count, setCount ] = useState(0)
    useEffect(() => {
        setInterval(() => {
            setCount((old) => old +1)
        }, 1000)
    }, [])

    //const data = await fetch('http://jsonplaceholder.typicode.com/users')
    const { data } = useSWR('http://jsonplaceholder.typicode.com/users')
    return (
        <>
            <h1> Olá DevPleno! {count} </h1>
            <div>
                <Link href="/ssr"> 
                    <a> SSR </a> 
                </Link>
                <br/>
                <Link href="/blog"> 
                    <a> Blog (SSG) </a> 
                </Link>
            </div>
            <pre> {JSON.stringify(data, null, 2)} </pre>
        </>
    )
}

export default Home