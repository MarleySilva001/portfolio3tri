var sub_text= document.getElementById("text_abaixo");


function ChangeColor(color){
    document.body.style.background=color
}
function MudarC (){
    if(document.getElementById("MediumP").checked)
    {
    ChangeColor ('mediumpurple');
    sub_text.innerHTML = 'O fundo não é mais branco!!'}

    else if(document.getElementById("Crimson").checked)
    {
    ChangeColor ('crimson');
    sub_text.innerHTML = 'O fundo não é mais branco!!'}

    else if(document.getElementById("BRoyal").checked)
    {
    ChangeColor ('royalblue');
    sub_text.innerHTML = 'O fundo não é mais branco!!'}

    else if(document.getElementById("LSG").checked)
    {
    ChangeColor ('lightseagreen');
    sub_text.innerHTML = 'O fundo não é mais branco!!'}
}

    function Voltar (){
        ChangeColor ('white');
        sub_text.innerHTML = ''
    }