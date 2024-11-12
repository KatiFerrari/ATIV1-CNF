
function exibirMensagemBoasVindas() { alert("Bem-vindo ao Meu Projeto!"); }

function mudarTitulo() { document.getElementById("titulo").innerText = "Título Alterado!"; }

document.body.onload = function() { let botao = document.createElement("button"); botao.innerText = "Clique para mudar o título"; botao.onclick = mudarTitulo; document.body.appendChild(botao); };



