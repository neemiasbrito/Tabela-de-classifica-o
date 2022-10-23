import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<h1>Tabela de classificação</h1>
    
<table style="width:100%">
  <thead>
    <tr>
      <th>Nome</th>
      <th>Vitórias</th>
      <th>Empates</th>
      <th>Derrotas</th>
      <th>Pontos</th>
      <th colspan=3>Ações</th>
    </tr>
  </thead>
  <tbody id="tabelaJogadores">

</table>
`


//          chave.  valor.
var neemias = { nome: "Neemias", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
var rosangela = { nome: "Rosangela", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };
var hadassa = { nome: "Hadassa", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

neemias.pontos = calculaPontos(neemias);
rosangela.pontos = calculaPontos(rosangela);
hadassa.pontos = calculaPontos(hadassa);

var jogadores = [neemias, rosangela, hadassa];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}