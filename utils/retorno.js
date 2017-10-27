
module.exports = function Response(status,ok,msg){

   let retorno = {
        "status": status,
        "ok": ok,
        "msg":msg
   }

  return retorno;

}
