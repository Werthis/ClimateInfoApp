const period = [
  "1920 - 1939",
  "1940 - 1959",
  "1960 - 1979",
  "1980 - 1999",
  "2020 - 2039",
  "2040 - 2059",
  "2060 - 2079",
  "2080 - 2099",
];

// const variables = [];


const countries = [
  {
    label: "Afghanistan",
    code: "AFG",
    "Numeric code": 4,
    "Latitude (average)": 33,
    "Longitude (average)": 65
  },
  {
    label: "Albania",
    code: "ALB",
    "Numeric code": 8,
    "Latitude (average)": 41,
    "Longitude (average)": 20
  },
  {
    label: "Algeria",
    code: "DZA",
    "Numeric code": 12,
    "Latitude (average)": 28,
    "Longitude (average)": 3
  },
  {
    label: "American Samoa",
    code: "ASM",
    "Numeric code": 16,
    "Latitude (average)": -14.3333,
    "Longitude (average)": -170
  },
  {
    label: "Andorra",
    code: "AND",
    "Numeric code": 20,
    "Latitude (average)": 42.5,
    "Longitude (average)": 1.6
  },
  {
    label: "Angola",
    code: "AGO",
    "Numeric code": 24,
    "Latitude (average)": -12.5,
    "Longitude (average)": 18.5
  },
  {
    label: "Anguilla",
    code: "AIA",
    "Numeric code": 660,
    "Latitude (average)": 18.25,
    "Longitude (average)": -63.1667
  },
  {
    label: "Antarctica",
    code: "ATA",
    "Numeric code": 10,
    "Latitude (average)": -90,
    "Longitude (average)": 0
  },
  {
    label: "Antigua and Barbuda",
    code: "ATG",
    "Numeric code": 28,
    "Latitude (average)": 17.05,
    "Longitude (average)": -61.8
  },
  {
    label: "Argentina",
    code: "ARG",
    "Numeric code": 32,
    "Latitude (average)": -34,
    "Longitude (average)": -64
  },
  {
    label: "Armenia",
    code: "ARM",
    "Numeric code": 51,
    "Latitude (average)": 40,
    "Longitude (average)": 45
  },
  {
    label: "Aruba",
    code: "ABW",
    "Numeric code": 533,
    "Latitude (average)": 12.5,
    "Longitude (average)": -69.9667
  },
  {
    label: "Australia",
    code: "AUS",
    "Numeric code": 36,
    "Latitude (average)": -27,
    "Longitude (average)": 133
  },
  {
    label: "Austria",
    code: "AUT",
    "Numeric code": 40,
    "Latitude (average)": 47.3333,
    "Longitude (average)": 13.3333
  },
  {
    label: "Azerbaijan",
    code: "AZE",
    "Numeric code": 31,
    "Latitude (average)": 40.5,
    "Longitude (average)": 47.5
  },
  {
    label: "Bahamas",
    code: "BHS",
    "Numeric code": 44,
    "Latitude (average)": 24.25,
    "Longitude (average)": -76
  },
  {
    label: "Bahrain",
    code: "BHR",
    "Numeric code": 48,
    "Latitude (average)": 26,
    "Longitude (average)": 50.55
  },
  {
    label: "Bangladesh",
    code: "BGD",
    "Numeric code": 50,
    "Latitude (average)": 24,
    "Longitude (average)": 90
  },
  {
    label: "Barbados",
    code: "BRB",
    "Numeric code": 52,
    "Latitude (average)": 13.1667,
    "Longitude (average)": -59.5333
  },
  {
    label: "Belarus",
    code: "BLR",
    "Numeric code": 112,
    "Latitude (average)": 53,
    "Longitude (average)": 28
  },
  {
    label: "Belgium",
    code: "BEL",
    "Numeric code": 56,
    "Latitude (average)": 50.8333,
    "Longitude (average)": 4
  },
  {
    label: "Belize",
    code: "BLZ",
    "Numeric code": 84,
    "Latitude (average)": 17.25,
    "Longitude (average)": -88.75
  },
  {
    label: "Benin",
    code: "BEN",
    "Numeric code": 204,
    "Latitude (average)": 9.5,
    "Longitude (average)": 2.25
  },
  {
    label: "Bermuda",
    code: "BMU",
    "Numeric code": 60,
    "Latitude (average)": 32.3333,
    "Longitude (average)": -64.75
  },
  {
    label: "Bhutan",
    code: "BTN",
    "Numeric code": 64,
    "Latitude (average)": 27.5,
    "Longitude (average)": 90.5
  },
  {
    label: "Bolivia, Plurinational State of",
    code: "BOL",
    "Numeric code": 68,
    "Latitude (average)": -17,
    "Longitude (average)": -65
  },
  {
    label: "Bolivia",
    code: "BOL",
    "Numeric code": 68,
    "Latitude (average)": -17,
    "Longitude (average)": -65
  },
  {
    label: "Bosnia and Herzegovina",
    code: "BIH",
    "Numeric code": 70,
    "Latitude (average)": 44,
    "Longitude (average)": 18
  },
  {
    label: "Botswana",
    code: "BWA",
    "Numeric code": 72,
    "Latitude (average)": -22,
    "Longitude (average)": 24
  },
  {
    label: "Bouvet Island",
    code: "BVT",
    "Numeric code": 74,
    "Latitude (average)": -54.4333,
    "Longitude (average)": 3.4
  },
  {
    label: "Brazil",
    code: "BRA",
    "Numeric code": 76,
    "Latitude (average)": -10,
    "Longitude (average)": -55
  },
  {
    label: "British Indian Ocean Territory",
    code: "IOT",
    "Numeric code": 86,
    "Latitude (average)": -6,
    "Longitude (average)": 71.5
  },
  {
    label: "Brunei Darussalam",
    code: "BRN",
    "Numeric code": 96,
    "Latitude (average)": 4.5,
    "Longitude (average)": 114.6667
  },
  {
    label: "Brunei",
    code: "BRN",
    "Numeric code": 96,
    "Latitude (average)": 4.5,
    "Longitude (average)": 114.6667
  },
  {
    label: "Bulgaria",
    code: "BGR",
    "Numeric code": 100,
    "Latitude (average)": 43,
    "Longitude (average)": 25
  },
  {
    label: "Burkina Faso",
    code: "BFA",
    "Numeric code": 854,
    "Latitude (average)": 13,
    "Longitude (average)": -2
  },
  {
    label: "Burundi",
    code: "BDI",
    "Numeric code": 108,
    "Latitude (average)": -3.5,
    "Longitude (average)": 30
  },
  {
    label: "Cambodia",
    code: "KHM",
    "Numeric code": 116,
    "Latitude (average)": 13,
    "Longitude (average)": 105
  },
  {
    label: "Cameroon",
    code: "CMR",
    "Numeric code": 120,
    "Latitude (average)": 6,
    "Longitude (average)": 12
  },
  {
    label: "Canada",
    code: "CAN",
    "Numeric code": 124,
    "Latitude (average)": 60,
    "Longitude (average)": -95
  },
  {
    label: "Cape Verde",
    code: "CPV",
    "Numeric code": 132,
    "Latitude (average)": 16,
    "Longitude (average)": -24
  },
  {
    label: "Cayman Islands",
    code: "CYM",
    "Numeric code": 136,
    "Latitude (average)": 19.5,
    "Longitude (average)": -80.5
  },
  {
    label: "Central African Republic",
    code: "CAF",
    "Numeric code": 140,
    "Latitude (average)": 7,
    "Longitude (average)": 21
  },
  {
    label: "Chad",
    code: "TCD",
    "Numeric code": 148,
    "Latitude (average)": 15,
    "Longitude (average)": 19
  },
  {
    label: "Chile",
    code: "CHL",
    "Numeric code": 152,
    "Latitude (average)": -30,
    "Longitude (average)": -71
  },
  {
    label: "China",
    code: "CHN",
    "Numeric code": 156,
    "Latitude (average)": 35,
    "Longitude (average)": 105
  },
  {
    label: "Christmas Island",
    code: "CXR",
    "Numeric code": 162,
    "Latitude (average)": -10.5,
    "Longitude (average)": 105.6667
  },
  {
    label: "Cocos (Keeling) Islands",
    code: "CCK",
    "Numeric code": 166,
    "Latitude (average)": -12.5,
    "Longitude (average)": 96.8333
  },
  {
    label: "Colombia",
    code: "COL",
    "Numeric code": 170,
    "Latitude (average)": 4,
    "Longitude (average)": -72
  },
  {
    label: "Comoros",
    code: "COM",
    "Numeric code": 174,
    "Latitude (average)": -12.1667,
    "Longitude (average)": 44.25
  },
  {
    label: "Congo",
    code: "COG",
    "Numeric code": 178,
    "Latitude (average)": -1,
    "Longitude (average)": 15
  },
  {
    label: "Congo, the Democratic Republic of the",
    code: "COD",
    "Numeric code": 180,
    "Latitude (average)": 0,
    "Longitude (average)": 25
  },
  {
    label: "Cook Islands",
    code: "COK",
    "Numeric code": 184,
    "Latitude (average)": -21.2333,
    "Longitude (average)": -159.7667
  },
  {
    label: "Costa Rica",
    code: "CRI",
    "Numeric code": 188,
    "Latitude (average)": 10,
    "Longitude (average)": -84
  },
  {
    label: "Côte d'Ivoire",
    code: "CIV",
    "Numeric code": 384,
    "Latitude (average)": 8,
    "Longitude (average)": -5
  },
  {
    label: "Ivory Coast",
    code: "CIV",
    "Numeric code": 384,
    "Latitude (average)": 8,
    "Longitude (average)": -5
  },
  {
    label: "Croatia",
    code: "HRV",
    "Numeric code": 191,
    "Latitude (average)": 45.1667,
    "Longitude (average)": 15.5
  },
  {
    label: "Cuba",
    code: "CUB",
    "Numeric code": 192,
    "Latitude (average)": 21.5,
    "Longitude (average)": -80
  },
  {
    label: "Cyprus",
    code: "CYP",
    "Numeric code": 196,
    "Latitude (average)": 35,
    "Longitude (average)": 33
  },
  {
    label: "Czech Republic",
    code: "CZE",
    "Numeric code": 203,
    "Latitude (average)": 49.75,
    "Longitude (average)": 15.5
  },
  {
    label: "Denmark",
    code: "DNK",
    "Numeric code": 208,
    "Latitude (average)": 56,
    "Longitude (average)": 10
  },
  {
    label: "Djibouti",
    code: "DJI",
    "Numeric code": 262,
    "Latitude (average)": 11.5,
    "Longitude (average)": 43
  },
  {
    label: "Dominica",
    code: "DMA",
    "Numeric code": 212,
    "Latitude (average)": 15.4167,
    "Longitude (average)": -61.3333
  },
  {
    label: "Dominican Republic",
    code: "DOM",
    "Numeric code": 214,
    "Latitude (average)": 19,
    "Longitude (average)": -70.6667
  },
  {
    label: "Ecuador",
    code: "ECU",
    "Numeric code": 218,
    "Latitude (average)": -2,
    "Longitude (average)": -77.5
  },
  {
    label: "Egypt",
    code: "EGY",
    "Numeric code": 818,
    "Latitude (average)": 27,
    "Longitude (average)": 30
  },
  {
    label: "El Salvador",
    code: "SLV",
    "Numeric code": 222,
    "Latitude (average)": 13.8333,
    "Longitude (average)": -88.9167
  },
  {
    label: "Equatorial Guinea",
    code: "GNQ",
    "Numeric code": 226,
    "Latitude (average)": 2,
    "Longitude (average)": 10
  },
  {
    label: "Eritrea",
    code: "ERI",
    "Numeric code": 232,
    "Latitude (average)": 15,
    "Longitude (average)": 39
  },
  {
    label: "Estonia",
    code: "EST",
    "Numeric code": 233,
    "Latitude (average)": 59,
    "Longitude (average)": 26
  },
  {
    label: "Ethiopia",
    code: "ETH",
    "Numeric code": 231,
    "Latitude (average)": 8,
    "Longitude (average)": 38
  },
  {
    label: "Falkland Islands (Malvinas)",
    code: "FLK",
    "Numeric code": 238,
    "Latitude (average)": -51.75,
    "Longitude (average)": -59
  },
  {
    label: "Faroe Islands",
    code: "FRO",
    "Numeric code": 234,
    "Latitude (average)": 62,
    "Longitude (average)": -7
  },
  {
    label: "Fiji",
    code: "FJI",
    "Numeric code": 242,
    "Latitude (average)": -18,
    "Longitude (average)": 175
  },
  {
    label: "Finland",
    code: "FIN",
    "Numeric code": 246,
    "Latitude (average)": 64,
    "Longitude (average)": 26
  },
  {
    label: "France",
    code: "FRA",
    "Numeric code": 250,
    "Latitude (average)": 46,
    "Longitude (average)": 2
  },
  {
    label: "French Guiana",
    code: "GUF",
    "Numeric code": 254,
    "Latitude (average)": 4,
    "Longitude (average)": -53
  },
  {
    label: "French Polynesia",
    code: "PYF",
    "Numeric code": 258,
    "Latitude (average)": -15,
    "Longitude (average)": -140
  },
  {
    label: "French Southern Territories",
    code: "ATF",
    "Numeric code": 260,
    "Latitude (average)": -43,
    "Longitude (average)": 67
  },
  {
    label: "Gabon",
    code: "GAB",
    "Numeric code": 266,
    "Latitude (average)": -1,
    "Longitude (average)": 11.75
  },
  {
    label: "Gambia",
    code: "GMB",
    "Numeric code": 270,
    "Latitude (average)": 13.4667,
    "Longitude (average)": -16.5667
  },
  {
    label: "Georgia",
    code: "GEO",
    "Numeric code": 268,
    "Latitude (average)": 42,
    "Longitude (average)": 43.5
  },
  {
    label: "Germany",
    code: "DEU",
    "Numeric code": 276,
    "Latitude (average)": 51,
    "Longitude (average)": 9
  },
  {
    label: "Ghana",
    code: "GHA",
    "Numeric code": 288,
    "Latitude (average)": 8,
    "Longitude (average)": -2
  },
  {
    label: "Gibraltar",
    code: "GIB",
    "Numeric code": 292,
    "Latitude (average)": 36.1833,
    "Longitude (average)": -5.3667
  },
  {
    label: "Greece",
    code: "GRC",
    "Numeric code": 300,
    "Latitude (average)": 39,
    "Longitude (average)": 22
  },
  {
    label: "Greenland",
    code: "GRL",
    "Numeric code": 304,
    "Latitude (average)": 72,
    "Longitude (average)": -40
  },
  {
    label: "Grenada",
    code: "GRD",
    "Numeric code": 308,
    "Latitude (average)": 12.1167,
    "Longitude (average)": -61.6667
  },
  {
    label: "Guadeloupe",
    code: "GLP",
    "Numeric code": 312,
    "Latitude (average)": 16.25,
    "Longitude (average)": -61.5833
  },
  {
    label: "Guam",
    code: "GUM",
    "Numeric code": 316,
    "Latitude (average)": 13.4667,
    "Longitude (average)": 144.7833
  },
  {
    label: "Guatemala",
    code: "GTM",
    "Numeric code": 320,
    "Latitude (average)": 15.5,
    "Longitude (average)": -90.25
  },
  {
    label: "Guernsey",
    code: "GGY",
    "Numeric code": 831,
    "Latitude (average)": 49.5,
    "Longitude (average)": -2.56
  },
  {
    label: "Guinea",
    code: "GIN",
    "Numeric code": 324,
    "Latitude (average)": 11,
    "Longitude (average)": -10
  },
  {
    label: "Guinea-Bissau",
    code: "GNB",
    "Numeric code": 624,
    "Latitude (average)": 12,
    "Longitude (average)": -15
  },
  {
    label: "Guyana",
    code: "GUY",
    "Numeric code": 328,
    "Latitude (average)": 5,
    "Longitude (average)": -59
  },
  {
    label: "Haiti",
    code: "HTI",
    "Numeric code": 332,
    "Latitude (average)": 19,
    "Longitude (average)": -72.4167
  },
  {
    label: "Heard Island and McDonald Islands",
    code: "HMD",
    "Numeric code": 334,
    "Latitude (average)": -53.1,
    "Longitude (average)": 72.5167
  },
  {
    label: "Holy See (Vatican City State)",
    code: "VAT",
    "Numeric code": 336,
    "Latitude (average)": 41.9,
    "Longitude (average)": 12.45
  },
  {
    label: "Honduras",
    code: "HND",
    "Numeric code": 340,
    "Latitude (average)": 15,
    "Longitude (average)": -86.5
  },
  {
    label: "Hong Kong",
    code: "HKG",
    "Numeric code": 344,
    "Latitude (average)": 22.25,
    "Longitude (average)": 114.1667
  },
  {
    label: "Hungary",
    code: "HUN",
    "Numeric code": 348,
    "Latitude (average)": 47,
    "Longitude (average)": 20
  },
  {
    label: "Iceland",
    code: "ISL",
    "Numeric code": 352,
    "Latitude (average)": 65,
    "Longitude (average)": -18
  },
  {
    label: "India",
    code: "IND",
    "Numeric code": 356,
    "Latitude (average)": 20,
    "Longitude (average)": 77
  },
  {
    label: "Indonesia",
    code: "IDN",
    "Numeric code": 360,
    "Latitude (average)": -5,
    "Longitude (average)": 120
  },
  {
    label: "Iran, Islamic Republic of",
    code: "IRN",
    "Numeric code": 364,
    "Latitude (average)": 32,
    "Longitude (average)": 53
  },
  {
    label: "Iraq",
    code: "IRQ",
    "Numeric code": 368,
    "Latitude (average)": 33,
    "Longitude (average)": 44
  },
  {
    label: "Ireland",
    code: "IRL",
    "Numeric code": 372,
    "Latitude (average)": 53,
    "Longitude (average)": -8
  },
  {
    label: "Isle of Man",
    code: "IMN",
    "Numeric code": 833,
    "Latitude (average)": 54.23,
    "Longitude (average)": -4.55
  },
  {
    label: "Israel",
    code: "ISR",
    "Numeric code": 376,
    "Latitude (average)": 31.5,
    "Longitude (average)": 34.75
  },
  {
    label: "Italy",
    code: "ITA",
    "Numeric code": 380,
    "Latitude (average)": 42.8333,
    "Longitude (average)": 12.8333
  },
  {
    label: "Jamaica",
    code: "JAM",
    "Numeric code": 388,
    "Latitude (average)": 18.25,
    "Longitude (average)": -77.5
  },
  {
    label: "Japan",
    code: "JPN",
    "Numeric code": 392,
    "Latitude (average)": 36,
    "Longitude (average)": 138
  },
  {
    label: "Jersey",
    code: "JEY",
    "Numeric code": 832,
    "Latitude (average)": 49.21,
    "Longitude (average)": -2.13
  },
  {
    label: "Jordan",
    code: "JOR",
    "Numeric code": 400,
    "Latitude (average)": 31,
    "Longitude (average)": 36
  },
  {
    label: "Kazakhstan",
    code: "KAZ",
    "Numeric code": 398,
    "Latitude (average)": 48,
    "Longitude (average)": 68
  },
  {
    label: "Kenya",
    code: "KEN",
    "Numeric code": 404,
    "Latitude (average)": 1,
    "Longitude (average)": 38
  },
  {
    label: "Kiribati",
    code: "KIR",
    "Numeric code": 296,
    "Latitude (average)": 1.4167,
    "Longitude (average)": 173
  },
  {
    label: "Korea, Democratic People's Republic of",
    code: "PRK",
    "Numeric code": 408,
    "Latitude (average)": 40,
    "Longitude (average)": 127
  },
  {
    label: "Korea, Republic of",
    code: "KOR",
    "Numeric code": 410,
    "Latitude (average)": 37,
    "Longitude (average)": 127.5
  },
  {
    label: "South Korea",
    code: "KOR",
    "Numeric code": 410,
    "Latitude (average)": 37,
    "Longitude (average)": 127.5
  },
  {
    label: "Kuwait",
    code: "KWT",
    "Numeric code": 414,
    "Latitude (average)": 29.3375,
    "Longitude (average)": 47.6581
  },
  {
    label: "Kyrgyzstan",
    code: "KGZ",
    "Numeric code": 417,
    "Latitude (average)": 41,
    "Longitude (average)": 75
  },
  {
    label: "Lao People's Democratic Republic",
    code: "LAO",
    "Numeric code": 418,
    "Latitude (average)": 18,
    "Longitude (average)": 105
  },
  {
    label: "Latvia",
    code: "LVA",
    "Numeric code": 428,
    "Latitude (average)": 57,
    "Longitude (average)": 25
  },
  {
    label: "Lebanon",
    code: "LBN",
    "Numeric code": 422,
    "Latitude (average)": 33.8333,
    "Longitude (average)": 35.8333
  },
  {
    label: "Lesotho",
    code: "LSO",
    "Numeric code": 426,
    "Latitude (average)": -29.5,
    "Longitude (average)": 28.5
  },
  {
    label: "Liberia",
    code: "LBR",
    "Numeric code": 430,
    "Latitude (average)": 6.5,
    "Longitude (average)": -9.5
  },
  {
    label: "Libyan Arab Jamahiriya",
    code: "LBY",
    "Numeric code": 434,
    "Latitude (average)": 25,
    "Longitude (average)": 17
  },
  {
    label: "Libya",
    code: "LBY",
    "Numeric code": 434,
    "Latitude (average)": 25,
    "Longitude (average)": 17
  },
  {
    label: "Liechtenstein",
    code: "LIE",
    "Numeric code": 438,
    "Latitude (average)": 47.1667,
    "Longitude (average)": 9.5333
  },
  {
    label: "Lithuania",
    code: "LTU",
    "Numeric code": 440,
    "Latitude (average)": 56,
    "Longitude (average)": 24
  },
  {
    label: "Luxembourg",
    code: "LUX",
    "Numeric code": 442,
    "Latitude (average)": 49.75,
    "Longitude (average)": 6.1667
  },
  {
    label: "Macao",
    code: "MAC",
    "Numeric code": 446,
    "Latitude (average)": 22.1667,
    "Longitude (average)": 113.55
  },
  {
    label: "Macedonia, the former Yugoslav Republic of",
    code: "MKD",
    "Numeric code": 807,
    "Latitude (average)": 41.8333,
    "Longitude (average)": 22
  },
  {
    label: "Madagascar",
    code: "MDG",
    "Numeric code": 450,
    "Latitude (average)": -20,
    "Longitude (average)": 47
  },
  {
    label: "Malawi",
    code: "MWI",
    "Numeric code": 454,
    "Latitude (average)": -13.5,
    "Longitude (average)": 34
  },
  {
    label: "Malaysia",
    code: "MYS",
    "Numeric code": 458,
    "Latitude (average)": 2.5,
    "Longitude (average)": 112.5
  },
  {
    label: "Maldives",
    code: "MDV",
    "Numeric code": 462,
    "Latitude (average)": 3.25,
    "Longitude (average)": 73
  },
  {
    label: "Mali",
    code: "MLI",
    "Numeric code": 466,
    "Latitude (average)": 17,
    "Longitude (average)": -4
  },
  {
    label: "Malta",
    code: "MLT",
    "Numeric code": 470,
    "Latitude (average)": 35.8333,
    "Longitude (average)": 14.5833
  },
  {
    label: "Marshall Islands",
    code: "MHL",
    "Numeric code": 584,
    "Latitude (average)": 9,
    "Longitude (average)": 168
  },
  {
    label: "Martinique",
    code: "MTQ",
    "Numeric code": 474,
    "Latitude (average)": 14.6667,
    "Longitude (average)": -61
  },
  {
    label: "Mauritania",
    code: "MRT",
    "Numeric code": 478,
    "Latitude (average)": 20,
    "Longitude (average)": -12
  },
  {
    label: "Mauritius",
    code: "MUS",
    "Numeric code": 480,
    "Latitude (average)": -20.2833,
    "Longitude (average)": 57.55
  },
  {
    label: "Mayotte",
    code: "MYT",
    "Numeric code": 175,
    "Latitude (average)": -12.8333,
    "Longitude (average)": 45.1667
  },
  {
    label: "Mexico",
    code: "MEX",
    "Numeric code": 484,
    "Latitude (average)": 23,
    "Longitude (average)": -102
  },
  {
    label: "Micronesia, Federated States of",
    code: "FSM",
    "Numeric code": 583,
    "Latitude (average)": 6.9167,
    "Longitude (average)": 158.25
  },
  {
    label: "Moldova, Republic of",
    code: "MDA",
    "Numeric code": 498,
    "Latitude (average)": 47,
    "Longitude (average)": 29
  },
  {
    label: "Monaco",
    code: "MCO",
    "Numeric code": 492,
    "Latitude (average)": 43.7333,
    "Longitude (average)": 7.4
  },
  {
    label: "Mongolia",
    code: "MNG",
    "Numeric code": 496,
    "Latitude (average)": 46,
    "Longitude (average)": 105
  },
  {
    label: "Montenegro",
    code: "MNE",
    "Numeric code": 499,
    "Latitude (average)": 42,
    "Longitude (average)": 19
  },
  {
    label: "Montserrat",
    code: "MSR",
    "Numeric code": 500,
    "Latitude (average)": 16.75,
    "Longitude (average)": -62.2
  },
  {
    label: "Morocco",
    code: "MAR",
    "Numeric code": 504,
    "Latitude (average)": 32,
    "Longitude (average)": -5
  },
  {
    label: "Mozambique",
    code: "MOZ",
    "Numeric code": 508,
    "Latitude (average)": -18.25,
    "Longitude (average)": 35
  },
  {
    label: "Myanmar",
    code: "MMR",
    "Numeric code": 104,
    "Latitude (average)": 22,
    "Longitude (average)": 98
  },
  {
    label: "Burma",
    code: "MMR",
    "Numeric code": 104,
    "Latitude (average)": 22,
    "Longitude (average)": 98
  },
  {
    label: "Namibia",
    code: "NAM",
    "Numeric code": 516,
    "Latitude (average)": -22,
    "Longitude (average)": 17
  },
  {
    label: "Nauru",
    code: "NRU",
    "Numeric code": 520,
    "Latitude (average)": -0.5333,
    "Longitude (average)": 166.9167
  },
  {
    label: "Nepal",
    code: "NPL",
    "Numeric code": 524,
    "Latitude (average)": 28,
    "Longitude (average)": 84
  },
  {
    label: "Netherlands",
    code: "NLD",
    "Numeric code": 528,
    "Latitude (average)": 52.5,
    "Longitude (average)": 5.75
  },
  {
    label: "Netherlands Antilles",
    code: "ANT",
    "Numeric code": 530,
    "Latitude (average)": 12.25,
    "Longitude (average)": -68.75
  },
  {
    label: "New Caledonia",
    code: "NCL",
    "Numeric code": 540,
    "Latitude (average)": -21.5,
    "Longitude (average)": 165.5
  },
  {
    label: "New Zealand",
    code: "NZL",
    "Numeric code": 554,
    "Latitude (average)": -41,
    "Longitude (average)": 174
  },
  {
    label: "Nicaragua",
    code: "NIC",
    "Numeric code": 558,
    "Latitude (average)": 13,
    "Longitude (average)": -85
  },
  {
    label: "Niger",
    code: "NER",
    "Numeric code": 562,
    "Latitude (average)": 16,
    "Longitude (average)": 8
  },
  {
    label: "Nigeria",
    code: "NGA",
    "Numeric code": 566,
    "Latitude (average)": 10,
    "Longitude (average)": 8
  },
  {
    label: "Niue",
    code: "NIU",
    "Numeric code": 570,
    "Latitude (average)": -19.0333,
    "Longitude (average)": -169.8667
  },
  {
    label: "Norfolk Island",
    code: "NFK",
    "Numeric code": 574,
    "Latitude (average)": -29.0333,
    "Longitude (average)": 167.95
  },
  {
    label: "Northern Mariana Islands",
    code: "MNP",
    "Numeric code": 580,
    "Latitude (average)": 15.2,
    "Longitude (average)": 145.75
  },
  {
    label: "Norway",
    code: "NOR",
    "Numeric code": 578,
    "Latitude (average)": 62,
    "Longitude (average)": 10
  },
  {
    label: "Oman",
    code: "OMN",
    "Numeric code": 512,
    "Latitude (average)": 21,
    "Longitude (average)": 57
  },
  {
    label: "Pakistan",
    code: "PAK",
    "Numeric code": 586,
    "Latitude (average)": 30,
    "Longitude (average)": 70
  },
  {
    label: "Palau",
    code: "PLW",
    "Numeric code": 585,
    "Latitude (average)": 7.5,
    "Longitude (average)": 134.5
  },
  {
    label: "Palestinian Territory, Occupied",
    code: "PSE",
    "Numeric code": 275,
    "Latitude (average)": 32,
    "Longitude (average)": 35.25
  },
  {
    label: "Panama",
    code: "PAN",
    "Numeric code": 591,
    "Latitude (average)": 9,
    "Longitude (average)": -80
  },
  {
    label: "Papua New Guinea",
    code: "PNG",
    "Numeric code": 598,
    "Latitude (average)": -6,
    "Longitude (average)": 147
  },
  {
    label: "Paraguay",
    code: "PRY",
    "Numeric code": 600,
    "Latitude (average)": -23,
    "Longitude (average)": -58
  },
  {
    label: "Peru",
    code: "PER",
    "Numeric code": 604,
    "Latitude (average)": -10,
    "Longitude (average)": -76
  },
  {
    label: "Philippines",
    code: "PHL",
    "Numeric code": 608,
    "Latitude (average)": 13,
    "Longitude (average)": 122
  },
  {
    label: "Pitcairn",
    code: "PCN",
    "Numeric code": 612,
    "Latitude (average)": -24.7,
    "Longitude (average)": -127.4
  },
  {
    label: "Poland",
    code: "POL",
    "Numeric code": 616,
    "Latitude (average)": 52,
    "Longitude (average)": 20
  },
  {
    label: "Portugal",
    code: "PRT",
    "Numeric code": 620,
    "Latitude (average)": 39.5,
    "Longitude (average)": -8
  },
  {
    label: "Puerto Rico",
    code: "PRI",
    "Numeric code": 630,
    "Latitude (average)": 18.25,
    "Longitude (average)": -66.5
  },
  {
    label: "Qatar",
    code: "QAT",
    "Numeric code": 634,
    "Latitude (average)": 25.5,
    "Longitude (average)": 51.25
  },
  {
    label: "Réunion",
    code: "REU",
    "Numeric code": 638,
    "Latitude (average)": -21.1,
    "Longitude (average)": 55.6
  },
  {
    label: "Romania",
    code: "ROU",
    "Numeric code": 642,
    "Latitude (average)": 46,
    "Longitude (average)": 25
  },
  {
    label: "Russian Federation",
    code: "RUS",
    "Numeric code": 643,
    "Latitude (average)": 60,
    "Longitude (average)": 100
  },
  {
    label: "Russia",
    code: "RUS",
    "Numeric code": 643,
    "Latitude (average)": 60,
    "Longitude (average)": 100
  },
  {
    label: "Rwanda",
    code: "RWA",
    "Numeric code": 646,
    "Latitude (average)": -2,
    "Longitude (average)": 30
  },
  {
    label: "Saint Helena, Ascension and Tristan da Cunha",
    code: "SHN",
    "Numeric code": 654,
    "Latitude (average)": -15.9333,
    "Longitude (average)": -5.7
  },
  {
    label: "Saint Kitts and Nevis",
    code: "KNA",
    "Numeric code": 659,
    "Latitude (average)": 17.3333,
    "Longitude (average)": -62.75
  },
  {
    label: "Saint Lucia",
    code: "LCA",
    "Numeric code": 662,
    "Latitude (average)": 13.8833,
    "Longitude (average)": -61.1333
  },
  {
    label: "Saint Pierre and Miquelon",
    code: "SPM",
    "Numeric code": 666,
    "Latitude (average)": 46.8333,
    "Longitude (average)": -56.3333
  },
  {
    label: "Saint Vincent and the Grenadines",
    code: "VCT",
    "Numeric code": 670,
    "Latitude (average)": 13.25,
    "Longitude (average)": -61.2
  },
  {
    label: "Saint Vincent & the Grenadines",
    code: "VCT",
    "Numeric code": 670,
    "Latitude (average)": 13.25,
    "Longitude (average)": -61.2
  },
  {
    label: "St. Vincent and the Grenadines",
    code: "VCT",
    "Numeric code": 670,
    "Latitude (average)": 13.25,
    "Longitude (average)": -61.2
  },
  {
    label: "Samoa",
    code: "WSM",
    "Numeric code": 882,
    "Latitude (average)": -13.5833,
    "Longitude (average)": -172.3333
  },
  {
    label: "San Marino",
    code: "SMR",
    "Numeric code": 674,
    "Latitude (average)": 43.7667,
    "Longitude (average)": 12.4167
  },
  {
    label: "Sao Tome and Principe",
    code: "STP",
    "Numeric code": 678,
    "Latitude (average)": 1,
    "Longitude (average)": 7
  },
  {
    label: "Saudi Arabia",
    code: "SAU",
    "Numeric code": 682,
    "Latitude (average)": 25,
    "Longitude (average)": 45
  },
  {
    label: "Senegal",
    code: "SEN",
    "Numeric code": 686,
    "Latitude (average)": 14,
    "Longitude (average)": -14
  },
  {
    label: "Serbia",
    code: "SRB",
    "Numeric code": 688,
    "Latitude (average)": 44,
    "Longitude (average)": 21
  },
  {
    label: "Seychelles",
    code: "SYC",
    "Numeric code": 690,
    "Latitude (average)": -4.5833,
    "Longitude (average)": 55.6667
  },
  {
    label: "Sierra Leone",
    code: "SLE",
    "Numeric code": 694,
    "Latitude (average)": 8.5,
    "Longitude (average)": -11.5
  },
  {
    label: "Singapore",
    code: "SGP",
    "Numeric code": 702,
    "Latitude (average)": 1.3667,
    "Longitude (average)": 103.8
  },
  {
    label: "Slovakia",
    code: "SVK",
    "Numeric code": 703,
    "Latitude (average)": 48.6667,
    "Longitude (average)": 19.5
  },
  {
    label: "Slovenia",
    code: "SVN",
    "Numeric code": 705,
    "Latitude (average)": 46,
    "Longitude (average)": 15
  },
  {
    label: "Solomon Islands",
    code: "SLB",
    "Numeric code": 90,
    "Latitude (average)": -8,
    "Longitude (average)": 159
  },
  {
    label: "Somalia",
    code: "SOM",
    "Numeric code": 706,
    "Latitude (average)": 10,
    "Longitude (average)": 49
  },
  {
    label: "South Africa",
    code: "ZAF",
    "Numeric code": 710,
    "Latitude (average)": -29,
    "Longitude (average)": 24
  },
  {
    label: "South Georgia and the South Sandwich Islands",
    code: "SGS",
    "Numeric code": 239,
    "Latitude (average)": -54.5,
    "Longitude (average)": -37
  },
  {
    label: "South Sudan",
    code: "SSD",
    "Numeric code": 728,
    "Latitude (average)": 8,
    "Longitude (average)": 30
  },
  {
    label: "Spain",
    code: "ESP",
    "Numeric code": 724,
    "Latitude (average)": 40,
    "Longitude (average)": -4
  },
  {
    label: "Sri Lanka",
    code: "LKA",
    "Numeric code": 144,
    "Latitude (average)": 7,
    "Longitude (average)": 81
  },
  {
    label: "Sudan",
    code: "SDN",
    "Numeric code": 736,
    "Latitude (average)": 15,
    "Longitude (average)": 30
  },
  {
    label: "Suriname",
    code: "SUR",
    "Numeric code": 740,
    "Latitude (average)": 4,
    "Longitude (average)": -56
  },
  {
    label: "Svalbard and Jan Mayen",
    code: "SJM",
    "Numeric code": 744,
    "Latitude (average)": 78,
    "Longitude (average)": 20
  },
  {
    label: "Swaziland",
    code: "SWZ",
    "Numeric code": 748,
    "Latitude (average)": -26.5,
    "Longitude (average)": 31.5
  },
  {
    label: "Sweden",
    code: "SWE",
    "Numeric code": 752,
    "Latitude (average)": 62,
    "Longitude (average)": 15
  },
  {
    label: "Switzerland",
    code: "CHE",
    "Numeric code": 756,
    "Latitude (average)": 47,
    "Longitude (average)": 8
  },
  {
    label: "Syrian Arab Republic",
    code: "SYR",
    "Numeric code": 760,
    "Latitude (average)": 35,
    "Longitude (average)": 38
  },
  {
    label: "Taiwan, Province of China",
    code: "TWN",
    "Numeric code": 158,
    "Latitude (average)": 23.5,
    "Longitude (average)": 121
  },
  {
    label: "Taiwan",
    code: "TWN",
    "Numeric code": 158,
    "Latitude (average)": 23.5,
    "Longitude (average)": 121
  },
  {
    label: "Tajikistan",
    code: "TJK",
    "Numeric code": 762,
    "Latitude (average)": 39,
    "Longitude (average)": 71
  },
  {
    label: "Tanzania, United Republic of",
    code: "TZA",
    "Numeric code": 834,
    "Latitude (average)": -6,
    "Longitude (average)": 35
  },
  {
    label: "Thailand",
    code: "THA",
    "Numeric code": 764,
    "Latitude (average)": 15,
    "Longitude (average)": 100
  },
  {
    label: "Timor-Leste",
    code: "TLS",
    "Numeric code": 626,
    "Latitude (average)": -8.55,
    "Longitude (average)": 125.5167
  },
  {
    label: "Togo",
    code: "TGO",
    "Numeric code": 768,
    "Latitude (average)": 8,
    "Longitude (average)": 1.1667
  },
  {
    label: "Tokelau",
    code: "TKL",
    "Numeric code": 772,
    "Latitude (average)": -9,
    "Longitude (average)": -172
  },
  {
    label: "Tonga",
    code: "TON",
    "Numeric code": 776,
    "Latitude (average)": -20,
    "Longitude (average)": -175
  },
  {
    label: "Trinidad and Tobago",
    code: "TTO",
    "Numeric code": 780,
    "Latitude (average)": 11,
    "Longitude (average)": -61
  },
  {
    label: "Tunisia",
    code: "TUN",
    "Numeric code": 788,
    "Latitude (average)": 34,
    "Longitude (average)": 9
  },
  {
    label: "Turkey",
    code: "TUR",
    "Numeric code": 792,
    "Latitude (average)": 39,
    "Longitude (average)": 35
  },
  {
    label: "Turkmenistan",
    code: "TKM",
    "Numeric code": 795,
    "Latitude (average)": 40,
    "Longitude (average)": 60
  },
  {
    label: "Turks and Caicos Islands",
    code: "TCA",
    "Numeric code": 796,
    "Latitude (average)": 21.75,
    "Longitude (average)": -71.5833
  },
  {
    label: "Tuvalu",
    code: "TUV",
    "Numeric code": 798,
    "Latitude (average)": -8,
    "Longitude (average)": 178
  },
  {
    label: "Uganda",
    code: "UGA",
    "Numeric code": 800,
    "Latitude (average)": 1,
    "Longitude (average)": 32
  },
  {
    label: "Ukraine",
    code: "UKR",
    "Numeric code": 804,
    "Latitude (average)": 49,
    "Longitude (average)": 32
  },
  {
    label: "United Arab Emirates",
    code: "ARE",
    "Numeric code": 784,
    "Latitude (average)": 24,
    "Longitude (average)": 54
  },
  {
    label: "United Kingdom",
    code: "GBR",
    "Numeric code": 826,
    "Latitude (average)": 54,
    "Longitude (average)": -2
  },
  {
    label: "United States",
    code: "USA",
    "Numeric code": 840,
    "Latitude (average)": 38,
    "Longitude (average)": -97
  },
  {
    label: "United States Minor Outlying Islands",
    code: "UMI",
    "Numeric code": 581,
    "Latitude (average)": 19.2833,
    "Longitude (average)": 166.6
  },
  {
    label: "Uruguay",
    code: "URY",
    "Numeric code": 858,
    "Latitude (average)": -33,
    "Longitude (average)": -56
  },
  {
    label: "Uzbekistan",
    code: "UZB",
    "Numeric code": 860,
    "Latitude (average)": 41,
    "Longitude (average)": 64
  },
  {
    label: "Vanuatu",
    code: "VUT",
    "Numeric code": 548,
    "Latitude (average)": -16,
    "Longitude (average)": 167
  },
  {
    label: "Venezuela, Bolivarian Republic of",
    code: "VEN",
    "Numeric code": 862,
    "Latitude (average)": 8,
    "Longitude (average)": -66
  },
  {
    label: "Venezuela",
    code: "VEN",
    "Numeric code": 862,
    "Latitude (average)": 8,
    "Longitude (average)": -66
  },
  {
    label: "Viet Nam",
    code: "VNM",
    "Numeric code": 704,
    "Latitude (average)": 16,
    "Longitude (average)": 106
  },
  {
    label: "Vietnam",
    code: "VNM",
    "Numeric code": 704,
    "Latitude (average)": 16,
    "Longitude (average)": 106
  },
  {
    label: "Virgin Islands, British",
    code: "VGB",
    "Numeric code": 92,
    "Latitude (average)": 18.5,
    "Longitude (average)": -64.5
  },
  {
    label: "Virgin Islands, U.S.",
    code: "VIR",
    "Numeric code": 850,
    "Latitude (average)": 18.3333,
    "Longitude (average)": -64.8333
  },
  {
    label: "Wallis and Futuna",
    code: "WLF",
    "Numeric code": 876,
    "Latitude (average)": -13.3,
    "Longitude (average)": -176.2
  },
  {
    label: "Western Sahara",
    code: "ESH",
    "Numeric code": 732,
    "Latitude (average)": 24.5,
    "Longitude (average)": -13
  },
  {
    label: "Yemen",
    code: "YEM",
    "Numeric code": 887,
    "Latitude (average)": 15,
    "Longitude (average)": 48
  },
  {
    label: "Zambia",
    code: "ZMB",
    "Numeric code": 894,
    "Latitude (average)": -15,
    "Longitude (average)": 30
  },
  {
    label: "Zimbabwe",
    code: "ZWE",
    "Numeric code": 716,
    "Latitude (average)": -20,
    "Longitude (average)": 30
  }
];

const mapingCountries = countries
  .map((option) => {
    const firstLetter = option.label[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  })
  .sort((a, b) => {
    if (a.label === b.label) return 0;
    return a.label < b.label ? -1 : 1;      // jesli a < b to -1, jeśli nie to 1
  });

const allAppData = { period, mapingCountries };

export default allAppData;
