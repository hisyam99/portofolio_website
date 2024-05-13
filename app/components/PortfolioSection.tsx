// components/PortfolioSection.tsx
import React from 'react';

const PortfolioSection = () => (
  <section className="py-12 bg-gray-100 w-full">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-black text-2xl font-bold mb-8">Portofolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-black text-lg font-semibold mb-2">Nama Proyek 1</h3>
          <p className="text-sm text-gray-600 mb-4">
            Deskripsi singkat tentang proyek 1
          </p>
          <a
            href="#project1"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Jelajahi
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-black text-lg font-semibold mb-2">Nama Proyek 2</h3>
          <p className="text-sm text-gray-600 mb-4">
            Deskripsi singkat tentang proyek 2
          </p>
          <a
            href="#project2"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Jelajahi
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-black text-lg font-semibold mb-2">Nama Proyek 3</h3>
          <p className="text-sm text-gray-600 mb-4">
            Deskripsi singkat tentang proyek 3
          </p>
          <a
            href="#project2"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Jelajahi
          </a>
        </div>
        {/*tambah lainnya*/}
      </div>
    </div>
  </section>
);

export default PortfolioSection;