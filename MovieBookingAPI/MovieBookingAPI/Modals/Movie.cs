using System;
namespace MovieBookingAPI.Modals
{
	public class Movie
	{
        public string Id{ get; set; }
        public string Name { get; set; }
        public string Durtion { get; set; }
        public string Genre { get; set; }
        public string Censored { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public float rating { get; set; }
    }
}

