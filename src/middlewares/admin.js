module.exports=(req,res,next)=>{
    if (req.query.user==="Ada"||req.query.user==="Greta" ||req.query.user==="Vim"|| req.query.user==="Tim") {
        next()

    }else{
        res.render("index",{mensaje:"No tienes los privilegios para ingresar"})

    }
    }