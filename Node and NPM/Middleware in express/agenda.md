5 TYPES OF MIDDLEWARE:

1- APPLICATION LEVEL MIDDLEWARE - APP.USE((REQ, RES,NEXT)=>{
})

2- ROUTER LEVEL MIDDLEWARE - ROUTER.USE((REQ, RES, NEXT)=>{
})

3- ERROR HANDLING MIDDLEWARE - app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

4- THIRD PARTY MIDDLEWARE - USING NPM INSTALL WE CAN USE THEM

5- STATIC MIDDLEWARE - FOR SERVING STATIC HTML FILES PRESENT IN TEMPLATES FOLDER

MIDDLEWARES ARE BASICALLY CODE THAT ARE EXECUTED BEFORE THE ACTUAL REQUEST. THEY ARE USED TO MODIFY BOTH THE REQUEST AND RESPONSE. WE CAN ALSO MAKE THEM ROUTE SPECIFIC SO THAT WE CAN USE THEM FOR SPECIFIC ROUTES FOR DIFFERENT PURPOSES.