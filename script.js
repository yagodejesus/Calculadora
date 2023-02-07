
// Função para o calculo das operações 
function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
// Função apagar os números
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
// Função para mostrar o resultado 
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    // se tiver resultado das operações ele vai mostrar o resultado normalmente
    // senão, o resultado será "Nada"
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada"
    }
}