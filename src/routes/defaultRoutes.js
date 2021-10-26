import { Router } from "express";

const defaultRouter = new Router();

defaultRouter.get('/', (req, res) => {
/*  
    if(!cookie || !session){
        res.redirect('/login')
    }else{
        res.render('home')
    }
*/
    res.redirect('/login')
})

defaultRouter.get('/login', (req, res) => {
    res.render('loginForm')
})

export { defaultRouter }