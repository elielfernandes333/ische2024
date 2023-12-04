$(document).ready(function () {

    //  menu
    $('[data-toggle="toggle-nav"]').on('click', function () {
        $(this).closest('nav').find($(this).attr('data-target')).toggleClass('hidden');
        return false;
    });

    // feather icons
    feather.replace();

    //scroll
    var scroll = new SmoothScroll('a[href*="#"]');
});
var texto = "ISCHE 45: Diversity and (De)coloniality in The Histories of Education";
var index = 0;
var velocidade = 100;

function exibirLetra() {
    if (index < texto.length) {
        document.getElementById("typing-text").innerHTML += texto.charAt(index);
        index++;
        setTimeout(exibirLetra, velocidade);
    }
}

window.onload = function () {
    exibirLetra();
};
//menulang
document.addEventListener("DOMContentLoaded", function() {
    var gtranslateDiv = document.createElement('div');
    gtranslateDiv.className = 'gtranslate_wrapper';
    document.body.appendChild(gtranslateDiv);

    window.gtranslateSettings = {"default_language":"en","native_language_names":true,"detect_browser_language":true,"languages":["en","fr","de","es","pt"],"wrapper_selector":".gtranslate_wrapper","alt_flags":{"pt":"brazil"}};

    var gtranslateScript = document.createElement('script');
    gtranslateScript.src = 'https://cdn.gtranslate.net/widgets/latest/float.js';
    gtranslateScript.defer = true;
    document.body.appendChild(gtranslateScript);
});