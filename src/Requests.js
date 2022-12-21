const API_KEY = "20f2f90eca5aed70d7037cab2090e52a";

const requests = {
    fetchTrending: `/trending/all/week?api_key=20f2f90eca5aed70d7037cab2090e52a&language=en-US`,

    fetchNetflixOriginals: `/discover/tv?api_key=20f2f90eca5aed70d7037cab2090e52a&width_networks=213`,

    fetchTopRated: `/movie/top_rated?api_key=20f2f90eca5aed70d7037cab2090e52a&language=en-US&page=1`,

    fetchActionMovies: `/discover/movie?api_key=20f2f90eca5aed70d7037cab2090e52a&with_genres=28`,

    fetchComedyMovies: `/discover/movie?api_key=20f2f90eca5aed70d7037cab2090e52a&with_genres=35`,

    fetchHorrorMovies: `/discover/movie?api_key=20f2f90eca5aed70d7037cab2090e52a&with_genres=27`,

    fetchRomanceMovies: `/discover/movie?api_key=20f2f90eca5aed70d7037cab2090e52a&with_genres=10749`,

    fetchDocumentaries: `/discover/movie?api_key=20f2f90eca5aed70d7037cab2090e52a&with_genres=99`,
};


export default requests;

// https://api.themoviedb.org/3/trending/all/week?api_key=20f2f90eca5aed70d7037cab2090e52a&language=en-US