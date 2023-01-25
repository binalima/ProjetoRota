//carre ga o modulo HTTP e URL

var http=require('http');

var url= require('url');



//Função de callback para o servidor HTTP

var callback=function(request, response){

    //Define o cabeçalho (header) com o tipo de resposta    

    response.writeHead(200, {"Content-type":"text/plain; charset=utf-8"});

    //faz o parse url separado o caminho ( rota)    

    var parts =url.parse(request.url);

    //Verifica a rota    
    
    if( parts.path=="/"){
        response.end("Site Principal");
    
    }else if (parts.path=="/rota1"){

        response.end("Site da rota 1")

    }else if(parts.path=="/rota2"){

        response.end("site rota 2");

    }else if(parts.path=="/rota3"){

        response.end("site rota 3");

    }else{

        response.end("rota invalida");
}
}; 
var server = http.createServer(callback);
// Porta que o servidor vai escutarserver.listen(3000)//
server.listen(3000)

console.log("Servidor iniciado em http://localhost:3000/");