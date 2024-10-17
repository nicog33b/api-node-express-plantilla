const mongoose = require('mongoose')




const ConnectDB = async ()=>{
try{
    mongoose.connect('mongodb://127.0.0.1:27017/myapp');
 console.log('Mongodb conectado')
}catch(error){
console.error('Erorr al conectarse a mongodb: ',error)
}
}

module.exports = ConnectDB;