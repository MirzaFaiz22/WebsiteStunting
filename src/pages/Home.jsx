import React from 'react';
import { Heart, Shield, TrendingUp, Star } from 'lucide-react';

function Home() {

  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-200/30 to-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-100/20 to-emerald-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-2 lg:py-5">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-emerald-100">
            <Star className="w-5 h-5 text-emerald-600 fill-emerald-600" />
            <span className="text-emerald-700 font-semibold text-sm">Platform Edukasi</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              Cegah Stunting
            </span>
            <br />
            <span className="text-gray-800">Masa Depan Cerah</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Mari bersama-sama membangun generasi Indonesia yang sehat, cerdas, dan bebas stunting 
            melalui edukasi dan tindakan nyata.
          </p>
        </div>
        
        {/* Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Card: Stunting */}
          <div className="group cursor-pointer">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-red-200 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-20 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    Apa itu Stunting?
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-2">
                    Stunting adalah kondisi gagal tumbuh pada anak akibat kekurangan gizi kronis, 
                    infeksi berulang, dan stimulasi psikososial yang tidak memadai, terutama dalam 
                    1000 hari pertama kehidupan.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-base">
                    <strong>Ciri-ciri:</strong> Tubuh pendek, motorik lambat, mudah sakit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card: Gizi Buruk */}
          <div className="group cursor-pointer">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-amber-200 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-20 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                    Apa itu Gizi Buruk?
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-2">
                    Gizi buruk adalah kondisi kekurangan gizi berat yang menyebabkan gangguan 
                    pertumbuhan fisik, perkembangan kognitif, dan meningkatkan risiko penyakit 
                    pada anak.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-base">
                    <strong>Ciri-ciri:</strong> Wajah tirus, lemah, bengkak, rambut kemerahan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card: Penyebab */}
          <div className="group cursor-pointer">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-green-200 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-20 bg-gradient-to-b from-green-500 to-lime-500 rounded-full"></div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    Penyebab
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Kurang asupan gizi, infeksi, sanitasi buruk, dan pengasuhan yang tidak tepat 
                    dapat menyebabkan stunting dan gizi buruk pada anak.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Hero Image */}
        <div className="relative group px-4">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/makanansehat.jpg" // ✅ Perbaikan path
              alt="Makanan sehat"
              className="w-full h-96 lg:h-[200px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Overlay hitam gradasi */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Floating card */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Makanan Sehat Investasi Terbaik Anak</h4>
                    <p className="text-gray-600">Kesehatan anak adalah masa depan bangsa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;