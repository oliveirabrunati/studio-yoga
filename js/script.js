function mudarTamanho() {
  if (window.innerWidth >= 768) {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
}

function clickMenu() {

  if (nav.style.display == "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

L.mapquest.key = "o0zLYg8NnublMtdZggu5rzAmrX1u3U6j";

const map = L.mapquest.map("map", {
  center: [-20.27394, -50.54676],
  layers: L.mapquest.tileLayer("map"),
  zoom: 15,
});

L.marker([-20.27394, -50.54676],{
  icon: L.mapquest.icons.marker({
    primaryColor: '#22407F',
    secondaryColor: '#3B5998',
    shadow: true,
    size: 'md',
    Symbol: 'A'
  })
})
.bindPopup('Studio Chandrasana')
.addTo(map);

map.addControl(L.mapquest.control());
