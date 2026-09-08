export type Language = "ENG" | "PL" | "DE";

export interface ExperienceItemData {
  period: string;
  role: string;
  company: string;
  bullets: string[];
}

export interface Translation {
  nav: {
    openTo: string;
    work: string;
  };
  hero: {
    role: string;
    description: string;
  };
  buttons: {
    downloadCV: string;
    contactMe: string;
    myExperiences: string;
    hideExperiences: string;
  };
  connect: string;
  basedIn: string;
  location: string;
  experience: {
    title: string;
    subtitle: string;
    items: ExperienceItemData[];
  };
  coreStack: string;
  tools: string;
  scrollToExplore: string;
  components: {
    featuredWork: string;
    title: string;
    description: string;
    techStack: string;
    categories: {
      foundations: string;
      formsInputs: string;
      dataDisplay: string;
      feedbackOverlays: string;
    };
    componentNames: {
      card: string;
      button: string;
      header: string;
      text: string;
      input: string;
      select: string;
      switch: string;
      table: string;
      accordion: string;
      badge: string;
      modal: string;
      toast: string;
      skeleton: string;
    };
  };
  footer: {
    name: string;
    role: string;
  };
}

const experiencesENG: ExperienceItemData[] = [
  {
    period: "Since 09/2025",
    role: "Current Activities",
    company: "Zurich, Switzerland",
    bullets: [
      "Improving core Java and backend skills through intensive courses covering OOP, Stream API, Spring Boot REST APIs, SQL, testing, Maven and Docker",
      "Attending an intensive German course to enhance workplace communication",
    ],
  },
  {
    period: "05/2023 – 09/2025",
    role: "Software Developer",
    company: "Dreipol, Zurich, Switzerland",
    bullets: [
      "Developed and maintained web applications and component libraries using React, Angular and Next.js",
      "Designed reusable, configurable UI components with customizable sizes, colors and behaviors",
      "Built shared component libraries and collaborated with UX/UI teams",
      "Implemented client requirements, fixed bugs and conducted code reviews",
      "Ensured consistency across applications and maintained code quality",
    ],
  },
  {
    period: "10/2022 – 04/2023",
    role: "Junior Software Developer",
    company: "BNP Paribas, Warsaw, Poland",
    bullets: [
      "Developed new Angular components and fixed user issues in Agile teams",
      "Worked with Git and Jira for version control and task management",
      "Implemented user-requested fixes and new components",
      "Improved application appearance and performance",
      "Collaborated with backend developers, UX designers and product owners",
    ],
  },
  {
    period: "03/2021 – 09/2022",
    role: "Securities Specialist (AO)",
    company: "UBS Business Solutions, Wroclaw, Poland",
    bullets: [
      "Handled booking and settlement of securities trades",
      "Coordinated instructions with international counterparties",
      "Monitored transactions and resolved settlement exceptions across global markets",
    ],
  },
  {
    period: "11/2019 – 03/2021",
    role: "Banking Operations Specialist II",
    company: "Credit Suisse, Wroclaw, Poland",
    bullets: [
      "Processed and validated client settlement orders",
      "Transformed unstructured requests into standardized messages",
      "Resolved settlement exceptions and prepared custody instructions",
      "Monitored escalated settlement failures",
    ],
  },
  {
    period: "09/2018 – 12/2019",
    role: "IT Service Desk Specialist",
    company: "Hemmersbach, Wroclaw, Poland",
    bullets: [
      "Answered employee support calls and emails",
      "Created and monitored tickets in the ticketing system",
      "Coordinated remote engineering support",
      "Communicated with engineers to resolve issues within SLA timelines",
    ],
  },
];

