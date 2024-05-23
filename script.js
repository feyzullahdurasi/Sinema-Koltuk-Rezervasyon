const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');

container.addEventListener('click', function(e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        
        e.target.classList.toggle('selected');
        calculateTotal()

    }
});

select.addEventListener('change', function(e){
    calculateTotal();
});

function calculateTotal() {
    let selectedSeatCount = container.querySelectorAll('.seat.selected').length;
        
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;
}

const ads1 = [
    '/Users/feyzullahdurasi/Downloads/Sinema-Koltuk-Rezervasyon-main/ads/AK1.png',
    '/Users/feyzullahdurasi/Downloads/Sinema-Koltuk-Rezervasyon-main/ads/AK2.png'
];


const ads2 = [
    '/Users/feyzullahdurasi/Downloads/Sinema-Koltuk-Rezervasyon-main/ads/MCD1.png',
    '/Users/feyzullahdurasi/Downloads/Sinema-Koltuk-Rezervasyon-main/ads/MCD2.png'
];

let currentIndex = 0;


function changeImage() {
    const imgElement = document.getElementById('sagAds');
    const imgElement2 = document.getElementById('solAds');
    currentIndex = (currentIndex + 1) % ads1.length;
    currentIndex = (currentIndex + 1) % ads2.length;
    imgElement.src = ads1[currentIndex];
    imgElement2.src = ads2[currentIndex];
}

setInterval(changeImage, 5000);
