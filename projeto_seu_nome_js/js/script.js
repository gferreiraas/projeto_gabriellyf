var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a função somar
  somar();

});


//Função somar
function somar() {

  //Captura o que está dentro do primeiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let Celsius = Number(document.getElementById("Celsius").value);

  //Captura o que está dentro do segundo input no formulário
  //Number - Transforma o texto capturado em Numero
  let Fahrenheit = (9*Celsius+160)/5

  //Aqui vai escrever no input "resultado_soma" o valor que está armazenado na variável "resultado_soma"
  document.getElementById("Fahrenheit").value = Fahrenheit;


}
