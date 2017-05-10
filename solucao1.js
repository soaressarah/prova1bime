//baixar todos os pacotes presentes no https://tiipos.github.io/2017.js.arquivos_texto.html

var arquivo = process.argv[2];
var separador = arquivo.split(".");
var extensão = separador[separador.length -1];//nome da extensão do arquivo

var txt = __dirname + "/" + arquivo;

if(txt == null){
	console.log("erro");
	process.exit(-1);
}
else{
	if(extensão.toString() == "json"){
	//abrir arquivo
	var json = lerJSONComRequire(txt);

	var txto = json;
	//pegar o 1 valor
	txto.intervalos[0]; //100
	//var separador = txto.split(",");

	//Para pegar a cadeia inteira, você pode simplesmente concatenar tudo usando join com seu concatenador, já que se trata de um array:
	txto.intervalos.join(",");

	for (var i in txto.intervalos) {

   		if(txto.intervalos[i-1] == txto.intervalos[i]-1){
		console.log(txto.intervalos[i]); //envia pro console os valores
 		}
 		else{
 			if(txto.intervalos[i-1] != txto.intervalos[i]-1){
 				console.log("-------------- ");
 				console.log(txto.intervalos[i]);
 			}
 			else{console.log(txto.intervalos[i]);}
 			//console.log("-------------- ");
 			}
 		}
	}
	else if(extensão.toString() == "xml"){
	    
		//ler arquivo xml
		lerXMLComXml2Js(txt, function(err, result) {
			
			console.log(result.intervalos.inter[0].valores[0]);
			console.log("------------");
			var variaveis = result.intervalos.inter[0].valores[0];
			txto.intervalos[0];
			txto.intervalos.join(",");
		});
		
		//var txto = variaveis;
		
		//txto.intervalos[0]; //100
		

		//Para pegar a cadeia inteira, você pode simplesmente concatenar tudo usando join com seu concatenador, já que se trata de um array:
		/*txto.intervalos.join(",");

		for (var i in txto.intervalos) {

   		if(txto.intervalos[i-1] == txto.intervalos[i]-1){
		console.log(txto.intervalos[i]); //envia pro console os valores
 		}
 		else{
 			if(txto.intervalos[i-1] != txto.intervalos[i]-1){
 				console.log("-------------- ");
 				console.log(txto.intervalos[i]);
 			}
 			else{console.log(txto.intervalos[i]);}
 			//console.log("-------------- ");
 			}
 		}*/
	}
	
	else if(extensão.toString() == "csv"){
		console.log("arquivo csv");
	}		
}

	/*
	vai ficar assim
	100, 101, 102, 103, 104, 105, (ok)
	------------------
	110, 111,
	------------------
	113,114, 115,
	-----------------
	150
	*/

function lerJSONComRequire(txt) {
    var json = require(txt);
    // console.log(json);
    return json;
}

function lerXMLComXml2Js(arquivo, funcao) {
    var fs = require('fs');
    var xmlParser = require('xml2js').parseString;

    fs.readFile(arquivo, function(err, data) {
        xmlParser(data, funcao);
    });
}
