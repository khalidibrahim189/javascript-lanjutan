//High order
function kerjakanTugas(matakuliah, selesai){
    console.log(`Mulai mengerjakan tugas ${matakuliah}...`);
    selesai();
}


function selesai(){
    alert('Alhamdulillah , sudah menyelesaikan tugas kuliah')
}


kerjakanTugas('Pemrograman Web', selesai);