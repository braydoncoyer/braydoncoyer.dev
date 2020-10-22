import React from 'react';
import Memoji from '../assets/braydon_memoji.jpeg';

const WelcomeSection = () => (
  <div className="min-h-screen flex justify-center items-center">
    <div className="flex flex-col items-center space-y-8 md:flex-row-reverse md:justify-between">
      <img className="w-1/3 md:w-1/4" src={Memoji} alt="Memoji" />
      <div className="text-center space-y-2 md:text-left">
        <h1 className="text-4xl font-semibold text-primary md:text-6xl">
          Hi, I'm <mark>Braydon</mark> 👋
        </h1>
        <p className="text-base font-thin text-secondary md:text-2xl">
          I'm a senior full stack engineer <br />
          with a passion for everything front-end
        </p>
      </div>
    </div>
  </div>
);

export default WelcomeSection;
