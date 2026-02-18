import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <main className="pt-16">
        {/* Sections will be added here */}
        <section id="home" className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
