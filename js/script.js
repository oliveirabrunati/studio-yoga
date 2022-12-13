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

L.mapquest.key = 'o0zLYg8NnublMtdZggu5rzAmrX1u3U6j';

const map = L.mapquest.map('map', {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});

map.addControl(L.mapquest.control());