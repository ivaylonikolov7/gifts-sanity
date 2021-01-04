let giftsDom = document.querySelector('#recommendations')

let hobbyInput = document.querySelector("input[type='text']")

initiateFirstGifts();

function initiateFirstGifts(){
    updateGifts([]);
}
function updateGifts(hobbiesDb){
    ajax.get('http://localhost:3000/gifts', {hobbies: hobbiesDb}, (giftsDb) => {    
        giftsDb = JSON.parse(giftsDb);
        giftsDom.innerHTML = '<div id="gifts"></div>';
        let giftsDiv = document.querySelector('#gifts');
        giftsDb.forEach((gift,index)=>{
            let template = `
                <div class="gift">
                    <img src="${gift.image}">
                    <div class="tg">                    
                        <div class="gift-name">${gift.name}</div>
                        <div class="gift-hobby-name">${gift.hobbies[0].name}</div>
                        <div class="gift-price">${gift.price}.00</div>
                        <button class="buy">Buy</button>               
                    </div>
                </div>`;                    
                giftsDiv.innerHTML+=template;
        })    
        let loadMoreTemplate = `<button id="load-more">Load more </button>`
        giftsDom.innerHTML += loadMoreTemplate;
    
    })
}

let recommendedGifts = document.querySelectorAll('.recommended-gift');


recommendedGifts.forEach((recGift)=>{
    recGift.addEventListener('click', function(){
        this.style.boxShadow = "10px 5px";
        alert(12);
    })
})