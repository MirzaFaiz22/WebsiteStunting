function About() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">
        Kenapa pemenuhan nutrisi penting sebagai langkah pemberian gizi seimbang?
      </h2>
      <p className="mb-4">
        Karbohidrat adalah zat gizi yang banyak ditemukan dalam nasi, kentang, singkong, dan jagung, yang menjadi sumber energi utama untuk otak dan aktivitas fisik.
        Karbohidrat ibarat bahan bakar si kecil agar bisa bermain dan belajar tanpa merasa lemas.
      </p>
      <p className="mb-4">
        Lalu bagaimana jika si kecil hanya mengonsumsi makanan rendah gizi? Tubuh si kecil mungkin akan merasa kenyang, tetapi tidak memiliki “bahan baku” untuk membangun dan berkembang.
        Ini dapat menghambat kerja dan fungsi dari gizi baik yang sudah masuk ke tubuh si kecil.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div className="bg-green-100 p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2">DISARANKAN</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Diutamakan pangan lokal dan diolah sendiri</li>
            <li>Kaya protein hewani</li>
            <li>Kaya gizi</li>
            <li>Kaya vitamin dan mineral</li>
            <li>Cukup karbohidrat</li>
          </ul>
        </div>
        <div className="bg-red-100 p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2">TIDAK DISARANKAN</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Makanan tinggi gula dan garam</li>
            <li>Makanan olahan berpengawet</li>
            <li>Makanan mengandung lemak jenuh</li>
            <li>Minuman dengan pemanis tinggi</li>
            <li>Tidak beragam dan tanpa protein</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
  