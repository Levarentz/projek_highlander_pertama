// const baseUrl = 'http://35.198.233.160'
// const baseUrl = 'http://localhost:3000'
var detailId;

const AllNews = [
  {
    title: "Highlander Genset Portable",
    image: "CSL 1000L.png",
    description: `Genset Highlander jual genset portable dengan kapasitas dari 750 watt - 6500 watt 
      dengan berbagai macam type genset, diantaranya genset portable dengan menggunakan bahan bakar bensin, Gas LPG, dan Gas NG.
      Keuntungan dengan menggunakan genset portable selain mudah untuk dibawa kemana-mana, dan juga tidak menggunakan ruang yang 
      terlalu besar, tetapi juga cukup efisien dalam penggunaan bahan bakar.
      Selain efisien dalam menggunakan bahan bakar, juga sangat mudah untuk pemeliharaan dan perbaikannya, serta sparepart genset yang sangat mudah dicari.
      Kami juga men-jual genset portable dengan bahan bakar Gas LPG dan Gas NG dengan kapasitas dari 800 watt - 4800 watt dengan type genset silent dan genset open, dan kami memberikan dengan harga yang sangat murah.
      Selain ramah lingkungan, tanpa polusi yang dihasilkan, serta bahan bakar yang cukup efisien dalam penggunaannya, serta proses instalasi dan penggunaan yang sangat mudah. </p>`,
    creator: "Highlander Admin",
  },
  {
    title: "Highlander genset silent",
    image: "4JB1T.jpg",
    description: `Genset Highlander utuk type genset silent dibuat dengan bahan plat besi 
      yang tebal dengan ukuran ketebalan plat 2.3mm - 2.8mm, doorlock dan engsel terbuat dari 
      bahan stainless. Bagian dalam dinding genset dilapisi busa peredam berkualitas tinggi yang tahan 
      api. Jenis diesel genset silent tersedia dari kapasitas 10kva - 650kva dengan menggunakan mesin
       genset sesuai dengan kebutuhan anda, seperti genset perkins, genset yanmar, genset cummins, genset 
       mitsubishi, dll. Untuk warna standard genset silent kami adalah warna biru, tetapi anda bisa memesan denga warna kesukaan anda.
      Selain menjual genset baru, kami juga menjual genset bekas yang rata-rata kondisinya masih 80% dan 
      juga genset rekondisi. Semua genset yang kami jual baik itu genset baru, genset bekas, genset rekondisi,
      genset portable semuanya ready stock.`,
    creator: "Highlander Admin",
  },
  {
   title: "Jenis & Jumlah Colokan Listrik yang Dimiliki Genset ",
   image: "HL deutz 60 kva.jpg",
   description: `Genset Highlander utuk type genset silent dibuat dengan bahan plat besi 
     yang tebal dengan ukuran ketebalan plat 2.3mm - 2.8mm, doorlock dan engsel terbuat dari 
     bahan stainless. Bagian dalam dinding genset dilapisi busa peredam berkualitas tinggi yang tahan 
     api. Jenis diesel genset silent tersedia dari kapasitas 10kva - 650kva dengan menggunakan mesin
      genset sesuai dengan kebutuhan anda, seperti genset perkins, genset yanmar, genset cummins, genset 
      mitsubishi, dll. Untuk warna standard genset silent kami adalah warna biru, tetapi anda bisa memesan denga warna kesukaan anda.
     Selain menjual genset baru, kami juga menjual genset bekas yang rata-rata kondisinya masih 80% dan 
     juga genset rekondisi. Semua genset yang kami jual baik itu genset baru, genset bekas, genset rekondisi,
     genset portable semuanya ready stock.`,
   creator: "by Highlander Admin 03 juni 2020 ",
 },
 {
   title: "Apa Saja yang Perlu Dipertimbangkan Saat Membeli Genset  ",
   image: "forklift.jpg",
   description: `Ketika listrik padam, banyak dari kita baru menyadari betapa kita sangat bergantung 
   pada listrik. Bagaimanapun listrik memberikan cahaya dan kekuatan pada hampir setiap alat dan perangkat 
   teknologi di rumah. Akibatnya, tanpa daya listrik bisa merugikan kita secara langsung / tidak langsung.
    Inilah sebabnya mengapa Anda membutuhkan genset darurat untuk membantu Anda. Hal ini dikarenakan genset 
    darurat ini dapat memasok daya yang cukup untuk memenuhi kebutuhan kita untuk melakukan aktifitas normal 
    sampai listrik kembali. Namun sebelum Anda membeli genset darurat ini, ada baiknya jika Anda memperhatikan
     beberapa hal yang dapat Anda pertimbangkan kembali. `,
   creator: "by Highlander Admin 03 juni 2020 ",
 },
 {
   title: "Jumlah Daya yang Akan Dihasilkan Genset   ",
   image: "catter.jpg",
   description: `Ukuran genset yang perlu Anda dapatkan harus disesuaikan dengan jumlah watt daya listrik yang akan dihasilkan. Watt daya tersebut termasuk daya yang diperlukan saat genset dalam mode running konstan dan saat genset harus menyuplai daya "lonjakan" singkat, yang diperlukan selama beberapa detik untuk menyalakan alat besar seperti kulkas atau mesin cuci pakaian. Adapun biasanya sebuah genset kecil menghasilkan 3.000 hingga 4.000 watt — cukup untuk memasok kulkas berukuran sedang, beberapa peralatan, TV, dan beberapa lampu. Jika Anda menginginkan daya yang lebih besar, maka naikkan watt ke 5.000 hingga 6.000 watt dan Anda akan dapat menambahkan satu atau dua AC, freezer, dan lebih banyak peralatan. Untuk genset ukuran besar yang menghasilkan 7.000 hingga 10.000 watt memungkinkan Anda menjalankan hampir semua peralatan di rumah berukuran sedang, tanpa sistem pendingin udara sentral.  `,
   creator: "by Highlander Admin 03 juni 2020 ",
 },
 {
   title: "GENSET BENSIN VS SOLAR (DIESEL) ",
   image: "rame.jpg",
   description: `Generator Set (GENSET) dapat dioperasikan dengan berbagai bahan bakar, seperti gas, bensin, solar, dll.
   Adapun bahan bakar yang paling umum digunakan dalam pengoperasian GENSET adalah Bensin dan Solar, untuk menentukan bahan bakar menjadi sangat penting karena dapat menunjukan performa dan efektifitas pemakaian genset.
   Bagaimana kelebihan dan kekurangan dari kedua generator tersebut ? Berikut ulasannya 
   <p> Kelebihan generator set berbahan bakar bensin dibandingkan dengan solar (Genset Silent / Genset Open)
   <br> Untuk kelebihan dari generator set yang menggunakan bahan bakar bensin adalah mengenai ketersediaan bahan bakarnya. Bahan bakar bensin merupakan jenis bahan bakar yang sangat mudah ditemukan dimana saja. Terkadang di pom bensin yang tidak menyediakan solar juga anda bisa menemukan bensin dengan sangat mudah. Mengenai ketersediaan bahan bakar yang lebih mudah, menjadi ini adalah satu-satunya kelebihan Generator Set dengan bahan bakar bensin dibanding dengan Genset Solar.
   Genset solar terdiri dari Genset Silent dan Genset Open, tergantung dari jenis kanopi. Genset Silent memiliki suara yang jauh lebih senyap karena mengandung peredam suara, tetapi memiliki harga yang lebih mahal dibandingkan dengan Genset Open.
   <p> Kekurangan generator set berbahan bakar bensin dibandingkan dengan solar (Genset Silent / Genset Open)
   Terdapat beberapa kekurangan generator set yang menggunakan bahan bakar bensin yang  bisa ditemukan. Beberapa kekurangan generator set bensin dibandingkan dengan generator set solar       antara lain adalah :
   Keamanan bahan bakarnya
   Jika dibandingkan generator set bahan bakar solar  dengan generator set bahan bakar bensin memiliki potensi kebakaran yang lebih besar. Hal ini disebabkan karena bensin merupakan komponen yang lebih mudah terbakar jika dibandingkan dengan solar.
   
   <p> Masalah emisi
   Selain masalah bahan bakar masalah lain yang perlu diperhatikan dari generator set dengan bahan bakar bensin adalah masalah emisinya. Untuk masalah emisi generator set dengan bahan bakar bensin memiliki produksi emisi yang lebih banyak sehingga lebih berbahaya terhadap lingkungan.
   
   <p> Masalah penggunaan
   Yang terakhir yang menjadi kekurangan penggunaan dari generator set bahan bakar bensin adalah masalah penggunaannya. Jika dilihat dari penggunaannya, generator set bahan bakar bensin memiliki perlakukan yang lebih rumit. Mengapa? Pasalnya generator set bahan bakar bensin sering kali sulit untuk dioperasikan ketika menghadapi cuaca yang dingin.  Selain itu Genset dengan bahan bakar bensin, memiliki biaya operasional yang lebih besar dari genset solar.
   
   <p> Pemilihan bahan bakar yang sesuai dengan kebutuhan dapat mendukung performa serta efisiensi generator yang kita miliki. Bingung menentukan generator yang sesuai ? hubungi team kami untuk Konsultasi lanjutan. CALL FOR FREE  
   `,
   creator: "by Highlander Admin 09 juni 2020 ",
 },
];

