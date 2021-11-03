
export default function handler(req, res){
    //res.end('Users!')
    res.end(JSON.stringify({ users: [{ id: 1 }] }))
}