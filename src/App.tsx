import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import SelectedWorks from './components/SelectedWorks';
import Journal from './components/Journal';
import Explorations from './components/Explorations';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <main className="w-full bg-bg text-text-primary overflow-x-hidden">
          <Hero />
          <AboutMe />
          <SelectedWorks />
          <Journal />
          <Explorations />
          <Stats />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;
