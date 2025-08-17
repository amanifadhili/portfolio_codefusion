import React from "react";

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the brilliant minds behind CodeFusion's innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* CEO */}
          <div className="text-center">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">AF</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Amani Fadhili
            </h3>
            <p className="text-lg text-blue-600 dark:text-blue-400 mb-4">
              CEO & Co-founder
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
              Visionary leader with expertise in business strategy and
              technology innovation. Passionate about creating solutions that
              make a real impact.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                🐦
              </a>
            </div>
          </div>

          {/* CTO */}
          <div className="text-center">
            <div className="w-48 h-48 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">AS</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Abayo Sincere
            </h3>
            <p className="text-lg text-green-600 dark:text-green-400 mb-4">
              CTO & Co-founder
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
              Technical expert specializing in IoT, embedded systems, and
              machine learning. Leads our engineering team in creating
              cutting-edge solutions.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                <span className="sr-only">GitHub</span>
                📚
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
