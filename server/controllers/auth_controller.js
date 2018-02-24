

let id = 1;

module.exports={
    login: (req, res, next)=>{
        const { session } = req
        const { username, password } = req.body

        const user = users.find( user => user.username === username && user.password === password)

        if ( user ) {
            session.user.username = user.username;
            res.status(200).send(session.user)
        
        }else {
            res.status(500).send('Unauthorized.')
        }
    },
    register: (req, res, next)=>{
        console.log(req.body)
        const { session } = req
        const { username, password } = req.body //Creating new variables by destructing items from req.body so the need to type in example: req.body.username can be shorten to simply 'username'.

        users.push({ id, username, password}) //This is pushing a new username, password, and a unique id onto the exisiting user array. The Id is unique because each increment increases the id var by 1.
        id++

        session.user.username = username //accessing object and reassignin
        
        res.status(200).send(session.user) // Returning updated infromation

    },
    signout: (req, res, next)=>{
        const { session } = req
        session.destroy()
        res.status(200).send( req.session )

    },
    getUser: (req, res, next)=>{
        const { session } = req
        res.status(200).send( session.user ) 

    }


}