using System;
using MongoDB.Bson.Serialization.Attributes;

namespace MovieBookingAPI.Modals
{
	public class User
	{
		[BsonId]
		[BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
		public string id{ get; set; }
		public string userName { get; set; }
        public string password { get; set; }
		public string role { get; set; }
    }
}

