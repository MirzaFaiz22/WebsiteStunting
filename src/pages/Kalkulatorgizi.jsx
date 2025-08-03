import React, { useState } from 'react';
import { Heart, Shield, TrendingUp, Star, AlertTriangle } from 'lucide-react';

function KalkulatorGizi() {
  const [usiaTahun, setUsiaTahun] = useState('');
  const [usiaBulan, setUsiaBulan] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('');
  const [berat, setBerat] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [hasil, setHasil] = useState(null);

  // Ambang batas stunting WHO (TB/U) untuk anak laki-laki & perempuan (rata-rata, cm)
  // Sumber: WHO Child Growth Standards (2006), z-score -3 dan -2 (hanya sebagian data, bisa dikembangkan)
  const ambangStunting = [
    // usia dalam bulan: [z-score -3, z-score -2]
    { bulan: 0, L: [44.2, 45.4], P: [43.6, 44.7] },
    { bulan: 1, L: [48.9, 50.0], P: [48.0, 49.1] },
    { bulan: 2, L: [52.4, 53.7], P: [51.0, 52.3] },
    { bulan: 3, L: [55.3, 56.7], P: [53.5, 54.7] },
    { bulan: 4, L: [57.6, 59.0], P: [55.6, 56.8] },
    { bulan: 5, L: [59.6, 61.0], P: [57.4, 58.6] },
    { bulan: 6, L: [61.2, 62.6], P: [58.9, 60.1] },
    { bulan: 12, L: [68.9, 71.0], P: [67.1, 69.2] },
    { bulan: 24, L: [80.0, 82.0], P: [78.0, 80.0] },
    { bulan: 36, L: [87.4, 89.5], P: [85.1, 87.1] },
    { bulan: 48, L: [93.0, 95.0], P: [90.7, 92.7] },
    { bulan: 60, L: [97.8, 99.9], P: [95.1, 97.0] },
  ];

  // Fungsi interpolasi ambang batas stunting
  function getStuntingLimit(usiaBulan, jk) {
    if (usiaBulan < 0 || (jk !== 'L' && jk !== 'P')) return { minus3: 0, minus2: 0 };
    let prev = ambangStunting[0];
    for (let i = 1; i < ambangStunting.length; i++) {
      const curr = ambangStunting[i];
      if (usiaBulan === curr.bulan) return { minus3: curr[jk][0], minus2: curr[jk][1] };
      if (usiaBulan < curr.bulan) {
        // Linear interpolation
        const ratio = (usiaBulan - prev.bulan) / (curr.bulan - prev.bulan);
        return {
          minus3: prev[jk][0] + (curr[jk][0] - prev[jk][0]) * ratio,
          minus2: prev[jk][1] + (curr[jk][1] - prev[jk][1]) * ratio,
        };
      }
      prev = curr;
    }
    // Jika usia di atas data, pakai data terakhir
    const last = ambangStunting[ambangStunting.length - 1];
    return { minus3: last[jk][0], minus2: last[jk][1] };
  }

  const hitungGizi = (e) => {
    e.preventDefault();

    const tahun = parseInt(usiaTahun, 10);
    const bulan = parseInt(usiaBulan, 10);
    const beratNum = parseFloat(berat);
    const tinggiNum = parseFloat(tinggi);
    const totalBulan = tahun * 12 + bulan;

    if (
      isNaN(tahun) || isNaN(bulan) ||
      isNaN(beratNum) || isNaN(tinggiNum) ||
      jenisKelamin === '' ||
      beratNum <= 0 || tinggiNum <= 0 || totalBulan <= 0
    ) {
      setHasil({ error: 'Mohon isi semua data dengan benar.' });
      return;
    }

    // Estimasi kebutuhan energi (WHO 2001-2007 & Kemenkes 2019, kasar)
    let energi = 0;
    if (jenisKelamin === 'L') {
      if (totalBulan <= 6) energi = 550;
      else if (totalBulan <= 12) energi = 700;
      else if (totalBulan <= 36) energi = 1000;
      else if (totalBulan <= 72) energi = 1350;
      else if (totalBulan <= 108) energi = 1700;
      else energi = 2100;
    } else {
      if (totalBulan <= 6) energi = 500;
      else if (totalBulan <= 12) energi = 650;
      else if (totalBulan <= 36) energi = 950;
      else if (totalBulan <= 72) energi = 1250;
      else if (totalBulan <= 108) energi = 1600;
      else energi = 2000;
    }

    // Estimasi protein (gram/hari)
    let protein = 0;
    if (totalBulan <= 12) protein = 13;
    else if (totalBulan <= 36) protein = 15;
    else if (totalBulan <= 72) protein = 20;
    else if (totalBulan <= 108) protein = 28;
    else protein = 40;

    // Cairan = 100 mL x berat (ml/hari)
    const cairan = Math.round(beratNum * 100);

    const imt = (beratNum / ((tinggiNum / 100) ** 2)).toFixed(2);

    // Perhitungan status stunting
    let stunting = null;
    if (totalBulan <= 60 && (jenisKelamin === 'L' || jenisKelamin === 'P')) {
      const batas = getStuntingLimit(totalBulan, jenisKelamin);
      if (tinggiNum < batas.minus3) {
        stunting = {
          status: 'Stunting Berat',
          desc: 'Tinggi badan sangat di bawah standar usia (z-score < -3 SD)',
          color: 'text-red-600',
          icon: <AlertTriangle className="inline w-5 h-5 mr-1 text-red-600" />
        };
      } else if (tinggiNum < batas.minus2) {
        stunting = {
          status: 'Stunting',
          desc: 'Tinggi badan di bawah standar usia (z-score < -2 SD)',
          color: 'text-yellow-600',
          icon: <AlertTriangle className="inline w-5 h-5 mr-1 text-yellow-600" />
        };
      } else {
        stunting = {
          status: 'Normal',
          desc: 'Tinggi badan sesuai atau di atas standar usia',
          color: 'text-emerald-600',
          icon: <TrendingUp className="inline w-5 h-5 mr-1 text-emerald-600" />
        };
      }
    }

    setHasil({ energi, protein, cairan, imt, stunting });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-16 px-4 flex items-center justify-center">
      <div className="bg-white/90 rounded-3xl shadow-xl max-w-xl w-full p-8 relative">
        <div className="flex items-center space-x-3 mb-6">
          <Star className="w-7 h-7 text-emerald-500" />
          <h2 className="text-2xl font-bold text-emerald-700">Kalkulator Gizi Anak</h2>
        </div>
        <form onSubmit={hitungGizi} className="space-y-4">
          <div className="flex space-x-2">
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium mb-1">Usia (tahun)</label>
              <input
                type="number"
                min="0"
                className="w-full border border-emerald-200 rounded-lg px-4 py-2"
                value={usiaTahun}
                onChange={e => setUsiaTahun(e.target.value)}
                placeholder="0–18"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium mb-1">Usia (bulan)</label>
              <input
                type="number"
                min="0"
                max="11"
                className="w-full border border-emerald-200 rounded-lg px-4 py-2"
                value={usiaBulan}
                onChange={e => setUsiaBulan(e.target.value)}
                placeholder="0–11"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Jenis Kelamin</label>
            <select
              value={jenisKelamin}
              onChange={e => setJenisKelamin(e.target.value)}
              className="w-full border border-emerald-200 rounded-lg px-4 py-2"
              required
            >
              <option value="">Pilih...</option>
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Berat Badan (kg)</label>
            <input
              type="number"
              min="1"
              step="0.1"
              className="w-full border border-emerald-200 rounded-lg px-4 py-2"
              value={berat}
              onChange={e => setBerat(e.target.value)}
              placeholder="Contoh: 14.5"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Tinggi Badan (cm)</label>
            <input
              type="number"
              min="30"
              step="0.1"
              className="w-full border border-emerald-200 rounded-lg px-4 py-2"
              value={tinggi}
              onChange={e => setTinggi(e.target.value)}
              placeholder="Contoh: 95"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-2 rounded-lg shadow hover:from-emerald-700 hover:to-teal-700 transition"
          >
            Hitung Kebutuhan Gizi
          </button>
        </form>

        {hasil && (
          <div className="mt-8 bg-emerald-50 rounded-2xl p-6 shadow-inner">
            {'error' in hasil ? (
              <p className="text-red-600 font-semibold">{hasil.error}</p>
            ) : (
              <>
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-emerald-700">Hasil Perkiraan Gizi Harian:</span>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <Heart className="inline w-4 h-4 mr-1 text-pink-500" />
                    <span className="font-medium">Energi:</span> {hasil.energi} kkal/hari
                  </li>
                  <li>
                    <Star className="inline w-4 h-4 mr-1 text-yellow-500" />
                    <span className="font-medium">Protein:</span> {hasil.protein} gram/hari
                  </li>
                  <li>
                    <Shield className="inline w-4 h-4 mr-1 text-teal-500" />
                    <span className="font-medium">Cairan:</span> {hasil.cairan} ml/hari
                  </li>
                  <li>
                    <TrendingUp className="inline w-4 h-4 mr-1 text-emerald-500" />
                    <span className="font-medium">IMT:</span> {hasil.imt}
                  </li>
                </ul>
                {/* Hasil status stunting */}
                {hasil.stunting && (
                  <div className={`mt-6 p-4 rounded-xl bg-white flex items-center shadow ${hasil.stunting.color}`}>
                    {hasil.stunting.icon}
                    <div>
                      <span className="font-bold">{hasil.stunting.status}</span>
                      <span className="block text-sm text-gray-700">{hasil.stunting.desc}</span>
                    </div>
                  </div>
                )}
                <p className="text-xs text-gray-500 mt-4">
                  *Data bersifat estimasi berdasarkan usia, jenis kelamin, dan standar WHO. Untuk diagnosis lebih akurat, konsultasikan dengan tenaga medis.
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default KalkulatorGizi;