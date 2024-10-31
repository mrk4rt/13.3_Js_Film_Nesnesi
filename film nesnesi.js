//! movie nesnesini tanımlama
const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  genres: ["Bilim Kurgu", "Aksiyon"],
  isAvailableOnStreaming: true,
  displayMovieInfo: function () {
    console.log(
      "Film:" +
        this.title +
        "- Yönetmen:" +
        this.director +
        "- Yıl:" +
        this.year
    );
  },
};

//! Bilgileri konsola yazdırma
console.log(movie.title); // Çıktı: Inception
console.log(movie.year); // Çıktı: 2010
console.log(movie.genres); // Çıktı: Bilim Kurgu
console.log(movie.isAvailableOnStreaming); // Çıktı: true

//! displayMovieInfo metodunu çağırma
movie.displayMovieInfo(); // Çıktı: Film: Inception - Yönetmen: Christopher Nolan - Yıl: 2010
