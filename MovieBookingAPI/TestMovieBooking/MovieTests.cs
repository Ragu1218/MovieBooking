using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using Moq;
using MovieBookingAPI.Controllers;
using MovieBookingAPI.Modals;
using MovieBookingAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;


namespace TestMovieBooking
{
    class MovieTests
    {
        Mock<IMovie> movieServices;
        [SetUp]
        public void Setup()
        {
            movieServices = new Mock<IMovie>();
        }

        [Test]
        public void Test_GetAllMovies()
        {
            List<Movie> data = new List<Movie>(){
                new Movie()
                {
                    Name = "Foo",
                    Description = "Bar",
                    rating = 3.0,
                    Censored = "htfr",
                    Genre="thriller",
                    Duration="3hrs",
                    Id="6400ca751f3418c68ad2c04f"
                },
                new Movie()
                {
                    Name = "weij",
                    Description = "Diaries",
                    rating = 9.0,
                    Censored = "A",
                    Genre="Drama",
                    Duration="2hrs",
                    Id="6400ca751f3418c68ad2c0er"
                }
            };
            movieServices.Setup(m => m.getMovies()).Returns(data);

            MovieController mController = new MovieController(movieServices.Object);
            var actual = mController.getAllMovies();
            var check = (OkObjectResult)actual.Result;
            //Assert.AreEqual(actual.ToBson(),expected.ToBson());
            Assert.That(check.Value, Is.EqualTo(data));
        }

        [Test]
        public void Test_GetMovieByName()
        {
            Movie data = new Movie()
            {
                Name = "weij",
                Description = "Diaries",
                rating = 9.0,
                Censored = "A",
                Genre = "Drama",
                Duration = "2hrs",
                Id = "6400ca751f3418c68ad2c0er"
            };

            List<Movie> list = new List<Movie>(){
                new Movie()
                {
                    Name = "Foo",
                    Description = "Bar",
                    rating = 3.0,
                    Censored = "htfr",
                    Genre="thriller",
                    Duration="3hrs",
                    Id="6400ca751f3418c68ad2c04f"
                },
                new Movie()
                {
                    Name = "weij",
                    Description = "Diaries",
                    rating = 9.0,
                    Censored = "A",
                    Genre="Drama",
                    Duration="2hrs",
                    Id="6400ca751f3418c68ad2c0er"
                }
            };
            movieServices.Setup(m => m.containsMovie(data.Name)).Returns(true);
            movieServices.Setup(m => m.getMovie("weij")).Returns(list.FirstOrDefault(m => m.Name == "weij"));
            MovieController mController = new MovieController(movieServices.Object);
            var actual = mController.getMovie("weij");
            ActionResult<Movie> expected = (ActionResult<Movie>)data;
            //var check = (OkObjectResult)actual;
            Assert.That(actual.GetType(), Is.EqualTo(expected.GetType()));

            //movieServices.Setup(m => m.getMovie("")).Returns(list.FirstOrDefault(m => m.Name == "weij"));
            //MovieController mController = new MovieController(movieServices.Object);
            //var actual = mController.getMovie("weij");
            //var expected = (ActionResult<Movie>)data;
            //var check = (OkObjectResult)actual.Result;
            //Assert.That(check.Value, Is.EqualTo(expected.Result));
        }
        [Test]
        public void Test_AddMovie()
        {
            //Assert.Pass();
            Movie data = new Movie()
            {
                Name = "weij",
                Description = "Diaries",
                rating = 9.0,
                Censored = "A",
                Genre = "Drama",
                Duration = "2hrs",
                Id = "6400ca751f3418c68ad2c0er"
            };
            movieServices.Setup(m => m.containsMovie(data.Name)).Returns(false);
            movieServices.Setup(m => m.addMovie(data));
            MovieController mController = new MovieController(movieServices.Object);
            var actual = mController.post(data);
            var check = (OkObjectResult)actual;
            Assert.That(check.Value, Is.EqualTo("Movie Successfully added"));
        }
        [Test]
        public void Test_UpdateMovie()
        {
            Movie data = new Movie()
            {
                Name = "Vampire",
                Description = "Diaries",
                rating = 8.0,
                Censored = "A",
                Genre = "Drama",
                Duration = "1hr",
                Id = "6400ca751f3418c68ad2c0er"
            };
            movieServices.Setup(m => m.containsMovieById(data.Id)).Returns(true);
            movieServices.Setup(m => m.updateMovie(data));
            MovieController mController = new MovieController(movieServices.Object);
            var actual = mController.put(data);
            var check = (OkObjectResult)actual;
            Assert.That(check.Value, Is.EqualTo("Updated Successfully"));
        }
        [Test]
        public void Test_DeleteMovie()
        {
            Movie data = new Movie()
            {
                Name = "Foo",
                Description = "Bar",
                rating = 3.0,
                Censored = "htfr",
                Genre = "thriller",
                Duration = "3hrs",
                Id = "6400ca751f"
            };
            movieServices.Setup(m => m.containsMovieById(data.Id)).Returns(true);
            movieServices.Setup(m => m.deleteMovie("6400ca751f"));
            MovieController mController = new MovieController(movieServices.Object);
            var actual = mController.delete("6400ca751f");
            var check = (OkObjectResult)actual;
            Assert.That(check.Value, Is.EqualTo("Movie deleted successfully"));

        }
    }
}
