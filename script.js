let currentContinent = null;  // Track selected continent

const countryData = {
  africa: [
    {
  name: "Central African Republic",
  flag: "https://flagcdn.com/w320/cf.png",
},
{
  name: "Chad",
  flag: "https://flagcdn.com/w320/td.png",
},
{
  name: "Comoros",
  flag: "https://flagcdn.com/w320/km.png",
},
{
  name: "Democratic Republic of the Congo",
  flag: "https://flagcdn.com/w320/cd.png",
},
{
  name: "Republic of the Congo",
  flag: "https://flagcdn.com/w320/cg.png",
},
{
  name: "Côte d'Ivoire",
  flag: "https://flagcdn.com/w320/ci.png",
},
{
  name: "Djibouti",
  flag: "https://flagcdn.com/w320/dj.png",
},
{
  name: "Egypt",
  flag: "https://flagcdn.com/w320/eg.png",
},
{
  name: "Equatorial Guinea",
  flag: "https://flagcdn.com/w320/gq.png",
},
{
  name: "Eritrea",
  flag: "https://flagcdn.com/w320/er.png",
},
{
  name: "Eswatini",
  flag: "https://flagcdn.com/w320/sz.png",
},
{
  name: "Ethiopia",
  flag: "https://flagcdn.com/w320/et.png",
},
{
  name: "Gabon",
  flag: "https://flagcdn.com/w320/ga.png",
},
{
  name: "Gambia",
  flag: "https://flagcdn.com/w320/gm.png",
},
{
  name: "Ghana",
  flag: "https://flagcdn.com/w320/gh.png",
},
{
  name: "Guinea",
  flag: "https://flagcdn.com/w320/gn.png",
},
{
  name: "Guinea-Bissau",
  flag: "https://flagcdn.com/w320/gw.png",
},
{
  name: "Kenya",
  flag: "https://flagcdn.com/w320/ke.png",
},
{
  name: "Lesotho",
  flag: "https://flagcdn.com/w320/ls.png",
},
{
  name: "Liberia",
  flag: "https://flagcdn.com/w320/lr.png",
},
{
  name: "Libya",
  flag: "https://flagcdn.com/w320/ly.png",
},
{
  name: "Madagascar",
  flag: "https://flagcdn.com/w320/mg.png",
},
{
  name: "Malawi",
  flag: "https://flagcdn.com/w320/mw.png",
},
{
  name: "Mali",
  flag: "https://flagcdn.com/w320/ml.png",
},
{
  name: "Mauritania",
  flag: "https://flagcdn.com/w320/mr.png",
},
{
  name: "Mauritius",
  flag: "https://flagcdn.com/w320/mu.png",
},
{
  name: "Morocco",
  flag: "https://flagcdn.com/w320/ma.png",
},
{
  name: "Mozambique",
  flag: "https://flagcdn.com/w320/mz.png",
},
{
  name: "Namibia",
  flag: "https://flagcdn.com/w320/na.png",
},
{
  name: "Niger",
  flag: "https://flagcdn.com/w320/ne.png",
},
{
  name: "Nigeria",
  flag: "https://flagcdn.com/w320/ng.png",
},
{
  name: "Rwanda",
  flag: "https://flagcdn.com/w320/rw.png",
},
{
  name: "São Tomé and Príncipe",
  flag: "https://flagcdn.com/w320/st.png",
},
{
  name: "Senegal",
  flag: "https://flagcdn.com/w320/sn.png",
},
{
  name: "Seychelles",
  flag: "https://flagcdn.com/w320/sc.png",
},
{
  name: "Sierra Leone",
  flag: "https://flagcdn.com/w320/sl.png",
},
{
  name: "Somalia",
  flag: "https://flagcdn.com/w320/so.png",
},
{
  name: "South Africa",
  flag: "https://flagcdn.com/w320/za.png",
},
{
  name: "South Sudan",
  flag: "https://flagcdn.com/w320/ss.png",
},
{
  name: "Sudan",
  flag: "https://flagcdn.com/w320/sd.png",
},
{
  name: "Tanzania",
  flag: "https://flagcdn.com/w320/tz.png",
},
{
  name: "Togo",
  flag: "https://flagcdn.com/w320/tg.png",
},
{
  name: "Tunisia",
  flag: "https://flagcdn.com/w320/tn.png",
},
{
  name: "Uganda",
  flag: "https://flagcdn.com/w320/ug.png",
},
{
  name: "Zambia",
  flag: "https://flagcdn.com/w320/zm.png",
},
{
  name: "Zimbabwe",
  flag: "https://flagcdn.com/w320/zw.png",
},
{
  name: "Algeria",
  flag: "https://flagcdn.com/w320/dz.png",
},
{
  name: "Angola",
  flag: "https://flagcdn.com/w320/ao.png",
},
{
  name: "Benin",
  flag: "https://flagcdn.com/w320/bj.png",
},
{
  name: "Botswana",
  flag: "https://flagcdn.com/w320/bw.png",
},
{
  name: "Burkina Faso",
  flag: "https://flagcdn.com/w320/bf.png",
},
{
  name: "Burundi",
  flag: "https://flagcdn.com/w320/bi.png",
},
{
  name: "Cabo Verde",
  flag: "https://flagcdn.com/w320/cv.png",
},
{
  name: "Cameroon",
  flag: "https://flagcdn.com/w320/cm.png",
},
  ],
  europe: [
    {
  name: "Albania",
  flag: "https://flagcdn.com/w320/al.png",
},
{
  name: "Andorra",
  flag: "https://flagcdn.com/w320/ad.png",
},
{
  name: "Armenia",
  flag: "https://flagcdn.com/w320/am.png",
},
{
  name: "Austria",
  flag: "https://flagcdn.com/w320/at.png",
},
{
  name: "Azerbaijan",
  flag: "https://flagcdn.com/w320/az.png",
},
{
  name: "Belarus",
  flag: "https://flagcdn.com/w320/by.png",
},
{
  name: "Belgium",
  flag: "https://flagcdn.com/w320/be.png",
},
{
  name: "Bosnia and Herzegovina",
  flag: "https://flagcdn.com/w320/ba.png",
},
{
  name: "Bulgaria",
  flag: "https://flagcdn.com/w320/bg.png",
},
{
  name: "Croatia",
  flag: "https://flagcdn.com/w320/hr.png",
},
{
  name: "Cyprus",
  flag: "https://flagcdn.com/w320/cy.png",
},
{
  name: "Czech Republic",
  flag: "https://flagcdn.com/w320/cz.png",
},
{
  name: "Denmark",
  flag: "https://flagcdn.com/w320/dk.png",
},
{
  name: "Estonia",
  flag: "https://flagcdn.com/w320/ee.png",
},
{
  name: "Finland",
  flag: "https://flagcdn.com/w320/fi.png",
},
{
  name: "France",
  flag: "https://flagcdn.com/w320/fr.png",
},
{
  name: "Georgia",
  flag: "https://flagcdn.com/w320/ge.png",
},
{
  name: "Germany",
  flag: "https://flagcdn.com/w320/de.png",
},
{
  name: "Greece",
  flag: "https://flagcdn.com/w320/gr.png",
},
{
  name: "Hungary",
  flag: "https://flagcdn.com/w320/hu.png",
},
{
  name: "Iceland",
  flag: "https://flagcdn.com/w320/is.png",
},
{
  name: "Ireland",
  flag: "https://flagcdn.com/w320/ie.png",
},
{
  name: "Italy",
  flag: "https://flagcdn.com/w320/it.png",
},
{
  name: "Kazakhstan",
  flag: "https://flagcdn.com/w320/kz.png",
},
{
  name: "Kosovo",
  flag: "https://flagcdn.com/w320/xk.png",
},
{
  name: "Latvia",
  flag: "https://flagcdn.com/w320/lv.png",
},
{
  name: "Liechtenstein",
  flag: "https://flagcdn.com/w320/li.png",
},
{
  name: "Lithuania",
  flag: "https://flagcdn.com/w320/lt.png",
},
{
  name: "Luxembourg",
  flag: "https://flagcdn.com/w320/lu.png",
},
{
  name: "Malta",
  flag: "https://flagcdn.com/w320/mt.png",
},
{
  name: "Moldova",
  flag: "https://flagcdn.com/w320/md.png",
},
{
  name: "Monaco",
  flag: "https://flagcdn.com/w320/mc.png",
},
{
  name: "Montenegro",
  flag: "https://flagcdn.com/w320/me.png",
},
{
  name: "Netherlands",
  flag: "https://flagcdn.com/w320/nl.png",
},
{
  name: "North Macedonia",
  flag: "https://flagcdn.com/w320/mk.png",
},
{
  name: "Norway",
  flag: "https://flagcdn.com/w320/no.png",
},
{
  name: "Poland",
  flag: "https://flagcdn.com/w320/pl.png",
},
{
  name: "Portugal",
  flag: "https://flagcdn.com/w320/pt.png",
},
{
  name: "Romania",
  flag: "https://flagcdn.com/w320/ro.png",
},
{
  name: "Russia",
  flag: "https://flagcdn.com/w320/ru.png",
},
{
  name: "San Marino",
  flag: "https://flagcdn.com/w320/sm.png",
},
{
  name: "Serbia",
  flag: "https://flagcdn.com/w320/rs.png",
},
{
  name: "Slovakia",
  flag: "https://flagcdn.com/w320/sk.png",
},
{
  name: "Slovenia",
  flag: "https://flagcdn.com/w320/si.png",
},
{
  name: "Spain",
  flag: "https://flagcdn.com/w320/es.png",
},
{
  name: "Sweden",
  flag: "https://flagcdn.com/w320/se.png",
},
{
  name: "Switzerland",
  flag: "https://flagcdn.com/w320/ch.png",
},
{
  name: "Turkey",
  flag: "https://flagcdn.com/w320/tr.png",
},
{
  name: "Ukraine",
  flag: "https://flagcdn.com/w320/ua.png",
},
{
  name: "United Kingdom",
  flag: "https://flagcdn.com/w320/gb.png",
},
{
  name: "Vatican City",
  flag: "https://flagcdn.com/w320/va.png",
},


  ],
  asia: [
    {
  name: "Afghanistan",
  flag: "https://flagcdn.com/w320/af.png",
},
{
  name: "Armenia",
  flag: "https://flagcdn.com/w320/am.png",
},
{
  name: "Azerbaijan",
  flag: "https://flagcdn.com/w320/az.png",
},
{
  name: "Bahrain",
  flag: "https://flagcdn.com/w320/bh.png",
},
{
  name: "Bangladesh",
  flag: "https://flagcdn.com/w320/bd.png",
},
{
  name: "Bhutan",
  flag: "https://flagcdn.com/w320/bt.png",
},
{
  name: "Brunei",
  flag: "https://flagcdn.com/w320/bn.png",
},
{
  name: "Cambodia",
  flag: "https://flagcdn.com/w320/kh.png",
},
{
  name: "China",
  flag: "https://flagcdn.com/w320/cn.png",
},
{
  name: "Cyprus",
  flag: "https://flagcdn.com/w320/cy.png",
},
{
  name: "Georgia",
  flag: "https://flagcdn.com/w320/ge.png",
},
{
  name: "India",
  flag: "https://flagcdn.com/w320/in.png",
},
{
  name: "Indonesia",
  flag: "https://flagcdn.com/w320/id.png",
},
{
  name: "Iran",
  flag: "https://flagcdn.com/w320/ir.png",
},
{
  name: "Iraq",
  flag: "https://flagcdn.com/w320/iq.png",
},
{
  name: "Japan",
  flag: "https://flagcdn.com/w320/jp.png",
},
{
  name: "Jordan",
  flag: "https://flagcdn.com/w320/jo.png",
},
{
  name: "Kazakhstan",
  flag: "https://flagcdn.com/w320/kz.png",
},
{
  name: "Kuwait",
  flag: "https://flagcdn.com/w320/kw.png",
},
{
  name: "Kyrgyzstan",
  flag: "https://flagcdn.com/w320/kg.png",
},
{
  name: "Laos",
  flag: "https://flagcdn.com/w320/la.png",
},
{
  name: "Lebanon",
  flag: "https://flagcdn.com/w320/lb.png",
},
{
  name: "Malaysia",
  flag: "https://flagcdn.com/w320/my.png",
},
{
  name: "Maldives",
  flag: "https://flagcdn.com/w320/mv.png",
},
{
  name: "Mongolia",
  flag: "https://flagcdn.com/w320/mn.png",
},
{
  name: "Myanmar",
  flag: "https://flagcdn.com/w320/mm.png",
},
{
  name: "Nepal",
  flag: "https://flagcdn.com/w320/np.png",
},
{
  name: "North Korea",
  flag: "https://flagcdn.com/w320/kp.png",
},
{
  name: "Oman",
  flag: "https://flagcdn.com/w320/om.png",
},
{
  name: "Pakistan",
  flag: "https://flagcdn.com/w320/pk.png",
},
{
  name: "Palestine",
  flag: "https://flagcdn.com/w320/ps.png",
},
{
  name: "Philippines",
  flag: "https://flagcdn.com/w320/ph.png",
},
{
  name: "Qatar",
  flag: "https://flagcdn.com/w320/qa.png",
},
{
  name: "Russia",
  flag: "https://flagcdn.com/w320/ru.png",
},
{
  name: "Saudi Arabia",
  flag: "https://flagcdn.com/w320/sa.png",
},
{
  name: "Singapore",
  flag: "https://flagcdn.com/w320/sg.png",
},
{
  name: "South Korea",
  flag: "https://flagcdn.com/w320/kr.png",
},
{
  name: "Sri Lanka",
  flag: "https://flagcdn.com/w320/lk.png",
},
{
  name: "Syria",
  flag: "https://flagcdn.com/w320/sy.png",
},
{
  name: "Tajikistan",
  flag: "https://flagcdn.com/w320/tj.png",
},
{
  name: "Thailand",
  flag: "https://flagcdn.com/w320/th.png",
},
{
  name: "Timor-Leste",
  flag: "https://flagcdn.com/w320/tl.png",
},
{
  name: "Turkey",
  flag: "https://flagcdn.com/w320/tr.png",
},
{
  name: "Turkmenistan",
  flag: "https://flagcdn.com/w320/tm.png",
},
{
  name: "United Arab Emirates",
  flag: "https://flagcdn.com/w320/ae.png",
},
{
  name: "Uzbekistan",
  flag: "https://flagcdn.com/w320/uz.png",
},
{
  name: "Vietnam",
  flag: "https://flagcdn.com/w320/vn.png",
},
{
  name: "Yemen",
  flag: "https://flagcdn.com/w320/ye.png",
},

  ],
  northAmerica: [
    {
  name: "Antigua and Barbuda",
  flag: "https://flagcdn.com/w320/ag.png",
},
{
  name: "Bahamas",
  flag: "https://flagcdn.com/w320/bs.png",
},
{
  name: "Barbados",
  flag: "https://flagcdn.com/w320/bb.png",
},
{
  name: "Belize",
  flag: "https://flagcdn.com/w320/bz.png",
},
{
  name: "Canada",
  flag: "https://flagcdn.com/w320/ca.png",
},
{
  name: "Costa Rica",
  flag: "https://flagcdn.com/w320/cr.png",
},
{
  name: "Cuba",
  flag: "https://flagcdn.com/w320/cu.png",
},
{
  name: "Dominica",
  flag: "https://flagcdn.com/w320/dm.png",
},
{
  name: "Dominican Republic",
  flag: "https://flagcdn.com/w320/do.png",
},
{
  name: "El Salvador",
  flag: "https://flagcdn.com/w320/sv.png",
},
{
  name: "Grenada",
  flag: "https://flagcdn.com/w320/gd.png",
},
{
  name: "Guatemala",
  flag: "https://flagcdn.com/w320/gt.png",
},
{
  name: "Haiti",
  flag: "https://flagcdn.com/w320/ht.png",
},
{
  name: "Honduras",
  flag: "https://flagcdn.com/w320/hn.png",
},
{
  name: "Jamaica",
  flag: "https://flagcdn.com/w320/jm.png",
},
{
  name: "Mexico",
  flag: "https://flagcdn.com/w320/mx.png",
},
{
  name: "Nicaragua",
  flag: "https://flagcdn.com/w320/ni.png",
},
{
  name: "Panama",
  flag: "https://flagcdn.com/w320/pa.png",
},
{
  name: "Saint Kitts and Nevis",
  flag: "https://flagcdn.com/w320/kn.png",
},
{
  name: "Saint Lucia",
  flag: "https://flagcdn.com/w320/lc.png",
},
{
  name: "Saint Vincent and the Grenadines",
  flag: "https://flagcdn.com/w320/vc.png",
},
{
  name: "Trinidad and Tobago",
  flag: "https://flagcdn.com/w320/tt.png",
},
{
  name: "United States",
  flag: "https://flagcdn.com/w320/us.png",
},

  ],
  southAmerica: [
    {
  name: "Argentina",
  flag: "https://flagcdn.com/w320/ar.png",
},
{
  name: "Bolivia",
  flag: "https://flagcdn.com/w320/bo.png",
},
{
  name: "Brazil",
  flag: "https://flagcdn.com/w320/br.png",
},
{
  name: "Chile",
  flag: "https://flagcdn.com/w320/cl.png",
},
{
  name: "Colombia",
  flag: "https://flagcdn.com/w320/co.png",
},
{
  name: "Ecuador",
  flag: "https://flagcdn.com/w320/ec.png",
},
{
  name: "Guyana",
  flag: "https://flagcdn.com/w320/gy.png",
},
{
  name: "Paraguay",
  flag: "https://flagcdn.com/w320/py.png",
},
{
  name: "Peru",
  flag: "https://flagcdn.com/w320/pe.png",
},
{
  name: "Suriname",
  flag: "https://flagcdn.com/w320/sr.png",
},
{
  name: "Uruguay",
  flag: "https://flagcdn.com/w320/uy.png",
},
{
  name: "Venezuela",
  flag: "https://flagcdn.com/w320/ve.png",
},

  ],
  oceania: [
    {
  name: "Australia",
  flag: "https://flagcdn.com/w320/au.png",
},
{
  name: "Fiji",
  flag: "https://flagcdn.com/w320/fj.png",
},
{
  name: "Kiribati",
  flag: "https://flagcdn.com/w320/ki.png",
},
{
  name: "Marshall Islands",
  flag: "https://flagcdn.com/w320/mh.png",
},
{
  name: "Micronesia",
  flag: "https://flagcdn.com/w320/fm.png",
},
{
  name: "Nauru",
  flag: "https://flagcdn.com/w320/nr.png",
},
{
  name: "New Zealand",
  flag: "https://flagcdn.com/w320/nz.png",
},
{
  name: "Palau",
  flag: "https://flagcdn.com/w320/pw.png",
},
{
  name: "Papua New Guinea",
  flag: "https://flagcdn.com/w320/pg.png",
},
{
  name: "Samoa",
  flag: "https://flagcdn.com/w320/ws.png",
},
{
  name: "Solomon Islands",
  flag: "https://flagcdn.com/w320/sb.png",
},
{
  name: "Tonga",
  flag: "https://flagcdn.com/w320/to.png",
},
{
  name: "Tuvalu",
  flag: "https://flagcdn.com/w320/tv.png",
},
{
  name: "Vanuatu",
  flag: "https://flagcdn.com/w320/vu.png",
},

  ],
  antarctica: [
    {
  name: "Antarctica",
  flag: "https://flagcdn.com/w320/aq.png", // AQ is the ISO code
},

  ],
};

