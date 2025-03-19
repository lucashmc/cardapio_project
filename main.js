//Simulaçao de adiçao de itens de pedido
//Seleciona todos os botes que possuem a classe 'adicionar'
const botesAdicionar = document.querySelectorAll(".adicionar");

// Seleciona a lista onde itens do pedido serao exibidos
 const listaPedido = document.getElementById
 ('lista-pedido');

 // Seleciona o elemento que exibira o valor total do pedido

 const totalElemento = document.getElementById('total');

 //Cria variavel que armazena o total do pedido
 let total = 0;

 // Percorre totos os Botoes 'Adicionar'e adiciona um evento de clique em cada um 
 botesAdicionar.forEach((botao) => {
    botao.addEventListener('click',() => {
        const produto = botao.parentElement;
        const nome = produto.querySelector 
         ('h3').textContent;
         //Obtem o preço do produto, removendo o texto "R$" e coverte o valor para decimal
         const preco = parseFloat(produto.querySelector(".preco").textContent.replace("R$",""));

         //Obtem um novo item de lista <li> para adicionar o produto ao pedido
         const itemPedido = document.createElement("li");

         itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
          // Adiciona o item criado a lista de pedidos 
         listaPedido.appendChild(itemPedido);

      //atuliza o total de compra

       total += preco;

       totalElemento.textContent = `total: R$${total.toFixed(2)}`;





    });  
                 //Obtem e elemento pai do botao   
                 //Obtem o nome do produto a partir do texto da tag <h3>

});




// Simula finalizaçao do pedido
const botaoFinalizarPedido = document.getElementById("finalizar-pedido");

botaoFinalizarPedido.addEventListener("click",() =>{ 
    alert("Pedido finalizado com sucesso" + totalElemento.textContent);

    listaPedido.innerHTML ="";
     total = 0;
     totalElemento.textContent = `total: R$${total.toFixed(2)}`;

});