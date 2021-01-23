//Método 1 de criação de formulário
/*
function meuEscopo(){
 const form = document.querySelector('.form');
 
 form.onsubmit= function (evento) {
      evento.preventDefault();
 
   alert('Enviado com sucesso!')
   console.log('Foi enviado');
 };
}   
    meuEscopo();
*/
  // Metodo 2 Criaçao de formulário

   
  /*function meuEscopo(){
      const form = document.querySelector('.form');
 
      let contador = 1;
 function recebeEventoForm (evento){
evento.preventDefault();
console.log(`Forme não foi enviado ${contador}`),
contador++;
 }

form.addEventListener('submit', recebeEventoForm);
  };


  meuEscopo();*/

  function meuEscopo() {
   const form = document.querySelector('.form');

   const resultado = document.querySelector('.resultado'); 

   const pessoas = []
   
function recebeEventoForm (evento){
evento.preventDefault();


const nome = form.querySelector('.nome');
const sobrenome = form.querySelector('.sobrenome');
const peso = form.querySelector('.peso');
const altura = form.querySelector('.altura');

//let grupo = [nome.value , sobrenome.value , peso.value];

//console.log(nome.value , sobrenome.value , peso.value, altura.value);

pessoas.push(
  {nome: nome.value,
    sobrenome: sobrenome.value,
    peso: peso.value,
    altura: altura.value
  });

console.log(pessoas);

resultado.innerHTML +=`<p><w> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</w></p>`

}

form.addEventListener('submit', recebeEventoForm);

}

meuEscopo();