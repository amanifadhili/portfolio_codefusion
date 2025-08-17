import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About CodeFusion
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are a technology company pushing the boundaries of what's
            possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              To create innovative solutions that solve real-world problems and
              drive technological advancement.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Our Values
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>• Innovation at the core</li>
              <li>• Quality without compromise</li>
              <li>• Client success focus</li>
              <li>• Continuous learning</li>
            </ul>
          </div>

          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Leadership Team
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Amani Fadhili
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  CEO & Co-founder
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Abayo Sincere
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  CTO & Co-founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
