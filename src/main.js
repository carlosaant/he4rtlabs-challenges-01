// Conta para calcular valor da sua hora no projeto
//
// By: danielhe4rt


function calculahora(){

	let valorProjeto = parseInt(document.getElementById("valorProjeto").value, 10);
	let diasEfetivos = parseInt(document.getElementById("diasTrabalhados").value, 10);
	let horasDiarias = parseInt(document.getElementById("tempoInvestido").value, 10);
	let diasFerias = parseInt(document.getElementById("diasFerias").value, 10);
	let valorHora = 0 ;

	console.log("entrou na funcao");
	 valorHora = ((valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) )).toFixed(2);

	 console.log(valorHora);
}
