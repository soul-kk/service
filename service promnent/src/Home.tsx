// src/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => (
  <div>
    <h1>Welcome to Our Site</h1>
    <Link to="/customer-service">
      <button>Customer Service</button>
    </Link>
  </div>
);

export default Home;
