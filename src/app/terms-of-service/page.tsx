import Link from "next/link";
import React from "react";

const TermsOfService = () => {
  return (
    <div>
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold text-gray-700">
          No articles found
        </h2>
        <p className="text-gray-500 mt-2">There are no articles in the terms of service</p>
        <Link
          href="/"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default TermsOfService;
