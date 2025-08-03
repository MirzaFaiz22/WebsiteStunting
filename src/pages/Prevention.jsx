import React from 'react';
import { Baby, Heart, Droplets, Shield, Utensils, Apple, Wheat, Crown } from 'lucide-react';

function Prevention() {
  const tahapanPencegahan = [
    {
      icon: Baby,
      title: 'Inisiasi Menyusu Dini (IMD)',
      description: 'Kontak kulit bayi dengan ibu segera setelah lahir untuk memulai menyusui dalam 1 jam pertama',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200'
    },
    {
      icon: Heart,
      title: 'ASI Eksklusif',
      description: 'Memberikan ASI saja tanpa makanan atau minuman lain selama 6 bulan pertama kehidupan',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: Utensils,
      title: 'MP-ASI (Makanan Pendamping ASI)',
      description: 'Mulai berikan makanan bergizi seimbang sebagai pendamping ASI setelah usia 6 bulan',
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200'
    },
    {
      icon: Crown,
      title: 'Lanjutkan ASI hingga 2 Tahun',
      description: 'Teruskan pemberian ASI bersama makanan bergizi hingga anak berusia 2 tahun atau lebih',
      color: 'from-emerald-600 to-green-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200'
    }
  ];

  const kelompokMakanan = [
    {
      icon: Wheat,
      title: 'Karbohidrat',
      description: 'Sumber energi utama untuk aktivitas anak sepanjang hari',
      color: 'from-emerald-500 to-teal-500',
      foods: [
        {
          name: 'Beras Putih',
          portion: '100gr nasi',
          nutrients: '40gr karbo, lemak, protein, dan serat',
          benefit: 'Karbohidrat kompleks yang mudah dicerna'
        },
        {
          name: 'Kentang',
          portion: '100gr',
          nutrients: '13,5gr karbo, protein, vit.C dan B6, magnesium, asam folat, mineral',
          benefit: 'Sumber vitamin C dan kalium yang baik'
        },
        {
          name: 'Ubi dan Singkong',
          portion: '200gr',
          nutrients: '40gr karbo, protein, serat, vit. A dan C, rendah lemak',
          benefit: 'Kaya beta karoten dan serat'
        },
        {
          name: 'Jagung',
          portion: '200gr',
          nutrients: '50gr karbo, protein, lemak, serat, asam folat, kalium',
          benefit: 'Sumber antioksidan dan serat tinggi'
        }
      ]
    },
    {
      icon: Apple,
      title: 'Protein',
      description: 'Untuk pertumbuhan dan perkembangan otot serta jaringan tubuh',
      color: 'from-green-500 to-emerald-500',
      foods: [
        { name: 'Telur', benefit: 'Protein lengkap dengan asam amino esensial' },
        { name: 'Ikan', benefit: 'Omega-3 untuk perkembangan otak' },
        { name: 'Ayam', benefit: 'Protein tinggi rendah lemak' },
        { name: 'Tahu & Tempe', benefit: 'Protein nabati dan probiotik' }
      ]
    },
    {
      icon: Droplets,
      title: 'Sayuran',
      description: 'Sumber vitamin, mineral, dan serat untuk sistem pencernaan',
      color: 'from-teal-500 to-cyan-500',
      foods: [
        { name: 'Bayam', benefit: 'Zat besi dan folat tinggi' },
        { name: 'Wortel', benefit: 'Beta karoten untuk kesehatan mata' },
        { name: 'Brokoli', benefit: 'Vitamin C dan K' },
        { name: 'Kangkung', benefit: 'Kalsium dan magnesium' }
      ]
    },
    {
      icon: Heart,
      title: 'Buah-buahan',
      description: 'Vitamin C, antioksidan, dan serat alami',
      color: 'from-emerald-600 to-green-600',
      foods: [
        { name: 'Pisang', benefit: 'Kalium dan energi cepat' },
        { name: 'Pepaya', benefit: 'Vitamin C dan enzim pencernaan' },
        { name: 'Alpukat', benefit: 'Lemak sehat dan vitamin E' },
        { name: 'Jeruk', benefit: 'Vitamin C dan antioksidan' }
      ]
    },
    {
      icon: Shield,
      title: 'Lemak Sehat',
      description: 'Untuk perkembangan otak dan penyerapan vitamin',
      color: 'from-green-600 to-teal-600',
      foods: [
        { name: 'Minyak Zaitun', benefit: 'Omega-9 dan vitamin E' },
        { name: 'Alpukat', benefit: 'Lemak tak jenuh tunggal' },
        { name: 'Kacang-kacangan', benefit: 'Omega-3 dan protein' },
        { name: 'Ikan Salmon', benefit: 'DHA untuk otak' }
      ]
    }
  ];

  const pencegahanUmum = [
    { icon: Heart, text: 'Penuhi gizi ibu hamil dan menyusui dengan makanan bergizi seimbang' },
    { icon: Shield, text: 'Imunisasi lengkap sesuai jadwal untuk mencegah penyakit infeksi' },
    { icon: Droplets, text: 'Pastikan akses air bersih dan sanitasi layak di lingkungan keluarga' },
    { icon: Baby, text: 'Pantau tumbuh kembang anak secara rutin di posyandu atau fasilitas kesehatan' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-16 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-200/30 to-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-100/20 to-emerald-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              Solusi Mencegah
            </span>
            <br />
            <span className="text-gray-800">Stunting</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pencegahan stunting dimulai sejak 1000 hari pertama kehidupan dengan nutrisi yang tepat dan perawatan optimal
          </p>
        </div>
        {/* 4 Tahapan Penting */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-emerald-700 text-center mb-12">4 Tahapan Penting ASI</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tahapanPencegahan.map((tahap, index) => (
              <div key={index} className="group">
                <div className={`${tahap.bgColor} backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border ${tahap.borderColor} hover:-translate-y-2`}>
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${tahap.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <tahap.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {tahap.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {tahap.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Kelompok Makanan */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-emerald-700 text-center mb-4">5 Kelompok Makanan</h3>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Penuhi kebutuhan gizi anak dengan kombinasi karbohidrat, protein, sayur, buah, dan lemak sehat
          </p>
          <div className="space-y-12">
            {kelompokMakanan.map((kelompok, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-14 h-14 bg-gradient-to-br ${kelompok.color} rounded-2xl flex items-center justify-center`}>
                    <kelompok.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{kelompok.title}</h3>
                    <p className="text-gray-600 text-lg">{kelompok.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {kelompok.foods.map((food, foodIndex) => (
                    <div key={foodIndex} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                      <h4 className="font-bold text-gray-900 text-lg mb-2">{food.name}</h4>
                      {food.portion && (
                        <p className="text-sm text-emerald-600 font-semibold mb-2">Porsi: {food.portion}</p>
                      )}
                      {food.nutrients && (
                        <p className="text-sm text-gray-600 mb-3">{food.nutrients}</p>
                      )}
                      <p className="text-sm text-teal-600 font-medium">{food.benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pencegahan Umum */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-emerald-700 text-center mb-12">Tips Pencegahan Umum</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pencegahanUmum.map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:-translate-y-2">
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 leading-relaxed text-lg font-medium">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prevention;