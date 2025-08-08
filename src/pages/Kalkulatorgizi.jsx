import React, { useState } from "react";
import { Heart, Shield, TrendingUp, Star, AlertTriangle } from "lucide-react";

function KalkulatorGizi() {
  const [usiaBulan, setUsiaBulan] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [berat, setBerat] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [hasil, setHasil] = useState(null);

  // Ambang batas stunting WHO (TB/U) untuk anak laki-laki & perempuan (rata-rata, cm)
  // Sumber: WHO Child Growth Standards (2006), z-score -3 dan -2
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

  // Ambang batas Weight-for-Height WHO (BB/TB) untuk anak laki-laki & perempuan (kg)
  // Sumber: WHO Child Growth Standards (2006), z-score -3, -2, +2
  const ambangWeightForHeight = [
    // tinggi dalam cm: [z-score -3, z-score -2, z-score +2]
    { tinggi: 45, L: [1.9, 2.1, 2.9], P: [1.8, 2.0, 2.8] },
    { tinggi: 50, L: [2.6, 2.9, 4.0], P: [2.5, 2.8, 3.8] },
    { tinggi: 55, L: [3.4, 3.8, 5.3], P: [3.2, 3.6, 5.0] },
    { tinggi: 60, L: [4.4, 4.9, 6.8], P: [4.2, 4.6, 6.4] },
    { tinggi: 65, L: [5.5, 6.1, 8.5], P: [5.2, 5.8, 8.0] },
    { tinggi: 70, L: [6.7, 7.5, 10.4], P: [6.4, 7.0, 9.8] },
    { tinggi: 75, L: [8.1, 9.0, 12.5], P: [7.7, 8.5, 11.8] },
    { tinggi: 80, L: [9.6, 10.6, 14.8], P: [9.1, 10.1, 14.0] },
    { tinggi: 85, L: [11.2, 12.4, 17.3], P: [10.7, 11.8, 16.4] },
    { tinggi: 90, L: [12.9, 14.2, 19.9], P: [12.4, 13.7, 19.0] },
    { tinggi: 95, L: [14.8, 16.3, 22.7], P: [14.2, 15.7, 21.8] },
    { tinggi: 100, L: [16.7, 18.4, 25.6], P: [16.1, 17.9, 24.9] },
    { tinggi: 110, L: [20.9, 23.1, 32.5], P: [20.3, 22.6, 31.9] },
  ];

  // Fungsi interpolasi ambang batas stunting
  function getStuntingLimit(usiaBulan, jk) {
    if (usiaBulan < 0 || (jk !== "L" && jk !== "P"))
      return { minus3: 0, minus2: 0 };
    let prev = ambangStunting[0];
    for (let i = 1; i < ambangStunting.length; i++) {
      const curr = ambangStunting[i];
      if (usiaBulan === curr.bulan)
        return { minus3: curr[jk][0], minus2: curr[jk][1] };
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

  // Fungsi interpolasi ambang batas Weight-for-Height
  function getWeightForHeightLimit(tinggiCm, jk) {
    if (tinggiCm < 0 || (jk !== "L" && jk !== "P"))
      return { minus3: 0, minus2: 0, plus2: 0 };

    let prev = ambangWeightForHeight[0];
    for (let i = 1; i < ambangWeightForHeight.length; i++) {
      const curr = ambangWeightForHeight[i];
      if (tinggiCm === curr.tinggi)
        return { minus3: curr[jk][0], minus2: curr[jk][1], plus2: curr[jk][2] };
      if (tinggiCm < curr.tinggi) {
        // Linear interpolation
        const ratio = (tinggiCm - prev.tinggi) / (curr.tinggi - prev.tinggi);
        return {
          minus3: prev[jk][0] + (curr[jk][0] - prev[jk][0]) * ratio,
          minus2: prev[jk][1] + (curr[jk][1] - prev[jk][1]) * ratio,
          plus2: prev[jk][2] + (curr[jk][2] - prev[jk][2]) * ratio,
        };
      }
      prev = curr;
    }
    // Jika tinggi di atas data, pakai data terakhir
    const last = ambangWeightForHeight[ambangWeightForHeight.length - 1];
    return { minus3: last[jk][0], minus2: last[jk][1], plus2: last[jk][2] };
  }

  // Fungsi untuk menentukan status Weight-for-Height berdasarkan WHO
  function getWeightForHeightStatus(berat, tinggi, jenisKelamin) {
    const batas = getWeightForHeightLimit(tinggi, jenisKelamin);

    if (berat < batas.minus3) {
      return {
        status: "Severely Wasted (Gizi Buruk)",
        color: "text-red-600",
        icon: <AlertTriangle className="inline w-4 h-4 mr-1 text-red-600" />,
        desc: "Berat badan sangat kurang untuk tinggi badan (z-score < -3 SD)",
      };
    } else if (berat < batas.minus2) {
      return {
        status: "Wasted (Kurus)",
        color: "text-yellow-600",
        icon: <AlertTriangle className="inline w-4 h-4 mr-1 text-yellow-600" />,
        desc: "Berat badan kurang untuk tinggi badan (z-score < -2 SD)",
      };
    } else if (berat <= batas.plus2) {
      return {
        status: "Normal",
        color: "text-emerald-600",
        icon: <TrendingUp className="inline w-4 h-4 mr-1 text-emerald-600" />,
        desc: "Berat badan normal untuk tinggi badan",
      };
    } else {
      return {
        status: "Overweight (Gemuk)",
        color: "text-orange-600",
        icon: <AlertTriangle className="inline w-4 h-4 mr-1 text-orange-600" />,
        desc: "Berat badan berlebih untuk tinggi badan (z-score > +2 SD)",
      };
    }
  }

  const hitungGizi = (e) => {
    e.preventDefault();

    const totalBulan = parseInt(usiaBulan, 10);
    const beratNum = parseFloat(berat);
    const tinggiNum = parseFloat(tinggi);

    if (
      isNaN(totalBulan) ||
      isNaN(beratNum) ||
      isNaN(tinggiNum) ||
      jenisKelamin === "" ||
      beratNum <= 0 ||
      tinggiNum <= 0 ||
      totalBulan <= 0
    ) {
      setHasil({ error: "Mohon isi semua data dengan benar." });
      return;
    }

    // Perhitungan status stunting
    let stunting = null;
    if (totalBulan <= 60 && (jenisKelamin === "L" || jenisKelamin === "P")) {
      const batas = getStuntingLimit(totalBulan, jenisKelamin);
      if (tinggiNum < batas.minus3) {
        stunting = {
          status: "Stunting Berat",
          desc: "Tinggi badan sangat di bawah standar usia (z-score < -3 SD)",
          color: "text-red-600",
          icon: <AlertTriangle className="inline w-5 h-5 mr-1 text-red-600" />,
        };
      } else if (tinggiNum < batas.minus2) {
        stunting = {
          status: "Stunting",
          desc: "Tinggi badan di bawah standar usia (z-score < -2 SD)",
          color: "text-yellow-600",
          icon: (
            <AlertTriangle className="inline w-5 h-5 mr-1 text-yellow-600" />
          ),
        };
      } else {
        stunting = {
          status: "Normal",
          desc: "Tinggi badan sesuai atau di atas standar usia",
          color: "text-emerald-600",
          icon: <TrendingUp className="inline w-5 h-5 mr-1 text-emerald-600" />,
        };
      }
    }

    // Perhitungan Weight-for-Height
    const weightForHeight = getWeightForHeightStatus(beratNum, tinggiNum, jenisKelamin);

    setHasil({ stunting, weightForHeight });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-16 px-4 flex items-center justify-center">
      <div className="bg-white/90 rounded-3xl shadow-xl max-w-xl w-full p-8 relative">
        <div className="flex items-center space-x-3 mb-6">
          <Star className="w-7 h-7 text-emerald-500" />
          <h2 className="text-2xl font-bold text-emerald-700">
            Evaluasi Status Gizi Anak
          </h2>
        </div>
        <form onSubmit={hitungGizi} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Usia (bulan)
            </label>
            <input
              type="number"
              min="0"
              max="60"
              className="w-full border border-emerald-200 rounded-lg px-4 py-2"
              value={usiaBulan}
              onChange={(e) => setUsiaBulan(e.target.value)}
              placeholder="Contoh: 24 (untuk usia 2 tahun)"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              *Untuk anak usia 0-60 bulan (0-5 tahun)
            </p>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Jenis Kelamin
            </label>
            <select
              value={jenisKelamin}
              onChange={(e) => setJenisKelamin(e.target.value)}
              className="w-full border border-emerald-200 rounded-lg px-4 py-2"
              required
            >
              <option value="">Pilih...</option>
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Berat Badan (kg)
            </label>
            <input
              type="number"
              min="1"
              step="0.1"
              className="w-full border border-emerald-200 rounded-lg px-4 py-2"
              value={berat}
              onChange={(e) => setBerat(e.target.value)}
              placeholder="Contoh: 14.5"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Tinggi Badan (cm)
            </label>
            <input
              type="number"
              min="30"
              step="0.1"
              className="w-full border border-emerald-200 rounded-lg px-4 py-2"
              value={tinggi}
              onChange={(e) => setTinggi(e.target.value)}
              placeholder="Contoh: 95"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-2 rounded-lg shadow hover:from-emerald-700 hover:to-teal-700 transition"
          >
            Evaluasi Status Gizi
          </button>
        </form>

        {hasil && (
          <div className="mt-8 bg-emerald-50 rounded-2xl p-6 shadow-inner">
            {"error" in hasil ? (
              <p className="text-red-600 font-semibold">{hasil.error}</p>
            ) : (
              <>
                <div className="flex items-center space-x-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-emerald-700">
                    Hasil Evaluasi Status Gizi:
                  </span>
                </div>

                {/* Status Weight-for-Height */}
                {hasil.weightForHeight && (
                  <div
                    className={`mb-4 p-4 rounded-xl bg-white flex items-center shadow ${hasil.weightForHeight.color}`}
                  >
                    {hasil.weightForHeight.icon}
                    <div>
                      <span className="font-bold">
                        Status Gizi: {hasil.weightForHeight.status}
                      </span>
                      <span className="block text-sm text-gray-700">
                        {hasil.weightForHeight.desc}
                      </span>
                    </div>
                  </div>
                )}

                {/* Status Stunting */}
                {hasil.stunting && (
                  <div
                    className={`p-4 rounded-xl bg-white flex items-center shadow ${hasil.stunting.color}`}
                  >
                    {hasil.stunting.icon}
                    <div>
                      <span className="font-bold">
                        Status Tinggi/Usia: {hasil.stunting.status}
                      </span>
                      <span className="block text-sm text-gray-700">
                        {hasil.stunting.desc}
                      </span>
                    </div>
                  </div>
                )}

                <p className="text-xs text-gray-500 mt-4">
                  *Evaluasi berdasarkan standar WHO Child Growth Standards 2006.
                  Untuk diagnosis dan penanganan lebih lanjut, konsultasikan
                  dengan tenaga kesehatan.
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