const experiencesPL: ExperienceItemData[] = [
  {
    period: "Od 09/2025",
    role: "Obecne zajęcia",
    company: "Zurych, Szwajcaria",
    bullets: [
      "Doskonalę podstawy Javy i umiejętności backendowych poprzez intensywne kursy obejmujące OOP, Stream API, Spring Boot REST API, SQL, testowanie, Maven i Docker",
      "Uczęszczam na intensywny kurs języka niemieckiego, aby poprawić komunikację w miejscu pracy",
    ],
  },
  {
    period: "05/2023 – 09/2025",
    role: "Programista",
    company: "Dreipol, Zurych, Szwajcaria",
    bullets: [
      "Tworzyłem i utrzymywałem aplikacje webowe i biblioteki komponentów używając React, Angular i Next.js",
      "Projektowałem wielokrotnego użytku, konfigurowalne komponenty UI z możliwością dostosowania rozmiarów, kolorów i zachowań",
      "Budowałem współdzielone biblioteki komponentów i współpracowałem z zespołami UX/UI",
      "Wdrażałem wymagania klientów, naprawiałem błędy i przeprowadzałem przeglądy kodu",
      "Zapewniałem spójność między aplikacjami i utrzymywał jakość kodu",
    ],
  },
  {
    period: "10/2022 – 04/2023",
    role: "Młodszy Programista",
    company: "BNP Paribas, Warszawa, Polska",
    bullets: [
      "Tworzyłem nowe komponenty Angular i naprawiałem problemy użytkowników w zespołach Agile",
      "Pracowałem z Git i Jira do kontroli wersji i zarządzania zadaniami",
      "Wdrażałem poprawki i nowe komponenty zgłaszane przez użytkowników",
      "Poprawiałem wygląd i wydajność aplikacji",
      "Współpracowałem z programistami backend, projektantami UX i właścicielami produktu",
    ],
  },
  {
    period: "03/2021 – 09/2022",
    role: "Specjalista ds. Papierów Wartościowych (AO)",
    company: "UBS Business Solutions, Wrocław, Polska",
    bullets: [
      "Obsługiwałem rezerwację i rozliczenie transakcji papierami wartościowymi",
      "Koordynowałem instrukcje z międzynarodowymi kontrahentami",
      "Monitorowałem transakcje i rozwiązywałem wyjątki rozliczeniowe na rynkach globalnych",
    ],
  },
  {
    period: "11/2019 – 03/2021",
    role: "Specjalista ds. Operacji Bankowych II",
    company: "Credit Suisse, Wrocław, Polska",
    bullets: [
      "Przetwarzałem i weryfikowałem zlecenia rozliczeniowe klientów",
      "Przekształcałem nieustrukturyzowane żądania w ustandaryzowane komunikaty",
      "Rozwiązywałem wyjątki rozliczeniowe i przygotowywałem instrukcje powiernicze",
      "Monitorowałem eskalowane błędy rozliczeniowe",
    ],
  },
  {
    period: "09/2018 – 12/2019",
    role: "Specjalista Service Desk IT",
    company: "Hemmersbach, Wrocław, Polska",
    bullets: [
      "Odbierałem połączenia i e-maile wsparcia od pracowników",
      "Tworzyłem i monitorowałem zgłoszenia w systemie ticketowym",
      "Koordynowałem zdalne wsparcie inżynieryjne",
      "Komunikowałem się z inżynierami w celu rozwiązywania problemów w ramach SLA",
    ],
  },
];

