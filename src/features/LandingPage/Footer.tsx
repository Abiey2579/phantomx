const Footer = () => {
  return (
    <footer id="footer" className="bg-[#0A2342] pt-16 pb-8 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <div className="mb-5">
              <h3 className="mb-1 text-2xl font-bold">PhantomX</h3>
              <p className="text-sm text-neutral-300">
                Financial Intelligence, Redefined
              </p>
            </div>
            <p className="mb-5 text-neutral-300">
              Advanced AI-driven insights for financial professionals making
              smarter, data-backed decisions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-neutral-300 transition-colors duration-300 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-neutral-300 transition-colors duration-300 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Medium"
                className="text-neutral-300 transition-colors duration-300 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold">Platform</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#platform-overview"
                  className="text-neutral-300 transition-colors duration-300 hover:text-white"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#key-differentiators"
                  className="text-neutral-300 transition-colors duration-300 hover:text-white"
                >
                  Why PhantomX
                </a>
              </li>
              <li>
                <a
                  href="#use-cases"
                  className="text-neutral-300 transition-colors duration-300 hover:text-white"
                >
                  Use Cases
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 transition-colors duration-300 hover:text-white"
                >
                  API Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 transition-colors duration-300 hover:text-white"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 transition-colors duration-300 hover:text-white"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-neutral-300 transition-colors duration-300 hover:text-white"
                >
                  Financial Insights
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 transition-colors duration-300 hover:text-white"
                >
                  Research Reports
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 transition-colors duration-300 hover:text-white"
                >
                  Market Analysis
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 transition-colors duration-300 hover:text-white"
                >
                  White Papers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 transition-colors duration-300 hover:text-white"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 transition-colors duration-300 hover:text-white"
                >
                  Webinars
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold">Company</h4>
            <ul className="mb-8 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-neutral-300 transition-colors duration-300 hover:text-white"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 transition-colors duration-300 hover:text-white"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 transition-colors duration-300 hover:text-white"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 transition-colors duration-300 hover:text-white"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-neutral-300 transition-colors duration-300 hover:text-white"
                >
                  <span>Press Kit</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>

            <div>
              <a
                href="#"
                className="mr-4 mb-2 inline-block text-sm text-neutral-300 transition-colors duration-300 hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="mr-4 mb-2 inline-block text-sm text-neutral-300 transition-colors duration-300 hover:text-white"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="mr-4 mb-2 inline-block text-sm text-neutral-300 transition-colors duration-300 hover:text-white"
              >
                Contact
              </a>
              <a
                href="#"
                className="mr-4 mb-2 inline-block text-sm text-neutral-300 transition-colors duration-300 hover:text-white"
              >
                About Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-700 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-neutral-400">
                © 2023 PhantomX Technologies, Inc. All rights reserved.
              </p>
            </div>
            <div className="text-sm text-neutral-400">
              <a
                href="#demo-request"
                className="text-[#4A90E2] transition-colors duration-300 hover:text-white"
              >
                Request a demo
              </a>
              <span className="mx-2">|</span>
              <a
                href="#"
                className="text-neutral-400 transition-colors duration-300 hover:text-white"
              >
                Security
              </a>
              <span className="mx-2">|</span>
              <a
                href="#"
                className="text-neutral-400 transition-colors duration-300 hover:text-white"
              >
                Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
