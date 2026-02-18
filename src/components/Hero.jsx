import profilePic from '../assets/profile_pic/WhatsApp Image 2026-02-18 at 13.32.12.jpeg';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Hello, I am{' '}
              <span className="text-blue-600 dark:text-blue-400">
                Hillary Tanui
              </span>
            </h1>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-700 dark:text-gray-300">
              I am a Full-Stack Developer
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
              Welcome to my portfolio! I'm a Kenyan-based developer passionate about creating innovative and impactful solutions through coding. I encourage you to take a look at my work, and if you feel inspired, have a project idea, or know any job opportunity, I would love to connect! I'm excited to hear from you. Together we can create something amazing.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Contact Me
              </button>
              
              <button
                onClick={() => scrollToSection('#projects')}
                className="px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold rounded-lg border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                View Projects
              </button>
            </div>
          </div>
          
          {/* Profile Picture */}
          <div className="flex-shrink-0 animate-fade-in-delay">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-blue-600 dark:border-blue-400 shadow-2xl">
                <img
                  src={profilePic}
                  alt="Hillary Tanui"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-full bg-blue-200 dark:bg-blue-900 opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
