const middleware = (req,res,next)=>{
    if(!req.query.age)
        req.send('Provide age');
    else if(req.query.age < 18)
        req.send('Under aged');
    else
        next();
};

module.exports = middleware;