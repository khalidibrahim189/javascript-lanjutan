// const tampilNama = () => `Khalid ibrahim`;
// document.getElementById('nama').innerHTML = tampilNama();

// let mahasiswa = ['Khalid','rizky','abdullah'];
// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jumlahHuruf: nama.length}));

// console.table(jumlahHuruf);


//construtor function
const Mahasiswa = function(){
    this.nama = 'Khalid ibrahim';
    this.umur = 22;
    this.sayHello = () => {
        console.log(`Halo , nama saya ${this.nama}, umur saya saat ini adalah ${this.umur}`);
    }
}

const khalid = new Mahasiswa();