const inputItem = document.getElementById("input-item")

const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => {   //função de retorno
   evento.preventDefault();
   console.log(inputItem.value);
})