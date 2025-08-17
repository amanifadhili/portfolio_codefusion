import React from "react";

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive technology solutions across multiple domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* IoT Solutions */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🌐</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              IoT Solutions
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Smart connected devices and systems for modern businesses.
            </p>
          </div>

          {/* Embedded Systems */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚙️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Embedded Systems
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Custom hardware and software solutions for specialized
              applications.
            </p>
          </div>

          {/* Mobile Apps */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Mobile Apps
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Native and cross-platform mobile applications for iOS and Android.
            </p>
          </div>

          {/* Websites */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Websites
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Modern, responsive websites and web applications.
            </p>
          </div>

          {/* Machine Learning */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Machine Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              AI-powered solutions and predictive analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
