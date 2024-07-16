import React from 'react';
import { useNavigate } from 'react-router-dom';

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
