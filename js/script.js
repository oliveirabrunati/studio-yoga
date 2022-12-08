function mudarTamanho(){
  if(window.innerWidth >= 768){
    nav.style.display = 'flex';
  }else{
    nav.style.display = 'none';
  }
}

function clickMenu(){
  if(nav.style.display == 'block'){
    nav.style.display = 'none';
  }else{
    nav.style.display = 'block';
  }
}