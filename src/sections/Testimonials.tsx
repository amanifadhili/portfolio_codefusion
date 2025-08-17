import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear what our clients say about working with CodeFusion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  JD
                </span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  John Doe
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  CEO, TechCorp
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">
              "CodeFusion delivered an exceptional IoT solution that transformed
              our operations. Their expertise and professionalism exceeded our
              expectations."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-600 dark:text-green-400 font-semibold">
                  SJ
                </span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Sarah Johnson
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  CTO, InnovateLab
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">
              "The machine learning platform they built for us has
              revolutionized our data analysis capabilities. Highly
              recommended!"
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4">
                <span className="text-purple-600 dark:text-purple-400 font-semibold">
                  MJ
                </span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Mike Chen
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Founder, StartupXYZ
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">
              "From concept to deployment, CodeFusion guided us through every
              step. Their embedded systems expertise is unmatched."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
