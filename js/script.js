//CABEÇALHO
let contElem = 0;
const maxElem = 3;

document.getElementById('tipoElem').addEventListener('change', function () {
  const tipo = this.value;
  document.getElementById('opTexto').style.display = tipo === 'texto' ? 'block' : 'none';
  document.getElementById('opImagem').style.display = tipo === 'imagem' ? 'block' : 'none';
  document.getElementById('opFigura').style.display = tipo === 'figura' ? 'block' : 'none';
});

document.getElementById('addElem').addEventListener('click', function () {
  if (contElem >= maxElem) {
    return;
  }
  const tipo = document.getElementById('tipoElem').value;
  const corTexto = document.getElementById('corTextoElem').value;
  const corFundo = document.getElementById('corFundoElem').value;
  const corBorda = document.getElementById('corBordaElem').value;
  const espessura = document.getElementById('espessuraFigura').value;
  const largura = document.getElementById('larguraElem').value;
  const altura = document.getElementById('alturaElem').value;
  const alinhamento = document.getElementById('alinhamentoElem').value;

  const header = document.createElement('div');
  header.style.color = corTexto;
  header.style.backgroundColor = corFundo;
  header.style.width = largura + 'px';
  header.style.height = altura + 'px';
  header.style.textAlign = alinhamento;

  if (tipo === 'texto') {
    const texto = document.getElementById('textoInput').value;
    const tamanho = document.getElementById('tamanhoTexto').value;
    const p = document.createElement('p');
    p.textContent = texto;
    p.style.fontSize = tamanho + 'px';
    header.appendChild(p);
    header.style.border = `${espessura}px solid ${corBorda}`;

  } else if (tipo === 'imagem') {
    const url = document.getElementById('urlImagem').value;
    const larguraImg = document.getElementById('larguraImg').value;
    const alturaImg = document.getElementById('alturaImg').value;
    const img = document.createElement('img');
    img.src = url;
    img.style.width = larguraImg + 'px';
    img.style.height = alturaImg + 'px';
    header.appendChild(img);
    header.style.border = `${espessura}px solid ${corBorda}`;

  } else if (tipo === 'form') {
    const form = document.createElement('form');
    form.innerHTML = `
<form>
  <input type="text" placeholder="Nome"><br>
  <input type="email" placeholder="Email"><br>
  <button type="submit"">Enviar</button>
</form>
    `;
    header.style.border = `${espessura}px solid ${corBorda}`;
    header.appendChild(form);
  } else if (tipo === 'figura') {
    const url = document.getElementById('urlFigura').value;
    const larguraFig = document.getElementById('larguraFigura').value;
    const alturaFig = document.getElementById('alturaFigura').value;
    const legenda = document.getElementById('legendaFigura').value;
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = url;
    img.style.width = larguraFig + 'px';
    img.style.height = alturaFig + 'px';

    const caption = document.createElement('figcaption');
    caption.textContent = legenda;
    caption.style.color = corTexto;
    figure.appendChild(img);
    figure.appendChild(caption);
    header.appendChild(figure);
    header.style.border = `${espessura}px solid ${corBorda}`;

  }
  document.getElementById('cabecalho').appendChild(header);
  contElem++;
});

document.getElementById('limparCab').addEventListener('click', function () {
  document.getElementById('cabecalho').innerHTML = '';
  contElem = 0;
});



// TABELAS
let criarBtn = document.getElementById('criar');
let salvarBtn = document.getElementById('salvar');
let recuperarBtn = document.getElementById('recuperar');
let apagarBtn = document.getElementById('apagar');
let saidaHtml = document.getElementById('saidaHtml');

criarBtn.addEventListener('click', function () {
  let nome = document.getElementById('nomeTabela').value;
  let numLinhas = parseInt(document.getElementById('numLinhas').value);
  let corTexto = document.getElementById('corTexto').value;
  let corBorda = document.getElementById('corBorda').value;
  let corFundo = document.getElementById('corFundo').value;

  let container = document.createElement('div');

  let tabela = document.createElement('table');
  tabela.style.borderColor = corBorda;
  tabela.style.backgroundColor = corFundo;
  tabela.style.color = corTexto;

  let caption = document.createElement('caption');
  caption.innerText = nome;
  caption.style.color = corTexto;
  caption.style.backgroundColor = corFundo;
  caption.style.borderColor = corBorda;
  tabela.appendChild(caption);

  let thead = document.createElement('thead');
  let tRow = document.createElement('tr');
  for (let j = 0; j < 3; j++) {
    let th = document.createElement('th');
    let colName = document.getElementById('coluna' + (j + 1)).value;
    th.innerText = colName;
    th.style.borderColor = corBorda;
    th.style.color = corTexto;
    th.style.backgroundColor = corFundo;
    tRow.appendChild(th);
  }
  thead.appendChild(tRow);
  tabela.appendChild(thead);

  let tbody = document.createElement('tbody');
  for (let i = 0; i < numLinhas; i++) {
    let linha = document.createElement('tr');
    for (let j = 0; j < 3; j++) {
      let celula = document.createElement('td');
      celula.style.borderColor = corBorda;
      celula.style.backgroundColor = corFundo;
      celula.style.color = corTexto;

      let input = document.createElement('input');
      input.type = 'text';
      input.style.width = '100%';
      input.style.color = corTexto;
      input.style.backgroundColor = corFundo;
      input.style.borderColor = corBorda;
      celula.appendChild(input);
      linha.appendChild(celula);
    }
    tbody.appendChild(linha);
  }
  tabela.appendChild(tbody);

  let excluir = document.createElement('button');
  excluir.innerText = 'Excluir tabela';
  excluir.addEventListener('click', function () {
    container.remove();
  });

  container.appendChild(tabela);
  container.appendChild(excluir);
  document.getElementById("divTabela").appendChild(container);
});




// Rodapé
document.getElementById('atualizarRodape').addEventListener('click', function () {
  const footer = document.getElementById('footer');
  const texto = document.getElementById('textoRodape').value;
  const tamanho = document.getElementById('tamanhoFonteRodape').value;
  const corTexto = document.getElementById('corTextoRodape').value;
  const corFundo = document.getElementById('corFundoRodape').value;
  const alinhamento = document.getElementById('alinhamentoRodape').value;
  footer.textContent = texto;
  footer.style.fontSize = tamanho + 'px';
  footer.style.color = corTexto;
  footer.style.backgroundColor = corFundo;
  footer.style.textAlign = alinhamento;
});


// Localstorage
salvarBtn.addEventListener('click', function () {
  const conteudoCabecalho = document.getElementById('cabecalho').innerHTML;
  const conteudoTabela = document.getElementById("divTabela").innerHTML;
  const conteudoRodape = document.getElementById("footer").innerHTML;


  const htmlCompleto = `<!DOCTYPE html>
  <html lang="pt-br">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título da Página</title>
  </head>
  <body>
  <div id="cabecalho">
  ${conteudoCabecalho}
  </div>
  <div id="divTabela">
  ${conteudoTabela}
  </div>
  <div id="footer">
  ${conteudoRodape}
  </div>
  </body>
  </html>`;

  dadosSalvos = htmlCompleto;
  localStorage.setItem('paginaSalva', htmlCompleto);

});
recuperarBtn.addEventListener('click', function () {
  const conteudoSalvo = localStorage.getItem('paginaSalva');
  saidaHtml.textContent = conteudoSalvo;
});
apagarBtn.addEventListener('click', function () {
  localStorage.clear();
});