const experiencesDE: ExperienceItemData[] = [
  {
    period: "Seit 09/2025",
    role: "Aktuelle Tätigkeiten",
    company: "Zürich, Schweiz",
    bullets: [
      "Verbessere Java- und Backend-Kenntnisse durch intensive Kurse zu OOP, Stream API, Spring Boot REST APIs, SQL, Testing, Maven und Docker",
      "Besuche einen intensiven Deutschkurs zur Verbesserung der Kommunikation am Arbeitsplatz",
    ],
  },
  {
    period: "05/2023 – 09/2025",
    role: "Softwareentwickler",
    company: "Dreipol, Zürich, Schweiz",
    bullets: [
      "Entwickelte und pflegte Webanwendungen und Komponentenbibliotheken mit React, Angular und Next.js",
      "Entwarf wiederverwendbare, konfigurierbare UI-Komponenten mit anpassbaren Grössen, Farben und Verhaltensweisen",
      "Baute gemeinsame Komponentenbibliotheken auf und arbeitete mit UX/UI-Teams zusammen",
      "Setzte Kundenanforderungen um, behob Fehler und führte Code-Reviews durch",
      "Sicherte Konsistenz über Anwendungen hinweg und pflegte die Codequalität",
    ],
  },
  {
    period: "10/2022 – 04/2023",
    role: "Junior Softwareentwickler",
    company: "BNP Paribas, Warschau, Polen",
    bullets: [
      "Entwickelte neue Angular-Komponenten und behob Benutzerprobleme in Agile-Teams",
      "Arbeitete mit Git und Jira für Versionskontrolle und Aufgabenverwaltung",
      "Setzte von Benutzern angeforderte Korrekturen und neue Komponenten um",
      "Verbesserte Erscheinungsbild und Leistung der Anwendung",
      "Arbeitete mit Backend-Entwicklern, UX-Designern und Product Ownern zusammen",
    ],
  },
  {
    period: "03/2021 – 09/2022",
    role: "Wertpapierspezialist (AO)",
    company: "UBS Business Solutions, Breslau, Polen",
    bullets: [
      "Bearbeitete Buchung und Abwicklung von Wertpapiertransaktionen",
      "Koordinierte Anweisungen mit internationalen counterparties",
      "Überwachte Transaktionen und löste Abwicklungsausnahmen auf globalen Märkten",
    ],
  },
  {
    period: "11/2019 – 03/2021",
    role: "Bankbetriebsspezialist II",
    company: "Credit Suisse, Breslau, Polen",
    bullets: [
      "Verarbeitete und validierte Abwicklungsanträge von Kunden",
      "Wandelte unstrukturierte Anfragen in standardisierte Nachrichten um",
      "Löste Abwicklungsausnahmen und erstellte Verwahranweisungen",
      "Überwachte eskalierte Abwicklungsfehler",
    ],
  },
  {
    period: "09/2018 – 12/2019",
    role: "IT Service Desk Spezialist",
    company: "Hemmersbach, Breslau, Polen",
    bullets: [
      "Beantwortete Support-Anrufe und E-Mails von Mitarbeitern",
      "Erstellte und überwachte Tickets im Ticket-System",
      "Koordinierte Remote-Support durch Ingenieure",
      "Kommunizierte mit Ingenieuren zur Lösung von Problemen innerhalb der SLA-Zeiten",
    ],
  },
];

