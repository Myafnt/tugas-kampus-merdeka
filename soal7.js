const dataPenjualanPakAldi = [
    {
        namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan : 760000,
        kategori :'Sepatu Sport',
        totalTerjual : 90,
    },
    {
        namaProduct : 'Sepatu Sepatu Warrior Tristan Black Brown High - Original',
        hargaSatuan : 960000,
        kategori :'Sepatu Sneaker',
        totalTerjual : 37,
    },
    {
        namaProduct : 'Sepatu Sepatu Warrior Tristan Maroon High - Original',
        hargaSatuan : 360000,
        kategori :'Sepatu Sneaker',
        totalTerjual : 90,
    },
    {
        namaProduct : 'Sepatu Sepatu Rainbow Tosca Corduroy - [BNIB] Original',
        hargaSatuan : 120000,
        kategori :'Sepatu Sneaker',
        totalTerjual : 90,
    }
]

function hitungTotalPenjualan (dataPenjualan) {
    return dataPenjualanPakAldi.reduce((prev, cur) => prev + cur.totalTerjual, 0);
    }

console.log(hitungTotalPenjualan (dataPenjualanPakAldi))