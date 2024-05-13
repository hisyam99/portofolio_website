// components/AboutSection.tsx
import React from 'react';
import Image from 'next/image';

const AboutSection = () => (
  <section className="py-12 bg-gray-200 w-full">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-black text-2xl font-bold mb-8">Tentang Saya</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center">
          <Image
            src="/profile_pic.png"
            alt="Foto Profil"
            width={150}
            height={150}
            className="rounded-full"
          />
          <div className="ml-4">
            <h3 className="text-black text-lg font-semibold">hisyam99</h3>
            <p className="text-gray-600">about me</p>
            {<p className="text-gray-600">about me 2</p>}
          </div>
        </div>
        {/*tests*/}
      </div>
    </div>
  </section>
);

export default AboutSection;