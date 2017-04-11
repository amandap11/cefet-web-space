// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

let buttons = document.getElementsByClassName("botao-expandir-retrair");
let paragraphs = document.getElementsByTagName("p");

for (let i = 0; i < buttons.length; i++){

	buttons[i].addEventListener('click', function (ev){

		if (buttons[i].innerHTML == "+"){
			paragraphs[i].classList.add('expandido');
			buttons[i].innerHTML = "-";
		} else {
			paragraphs[i].classList.remove('expandido');
			buttons[i].innerHTML = "+";
		}
		
	});

}



