export class Movie {
    constructor(public title: string,
        public year: number,
        public rating: number) {
    }
}

interface IMovieDataService {
    loadMovies(): Array<Movie>;
    save(movie: Movie): void;
}

class MovieDataService implements IMovieDataService {
    loadMovies(): Array<Movie> {
        let movies: Array<Movie> = [];
        return movies;
    }

    save(movie: Movie) {
    }
};

export const movieDataService = new MovieDataService();
