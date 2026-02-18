import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* Other sections will be added here */}
      </main>
    </div>
  );
}

export default App;
