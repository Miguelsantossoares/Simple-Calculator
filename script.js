function insert(num)
{
   var numero = document.getElementById('result').innerHTML;
   document.getElementById('result').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('result').innerHTML = "";
}