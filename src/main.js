// Conta para calcular valor da sua hora no projeto
//
// By: danielhe4rt

var valorProjeto = parseInt(document.getElementById("#valorProjeto").value);
var diasEfetivos = parseInt(document.getElementById("#diasTrabalhados").value);
var horasDiarias = parseInt(document.getElementById("#tempoInvestido").value);
var diasFerias = parseInt(document.getElementById("#diasFerias").value);

var valorHora = 0;

function calculahora(){

	console.log("entrou na funcao");
	 valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) )

	 document.getElementById('#formfree').reset();
	 console.log(valorHora);
}
