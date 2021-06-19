
function clicou(){
     document.getElementById("agradecimento").innerHTML = "<b> Obrigado </b> por clicar!";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado pro clicar!");
}

function redirecionar(){
    window.open("https://movimente-se-next.vercel.app/");
}

function redirecionar2(){
    window.location.href = "https://movimente-se-next.vercel.app/";
}

function trocar(elemento){
    elemento.innerHTML = "Parabéns você conseguiu um avanço!"; // nessa função passamos o elemento como parametro. No código HTML passamos o this como parametro das funções! Assim pademos utilizar as funcionalidades da função em mais de um elemento evitando repetir o código. NÃO PRECISA DE ID OU CLASSE PARA USAR O ELEMENTO!

    //document.getElementById("mousemove").innerHTML = "Vamos avançar mais um passo!"; // AQUI PRECISA USAR Id.
    //alert("Vamos avançar mais um passo!");
}

function voltarText(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}