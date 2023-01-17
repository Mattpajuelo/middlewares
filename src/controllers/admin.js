module.exports={
    admin:(req,res)=>{
        let user=req.query.user
        return res.render('admin',{mensaje:"hola admin:"+user})
    }

}