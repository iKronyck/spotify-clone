import React from 'react';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './routes';

const Home: React.FC = () => {
  const colorScheme = useColorScheme();
  return <Navigation colorScheme={colorScheme} />;
};

export default Home;
