using System;
using MovieBookingAPI.Modals;
namespace MovieBookingAPI.Services
{
	public interface IUser
	{
		public void addUser(User user);
		public bool verifyUser(User user);
		public User findByName(string name);

    }
}

