const translations = {
  en: {
    "skip-link":             "Skip to content",
    "job-title":             "Junior .NET Developer",
    "contact.title":         "Contact",
    "personal.title":        "Personal Details",
    "personal.dob":          "Date of birth",
    "skills.title":          "Skills",
    "summary.title":         "Professional Summary",
    "summary.text":          "TODO: write in English",
    "experience.title":      "Professional Experience",
    "table.role":            "Role",
    "table.company":         "Company",
    "table.period":          "Period",
    "table.description":     "Description",
    "exp.row1.role":         "Junior Developer",
    "exp.row1.desc":         "TODO",
    "exp.row2.role":         "Technical Support Consultant",
    "exp.row2.desc":         "TODO",
    "present":               "present",
    "education.title":       "Education",
    "edu.col.institution":   "Institution",
    "edu.col.field":         "Field of study",
    "edu.row1.institution":  "TODO",
    "edu.row1.field":        "TODO",
    "portfolio.title":       "Portfolio",
    "portfolio.item1.desc":  "TODO",
    "rodo.text":             "I consent to the processing of my personal data included in this CV for the purposes of recruitment in accordance with the General Data Protection Regulation (GDPR) of 27 April 2016.",
  },
  pl: {
    "skip-link":             "Przejdź do treści",
    "job-title":             "Junior Programista .NET",
    "contact.title":         "Kontakt",
    "personal.title":        "Dane osobowe",
    "personal.dob":          "Data urodzenia",
    "skills.title":          "Umiejętności",
    "summary.title":         "Profil zawodowy",
    "summary.text":          "TODO: napisać po polsku",
    "experience.title":      "Doświadczenie zawodowe",
    "table.role":            "Stanowisko",
    "table.company":         "Firma",
    "table.period":          "Okres",
    "table.description":     "Opis",
    "exp.row1.role":         "Junior Developer",
    "exp.row1.desc":         "TODO",
    "exp.row2.role":         "Konsultant asysty technicznej",
    "exp.row2.desc":         "TODO",
    "present":               "teraz",
    "education.title":       "Edukacja",
    "edu.col.institution":   "Uczelnia",
    "edu.col.field":         "Kierunek",
    "edu.row1.institution":  "TODO",
    "edu.row1.field":        "TODO",
    "portfolio.title":       "Portfolio",
    "portfolio.item1.desc":  "TODO",
    "rodo.text":             "Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w niniejszym CV dla potrzeb niezbędnych do realizacji procesu rekrutacji zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO).",
  },
};

function setLanguage(lang) {
  if (!translations[lang]) lang = "en";

  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  const btnLang = document.getElementById("btn-lang");
  if (btnLang) btnLang.setAttribute("aria-label", lang === "en" ? "Switch to Polish" : "Przełącz na angielski");

  document.querySelector(".cv-wrapper").classList.add("i18n-ready");
}

function toggleLanguage() {
  const current = document.documentElement.lang;
  setLanguage(current === "en" ? "pl" : "en");
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = document.documentElement.lang || "en";
  setLanguage(lang);
  document.getElementById("btn-lang").addEventListener("click", toggleLanguage);
});
