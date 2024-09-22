document.getElementById('cropSelect').addEventListener('change', function() {
    const crop = this.value;
    const cropData = {
        wheat: {
            name: 'Wheat',
            description: 'Wheat is a staple crop cultivated in various parts of India, used for flour production, and contributes heavily to the agriculture sector.',
            planting: 'Rabi (October - November)',
            harvest: 'March - April',
            area: '30 million hectares',
            yield: '3,000 kg/hectare',
            image: 'soft-wheat-8158264_1280.jpg'
        },
        rice: {
            name: 'Rice',
            description: 'Rice is one of the most important crops in India, primarily grown in the Kharif season, and feeds a large part of the population.',
            planting: 'Kharif (June - July)',
            harvest: 'October - November',
            area: '43 million hectares',
            yield: '2,500 kg/hectare',
            image: 'rice-7176354_1280.jpg'
        },
        millets: {
            name: 'Millets',
            description: 'Millets are drought-resistant crops grown in many parts of India and serve as staple food in arid regions.',
            planting: 'Kharif (June - July)',
            harvest: 'September - October',
            area: '15 million hectares',
            yield: '1,800 kg/hectare',
            image: 'millet-1697117_1280.jpg'
        },
        pulses: {
            name: 'Pulses',
            description: 'Pulses are a key source of protein in the Indian diet, grown mainly in dry and semi-arid regions.',
            planting: 'Rabi (October - November)',
            harvest: 'March - April',
            area: '23 million hectares',
            yield: '900 kg/hectare',
            image: 'yellow-3408521_1280.jpg'
        },
        tea: {
            name: 'Tea',
            description: 'India is one of the largest producers of tea, which is grown in the northeastern and southern regions of the country.',
            planting: 'Throughout the year',
            harvest: 'Throughout the year',
            area: '0.6 million hectares',
            yield: '2,200 kg/hectare',
            image: 'green-tea-5301025_1280.jpg'
        },
        coffee: {
            name: 'Coffee',
            description: 'Coffee is primarily grown in the southern states of India and is one of the most important cash crops.',
            planting: 'June - August',
            harvest: 'November - February',
            area: '0.4 million hectares',
            yield: '900 kg/hectare',
            image: 'coffee-1324126_1280.jpg'
        },
        sugarcane: {
            name: 'Sugarcane',
            description: 'Sugarcane is a vital crop for India’s sugar industry, grown mainly in tropical areas.',
            planting: 'Rabi (October - November)',
            harvest: 'March - April',
            area: '5 million hectares',
            yield: '80,000 kg/hectare',
            image: 'sugar-cane-276242_1280.jpg'
        },
        oil_seeds: {
            name: 'Oil Seeds',
            description: 'Oil seeds such as groundnut, mustard, and soybean are cultivated in both Kharif and Rabi seasons, providing essential oils and fodder.',
            planting: 'Kharif (June - July)',
            harvest: 'October - November',
            area: '26 million hectares',
            yield: '1,100 kg/hectare',
            image: 'seeds-6838977_1280.jpg'
        },
        cotton: {
            name: 'Cotton',
            description: 'Cotton is a major cash crop, grown in several states across India, and is used in the textile industry.',
            planting: 'Kharif (June - July)',
            harvest: 'October - December',
            area: '12 million hectares',
            yield: '500 kg/hectare',
            image: 'cotton-branch-1271038_1280.jpg'
        },
        jute: {
            name: 'Jute',
            description: 'Jute is a key fibre crop, mainly grown in West Bengal, and is used for making burlap and other products.',
            planting: 'Kharif (March - May)',
            harvest: 'June - August',
            area: '0.8 million hectares',
            yield: '2,300 kg/hectare',
            image: 'weave-19663_1280.jpg'
        }
    };

    const selectedCrop = cropData[crop];
    document.getElementById('cropName').innerText = selectedCrop.name;
    document.getElementById('cropDescription').innerText = selectedCrop.description;
    document.querySelector('#cropDetails ul').innerHTML = `
        <li><strong>Planting Season:</strong> ${selectedCrop.planting}</li>
        <li><strong>Harvest Time:</strong> ${selectedCrop.harvest}</li>
        <li><strong>Production Area:</strong> ${selectedCrop.area}</li>
        <li><strong>Average Yield:</strong> ${selectedCrop.yield}</li>
    `;
    document.getElementById('cropBackground').src = selectedCrop.image;
});

// Chart.js code to render the chart with the crop data
const ctx = document.getElementById('cropChart').getContext('2d');
const cropChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Wheat', 'Rice', 'Millets', 'Pulses', 'Tea', 'Coffee', 'Sugarcane', 'Oil Seeds', 'Cotton', 'Jute'],
        datasets: [{
            label: 'Production Area (million hectares)',
            data: [30, 43, 15, 23, 0.6, 0.4, 5, 26, 12, 0.8],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
