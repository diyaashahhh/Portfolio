import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg">
      <p className="text-lg text-center text-gray-800">
        Have a project in mind?{" "}
        <span className="hidden sm:inline">
          <br />
        </span>
        Let's build something together!
      </p>

      <Link
        to="/contact"
        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Contact Me
      </Link>
    </section>
  );
};

export default CTA;