$(document).ready(function () {
  $("#descriptionDiv").hide();
  getAllArticle();
  beritaForHome();
});

function getAllArticle() {
  $("#articleDiv").empty();
  AllNews.forEach((element, index) => {
    console.log(element, "this is the element of the article yes");
    $("#articleDiv").append(`
         <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">
            <div class="card mb-3">
               <div class="row no-gutters">
                     <div class="col-md-4">
                        <img
                        src="./img/Berita/${element.image}"
                        class="card-img"
                        alt="goolge image"
                        />
                     </div>
                     <div class="col-md-8">
                        <div class="card-body">
                           <h3 style="color: darkblue;" class="card-title">${
                             element.title
                           }</h3>
                           <p class="card-text">
                                 ${element.description.substr(0, 400) + "..."}
                           </p>
                           
                           <div style="text-align: right;">
                              <button type="button" class="btn btn-secondary btn-sm" onclick="setDetailId('${index}')">See Details</button>
                           </div>
                           <p class="card-text">
                           <small class="text-muted">${element.creator}</small>
                           </p>
                        </div>
                     </div>
               </div>
            </div>
         </div>
      `);
  });
}

function beritaForHome() {
  const newsLength = AllNews.length;
  $("#beritaIndex").empty();
  $("#beritaIndex").append(`
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
         <div class="card mb-3" style="border-color: transparent">
         <div class="row no-gutters">
            <div class="col-md-4" style="align-self: center;">
               <img src="./img/Berita/${
                 AllNews[newsLength - 1].image
               }" class="card-img" alt="highlander">
            </div>
            <div class="col-md-8">
                     <div class="card-body">
                        <h3 style="color: darkblue;" class="card-title">${
                          AllNews[newsLength - 1].title
                        }</h3>
                        <p class="card-text">
                              ${
                                AllNews[newsLength - 1].description.substr(
                                  0,
                                  200
                                ) + "..."
                              }
                        </p>
                        
                        <div style="text-align: right;">
                           <a href="./berita.html" class="btn btn-secondary btn-sm text-white">See Details</a>
                        </div>
                        <p class="card-text">
                        <small class="text-muted">${
                          AllNews[newsLength - 1].creator
                        }</small>
                        </p>
                     </div>
                  </div>
         </div>
         </div>
      </div>
   `);

  $("#beritaIndex").append(`
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
         <div class="card mb-3" style="border-color: transparent">
         <div class="row no-gutters">
            <div class="col-md-4" style="align-self: center;">
               <img src="./img/Berita/${
                 AllNews[newsLength - 2].image
               }" class="card-img" alt="highlander">
            </div>
            <div class="col-md-8">
                     <div class="card-body">
                        <h3 style="color: darkblue;" class="card-title">${
                          AllNews[newsLength - 2].title
                        }</h3>
                        <p class="card-text">
                              ${
                                AllNews[newsLength - 2].description.substr(
                                  0,
                                  200
                                ) + "..."
                              }
                        </p>
                        
                        <div style="text-align: right;">
                           <a href="./berita.html" class="btn btn-secondary btn-sm text-white">See Details</a>
                        </div>
                        <p class="card-text">
                        <small class="text-muted">${
                          AllNews[newsLength - 2].creator
                        }</small>
                        </p>
                     </div>
                  </div>
         </div>
         </div>
      </div>
   `);
}

function setDetailId(id) {
  $("#descriptionContainer").empty();
  $("#articleDiv").hide();
  $("#descriptionContainer").append(`
      <h1 style="text-align: center;">
         ${AllNews[id].title}
      </h1>
      <h6
         style="
            margin-bottom: 1rem;
            text-align: center;
            color: grey;
         "
      >
         by ${AllNews[id].creator}
      </h6>
      <img
         src="./img/Berita/${AllNews[id].image}"
         class="card-img"
         alt="goolge image"
      />
      <p
         style="
            margin-top: 5vh;
         "
      >
         ${AllNews[id].description}
      </p>
   `);
  $("#descriptionDiv").show();
  console.log(id);
}
