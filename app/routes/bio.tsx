import React from "react";

const BioPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center">
      <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">Halo, Saya Laeli Nurchasanah</h1>
          <p className="mt-2 text-gray-600">
            Saya seorang content creator yang juga sedang belajar coding untuk mengejar impian di dunia teknologi. 
            Saat ini, saya bekerja keras mengembangkan kemampuan saya sebagai seorang Frontend Developer.
          </p>
          <p className="mt-4 text-gray-600">
            Dalam waktu luang, saya suka mendengarkan musik, terutama lagu-lagu yang telah di-remix untuk menciptakan 
            suasana yang lebih seru dan menyenangkan.
          </p>
          <p className="mt-4 text-gray-600">
            Terima kasih sudah mengunjungi halaman ini!
          </p>
        </div>
      </div>
    </main>
  );
};

export default BioPage;
