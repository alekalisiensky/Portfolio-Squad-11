//script pra pagina scrollar até a âncora
$(document).on("click", 'a[href*="#"]', function(event) {
    
    event.preventDefault();
    var id = $(this).attr("href");
    targetOffset = $(id).offset().top;

    $('html,body').animate({ 
        scrollTop: targetOffset - 100}, 500
    );
});

//script pra nav virar um menu
var largura = window.innerWidth
    document.documentElement.clientWidth;
    document.body.clientWidth;
;
var nav = document.querySelector(".topo-menu-invisivel");
var botaoMenu = document.querySelector("button");
var menu = document.querySelector("menu");
var menuVisivel = false;

console.log(largura);
criaMenu();

//evento pra identificar quando a aba do navegador for redimensionada
window.dispatchEvent(new Event('resize'));
window.addEventListener("resize", function(){
    largura = window.innerWidth;
    console.log(largura);

    criaMenu();
    console.log(menu.classList);
});

function criaMenu(){
    if(largura <= 930){
        menuVisivel = true;
        nav.classList.add("menu");
        menu.classList.remove("opcoes-menu")
        menu.classList.add("opcoes-invisiveis");
    }else if(largura > 930){
        menuVisivel = false;
        nav.classList.remove("menu");
        menu.classList.remove("opcoes-visiveis");
        menu.classList.remove("opcoes-invisiveis");
        menu.classList.add("opcoes-menu");
    }
}

//script pro menu descer e subir quando o botão for clicado
var numCliques = 0;

function mostraMenu(){
    incrementaClique();
    //mostra o menu quando o botao é clicado pela primeira vez e esconde na segunda
    if(numCliques%2 != 0){
        menu.classList.remove("opcoes-invisiveis");
        menu.classList.toggle("opcoes-visiveis");
    }else{
        menu.classList.remove("opcoes-visiveis");
        menu.classList.add("opcoes-invisiveis");
    }
}

function incrementaClique(){
    contaClique(++numCliques)
}

function contaClique(clique){
    clique = botaoMenu.innerHTML;
}


//script pro menu sumir quando outro lugar da pagina for clicado
window.onclick = function(event){
    console.log(menuVisivel)
    if (!event.target.matches('.botao-menu') && menuVisivel){
        menu.classList.remove("opcoes-visiveis");
        menu.classList.add("opcoes-invisiveis");
        numCliques = 0;
    }
}
