require('dotenv').config();
const Server =require('./models/server');

const server = new Server();



server.listen(()=>{
    console.log('Servidor corriendo en el puerto ', process.env.PORT)
})

 
