let cacheData = "appV1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/",
        "/ws",
        "/static/js/bundle.js",
        "/index.html",
        "/favicon.ico",
        "/logo192.png",
        "/static/media/Header.b284623950ac71a82494.png",
        "/static/media/Heade.7dac9078b477fc2143be.png",
        "/manifest.json",
        "/contact",
        "/Gif/Bus.gif",
        "/Gif/Car.gif",
        "/Gif/Bike.gif",
        "/Gif/Inverter.gif",
        "/Images/Bus.png",
        "Images/Car.png",
        "Images/Bike.png",
        "/Gif/Inverter.png",
        "/logo/audi_logo.jpg",
        "/logo/bmw_logo.jpg",
        "/logo/mercedes_logo.jpg",
        "/logo/fiat.jpg",
        "/logo/ford.jpg",
        "/logo/honda_logo.jpg",
        "/logo/hyundai_logo.jpg",
        "/logo/hindustan-motors_logo.jpg",
        "/logo/mahindra.jpg",
        "/logo/maruti_logo.jpg",
        "/logo/Chevrolet.jpg",
        "/logo/nissan.jpg",
        "/logo/skoda.jpg",
        "/logo/tata_logo.jpg",
        "/logo/toyota.jpg",
        "/logo/volvo.jpg",
        "/logo/exide.jpg",
        "/logo/amaron.jpg",
        "/logo/luminous.jpg",
        "/logo/livguard-logo.jpg",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => {
        if (result) {
          return result;
        }
        let requestUrl = event.request.clone();
        return fetch(requestUrl);
      })
    );
  }
});
