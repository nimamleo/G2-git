const $ = document;
let email_input = $.querySelector(".email");
let country_input = $.querySelector(".country");
let pass_input = $.querySelector(".pass");
let pass_r_input = $.querySelector(".pass-r");
let search = $.querySelector(".search");
let btn = $.querySelector(".btn");
let error = $.querySelector(".error");
let errors = [];

email_input.addEventListener("input", () => {
    const emailValue = email_input.value;
    const validateRes = ValidateEmail(emailValue);
    if (!validateRes) {
        email_input.style = ` border: 1px solid red;`;
        error.innerHTML = "email is not valid";
    } else {
        email_input.style = ` border: 1px solid green;`;
        error.innerHTML = "";
    }
});
pass_input.addEventListener("input", () => {
    const passValue = pass_input.value;
    const validateRes = Validatepassword(passValue);
    if (!validateRes) {
        pass_input.style = ` border: 1px solid red;`;
        error.innerHTML = "password must be more than 6 char";
    } else {
        pass_input.style = ` border: 1px solid green;`;
        error.innerHTML = "";
    }
});
pass_r_input.addEventListener("input", () => {
    const passValue = pass_input.value;
    const RpassValue = pass_r_input.value;
    const validateRes = ValidateResetpassword(passValue, RpassValue);
    if (!validateRes) {
        pass_r_input.style = ` border: 1px solid red;`;
        error.innerHTML = "Repeatpassword must be as same as password";
    } else {
        pass_r_input.style = ` border: 1px solid green;`;
        error.innerHTML = "";
    }
});

search.addEventListener("input", (e) => {
    country_input.innerHTML = "";
    const searchInput = search.value;
    const res = countryList.filter((country) => {
        return country.toLowerCase().startsWith(searchInput);
    });
    res.forEach((country) => {
        const option = document.createElement("option");
        option.innerHTML = country;
        country_input.appendChild(option);
    });
});

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const validateRes = finalValidate();
    if (!validateRes) {
        alert("please check error");
    } else {
        const newUser = {
            email: email_input.value,
            country: country_input.value,
            password: pass_input.value,
        };
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const IsUserExist = users.some((user) => {
            return user.email === newUser.email;
        });
        if (IsUserExist) {
            alert("email has been already exist");
        } else {
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
            window.location.href = "http://127.0.0.1:5500/login.html";
            alert("you successfully sign up");
        }
    }
});

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    } else {
        return false;
    }
}

function Validatepassword(pass) {
    if (pass.length >= 6) {
        return true;
    } else {
        return false;
    }
}
function ValidateResetpassword(pass, Rpass) {
    if (pass === Rpass) {
        return true;
    } else {
        return false;
    }
}
function ValidateCountry(country) {
    if (country) {
        return true;
    } else {
        return false;
    }
}

function validationRepeatpassword(Rpass) {
    if (Rpass && Rpass !== "" && Rpass !== " ") {
        return true;
    } else {
        return false;
    }
}

function finalValidate() {
    if (
        ValidateEmail(email_input.value) &&
        Validatepassword(pass_input.value)&&
        validationRepeatpassword(pass_r_input.value)
    ) {
        return true;
    }
    return false;
}

const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands",
];
