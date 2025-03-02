
function showDetails(name, image) {
    const details = {
        'Rose': {
            description: 'Roses are widely cultivated for their fragrance and beauty.',
            farming: 'Grown in well-drained soil with adequate sunlight.',
            protection: 'Protected from pests using organic pesticides.',
            fertilization: 'Fertilized with compost and organic matter.',
            uses: 'Used in perfumes, decorations, and skincare products.',
            market: 'Highly demanded in floral and cosmetic industries.'
        },
        'Marigold': {
            description: 'Marigolds are bright flowers used in religious and ornamental purposes.',
            farming: 'Requires full sun and moderate watering.',
            protection: 'Treated with neem oil for pest control.',
            fertilization: 'Enriched with nitrogen-based fertilizers.',
            uses: 'Used for garlands and traditional medicine.',
            market: 'Popular in festive and religious ceremonies.'
        },
        'Jasmine': {
            description: 'Jasmine is known for its sweet fragrance.',
            farming: 'Prefers warm climates with well-drained soil.',
            protection: 'Kept safe from fungal infections.',
            fertilization: 'Boosted with phosphorus-based fertilizers.',
            uses: 'Used in essential oils and perfumes.',
            market: 'High demand in fragrance and therapeutic industries.'
        },
        'Tulip': {
            description: 'Tulips bloom in spring and are popular ornamental flowers.',
            farming: 'Grown from bulbs in well-drained soil.',
            protection: 'Protected from rodents and harsh weather.',
            fertilization: 'Requires potassium-rich fertilizers.',
            uses: 'Used for landscaping and gifting.',
            market: 'Popular in floriculture and gifting industries.'
        },
        'Orchid': {
            description: 'Orchids are exotic flowers requiring special care.',
            farming: 'Grown in controlled environments with humidity control.',
            protection: 'Requires protection from root rot.',
            fertilization: 'Fertilized with balanced micronutrients.',
            uses: 'Used in ornamental gardens and flower arrangements.',
            market: 'Highly valued in premium floral markets.'
        },
        'Sunflower': {
            description: 'Sunflowers are bright and known for their edible seeds.',
            farming: 'Needs full sun and well-drained soil.',
            protection: 'Guarded against birds and insects.',
            fertilization: 'Boosted with nitrogen and phosphorus fertilizers.',
            uses: 'Used for oil extraction and decoration.',
            market: 'Demanded in food and oil industries.'
        }
    };

    if (details[name]) {
        document.getElementById('flowerTitle').innerText = name;
        document.getElementById('flowerImage').src = './src/images/' + image;;
        document.getElementById('flowerDescription').innerHTML = `<span style="font-weight: bold;">Description: </span>` + details[name].description;
        document.getElementById('flowerFarming').innerHTML = `<span style="font-weight: bold;">Farming: </span>` + details[name].farming;
        document.getElementById('flowerProtection').innerHTML = `<span style="font-weight: bold;">Protection: </span>` + details[name].protection;
        document.getElementById('flowerFertilization').innerHTML = `<span style="font-weight: bold;">Fertilization: </span>` + details[name].fertilization;
        document.getElementById('flowerUses').innerHTML = `<span style="font-weight: bold;">Uses: </span>` + details[name].uses;
        document.getElementById('flowerMarket').innerHTML = `<span style="font-weight: bold;">Market: </span>` + details[name].market;
        document.getElementById('flowerDetails').style.display = 'block';
    }
}


// Mobile Navbar
function toggleNav() {
    const mobileNav = document.getElementById("mobileNav");
    if (mobileNav.style.right === "0px") {
        mobileNav.style.right = "-100%";
    } else {
        mobileNav.style.right = "0px";
    }
}


// Contact page 
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("responseMessage").style.display = "block";
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("message").value = ""

});


// Login
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Login functionality will be added later!");
        });
    } else {
        console.error("loginForm element not found!");
    }
});


