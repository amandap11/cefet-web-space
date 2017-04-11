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

botaoProximo.addEventListener('click', function (ev){

	let primeiraImagem = servidorDasImagens + todasAsImagens[0];
	let segundaImagem = servidorDasImagens + todasAsImagens[1];
	let terceiraImagem = servidorDasImagens + todasAsImagens[2];
	let quartaImagem = servidorDasImagens + todasAsImagens[3];
	let quintaImagem = servidorDasImagens + todasAsImagens[4];

	let caminhoAtual = imagem.src;

	if (caminhoAtual == primeiraImagem){
		imagem.src = segundaImagem;
	} 
});

botaoAnterior.addEventListener('click', function (ev){
	
});
