//cara membuat object pada javascript 
//1.Object literal
//tidak efektif untuk object yang banyak

// let santri1 = {
//     nama : 'Khalid ibrahim',
//     energi : 100,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Selamat makan ${this.nama}`);
//     }
// }

// let santri2 = {
//     nama : 'Rizky alfatih nasrullah',
//     energi : 100,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Selamat makan ${this.nama}`);
//     }
// }

//2. Function Declaration

const methodSantri = {
    makan: function(porsi){
        this.energi += porsi;
        console.log(`Halo, ${this.nama}, selamat makan`);
    },

    main: function(jam){
        this.energi -= jam;
        console.log(`Halo , ${this.nama}, selamat bermain`);
    },
    tidur: function(jam){
        this.energi += jam * 2;
        console.log(`Halo , ${this.nama}, selamat beristirahat`);
    }

};

function Santri(nama , energi){
    let santri = Object.create(methodSantri);
    santri.nama = nama;
    santri.energi = energi;
    // santri.makan = methodSantri.makan;
    // santri.main = methodSantri.main;
    // santri.tidur = methodSantri.tidur;

    return santri;
}

let khalid = Santri('Khalid ibrahim', 100);
let rizky = Santri('Rizky Alfatih Nasrullah', 100);

//3. Construtor Function
//keyword new 
// function Santri(nama , energi){
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo, ${this.nama}, selamat makan`);
//     }

//     this.main = function(jam){
//         this.energi -= jam;
//         console.log(`Halo , ${this.nama}, selamat bermain`);
//     }
// }

//cara memanggil dengan consturtor
// let santri = new Santri('Khalid Ibrahim', 100);