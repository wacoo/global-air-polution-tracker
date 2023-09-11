const globalData = {
  countries: [
    {
      name: 'United States',
      continent: 'North America',
      gps: [37.0902, -95.7129],
      cities: [
        {
          name: 'New York City',
          gps: [40.7128, -74.006],
        },
        {
          name: 'Los Angeles',
          gps: [34.0522, -118.2437],
        },
        {
          name: 'Chicago',
          gps: [41.8781, -87.6298],
        },
        {
          name: 'Houston',
          gps: [29.7604, -95.3698],
        },
        {
          name: 'Miami',
          gps: [25.7617, -80.1918],
        },
      ],
    },
    {
      name: 'Canada',
      continent: 'North America',
      gps: [56.1304, -106.3468],
      cities: [
        {
          name: 'Toronto',
          gps: [43.65107, -79.347015],
        },
        {
          name: 'Vancouver',
          gps: [49.2827, -123.1207],
        },
        {
          name: 'Montreal',
          gps: [45.5017, -73.5673],
        },
        {
          name: 'Calgary',
          gps: [51.0447, -114.0719],
        },
        {
          name: 'Ottawa',
          gps: [45.4215, -75.6981],
        },
      ],
    },
    {
      name: 'Mexico',
      continent: 'North America',
      gps: [23.6345, -102.5528],
      cities: [
        {
          name: 'Mexico City',
          gps: [19.4326, -99.1332],
        },
        {
          name: 'Cancun',
          gps: [21.1619, -86.8515],
        },
        {
          name: 'Guadalajara',
          gps: [20.6597, -103.3496],
        },
        {
          name: 'Monterrey',
          gps: [25.6866, -100.3161],
        },
        {
          name: 'Tijuana',
          gps: [32.5149, -117.0382],
        },
      ],
    },
    {
      name: 'Jamaica',
      continent: 'North America',
      gps: [18.1096, -77.2975],
      cities: [
        {
          name: 'Kingston',
          gps: [17.971, -76.7936],
        },
        {
          name: 'Montego Bay',
          gps: [18.4764, -77.8939],
        },
        {
          name: 'Spanish Town',
          gps: [17.9911, -76.9579],
        },
        {
          name: 'Portmore',
          gps: [17.9702, -76.8672],
        },
        {
          name: 'Ocho Rios',
          gps: [18.4032, -77.1074],
        },
      ],
    },
    {
      name: 'Costa Rica',
      continent: 'North America',
      gps: [9.7489, -83.7534],
      cities: [
        {
          name: 'San Jose',
          gps: [9.9281, -84.0907],
        },
        {
          name: 'Limon',
          gps: [10.0022, -83.084],
        },
        {
          name: 'Heredia',
          gps: [9.9981, -84.12],
        },
        {
          name: 'Alajuela',
          gps: [10.0167, -84.2167],
        },
        {
          name: 'Cartago',
          gps: [9.8651, -83.921],
        },
      ],
    },
    {
      name: 'Brazil',
      continent: 'South America',
      gps: [-14.235, -51.9253],
      cities: [
        {
          name: 'Sao Paulo',
          gps: [-23.5505, -46.6333],
        },
        {
          name: 'Rio de Janeiro',
          gps: [-22.9068, -43.1729],
        },
        {
          name: 'Salvador',
          gps: [-12.9711, -38.5108],
        },
        {
          name: 'Brasilia',
          gps: [-15.8267, -47.9218],
        },
        {
          name: 'Fortaleza',
          gps: [-3.7319, -38.5267],
        },
      ],
    },
    {
      name: 'Argentina',
      continent: 'South America',
      gps: [-38.4161, -63.6167],
      cities: [
        {
          name: 'Buenos Aires',
          gps: [-34.6037, -58.3816],
        },
        {
          name: 'Cordoba',
          gps: [-31.4201, -64.1888],
        },
        {
          name: 'Rosario',
          gps: [-32.9442, -60.6505],
        },
        {
          name: 'Mendoza',
          gps: [-32.8902, -68.8448],
        },
        {
          name: 'San Miguel de Tucuman',
          gps: [-26.8083, -65.2176],
        },
      ],
    },
    {
      name: 'Colombia',
      continent: 'South America',
      gps: [4.5709, -74.2973],
      cities: [
        {
          name: 'Bogota',
          gps: [4.7109, -74.0721],
        },
        {
          name: 'Medellin',
          gps: [6.2442, -75.5812],
        },
        {
          name: 'Cali',
          gps: [3.4516, -76.532],
        },
        {
          name: 'Barranquilla',
          gps: [10.9639, -74.7964],
        },
        {
          name: 'Cartagena',
          gps: [10.391, -75.4794],
        },
      ],
    },
    {
      name: 'Peru',
      continent: 'South America',
      gps: [-9.1899, -75.0152],
      cities: [
        {
          name: 'Lima',
          gps: [-12.0464, -77.0428],
        },
        {
          name: 'Arequipa',
          gps: [-16.409, -71.5375],
        },
        {
          name: 'Trujillo',
          gps: [-8.1092, -79.0219],
        },
        {
          name: 'Chiclayo',
          gps: [-6.7714, -79.8402],
        },
        {
          name: 'Cusco',
          gps: [-13.5319, -71.9675],
        },
      ],
    },
    {
      name: 'Chile',
      continent: 'South America',
      gps: [-35.6751, -71.543],
      cities: [
        {
          name: 'Santiago',
          gps: [-33.4489, -70.6693],
        },
        {
          name: 'Valparaiso',
          gps: [-33.0458, -71.6206],
        },
        {
          name: 'Concepcion',
          gps: [-36.8201, -73.044],
        },
        {
          name: 'Viña del Mar',
          gps: [-33.0153, -71.5505],
        },
        {
          name: 'Antofagasta',
          gps: [-23.6509, -70.3975],
        },
      ],
    },
    {
      name: 'Nigeria',
      continent: 'Africa',
      gps: [9.082, 8.6753],
      cities: [
        {
          name: 'Lagos',
          gps: [6.5244, 3.3792],
        },
        {
          name: 'Abuja',
          gps: [9.0579, 7.4951],
        },
        {
          name: 'Kano',
          gps: [12.0029, 8.5922],
        },
        {
          name: 'Ibadan',
          gps: [7.3775, 3.947],
        },
        {
          name: 'Port Harcourt',
          gps: [4.8156, 7.0498],
        },
      ],
    },
    {
      name: 'Egypt',
      continent: 'Africa',
      gps: [26.8206, 30.8025],
      cities: [
        {
          name: 'Cairo',
          gps: [30.0444, 31.2357],
        },
        {
          name: 'Alexandria',
          gps: [31.2156, 29.9553],
        },
        {
          name: 'Giza',
          gps: [30.0131, 31.2089],
        },
        {
          name: 'Shubra El-Kheima',
          gps: [30.123, 31.2412],
        },
        {
          name: 'Port Said',
          gps: [31.2565, 32.2843],
        },
      ],
    },
    {
      name: 'South Africa',
      continent: 'Africa',
      gps: [-30.5595, 22.9375],
      cities: [
        {
          name: 'Johannesburg',
          gps: [-26.2041, 28.0473],
        },
        {
          name: 'Cape Town',
          gps: [-33.9249, 18.4241],
        },
        {
          name: 'Durban',
          gps: [-29.8587, 31.0218],
        },
        {
          name: 'Pretoria',
          gps: [-25.7461, 28.1881],
        },
        {
          name: 'Port Elizabeth',
          gps: [-33.9608, 25.6022],
        },
      ],
    },
    {
      name: 'Algeria',
      continent: 'Africa',
      gps: [28.0339, 1.6596],
      cities: [
        {
          name: 'Algiers',
          gps: [36.7538, 3.0588],
        },
        {
          name: 'Oran',
          gps: [35.6969, -0.6331],
        },
        {
          name: 'Constantine',
          gps: [36.365, 6.6147],
        },
        {
          name: 'Annaba',
          gps: [36.907, 7.7411],
        },
        {
          name: 'Batna',
          gps: [35.5557, 6.1741],
        },
      ],
    },
    {
      name: 'Kenya',
      continent: 'Africa',
      gps: [-1.2864, 36.8172],
      cities: [
        {
          name: 'Nairobi',
          gps: [-1.2864, 36.8172],
        },
        {
          name: 'Mombasa',
          gps: [-4.0435, 39.6682],
        },
        {
          name: 'Kisumu',
          gps: [-0.0917, 34.7676],
        },
        {
          name: 'Nakuru',
          gps: [-0.3031, 36.08],
        },
        {
          name: 'Eldoret',
          gps: [0.5204, 35.2699],
        },
      ],
    },
    {
      name: 'Ethiopia',
      continent: 'Africa',
      gps: [9.145, 40.4897],
      cities: [
        {
          name: 'Addis Ababa',
          gps: [9.145, 38.74],
        },
        {
          name: 'Dire Dawa',
          gps: [9.59, 41.87],
        },
        {
          name: 'Mekelle',
          gps: [13.4967, 39.475],
        },
        {
          name: 'Gondar',
          gps: [12.609, 37.464],
        },
        {
          name: 'Hawassa',
          gps: [7.056, 38.477],
        },
      ],
    },
    {
      name: 'China',
      continent: 'Asia',
      gps: [35.8617, 104.1954],
      cities: [
        {
          name: 'Shanghai',
          gps: [31.2304, 121.4737],
        },
        {
          name: 'Beijing',
          gps: [39.9042, 116.4074],
        },
        {
          name: 'Guangzhou',
          gps: [23.1291, 113.2644],
        },
        {
          name: 'Shenzhen',
          gps: [22.5431, 114.0579],
        },
        {
          name: 'Chengdu',
          gps: [30.5728, 104.0668],
        },
      ],
    },
    {
      name: 'India',
      continent: 'Asia',
      gps: [20.5937, 78.9629],
      cities: [
        {
          name: 'Mumbai',
          gps: [19.076, 72.8777],
        },
        {
          name: 'Delhi',
          gps: [28.7041, 77.1025],
        },
        {
          name: 'Bangalore',
          gps: [12.9716, 77.5946],
        },
        {
          name: 'Kolkata',
          gps: [22.5726, 88.3639],
        },
        {
          name: 'Chennai',
          gps: [13.0827, 80.2707],
        },
      ],
    },
    {
      name: 'Japan',
      continent: 'Asia',
      gps: [36.2048, 138.2529],
      cities: [
        {
          name: 'Tokyo',
          gps: [35.6895, 139.6917],
        },
        {
          name: 'Yokohama',
          gps: [35.4437, 139.638],
        },
        {
          name: 'Osaka',
          gps: [34.6937, 135.5023],
        },
        {
          name: 'Nagoya',
          gps: [35.1815, 136.9066],
        },
        {
          name: 'Sapporo',
          gps: [43.0618, 141.3545],
        },
      ],
    },
    {
      name: 'South Korea',
      continent: 'Asia',
      gps: [35.9078, 127.7669],
      cities: [
        {
          name: 'Seoul',
          gps: [37.5665, 126.978],
        },
        {
          name: 'Busan',
          gps: [35.1796, 129.0756],
        },
        {
          name: 'Incheon',
          gps: [37.4563, 126.7052],
        },
        {
          name: 'Daegu',
          gps: [35.8714, 128.6014],
        },
        {
          name: 'Daejeon',
          gps: [36.3504, 127.3845],
        },
      ],
    },
    {
      name: 'Saudi Arabia',
      continent: 'Asia',
      gps: [23.8859, 45.0792],
      cities: [
        {
          name: 'Riyadh',
          gps: [24.7136, 46.6753],
        },
        {
          name: 'Jeddah',
          gps: [21.4858, 39.1925],
        },
        {
          name: 'Mecca',
          gps: [21.3891, 39.8579],
        },
        {
          name: 'Medina',
          gps: [24.5247, 39.5692],
        },
        {
          name: 'Dammam',
          gps: [26.3927, 49.9777],
        },
      ],
    },
    {
      name: 'Germany',
      continent: 'Europe',
      gps: [51.1657, 10.4515],
      cities: [
        {
          name: 'Berlin',
          gps: [52.52, 13.405],
        },
        {
          name: 'Hamburg',
          gps: [53.5511, 9.9937],
        },
        {
          name: 'Munich',
          gps: [48.1351, 11.582],
        },
        {
          name: 'Cologne',
          gps: [50.9375, 6.9603],
        },
        {
          name: 'Frankfurt',
          gps: [50.1109, 8.6821],
        },
      ],
    },
    {
      name: 'United Kingdom',
      continent: 'Europe',
      gps: [55.3781, -3.436],
      cities: [
        {
          name: 'London',
          gps: [51.5074, -0.1278],
        },
        {
          name: 'Manchester',
          gps: [53.483, -2.2441],
        },
        {
          name: 'Birmingham',
          gps: [52.4862, -1.8904],
        },
        {
          name: 'Glasgow',
          gps: [55.8642, -4.2518],
        },
        {
          name: 'Edinburgh',
          gps: [55.9533, -3.1883],
        },
      ],
    },
    {
      name: 'France',
      continent: 'Europe',
      gps: [46.6033, 1.8883],
      cities: [
        {
          name: 'Paris',
          gps: [48.8566, 2.3522],
        },
        {
          name: 'Marseille',
          gps: [43.2965, 5.3698],
        },
        {
          name: 'Lyon',
          gps: [45.75, 4.85],
        },
        {
          name: 'Toulouse',
          gps: [43.6045, 1.444],
        },
        {
          name: 'Nice',
          gps: [43.7102, 7.262],
        },
      ],
    },
    {
      name: 'Spain',
      continent: 'Europe',
      gps: [40.4637, -3.7492],
      cities: [
        {
          name: 'Madrid',
          gps: [40.4168, -3.7038],
        },
        {
          name: 'Barcelona',
          gps: [41.3851, 2.1734],
        },
        {
          name: 'Valencia',
          gps: [39.4699, -0.3763],
        },
        {
          name: 'Seville',
          gps: [37.3891, -5.9845],
        },
        {
          name: 'Bilbao',
          gps: [43.263, -2.934],
        },
      ],
    },
    {
      name: 'Italy',
      continent: 'Europe',
      gps: [41.8719, 12.5674],
      cities: [
        {
          name: 'Rome',
          gps: [41.9028, 12.4964],
        },
        {
          name: 'Milan',
          gps: [45.4642, 9.19],
        },
        {
          name: 'Naples',
          gps: [40.8522, 14.2681],
        },
        {
          name: 'Turin',
          gps: [45.0703, 7.6869],
        },
        {
          name: 'Florence',
          gps: [43.7696, 11.2558],
        },
      ],
    },
    {
      name: 'Australia',
      continent: 'Oceania',
      gps: [-25.2744, 133.7751],
      cities: [
        {
          name: 'Sydney',
          gps: [-33.8688, 151.2093],
        },
        {
          name: 'Melbourne',
          gps: [-37.8136, 144.9631],
        },
        {
          name: 'Brisbane',
          gps: [-27.4698, 153.0251],
        },
        {
          name: 'Perth',
          gps: [-31.9505, 115.8605],
        },
        {
          name: 'Adelaide',
          gps: [-34.9285, 138.6007],
        },
      ],
    },
    {
      name: 'New Zealand',
      continent: 'Oceania',
      gps: [-40.9006, 174.886],
      cities: [
        {
          name: 'Auckland',
          gps: [-36.8485, 174.7633],
        },
        {
          name: 'Wellington',
          gps: [-41.2865, 174.7762],
        },
        {
          name: 'Christchurch',
          gps: [-43.5321, 172.6362],
        },
        {
          name: 'Hamilton',
          gps: [-37.787, 175.2793],
        },
        {
          name: 'Tauranga',
          gps: [-37.6878, 176.1651],
        },
      ],
    },
    {
      name: 'Fiji',
      continent: 'Oceania',
      gps: [-17.7134, 178.065],
      cities: [
        {
          name: 'Suva',
          gps: [-18.1248, 178.45],
        },
        {
          name: 'Nadi',
          gps: [-17.6707, 177.3904],
        },
        {
          name: 'Lautoka',
          gps: [-17.6118, 177.45],
        },
        {
          name: 'Labasa',
          gps: [-16.4333, 179.3667],
        },
        {
          name: 'Ba',
          gps: [-17.6236, 177.3964],
        },
      ],
    },
    {
      name: 'Papua New Guinea',
      continent: 'Oceania',
      gps: [-6.314993, 143.95555],
      cities: [
        {
          name: 'Port Moresby',
          gps: [-9.4647, 147.1925],
        },
        {
          name: 'Lae',
          gps: [-6.733, 146.99],
        },
        {
          name: 'Mount Hagen',
          gps: [-5.8642, 144.23],
        },
        {
          name: 'Madang',
          gps: [-5.2249, 145.785],
        },
        {
          name: 'Goroka',
          gps: [-6.083, 145.386],
        },
      ],
    },
    {
      name: 'Vanuatu',
      continent: 'Oceania',
      gps: [-15.3767, 166.9592],
      cities: [
        {
          name: 'Port Vila',
          gps: [-17.7333, 168.3167],
        },
        {
          name: 'Luganville',
          gps: [-15.5333, 167.1667],
        },
        {
          name: 'Norsup',
          gps: [-16.0794, 167.4011],
        },
        {
          name: 'Isangel',
          gps: [-19.55, 169.2667],
        },
        {
          name: 'Sola',
          gps: [-13.8664, 167.55],
        },
      ],
    },
    {
      name: 'Antarctica',
      continent: 'Antarctica',
      gps: [90, 0],
      cities: [
        {
          name: 'Northern part',
          gps: [-56.1234, 178.5678],
        },
        {
          name: 'Southern part',
          gps: [-78.9012, -154.321],
        },
        {
          name: 'Eastern part',
          gps: [-85.6789, 45.6789],
        },
        {
          name: 'Western part',
          gps: [-89.4321, -123.4567],
        },
      ],
    },
  ],
};

export default globalData;