const continentMaps = {
  africa:
    "https://upload.wikimedia.org/wikipedia/commons/8/86/Africa_%28orthographic_projection%29.svg",
  europe:
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg",
  asia:
    "https://upload.wikimedia.org/wikipedia/commons/b/bd/Asia_%28orthographic_projection%29_without_New_Guinea.svg",
  northAmerica:
    "https://upload.wikimedia.org/wikipedia/commons/4/43/Location_North_America.svg",
  southAmerica:
    "https://upload.wikimedia.org/wikipedia/commons/0/0f/South_America_%28orthographic_projection%29.svg",
  oceania:
    "https://upload.wikimedia.org/wikipedia/commons/8/8e/Oceania_%28orthographic_projection%29.svg",
  antarctica:
    "https://upload.wikimedia.org/wikipedia/commons/2/2c/Location_Antarctica.svg",
};

function showCountries(continent) {
  currentContinent = continent; // Save current continent

  const countriesDiv = document.getElementById("countries");
  const buttonsDiv = document.getElementById("continent-buttons");
  const continentMap = document.getElementById("continent-map");
  const backBtn = document.getElementById("back-btn");

  countriesDiv.innerHTML = "";
  buttonsDiv.style.display = "none";
  backBtn.style.display = "inline-block";

  continentMap.innerHTML = `<img src="${continentMaps[continent]}" alt="${continent} Map" />`;

  const countries = countryData[continent] || [];
  if (countries.length === 0) {
    countriesDiv.innerHTML = `<p style="color:#666; font-style:italic;">No countries added yet for this continent.</p>`;
  }

  countries.forEach((country) => {
    const card = document.createElement("div");
    card.className = "country-card";
    card.innerHTML = `
      <img src="${country.flag}" alt="${country.name}">
      <span>${country.name}</span>
    `;
    card.onclick = () => showFlagModal(country.flag, country.name);
    countriesDiv.appendChild(card);
  });
}

