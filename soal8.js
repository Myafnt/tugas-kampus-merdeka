const dataPenjualanNovel = [
  {
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const getInfoPenjualan = (dataPenjualan) => {
  let nilaiTotalKeuntungan = 0;
  let nilaiTotalModal = 0;
  for (i = 0; i < dataPenjualan.length; i++) {
    nilaiTotalKeuntungan += dataPenjualan[i].totalTerjual * (dataPenjualan[i].hargaJual - dataPenjualan[i].hargaBeli);

    nilaiTotalModal += dataPenjualan[i].hargaBeli * (dataPenjualan[i].totalTerjual + dataPenjualan[i].sisaStok);

    bukuTerlaris = dataPenjualan.reduce(function (prev, curr) {
      return curr.totalTerjual > prev.totalTerjual ? curr : prev.namaProduk;
    });
    penulisTerlaris = dataPenjualan.reduce(function (prev, curr) {
      return curr.totalTerjual > prev.totalTerjual ? curr : prev.penulis;
    });
    angkaPersentaseKeuntungan = (nilaiTotalKeuntungan / nilaiTotalModal) * 100;
  }

  let totalKeuntungan = 'Rp.' + new Intl.NumberFormat('id-ID').format(nilaiTotalKeuntungan);
  let totalModal = 'Rp.' + new Intl.NumberFormat('id-ID').format(nilaiTotalModal);
  let persentaseKeuntungan = angkaPersentaseKeuntungan.toFixed(2) + '%';

  return { totalKeuntungan, totalModal, persentaseKeuntungan, bukuTerlaris, penulisTerlaris };
};

console.log(getInfoPenjualan(dataPenjualanNovel));