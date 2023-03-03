using System;
using MovieBookingAPI.Modals;
using MongoDB.Driver;
using MongoDB.Bson;

namespace MovieBookingAPI.Services
{
	public class UserServices:IUser
	{
		public UserServices()
		{
		}

        public IMongoCollection<User> UserDB()
        {
            var settings = MongoClientSettings.FromConnectionString("mongodb+srv://raguasok12:Sept2001@cluster.rcisdma.mongodb.net/?retryWrites=true&w=majority");
            settings.ServerApi = new ServerApi(ServerApiVersion.V1);
            var client = new MongoClient(settings);
            var database = client.GetDatabase("MovieBooking");
            return database.GetCollection<User>("Users");
        }

        public void addUser(User user)
        {
            user.id = ObjectId.GenerateNewId().ToString();
            UserDB().InsertOne(user);
        }

        public bool verifyUser(User user)
        {
            var log= UserDB().Find(a => a.userName == user.userName).FirstOrDefault();
            if(log==null || log.password!= user.password) return false;
            return true;
            //if (AdminDB().Find(a => a.userName == admin.userName) return true;
        }

        public User findByName(string name)
        {
            return UserDB().Find(a => a.userName == name).FirstOrDefault();
        }
    }
}

