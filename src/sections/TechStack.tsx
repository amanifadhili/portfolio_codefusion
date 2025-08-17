import React from "react";

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We use cutting-edge technologies to build innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Frontend
            </h3>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <span className="text-2xl">⚛️</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  React
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <span className="text-2xl">🎨</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Tailwind CSS
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <span className="text-2xl">📱</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  React Native
                </p>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Backend
            </h3>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <span className="text-2xl">🐍</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Python
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <span className="text-2xl">☕</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Java
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <span className="text-2xl">🚀</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Node.js
                </p>
              </div>
            </div>
          </div>

          {/* AI/ML */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              AI/ML
            </h3>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <span className="text-2xl">🧠</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  TensorFlow
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <span className="text-2xl">📊</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  PyTorch
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <span className="text-2xl">🔍</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Scikit-learn
                </p>
              </div>
            </div>
          </div>

          {/* Hardware */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Hardware
            </h3>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <span className="text-2xl">🔌</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Arduino
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <span className="text-2xl">🍓</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Raspberry Pi
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <span className="text-2xl">⚡</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  ESP32
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
