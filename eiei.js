    // Define our restaurant data with coordinates and random ratings
    var restaurants = [
        {
          name: "อิงเล้ง",
          latlng: [13.746949, 100.531016],
          rating: getRandomRating(1, 5)
        },
        {
          name: "ร้านป้าส้มตำ",
          latlng: [13.729535, 100.538767],
          rating: getRandomRating(1, 5)
        },
        {
          name: "ร้านก๋วยเตี๋ยวเรือ",
          latlng: [13.716826, 100.525198],
          rating: getRandomRating(1, 5)
        },
        {
          name: "ร้านน้องไข่ทอด",
          latlng: [13.732406, 100.523592],
          rating: getRandomRating(1, 5)
        },
        {
          name: "ร้านลุงป้อมข้าวมันไก่",
          latlng: [13.738355, 100.560160],
          rating: getRandomRating(1, 5)
        },
        {
          name: "ร้านส้มตำปู",
          latlng: [13.741701, 100.559964],
          rating: getRandomRating(1, 5)
        },
        {
          name: "ร้านอาหารแม่น้ำสายฝน",
          latlng: [13.720875, 100.529573],
          rating: getRandomRating(1, 5)
        },
        {
          name: "ร้านก๋วยเตี๋ยวเป็ดปักกิ่ง",
          latlng: [13.739240, 100.534418],
          rating: getRandomRating(1, 5)
        },
        {
          name: "ร้านปูเป้งเป้า",
          latlng: [13.734961, 100.532935],
          rating: getRandomRating(1, 5)
        },
        {
          name: "ร้านนมสด",
          latlng: [13.727920, 100.526342],
          rating: getRandomRating(1, 5)
        }
      ];
      
      function getRandomRating(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }