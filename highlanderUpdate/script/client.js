// const baseUrl = 'http://35.198.233.160'
// const baseUrl = 'http://localhost:3000'
var detailId

const AllClient = [
   {
      name: 'BNI',
      image: 'BNI.png',
      collection: [
         'BNI.png',
         // 'aca.png',
         // 'aca.png',
         // 'aca.png',
         // 'aca.png',
         // 'aca.png'
      ]
   },
   {
      name: 'Project PLN',
      image: 'PLN1.png',
      collection: [
         'PLN1.png',
         'PLN 2.png',
         // 'DBS bank.jpg',
         // 'DBS bank.jpg',
         // 'DBS bank.jpg'
      ]
   },
   {
      name: 'PT. Bank Central Asia',
      image: 'bca pare 1.png',
      collection: [
         'bca pare 1.png',
         'bca pare.png',
         'Logo Bank BCA.JPG',
         // 'Logo Bank BCA.JPG',
         // 'Logo Bank BCA.JPG',
         // 'Logo Bank BCA.JPG'
      ]
   },
   {
      name: 'LOTTE MART',
      image: 'lotte mart.png',
      collection: [
         'lotte mart.png',
         // 'logo-bank-panin.png',
         // 'logo-bank-panin.png',
         // 'logo-bank-panin.png',
         // 'logo-bank-panin.png',
         // 'logo-bank-panin.png'
      ]
   },
   {
      name: 'HOTEL PAKONS',
      image: 'hotel pakons.png',
      collection: [
         'hotel pakons.png',
         // 'pertamina.jpg',
         // 'pertamina.jpg',
         // 'pertamina.jpg',
         // 'pertamina.jpg',
         // 'pertamina.jpg'
      ]
   },
   {
      name: 'Pemda Prabumulih',
      image: 'pemda prabumulih.png',
      collection: [
         'pemda prabumulih.png',
         // 'pertamina.jpg',
         // 'pertamina.jpg',
         // 'pertamina.jpg',
         // 'pertamina.jpg',
         // 'pertamina.jpg'
      ]
   },
   {
      name: 'Rest Area Tol Sragen',
      image: 'rest area tol sragen.png',
      collection: [
         'rest area tol sragen.png',
         // 'pertamina.jpg',
         // 'pertamina.jpg',
         // 'pertamina.jpg',
         // 'pertamina.jpg',
         // 'pertamina.jpg'
      ]
   },
   {
      name: 'Telunas resort batam',
      image: 'telunas resort batam.png',
      collection: [
         'telunas resort batam.png',
         // 'metro tv.png',
         // 'metro tv.png',
         // 'metro tv.png',
         // 'metro tv.png'
      ]
   },
   {
      name: 'UN to Libanon',
      image: 'un libanon 1.png',
      collection: [
         'un libanon 1.png',
         'un libanon 2.png',
         // 'metro tv.png',
         // 'metro tv.png',
         // 'metro tv.png'
      ]
   },
   {
      name: 'dan lain lainnya',
      image: 'client 2.png',
      collection: [
         'client 2.png',
         'client.png',
         // 'superindo.png',
         // 'superindo.png',
         // 'superindo.png'
      ]
   }
]

$(document).ready(function () {
   $('#descriptionDiv').hide()
   getAllClient()
   beritaForHome()
})

function getAllClient() {
   $('#clientDiv').empty()
   AllClient.forEach((element, index) => {
      console.log(element, 'this is the element of the article yes')
      $('#clientDiv').append(`
            <div class="col-sm-3">
                <div
                    class="card"
                    style="
                        width: 18rem;
                        border: none;
                        margin: 20px;
                        align-items: center;
                    "
                >
                <button
                onclick="setDetailId('${index}')"
                  style="border: none;
                  padding: 5vh;"
               >
                    <img
                    src="img/brand/${element.image}"
                    class="card-img-top"
                    alt="sample"
                    />
                    <div class="card-body" style="text-align-last: center;">
                        <h5 class="card-title">${element.name}</h5>
                    </div>
                </button>
                </div>
            </div>
      `)
   })
}

function setDetailId(id) {
   $('#descriptionContainer').empty()
   $('#clientDiv').hide()
   AllClient[id].collection.forEach((element, index) => {
      console.log(element, 'this is the element of the article yes')
      $('#descriptionContainer').append(`
          <div class="col-sm-3">
              <div
                  class="card"
                  style="
                      width: 18rem;
                      border: none;
                      margin: 20px;
                      align-items: center;
                  "
              >
              
                  <img
                  src="img/brand/${element}"
                  class="card-img-top"
                  alt="sample"
                  />

              </div>
          </div>
    `)
   })

   $('#descriptionDiv').show()
   console.log(id)
}
