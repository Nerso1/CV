const translations = {
  en: {
    "skip-link":             "Skip to content",
    "job-title":             "Junior .NET Developer",
    "contact.title":         "Contact",
    "personal.title":        "Personal Details",
    "personal.dob":          "Date of birth",
    "skills.title":          "Skills",
    "summary.title":         "Professional Summary",
    "summary.text":          "Full-stack developer (ASP.NET + Angular) with a strong analytical background. I have unique experience stemming from years of technical support for ERP systems, providing me with a thorough understanding of the software lifecycle and relational database architecture (SQL). Currently, I focus on designing and implementing scalable functionalities, with a strong emphasis on code quality and testability.",
    "experience.title":      "Professional Experience",
    "table.role":            "Role",
    "table.company":         "Company",
    "table.period":          "Period",
    "table.description":     "Description",
    "exp.row1.role":         "Junior Developer",
    "exp.row1.desc":         "Creating Comarch ERP XL Web software on the backend using ASP.NET, as well as on the frontend using Angular. Participation in the design and implementation of new features, as well as in the maintenance of existing system modules.",
    "exp.row2.role":         "Technical Support Consultant",
    "exp.row2.desc":         "Support and maintenance of Comarch ERP XL system for business clients. Diagnosing and resolving issues related to administration, logistics, and core system.",
    "present":               "present",
    "education.title":       "Education",
    "edu.col.institution":   "Institution",
    "edu.col.field":         "Field of study",
    "edu.row1.institution":  "AGH University of Science and Technology",
    "edu.row1.field":        "IT Education",
    "portfolio.title":       "Portfolio",
    "portfolio.item1.desc":  "Lightweight utility for managing Comarch ERP XL installations",
    "portfolio.item2.desc":  "Program helps to organize old files in folder containing a lot of files, for example your browser's Download folder",
    "portfolio.item3.desc":  "A console application built with .NET 6.0 that creates dummy files with customizable properties for testing purposes",
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
    "summary.text":          "Programista Full-Stack (ASP.NET + Angular) z silnym zapleczem analitycznym. Posiadam unikalne doświadczenie płynące z wieloletniego wsparcia technicznego systemów ERP, dzięki czemu doskonale rozumiem cykl życia oprogramowania oraz architekturę relacyjnych baz danych (SQL). Obecnie skupiam się na projektowaniu i implementacji skalowalnych funkcjonalności, kładąc duży nacisk na jakość kodu i testowalność",
    "experience.title":      "Doświadczenie zawodowe",
    "table.role":            "Stanowisko",
    "table.company":         "Firma",
    "table.period":          "Okres",
    "table.description":     "Opis",
    "exp.row1.role":         "Junior Developer",
    "exp.row1.desc":         "Tworzenie oprogramowania Comarch ERP XL Web po stronie backendu w ASP.NET, a także po stronie frontendu w Angular. Udział w projektowaniu i implementacji nowych funkcjonalności, a także w utrzymaniu istniejących modułów systemu.",
    "exp.row2.role":         "Konsultant asysty technicznej",
    "exp.row2.desc":         "Wsparcie i utrzymanie systemu Comarch ERP XL dla klientów biznesowych. Diagnozowanie i rozwiązywanie problemów z obszaru administracji, logistyki i core systemu.",
    "present":               "teraz",
    "education.title":       "Edukacja",
    "edu.col.institution":   "Uczelnia",
    "edu.col.field":         "Kierunek",
    "edu.row1.institution":  "AGH Akademia Górniczo-Hutnicza w Krakowie",
    "edu.row1.field":        "Edukacja informatyczna",
    "portfolio.title":       "Portfolio",
    "portfolio.item1.desc":  "lekkie narzędzie do zarządzania instalacjami Comarch ERP XL.",
    "portfolio.item2.desc":  "program pomaga uporządkować stare pliki w folderach zawierających wiele plików, na przykład w folderze Pobrane.",
    "portfolio.item3.desc":  "Aplikacja konsolowa stworzona w środowisku .NET 6.0, która tworzy pliki fikcyjnych z konfigurowalnymi właściwościami w celach testowych",
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
