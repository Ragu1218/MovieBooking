using MongoDB.Bson.Serialization.Attributes;
using System;
namespace MovieBookingAPI.Modals
{
	public class Movie
	{
        [BsonElement("Id")]
        public string Id{ get; set; }
        [BsonElement("Name")]
        public string Name { get; set; }
        [BsonElement("Durtion")]

        public string Durtion { get; set; }
        [BsonElement("Genre")]

        public string Genre { get; set; }
        [BsonElement("Censored")]

        public string Censored { get; set; }
        [BsonElement("Description")]

        public string Description { get; set; }
        [BsonElement("rating")]

        //public string Url { get; set; }
        public double rating { get; set; }
    }
}

