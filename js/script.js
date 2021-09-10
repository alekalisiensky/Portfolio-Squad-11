$(document).ready(function () {
    //script pra pagina scrollar até a âncora
    $('nav a[href*="#"]').on("click", function(event) {
        console.log("funciona");
        event.preventDefault();
        var id = $(this).attr("href");
        targetOffset = $(id).offset().top;

        $('html,body').animate({
            scrollTop: targetOffset - 100}, 500
        );
    });

    //script pra nav virar um menu
    var largura = window.innerWidth;
    document.documentElement.clientWidth;
    document.body.clientWidth;

    criaMenu();

    //evento pra identificar quando a aba do navegador for redimensionada
    window.dispatchEvent(new Event('resize'));
    window.addEventListener("resize", function () {
        largura = window.innerWidth;
        criaMenu();
    });

    function criaMenu() {
        if (largura <= 930) {
            menuVisivel = true;
            nav.classList.add("menu");
            menu.classList.remove("opcoes-menu");
            menu.classList.add("opcoes-invisiveis");
        } else if (largura > 930) {
            menuVisivel = false;
            nav.classList.remove("menu");
            menu.classList.remove("opcoes-visiveis");
            menu.classList.remove("opcoes-invisiveis");
            menu.classList.add("opcoes-menu");
        }
    }
});

    //script pro menu descer e subir quando o botão for clicado
    var numCliques = 0;
    var botaoMenu = document.querySelector("button");
    var nav = document.querySelector(".topo-menu-invisivel");
    var menu = document.querySelector("menu");
    var menuVisivel = false;

    function mostraMenu() {
        incrementaClique();
        //mostra o menu quando o botao é clicado pela primeira vez e esconde na segunda
        if (numCliques % 2 != 0) {
            menu.classList.remove("opcoes-invisiveis");
            menu.classList.toggle("opcoes-visiveis");
        } else {
            menu.classList.remove("opcoes-visiveis");
            menu.classList.add("opcoes-invisiveis");
        }
    }

    function incrementaClique() {
        contaClique(++numCliques);
    }

    function contaClique(clique) {
        clique = botaoMenu.innerHTML;
    }

    //script pro menu sumir quando outro lugar da pagina for clicado
    window.onclick = function (event) {
        if (!event.target.matches('.botao-menu') && menuVisivel) {
            menu.classList.remove("opcoes-visiveis");
            menu.classList.add("opcoes-invisiveis");
            numCliques = 0;
        }
    }