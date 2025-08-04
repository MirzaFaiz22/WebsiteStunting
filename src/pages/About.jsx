import React from "react";
import {
  Heart,
  Zap,
  Building,
  Shield,
  Droplets,
  Apple,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Star,
} from "lucide-react";

function NutritionAboutPage() {
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
            <Apple className="w-5 h-5 text-emerald-600 fill-emerald-600" />
            <span className="text-emerald-700 font-semibold text-sm">
              Edukasi Gizi
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              Pemenuhan Nutrisi
            </span>
            <br />
            <span className="text-gray-800">Sangat Penting</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Sebagai langkah pemberian gizi seimbang untuk tumbuh kembang optimal
            anak
          </p>
        </div>
        {/* Introduction */}
        <div className="group cursor-pointer mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-emerald-200 hover:-translate-y-1 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-20 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 ">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-emerald-800 mb-2">
                      Dampak Makanan Rendah Gizi
                    </h3>
                    <p className="text-gray-700">
                      Lalu bagaimana jika si kecil hanya mengonsumsi makanan
                      rendah gizi? Tubuh si kecil mungkin akan merasa kenyang,
                      tetapi tidak memiliki "bahan baku" untuk membangun dan
                      berkembang. Ini dapat menghambat kerja dan fungsi dari
                      gizi baik yang sudah masuk ke tubuh si kecil.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Macronutrients Section */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Nutrisi
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Karbohidrat */}
          <div className="group cursor-pointer">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-emerald-200 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-20 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
                <div>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      Karbohidrat
                    </h3>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Zat gizi yang banyak ditemukan dalam nasi, kentang,
                    singkong, jagung, sebagai sumber energi utama untuk otak dan
                    aktivitas fisik. Karbohidrat ibarat bahan bakar si kecil
                    agar anak bisa main dan belajar tanpa lemas.
                  </p>

                  <div className="bg-emerald-50 rounded-xl p-4">
                    <h4 className="font-bold text-emerald-800 mb-3">
                      Fungsi Karbohidrat:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Sebagai sumber energi utama. Gula kompleks diubah
                          menjadi gula sederhana (glukosa)
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Membantu kerja otak anak</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Mencegah tubuh menggunakan protein sebagai energi
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Protein */}
          <div className="group cursor-pointer">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-teal-200 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-20 bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full"></div>
                <div>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                      Protein
                    </h3>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Protein adalah bahan bangunan tubuh yang menjadi dasar
                    pembentuk tubuh. Saat mengonsumsi protein, tubuh akan
                    memecah protein menjadi asam amino. Asam amino inilah yang
                    akan digunakan tubuh untuk membangun dan memperbaiki tubuh.
                  </p>

                  <div className="bg-teal-50 rounded-xl p-4">
                    <h4 className="font-bold text-teal-800 mb-3">
                      Fungsi Protein:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Membangun dan memperbaiki tubuh (otot, tulang, rambut)
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Mendukung pertumbuhan anak</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Membantu sel-sel baru dan daya tahan tubuh. Protein
                          membantu membentuk antibodi supaya anak tidak gampang
                          sakit
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lemak */}
          <div className="group cursor-pointer">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-cyan-200 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-20 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                <div>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                      Lemak Sehat
                    </h3>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Lemak adalah zat gizi yang dibutuhkan tubuh sebagai cadangan
                    energi, pelindung organ, dan pendukung tumbuh kembang anak,
                    terutama untuk perkembangan otak. Lemak disimpan di tubuh
                    seperti tabungan tenaga, dan juga buat makanan otak. Otak
                    anak butuh lemak sehat supaya bisa pintar, aktif, dan tumbuh
                    optimal.
                  </p>

                  <div className="bg-cyan-50 rounded-xl p-4">
                    <h4 className="font-bold text-cyan-800 mb-3">
                      Fungsi Lemak:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Sumber energi cadangan, lemak menyimpan energi lebih
                          banyak dibanding karbo
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Membantu pertumbuhan otot anak</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Membantu penyerapan vitamin A, D, E, K</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vitamin & Mineral Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Vitamin & Mineral
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
                Nutrisi yang dibutuhkan tubuh dalam jumlah kecil, tetapi sangat
                penting untuk fungsi fisiologis yang optimal. Keduanya tidak
                bisa diproduksi oleh tubuh, sehingga harus didapatkan dari
                makanan setiap hari.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/80 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplets className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-700 mb-3">
                    Vitamin
                  </h3>
                  <p className="text-gray-600">
                    Membantu menjaga fungsi tubuh berjalan normal
                  </p>
                </div>
                <div className="bg-white/80 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-700 mb-3">
                    Mineral
                  </h3>
                  <p className="text-gray-600">
                    Membantu membangun tubuh dan menjaga kerja organ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sayur dan Buah Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Sayur dan Buah
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-lime-50 rounded-3xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-3 bg-green-100 text-green-800 px-6 py-3 rounded-full font-bold text-xl">
                  <Apple className="w-6 h-6" />
                  <span>Bukan Hanya Pelengkap!</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Vitamin & Mineral",
                    desc: "Mengandung vitamin dan mineral esensial",
                    icon: "💊",
                  },
                  {
                    title: "Serat Pangan",
                    desc: "Sumber utama serat pangan",
                    icon: "🌾",
                  },
                  {
                    title: "Keseimbangan Gizi",
                    desc: "Menjaga keseimbangan zat gizi lainnya",
                    icon: "⚖️",
                  },
                  {
                    title: "Hidrasi & Organ",
                    desc: "Mengandung air (membantu hidrasi tubuh & memperlancar kerja organ)",
                    icon: "💧",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/80 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h4 className="font-bold text-green-800 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Food Guidelines */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Panduan Makanan
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Disarankan */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-lg border-2 border-green-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-800">
                  DISARANKAN
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  "Diutamakan pangan lokal dan diolah sendiri",
                  "Kaya protein hewani",
                  "Kaya gizi",
                  "Kaya vitamin dan mineral",
                  "Cukup karbohidrat",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-white/50 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tidak Disarankan */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 shadow-lg border-2 border-red-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <XCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-red-800">
                  TIDAK DISARANKAN
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  "Makanan tinggi gula dan garam",
                  "Makanan olahan berpengawet",
                  "Makanan mengandung lemak jenuh",
                  "Minuman dengan pemanis tinggi",
                  "Tidak beragam dan tanpa protein",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-white/50 rounded-lg"
                  >
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chemical Additives Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Apa Saja Bahan Kimia Tambahan yang Umum Ditemukan dalam Jajanan
            Anak?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Pewarna Sintetis */}
            <div className="group cursor-pointer">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-emerald-200 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-20 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                      Pewarna Sintetis
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Digunakan untuk membuat warna makanan terlihat menarik dan
                      mencolok.
                    </p>
                    <div className="bg-emerald-50 rounded-xl p-4">
                      <h4 className="font-bold text-emerald-800 mb-3">
                        Dampak:
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Menyebabkan gangguan perilaku</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Tubuh anak kesulitan menetralisir racun</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Penyedap */}
            <div className="group cursor-pointer">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-teal-200 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-20 bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full"></div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                      Penyedap
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Menambahkan rasa gurih. Bahaya jika konsumsi jumlah besar.
                    </p>
                    <div className="bg-teal-50 rounded-xl p-4">
                      <h4 className="font-bold text-teal-800 mb-3">Dampak:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Mengganggu kerja saraf & otak</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Ketagihan rasa gurih, menolak makanan alami
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pemanis Buatan */}
            <div className="group cursor-pointer">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-cyan-200 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-20 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors">
                      Pemanis Buatan
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Menggantikan gula asli
                    </p>
                    <div className="bg-cyan-50 rounded-xl p-4">
                      <h4 className="font-bold text-cyan-800 mb-3">Dampak:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Gangguan metabolisme</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Membebani fungsi ginjal & hati</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Anak cepat lapar & kecanduan rasa manis</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Dampak Makanan Bergizi Rendah */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Dampak Mengonsumsi Makanan Bergizi Rendah
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-emerald-50 rounded-xl">
                  <AlertTriangle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      Tubuh si kecil hanya merasa kenyang tetapi tidak memiliki
                      "bahan baku" untuk membangun dan berkembang
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-emerald-50 rounded-xl">
                  <AlertTriangle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      Dapat menghambat kerja & fungsi dari gizi baik yang sudah
                      masuk ke tubuh si kecil
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dampak Bahan Kimia Berbahaya */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Dampak Bahan Kimia Berbahaya
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-teal-50 rounded-xl">
                  <XCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      Bahan kimia berbahaya mengganggu penyerapan zat gizi
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-teal-50 rounded-xl">
                  <XCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      Bahan kimia dapat meracuni organ penting yang mendukung
                      pertumbuhan
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-teal-50 rounded-xl">
                  <XCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      Kecanduan jajanan dan menolak makanan bergizi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-8 text-white shadow-2xl">
              <Shield className="w-16 h-16 mx-auto mb-6 fill-white" />
              <h3 className="text-2xl font-bold mb-4">
                Menghindari Makanan Berbahaya = Melindungi Tumbuh Kembang Anak
                dari Stunting
              </h3>
              <p className="text-lg opacity-90 leading-relaxed">
                Dengan memahami bahaya bahan kimia tambahan dan memilih makanan
                bergizi, kita dapat melindungi anak dari risiko stunting dan
                memberikan fondasi terbaik untuk masa depan mereka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NutritionAboutPage;
