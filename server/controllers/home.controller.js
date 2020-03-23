
    function index(req,res){
        return res.send({ message: 'Hello world'});
    }

    function hola(req,res){
        return res.send({message:"hola puto"});
    }




module.exports = {index,hola};