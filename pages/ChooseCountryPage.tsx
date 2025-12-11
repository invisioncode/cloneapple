import React from 'react';

interface Country {
  name: string;
  url: string;
  languages?: { name: string; url: string }[];
}

interface Region {
  title: string;
  countries: Country[];
}

const regions: Region[] = [
  {
    title: "Africa, Middle East, and India",
    countries: [
      { name: "Algeria", url: "#" },
      { name: "Angola", url: "#" },
      { name: "Armenia", url: "#" },
      { name: "Azerbaijan", url: "#" },
      { name: "Bahrain", url: "#" },
      { name: "Benin", url: "#" },
      { name: "Botswana", url: "#" },
      { name: "Burkina-Faso", url: "#" },
      { name: "Cameroon", url: "#" },
      { name: "Central African Republic", url: "#" },
      { name: "Chad", url: "#" },
      { name: "Congo (Brazzaville)", url: "#" },
      { name: "Congo (Kinshasa)", url: "#" },
      { name: "Côte d'Ivoire", url: "#" },
      { name: "Egypt", url: "#" },
      { name: "Equatorial Guinea", url: "#" },
      { name: "Gabon", url: "#" },
      { name: "Gambia", url: "#" },
      { name: "Georgia", url: "#" },
      { name: "Ghana", url: "#" },
      { name: "Guinea", url: "#" },
      { name: "Guinea-Bissau", url: "#" },
      { name: "India", url: "#" },
      { name: "Iraq", url: "#" },
      { name: "Israel", url: "#" },
      { name: "Jordan", url: "#" },
      { name: "Kenya", url: "#" },
      { name: "Kuwait", url: "#" },
      { name: "Liberia", url: "#" },
      { name: "Libya", url: "#" },
      { name: "Madagascar", url: "#" },
      { name: "Malawi", url: "#" },
      { name: "Mali", url: "#" },
      { name: "Mauritania", url: "#" },
      { name: "Mauritius", url: "#" },
      { name: "Morocco", url: "#" },
      { name: "Mozambique", url: "#" },
      { name: "Namibia", url: "#" },
      { name: "Niger", url: "#" },
      { name: "Nigeria", url: "#" },
      { name: "Oman", url: "#" },
      { name: "Qatar", url: "#" },
      { name: "Rwanda", url: "#" },
      { name: "Saudi Arabia", url: "#" },
      { name: "Senegal", url: "#" },
      { name: "Seychelles", url: "#" },
      { name: "Sierra Leone", url: "#" },
      { name: "South Africa", url: "#" },
      { name: "Tanzania", url: "#" },
      { name: "Togo", url: "#" },
      { name: "Tunisia", url: "#" },
      { name: "Türkiye", url: "#" },
      { name: "Uganda", url: "#" },
      { name: "United Arab Emirates", url: "#" },
      { name: "Yemen", url: "#" },
      { name: "Zambia", url: "#" },
      { name: "Zimbabwe", url: "#" },
    ]
  },
  {
    title: "Asia Pacific",
    countries: [
      { name: "Australia", url: "#" },
      { name: "Cambodia", url: "#" },
      { name: "China mainland", url: "#" },
      { name: "Hong Kong", url: "#", languages: [{ name: "English", url: "#" }, { name: "繁體中文", url: "#" }] },
      { name: "Indonesia", url: "#" },
      { name: "Japan", url: "#" },
      { name: "Kazakhstan", url: "#" },
      { name: "Korea", url: "#" },
      { name: "Kyrgyzstan", url: "#" },
      { name: "Laos", url: "#" },
      { name: "Macao", url: "#" },
      { name: "Malaysia", url: "#" },
      { name: "Maldives", url: "#" },
      { name: "Mongolia", url: "#" },
      { name: "Myanmar", url: "#" },
      { name: "Nepal", url: "#" },
      { name: "New Zealand", url: "#" },
      { name: "Philippines", url: "#" },
      { name: "Singapore", url: "#" },
      { name: "Sri Lanka", url: "#" },
      { name: "Taiwan", url: "#" },
      { name: "Tajikistan", url: "#" },
      { name: "Thailand", url: "#", languages: [{ name: "English", url: "#" }, { name: "ภาษาไทย", url: "#" }] },
      { name: "Turkmenistan", url: "#" },
      { name: "Uzbekistan", url: "#" },
      { name: "Vietnam", url: "#", languages: [{ name: "English", url: "#" }, { name: "Tiếng Việt", url: "#" }] },
    ]
  },
  {
    title: "Europe",
    countries: [
      { name: "Albania", url: "#" },
      { name: "Austria", url: "#" },
      { name: "Belarus", url: "#" },
      { name: "Belgium", url: "#", languages: [{ name: "Français", url: "#" }, { name: "Nederlands", url: "#" }] },
      { name: "Bosnia and Herzegovina", url: "#" },
      { name: "Bulgaria", url: "#" },
      { name: "Croatia", url: "#" },
      { name: "Cyprus", url: "#" },
      { name: "Czechia", url: "#" },
      { name: "Denmark", url: "#" },
      { name: "Estonia", url: "#" },
      { name: "Finland", url: "#" },
      { name: "France", url: "#" },
      { name: "Germany", url: "#" },
      { name: "Greece", url: "#" },
      { name: "Hungary", url: "#" },
      { name: "Iceland", url: "#" },
      { name: "Ireland", url: "#" },
      { name: "Italy", url: "#" },
      { name: "Kosovo", url: "#" },
      { name: "Latvia", url: "#" },
      { name: "Liechtenstein", url: "#" },
      { name: "Lithuania", url: "#" },
      { name: "Luxembourg", url: "#" },
      { name: "Malta", url: "#" },
      { name: "Moldova", url: "#" },
      { name: "Monaco", url: "#" },
      { name: "Montenegro", url: "#" },
      { name: "Netherlands", url: "#" },
      { name: "North Macedonia", url: "#" },
      { name: "Norway", url: "#" },
      { name: "Poland", url: "#" },
      { name: "Portugal", url: "#" },
      { name: "Romania", url: "#" },
      { name: "Russia", url: "#" },
      { name: "Serbia", url: "#" },
      { name: "Slovakia", url: "#" },
      { name: "Slovenia", url: "#" },
      { name: "Spain", url: "#" },
      { name: "Sweden", url: "#" },
      { name: "Switzerland", url: "#", languages: [{ name: "Deutsch", url: "#" }, { name: "Français", url: "#" }] },
      { name: "Ukraine", url: "#" },
      { name: "United Kingdom", url: "#" },
    ]
  },
  {
    title: "Latin America and the Caribbean",
    countries: [
      { name: "Anguilla", url: "#" },
      { name: "Antigua & Barbuda", url: "#" },
      { name: "Argentina", url: "#" },
      { name: "Bahamas", url: "#" },
      { name: "Barbados", url: "#" },
      { name: "Belize", url: "#" },
      { name: "Bermuda", url: "#" },
      { name: "Bolivia", url: "#" },
      { name: "Brazil", url: "#" },
      { name: "British Virgin Islands", url: "#" },
      { name: "Cayman Islands", url: "#" },
      { name: "Chile", url: "#" },
      { name: "Colombia", url: "#" },
      { name: "Costa Rica", url: "#" },
      { name: "Dominica", url: "#" },
      { name: "Dominican Republic", url: "#" },
      { name: "Ecuador", url: "#" },
      { name: "El Salvador", url: "#" },
      { name: "Grenada", url: "#" },
      { name: "Guatemala", url: "#" },
      { name: "Guyana", url: "#" },
      { name: "Haiti", url: "#" },
      { name: "Honduras", url: "#" },
      { name: "Jamaica", url: "#" },
      { name: "Mexico", url: "#" },
      { name: "Montserrat", url: "#" },
      { name: "Nicaragua", url: "#" },
      { name: "Panama", url: "#" },
      { name: "Paraguay", url: "#" },
      { name: "Peru", url: "#" },
      { name: "St. Kitts & Nevis", url: "#" },
      { name: "St. Lucia", url: "#" },
      { name: "St. Vincent & The Grenadines", url: "#" },
      { name: "Suriname", url: "#" },
      { name: "Turks & Caicos", url: "#" },
      { name: "Uruguay", url: "#" },
      { name: "Venezuela", url: "#" },
    ]
  },
  {
    title: "The United States, Canada, and Puerto Rico",
    countries: [
      { name: "Canada", url: "#", languages: [{ name: "English", url: "#" }, { name: "Français", url: "#" }] },
      { name: "Puerto Rico", url: "#", languages: [{ name: "English", url: "#" }, { name: "Español", url: "#" }] },
      { name: "United States", url: "#" },
    ]
  }
];

const ChooseCountryPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-[44px]">
      <div className="max-w-[980px] mx-auto px-6 py-20">
        <h1 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-12">
          Choose your country or region
        </h1>

        {regions.map((region, index) => (
          <section key={index} className="mb-20">
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1d1d1f] border-b border-gray-200 pb-4 mb-8">
              {region.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
              {region.countries.map((country, cIndex) => (
                <div key={cIndex} className="py-1">
                  {country.languages ? (
                    <div className="flex flex-wrap items-baseline gap-x-2">
                       <span className="text-[17px] font-semibold text-[#1d1d1f] mr-1">{country.name}</span>
                       <div className="flex flex-wrap gap-x-3 text-[14px]">
                          {country.languages.map((lang, lIndex) => (
                              <React.Fragment key={lIndex}>
                                  <a href={lang.url} className="text-[#1d1d1f] hover:text-[#0066cc] hover:underline">
                                      {lang.name}
                                  </a>
                                  {lIndex < country.languages!.length - 1 && <span className="text-gray-400">|</span>}
                              </React.Fragment>
                          ))}
                       </div>
                    </div>
                  ) : (
                    <a href={country.url} className="text-[17px] font-semibold text-[#1d1d1f] hover:text-[#0066cc] hover:underline flex items-baseline">
                      {country.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ChooseCountryPage;