const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            I am a dedicated and ambitious software developer with strong foundation in programming languages such as <span className="font-semibold text-blue-600 dark:text-blue-400">HTML, CSS, Python, C++, and JavaScript</span>. My journey began at <span className="font-semibold">Kabarak University</span>, where I honed my skills and developed a passion for software development.
          </p>

          <p>
            After completing my university education, I further enhanced my skills by attending <span className="font-semibold">Moringa School</span>, a prestigious bootcamp. This experience allowed me to gain hands-on experience and stay up-to-date with the latest industry trends and technologies.
          </p>

          <p>
            During my time at the <span className="font-semibold">Anti-Doping Agency of Kenya (ADAK)</span> as an ICT Support Attaché, I provided comprehensive technical support and applied my CCNA networking expertise to maintain critical infrastructure, achieving a 95% first-contact resolution rate and 90% uptime for network operations.
          </p>

          <p>
            I am excited to collaborate with experienced professionals and contribute to innovative projects that push the boundaries of what is possible. My ability to learn and adapt quickly to new technologies and methodologies makes me a valuable asset to any development team.
          </p>

          <p>
            When I'm not coding, you will find me enjoying podcasts about tech. Engaging in hobbies and activities outside my work helps me stay inspired, creative, and motivated in my software development career.
          </p>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">4+</div>
              <div className="text-gray-600 dark:text-gray-400">Years of Study</div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">4</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
