import React from 'react';
import { useNavigate } from 'react-router-dom';
import MapComponent from '../Components/customMap.js';

const Home = () => {
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <div onClick={redirectToLogin}>Redirect to login</div>
    </div>
  );
};

export default Home;
