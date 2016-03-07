color = function(){
  document.getElementById('resultado').style.backgroundColor = document.getElementById('text').value;
}

document.getElementById('text').addEventListener('input', color);
