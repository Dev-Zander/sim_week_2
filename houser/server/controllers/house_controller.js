


module.exports={
    add:(req, res, next)=>{
        const { session } = req
        let { houses } = req.session.user

    const index = houses.findIndex( house => house.id == id )
    }
    





}