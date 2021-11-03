
const Ssr = (props) => {
    return (
        <>
            <h1> </h1>
            <pre> {JSON.stringify(props, null, 2)} </pre>
        </>
    )
}

export async function getServerSideProps(){
    return{
        props:{
            date: new Date().getTime(),
            name: 'renatoDomingues'
        }
    }
}

export default Ssr