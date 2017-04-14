// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

let imagem = document.querySelector("#galeria img");
let botaoProximo = document.getElementById("proximo");
let botaoAnterior = document.getElementById("anterior");

let indexAtual = 0;

botaoProximo.addEventListener('click', function (ev){

	indexAtual++;

	if (indexAtual >= todasAsImagens.length){
		indexAtual = 0;
	}

	imagem.src = servidorDasImagens + todasAsImagens[indexAtual];

});

botaoAnterior.addEventListener('click', function (ev){

	indexAtual--;

	if (indexAtual < 0){
		indexAtual = 4;
	}

	imagem.src = servidorDasImagens + todasAsImagens[indexAtual];
	
});
