import { BrowserRouter as Router,Link, NavLink } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

const getAll=()=>{
  axios.get("https://localhost:7069/Movie/GetAllMovies")
  .then(res=>console.log(res.data))
}


const LandingPage = () => {
  return (
    <div>
      <div>
        <NavLink to={"/Login"}>
            Movie Booking
          <button>
           Admin
          </button>
        </NavLink>
      </div>
      <div>
      <button>
          Get
        </button>
        <button onClick={getAll}>
          getall
        </button>
        <button>
          Add
        </button>
        <button>
          Update
        </button>
        <button>
          delete
        </button><br/>
        <form>
          
        </form>
      </div>
      <div>

      </div>
      
    </div>
  )
}

export default LandingPage