export const translations: Record<Language, Translation> = {
  ENG: {
    nav: { openTo: "Open to", work: "Work" },
    hero: {
      role: "FRONTEND ENGINEER",
      description:
        "I am a Frontend Engineer with experience in building scalable web applications and reusable UI component libraries. I specialize in React, Next.js, and Angular. I gained my experience working in international Agile teams for the Swiss agency Dreipol and in the banking sector (BNP Paribas).",
    },
    buttons: {
      downloadCV: "Download CV",
      contactMe: "Contact me",
      myExperiences: "My Experiences",
      hideExperiences: "Hide Experiences",
    },
    connect: "Connect",
    basedIn: "Based in",
    location: "Zurich, Switzerland",
    experience: {
      title: "Professional experience",
      subtitle: "Frontend engineering, banking and security operations",
      items: experiencesENG,
    },
    coreStack: "Core stack",
    tools: "Tools",
    scrollToExplore: "Scroll to explore",
    components: {
      featuredWork: "FEATURED WORK",
      title: "Reusable UI Components",
      description:
        "A configurable component library built with React, TypeScript, Tailwind CSS and SCSS, focused on consistency, accessibility and speed.",
      techStack: "React",
      categories: {
        foundations: "Foundations",
        formsInputs: "Forms & Inputs",
        dataDisplay: "Data Display",
        feedbackOverlays: "Feedback & Overlays",
      },
      componentNames: {
        card: "Card",
        button: "Button",
        header: "Header",
        text: "Text",
        input: "Input",
        select: "Select",
        switch: "Switch",
        table: "Data Table",
        accordion: "Accordion",
        badge: "Badge",
        modal: "Modal",
        toast: "Toast",
        skeleton: "Skeleton",
      },
    },
    footer: {
      name: "Daniel Niewiarowski",
      role: "Frontend Engineer · Zurich, Switzerland",
    },
  },
  PL: {
    nav: { openTo: "Otwarty", work: "na pracę" },
    hero: {
      role: "INŻYNIER FRONTEND",
      description:
        "Jestem inżynierem frontend z doświadczeniem w budowaniu skalowalnych aplikacji webowych i bibliotek komponentów wielokrotnego użytku. Specjalizuję się w React, Next.js i Angular. Doświadczenie zdobyłem pracując w międzynarodowych zespołach Agile dla szwajcarskiej agencji Dreipol oraz w sektorze bankowym (BNP Paribas).",
    },
    buttons: {
      downloadCV: "Pobierz CV",
      contactMe: "Kontakt",
      myExperiences: "Moje doświadczenie",
      hideExperiences: "Ukryj doświadczenie",
    },
    connect: "Kontakt",
    basedIn: "Lokalizacja",
    location: "Zurych, Szwajcaria",
    experience: {
      title: "Doświadczenie zawodowe",
      subtitle: "Inżynieria frontend, bankowość i operacje bezpieczeństwa",
      items: experiencesPL,
    },
    coreStack: "Główne technologie",
    tools: "Narzędzia",
    scrollToExplore: "Przewiń aby zobaczyć",
    components: {
      featuredWork: "REALIZACJE",
      title: "Komponenty UI wielokrotnego użytku",
      description:
        "Konfigurowalna biblioteka komponentów zbudowana z React, TypeScript, Tailwind CSS i SCSS, skupiona na spójności, dostępności i szybkości.",
      techStack: "React",
      categories: {
        foundations: "Podstawy",
        formsInputs: "Formularze i pola",
        dataDisplay: "Wyświetlanie danych",
        feedbackOverlays: "Feedback i nakładki",
      },
      componentNames: {
        card: "Karta",
        button: "Przycisk",
        header: "Nagłówek",
        text: "Tekst",
        input: "Pole tekstowe",
        select: "Lista rozwijana",
        switch: "Przełącznik",
        table: "Tabela danych",
        accordion: "Akordeon",
        badge: "Odznaka",
        modal: "Okno modalne",
        toast: "Powiadomienie",
        skeleton: "Szkielet",
      },
    },
    footer: {
      name: "Daniel Niewiarowski",
      role: "Inżynier Frontend · Zurych, Szwajcaria",
    },
  },
  DE: {
    nav: { openTo: "Offen", work: "für Arbeit" },
    hero: {
      role: "FRONTEND-ENTWICKLER",
      description:
        "Ich bin Frontend-Entwickler mit Erfahrung im Aufbau skalierbarer Webanwendungen und wiederverwendbarer UI-Komponentenbibliotheken. Ich spezialisiere mich auf React, Next.js und Angular. Meine Erfahrung sammelte ich in internationalen Agile-Teams für die Schweizer Agentur Dreipol und im Bankensektor (BNP Paribas).",
    },
    buttons: {
      downloadCV: "CV herunterladen",
      contactMe: "Kontakt",
      myExperiences: "Meine Erfahrungen",
      hideExperiences: "Erfahrungen ausblenden",
    },
    connect: "Verbinden",
    basedIn: "Ansässig in",
    location: "Zürich, Schweiz",
    experience: {
      title: "Berufserfahrung",
      subtitle: "Frontend-Entwicklung, Bankwesen und Sicherheitsoperationen",
      items: experiencesDE,
    },
    coreStack: "Kern-Stack",
    tools: "Werkzeuge",
    scrollToExplore: "Scrollen zum Entdecken",
    components: {
      featuredWork: "PORTFOLIO",
      title: "Wiederverwendbare UI-Komponenten",
      description:
        "Eine konfigurierbare Komponentenbibliothek, gebaut mit React, TypeScript, Tailwind CSS und SCSS, fokussiert auf Konsistenz, Zugänglichkeit und Geschwindigkeit.",
      techStack: "React",
      categories: {
        foundations: "Grundlagen",
        formsInputs: "Formulare & Eingaben",
        dataDisplay: "Datenanzeige",
        feedbackOverlays: "Feedback & Overlays",
      },
      componentNames: {
        card: "Karte",
        button: "Schaltfläche",
        header: "Kopfzeile",
        text: "Text",
        input: "Eingabefeld",
        select: "Dropdown",
        switch: "Schalter",
        table: "Datentabelle",
        accordion: "Akkordeon",
        badge: "Abzeichen",
        modal: "Modal",
        toast: "Benachrichtigung",
        skeleton: "Skeleton",
      },
    },
    footer: {
      name: "Daniel Niewiarowski",
      role: "Frontend-Entwickler · Zürich, Schweiz",
    },
  },
};
