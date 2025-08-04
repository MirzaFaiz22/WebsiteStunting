import React from "react";
import {
  Mail,
  Instagram,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
} from "lucide-react";

function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-200/30 to-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-100/20 to-emerald-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-emerald-100">
            <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-600" />
            <span className="text-emerald-700 font-semibold text-sm">
              Hubungi Kami
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              Kontak
            </span>
            <br />
            <span className="text-gray-800">& Dukungan</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Untuk informasi lebih lanjut tentang pencegahan stunting dan
            konsultasi gizi anak
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Email Support */}
          <div className="group cursor-pointer">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-emerald-200 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-20 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      Email Support
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Kirimkan pertanyaan Anda melalui email untuk mendapatkan
                    informasi lengkap tentang gizi anak dan pencegahan stunting.
                  </p>
                  <div className="bg-emerald-50 rounded-xl p-4">
                    <p className="font-semibold text-emerald-800">
                      edukasistunting@gmail.com
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Respon dalam 24 jam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call Support */}
          <div className="group cursor-pointer">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-teal-200 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-20 bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full"></div>
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                      Call Support
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Hubungi langsung tim ahli gizi kami untuk konsultasi cepat
                    dan mendapat bantuan segera.
                  </p>
                  <div className="bg-teal-50 rounded-xl p-4">
                    <p className="font-semibold text-teal-800">
                      +62 812-3456-7890
                    </p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <p className="text-sm text-gray-600">
                        Senin - Jumat: 08:00 - 17:00 WIB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Additional Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Instagram */}
          <div className="group cursor-pointer">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-cyan-200 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-20 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                      Follow Instagram
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ikuti akun Instagram kami untuk tips harian, resep sehat,
                    dan informasi terbaru tentang gizi anak.
                  </p>
                  <div className="bg-cyan-50 rounded-xl p-4">
                    <p className="font-semibold text-cyan-800">
                      @stunting.awareness
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Update harian & tips praktis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="group cursor-pointer">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-emerald-200 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-20 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      Konsultasi Langsung
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Kunjungi klinik mitra kami untuk konsultasi gizi anak secara
                    langsung dengan ahli berpengalaman.
                  </p>
                  <div className="bg-emerald-50 rounded-xl p-4">
                    <p className="font-semibold text-emerald-800">
                      Klinik Gizi Sehat
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Jl. Sehat Selalu No. 123, Jakarta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-8 text-white shadow-2xl">
            <MessageCircle className="w-16 h-16 mx-auto mb-6 fill-white" />
            <h3 className="text-2xl font-bold mb-4">
              Jangan Ragu untuk Menghubungi Kami
            </h3>
            <p className="text-lg opacity-90 leading-relaxed">
              Tim ahli kami siap membantu Anda dalam memberikan gizi terbaik
              untuk anak. Setiap pertanyaan penting untuk masa depan yang lebih
              sehat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
