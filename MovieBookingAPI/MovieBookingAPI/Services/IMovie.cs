using System;
using MovieBookingAPI.Modals;
using MongoDB.Driver;
namespace MovieBookingAPI.Services
{
	public interface IMovie
	{
		public IMongoCollection<Movie> MoviesDB();
		public List<Movie> getMovies();
		public Movie getMovie(string movieName);
		public void addMovie(Movie movie);
		public void updateMovie(Movie movie);
		public void deleteMovie(string movieName);
		public bool containsMovie(string movie);
		public bool containsMovieById(string id);

    }

}