function goHome() {
  currentContinent = null;  // Reset selected continent
  document.getElementById("search-input").value = "";
  document.getElementById("continent-buttons").style.display = "block";
  document.getElementById("countries").innerHTML = "";
  document.getElementById("continent-map").innerHTML = "";
  document.getElementById("back-btn").style.display = "none";
}

function searchCountry() {
  const input = document.getElementById("search-input").value.toLowerCase();
  const countriesDiv = document.getElementById("countries");
  const buttonsDiv = document.getElementById("continent-buttons");
  const continentMap = document.getElementById("continent-map");
  const backBtn = document.getElementById("back-btn");

  countriesDiv.innerHTML = "";

  if (input === "") {
    // If search is empty, show continent buttons or current continent countries
    if (currentContinent) {
      showCountries(currentContinent);
      backBtn.style.display = "inline-block";
    } else {
      buttonsDiv.style.display = "block";
      continentMap.innerHTML = "";
      backBtn.style.display = "none";
      countriesDiv.innerHTML = "";
    }
    return;
  }

  buttonsDiv.style.display = "none";
  continentMap.innerHTML = "";
  backBtn.style.display = "inline-block";

  let countriesToSearch;

  if (currentContinent) {
    countriesToSearch = countryData[currentContinent] || [];
  } else {
    countriesToSearch = Object.values(countryData).flat();
  }

  let found = false;

  countriesToSearch.forEach((country) => {
    if (country.name.toLowerCase().includes(input)) {
      found = true;
      const card = document.createElement("div");
      card.className = "country-card";
      card.innerHTML = `
        <img src="${country.flag}" alt="${country.name}">
        <span>${country.name}</span>
      `;
      card.onclick = () => showFlagModal(country.flag, country.name);
      countriesDiv.appendChild(card);
    }
  });

  if (!found) {
    countriesDiv.innerHTML =
      '<p style="color:#999; font-style: italic;">No countries found matching your search.</p>';
  }
}

function showFlagModal(flagUrl, name) {
  const modal = document.getElementById("flag-modal");
  document.getElementById("modal-flag").src = flagUrl;
  document.getElementById("modal-map").src = ""; // Clear map
  document.getElementById("modal-map").style.display = "none"; // Hide map
  document.getElementById("modal-caption").textContent = name;
  modal.style.display = "flex";
}

function closeModal(event) {
  if (!event || event.target.id === "flag-modal") {
    document.getElementById("flag-modal").style.display = "none";

    // Reset modal map visibility for next time
    const modalMap = document.getElementById("modal-map");
    modalMap.style.display = "";
  }
}
