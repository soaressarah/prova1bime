//...baixar todos os pacotes presentes no https://tiipos.github.io/2017.js.arquivos_texto.html

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
	txto.intervalos[0]; 

	//Para pegar a cadeia inteira, já que se trata de um array:
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
 			}
 		}
	}
	else if(extensão.toString() == "xml"){
		var variaveis;
		lerXMLComXml2Js(txt, function(err, result) {
			variaveis = result.intervalos.inter[0].valores[0].toString();
			//var vetor = [variaveis];//um vetor de variaveis
			//ex: alert(array[0]);

			var numerodavez1 = variaveis.split(",");
			var i = 0;
			for(i; variaveis.length; i++){
				console.log(numerodavez1[i]);
				if(variaveis[i-1] == variaveis[i]-1){
					console.log("-------------------");
				}
				else if(numerodavez1[i] == 150) break;//erro ->variaveis.length(não funciona)
			}
		});
	}

	else if(extensão.toString() == "csv"){
		//necessário para funcionamento da função, fs.readFile()...
		var fs = require('fs');
		var csv = require('csv-string');
		var resultado;

			fs.readFile(txt, 'utf8', (err, data) => {
			    resultado = csv.parse(data);
			    var l = 0;
			    for(l; resultado.length; l++){
			    	if(resultado[0][l-1] == resultado[0][l]-1){
			    	console.log(resultado[0][l]);
			    	}
			    	else if(resultado[0][l-1] != resultado[0][l]-1){
			    		console.log("---");
			    		console.log(resultado[0][l]);	
			    	}
			    	else if(resultado[0][l] == 150) break;//erro p/ stop
			    }
			});	
	}
}
/*
	vai ficar assim
	(json, xml, csv(falta))
	100, 101, 102, 103, 104, 105, 
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
