using System;
using MovieBookingAPI.Modals;
using MongoDB.Driver;
using MongoDB.Bson;
namespace MovieBookingAPI.Services
{
	public class MovieServices:IMovie
	{
        public IMongoCollection<Movie> MoviesDB()
        {
            var settings = MongoClientSettings.FromConnectionString("mongodb+srv://raguasok12:Sept2001@cluster.rcisdma.mongodb.net/?retryWrites=true&w=majority");
            settings.ServerApi = new ServerApi(ServerApiVersion.V1);
            var client = new MongoClient(settings);
            var database = client.GetDatabase("MovieBooking");
            return database.GetCollection<Movie>("Movies");
        }

        public void addMovie(Movie movie)
        {
            movie.Id = ObjectId.GenerateNewId().ToString();
            MoviesDB().InsertOne(movie);
        }

        public void deleteMovie(string movieName)
        {
            MoviesDB().DeleteOne(m => m.Name == movieName);
        }

        public Movie getMovie(string movieName)
        {
            return MoviesDB().Find(m => m.Name == movieName).FirstOrDefault();
        }

        public List<Movie> getMovies()
        {
            return MoviesDB().Find(_=>true).ToList();
        }

        public void updateMovie(Movie movie)
        {
            MoviesDB().ReplaceOne(m=>m.Id==movie.Id,movie);
        }

        public bool containsMovie(string movie)
        {
            if (MoviesDB().Find(m => m.Name == movie).ToList().Capacity > 0) return true;
            return false;
        }
    }
}

