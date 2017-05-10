/*
Dado uma lista de números inteiros, agrupe a lista em um conjunto de intervalos
Exemplo:
Entrada: 100, 101, 102, 103, 104, 105,
 	     110, 111, 113, 114, 115,
 	     150
Saída: [100-105], [110-111], [113-115], [150]
*/

var txt = __dirname + '/inter.json';

var json = lerJSONComRequire(txt);

//ta lendo
if(txt == null){
	console.log("erro");
	process.exit(-1);
}
else{
	console.log(json);
	var vetor = json;

	var stringjson = json.toString();
	var separador = stringjson.split(",");
	console.log(vetor);
	//json.length();

	console.log("----------------");
    //parseInt(arquivo);

	//process.exit(0);	
}

function lerJSONComRequire(txt) {
    var json = require(txt);
    // console.log(json);
    return json;
}