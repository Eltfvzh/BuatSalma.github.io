let tombol = document.getElementById("tombol");
let h1 = document.getElementById("h1");
let h4 = document.getElementById("h4");
let p = document.getElementById("p");
let lanjut = document.getElementById("lanjut");
let lanjut1 = document.getElementById("lanjut1");
let lanjut2 = document.getElementById("lanjut2");
let lanjut3 = document.getElementById("lanjut3");



tombol.addEventListener("click", function(){
    h1.innerHTML = "ada pesan buat kamu <3";
    lanjut.innerHTML = "lanjut?";
    tombol.style.display = "none";

    lanjut.addEventListener("click", function(){
        lanjut.style.display = "none";
        tombol.style.display = "none";
        h1.style.display = "none";
        p.innerHTML = "disini aku cuma mau ngungkapin perasaan aku, masalah aku diterima atau ngak itu tergantung kamunya, aku juga ngak bakal berharap lebih kok, kalo kamu risih bilang aja ya, BTW i have crush on you.. , aku nyatain ini biar hati aku lega aja karna udah ngungkapin perasaaan ini ke kamu, kalau semisalnya kamu udah punya pacar maaf yaa, karna udah confess ke kamu, segitu aja ya.. aku tunggu";
        lanjut2.innerHTML = "Mau";
        lanjut3.innerHTML = "Ngak";

        lanjut3.addEventListener("click", function(){
            let hasil = confirm("beneran");

            if (hasil == true){
                alert("makasih yaa udah mau dengerin");
            }else{
                alert("yehh yang bener dongg")
            }
        })

    })
})
