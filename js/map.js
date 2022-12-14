L.mapquest.key = 'o0zLYg8NnublMtdZggu5rzAmrX1u3U6j';

        const map = L.mapquest.map('map', {
          center: [37.7749, -122.4194],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });

        map.addControl(L.mapquest.control());