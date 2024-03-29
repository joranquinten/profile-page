const meta = {
  title: "Joran Quinten - Agile Interaction Developer",
  description:
    "Met meer dan 10 jaar ervaring in het ontwikkelen van web oplossingen binnen verschillende rollen, heb ik een brede achtergrond in web ontwikkeling. Daardoor begrijp ik de behoeften van de verschillende stakeholders, van ontwikkelaar tot eindgebruiker. Mijn vermogen om onderliggende problemen naar boven te halen maken me geschikt voor het maken van grondige analyses. De kennis die ik heb opgedaan in het bouwen van toepassingen gebruik ik voor toepasbare, praktische aanbevelingen.",
  "google-site-verification": "",
};

const about = {
  title: "Joran Quinten",
  subtitle: "Interaction developer",
  tags: ["Leergierige expert", "Creatieve durfal", "Bevlogen adviseur"],
  picture: "../static/pictures/joran-quinten.jpg",
  bio:
    "<p>Ik ben een <strong>full stack webdeveloper</strong> in hart en nieren! Ik heb een brede interesse op het gebied van design en webontwikkeling en ik werk het liefst in een team waar ik snel concepten vertaal naar functionele onderdelen.</p><p>Collega's en mede-ontwikkelaars geven mij inspiratie en maken me enthousiast over de technieken die steeds meer mogelijkheden geven om bezoekers te verrassen, betrekken en betoveren. De eindgebruiker en context stel ik centraal bij het ontwikkelen van oplossingen.</p><p>Ik zorg voor interacties tussen gebruiker en systeem. Of het nu een presentatie website, webapplicatie of mobiele webapp is: geen probleem!</p>",
  quote:
    "The only way of discovering the limits of the possible is to venture a little way past them into the impossible.<br/>— Arthur C. Clarke",
};

const projects = [
  {
    title: "Jumbo inspiration",
    description:
      "<p>Jaarlijks voert Jumbo verschillende (soorten) campagnes, die in eigen beheer worden opgezet en gepubliceerd. Om de verschillende pagina's en flows te kunnen ondersteunen, bouwt het team aan een platform, met als doel binnen één dag een nieuwe campagne te kunnen lanceren, zonder dat daar technische ondersteuning voor nodig is. De content van de campagnes wordt beheerd in Adobe Experience Manager (AEM). Voor het beheren van formulieren en flows is een eigen platform -CloudAdmin- ontwikkeld. De pagina's worden opgebouwd uit Vue componenten, met aandacht voor SEO en accessibility.</p>",
  },
  {
    title: "Jumbo Kompas",
    description:
      "<p>Om een omnichannel experience te kunnen borgen, werkt Jumbo aan een eigen design system, Kompas. Kompas bestaat uit de documentatie en componenten die geschikt zijn voor zowel web als app toepassingen. Het doel is om communicatie tussen design en development te kunnen vergemakkelijken en sneller user interfaces op te kunnen bouwen met de standaard componenten binnen de Jumbo branding en styling.</p>",
  },
  {
    title: "BAAS: Take control of your campaign",
    description:
      "<p>Het softwaresysteem BAAS heeft meerdere rollen, maar de belangrijkste is tonen van marketing data uit verschillende bronnen en overzichtelijk presenteren aan de gebruiker in de vorm van dashboards.</p><p>Hiervoor worden iedere nacht meer dan 15 verschillende databronnen aangesproken met honderden verschillende meetgegevens. Deze worden met behulp van een pipeline geïmporteerd en genormaliseerd, zodat de gegevens uit verschillende databronnen vergeleken kunnen worden over een bepaalde eenheid. Deze tool bevat de belangrijkste data binnen de organisatie en wordt door vrijwel alle medewerkers dagelijks geraadpleegd.</p><p>Het team bestaat uit specialisten op gebied van backend of frontend en ontwikkelt nieuwe features in een Kanban werkwijze. Hierbij beschikken we over veel autonomie om de beste oplossingen voor de technische uitdagingen te kunnen implementeren.</p>",
  },
  {
    title: "Doen Vandaag",
    description:
      "<p>Dit is mijn eigen project: ik heb een applicatie ontwikkeld om ouders met jonge kinderen aan te sporen om op een verrassende manier te stimuleren om leerzaam, leuk en actief bezig te zijn met de ontwikkeling van kinderen. De oplossing bestaat uit een webapplicatie en een voice app beschikbaar op Google Assistant.</p><p>Doen Vandaag biedt me een platform om met nieuwe technieken te experimenteren binnen een onderwerp voor voor mij relevant is.</p>",
  },
  {
    title: "ProRail: Spoordata informatieportaal",
    description:
      "<p>Het informatieportaal heeft heeft als doel te fungeren als hét publicatiemechanisme voor de breed uiteenlopende typen data van ProRail. Deze gegevens worden beschikbaar gesteld aan medewerkers van ProRail, maar ook aan (onder)aannemers. De doelgroep is heel divers en heeft uiteenlopende behoeften. Het portaal biedt mogelijkheid tot het maken van een brede analyse, maar ook het vervullen van een specifieke informatievraag, waarbij de informatie uit alle verschillende bronnen binnen één platform wordt gepresenteerd aan de gebruiker.</p><p>Als de enige frontend ontwikkelaar binnen het Scrum development team ben ik verantwoordelijk voor de realisatie van het informatieportaal. Daarbij werk ik nauw samen met de UX designer om snel tot praktische oplossingen te komen.</p>",
  },
  {
    title: "Ministerie van Defensie: Advance Passenger Information (API-3)",
    description:
      "<p>Het API-systeem wordt gebruikt door de Koninklijke Marechaussee om passagiersgegevens te kunnen vergelijken met watchlists en profielen. Daarbij ondersteunt het systeem het grenscontroleproces voor lucht -en zeehaven. De belangrijkste eigenschap van het systeem is dat het snel en actuele informatie laat zien.</p><p>Als ontwikkelaar binnen het Scrum development team was ik verantwoordelijk voor het doorvoeren van verbeteringen aan het systeem en het opzetten en implementeren van een controleerbaar bouwproces.</p><p>Daarnaast ben ik verantwoordelijk geweest voor het formuleren van een afdelingsbrede standaard werkwijze op gebied van front end.</p>",
  },
  {
    title: "Orangebag.nl",
    description:
      "<p>Voor webshop Orangebag.nl was ik het vaste aanspreekpunt binnen The Cre8ion.Lab. Het hele bestelproces (van webshop tot magazijn en boekhouding) loopt via een systeem wat door The Cre8ion.Lab specifiek voor Orangebag.nl ontwikkeld is. Door mijn kennis van het systeem en de wensen vanuit de markt en de klant, kom ik snel op praktische oplossingen. Gebruikersgemak staat hier voorop: ieder proces wat in de backoffice vereenvoudigd kan worden, vergroot het aantal orders dat verwerkt kan worden.</p><p>Het laatste project voor wat ik voor Orangebag geleid heb, was het uitrollen van een mobiele webshop, op basis van de bestaande (desktop)-variant. Bij dit project heb ik de begeleiding op me genomen en dit heeft er voor gezorgd dat het productaanbod van Orangebag.nl op ieder device toegankelijk is voor de klant.</p>",
  },
  {
    title: "Fair Play Casino: Gold rush",
    description:
      "<p>In opdracht van Crossmarks en The Cre8ion.Lab heb ik voor Fair Play Casino een web-applicatie gerealiseerd, waarmee prijstrekkingen binnen de casino's kunnen worden weergegeven. Uitdaging was het trekken en tonen van een prijswinnaar op het gewenste moment. Hierbij werd een selectie gemaakt uit alleen geldige tickets.</p><p>Daarnaast heb ik aan een platform ontwikkeld waarbij binnen de casino's via een Android–device verschillende soorten tickets kunnen worden uitgegeven en gecontroleerd. Hierbij werd via RESTful API's gecommuniceerd tussen de verschillende devices en de centrale database.</p>",
  },
  {
    title: "Overige",
    description:
      "<p>Mijn werkzaamheden binnen The Cre8ion.Lab waren heel divers. Ik heb gewerkt aan verschillende creatieve festival websites, zoals die van <strong>Festival Mundial</strong>, <strong>Smeerboel</strong>, <strong>Soenda</strong>, <strong>Extrema Outdoor</strong>, <strong>Solar</strong> en <strong>Paaspop</strong>, waarbij het mijn verantwoordelijkheid was om een bijzondere interface neer te zetten.</p><p>Daarnaast heb ik verschillende webshops gerealiseerd, waarbij de nadruk ligt op het neerzetten van een heldere, drempelvrije online koopervaring.</p><p>Ook heb ik meegewerkt aan websites, portals of applicaties voor organisaties als <strong>Dolfinarium</strong>, <strong>Walibi</strong>, <strong>NH Bioscopen</strong>, <strong>Koninklijke Beuk</strong> en <strong>Brand Loyalty</strong>.</p><p>Een bijzondere samenwerking was die tussen een select groepje collega's van <strong>The Cre8ion.Lab</strong> en <strong>studio HEYHEYHEY</strong>. Hierbij hebben we gewerkt aan de installatie <strong>Melvin the Magical Mixed Media Machine</strong>. Melvin is een Rube Goldberg-machine, die voor de Dutch Design Week in 2011 gebouwd is.</p><p>De kettingreactie is modulair opgezet, en tussen de fysieke handelingen waren ook een aantal digitale acties verwerkt, zoals het maken van een foto en deze direct via sociale media verspreiden. Op deze manier kreeg Melvin ook een online persoonlijkheid.</p>",
  },
];

const experience = [
  {
    name: "Jumbo",
    van: "2019-04-01",
    tot: null,
    description:
      "<p>Binnen de Jumbo Tech Campus (JTC) ben ik als senior frontend ontwikkelaar werkzaam voor het Jumbo Content Team. Binnen het Jumbo Content Team wordt het platform ontwikkeld waarmee de online promoties en campagnes op een laagdrempelige manier kunnen worden gepubliceerd. Mijn taak is het ontwikkelen van componenten die worden geïntegreerd in het configuratieplatform of in de campagnepagina's zelf.</p><p>Ik ben als één van de 'curators' betrokken bij de ontwikkeling en beheer van de <em>component library</em>. Deze library is een verzameling aan componenten die binnen het JTC door alle teams worden gebruikt, waardoor een uniforme customer experience wordt geborgd. Tot slot ben ik betrokken bij het aantrekken en begeleiden van studenten om zo de samenwerking tussen opleidingen en werkveld te faciliteren.</p>",
  },
  {
    name: "Greenhouse Group",
    van: "2017-11-01",
    tot: "2019-03-31",
    description:
      "<p>Als senior frontend ontwikkelaar ben ik verantwoordelijk voor de ontwikkeling van het dashboard voor een rapportage tool (BAAS). Deze tool wordt door marketeers van Greenhouse Group gebruikt om alle campagne data in één oogopslag te kunnen beoordelen en waar nodig bijsturen. Als UX designer werk ik aan het ontwerpen van verbeteringen op dit systeem.<p><p>Daarnaast ben ik als coach betrokken bij Greenhouse Group Labs, een afdeling waar met de nieuwste technieken geëxperimenteerd wordt, met oog op praktische toepassingen.</p>",
  },
  {
    name: "Capgemini",
    van: "2015-10-01",
    tot: "2017-11-01",
    description:
      "<p>Binnen mijn rol als consultant voor Capgemini heb ik aan verschillende soorten projecten gewerkt. Ik overleg en adviseer klanten en collega's over in te zetten werkwijzen en technieken. Als frontend ontwikkelaar bevind ik me op het raakvlak van vormgeving, techniek en interactie. Ik ben betrokken bij het ontwikkelen van prototypen, maar ook bij het realiseren en opleveren van iteraties tijdens sprints.</p>",
  },
  {
    name: "The Cre8ion.Lab",
    van: "2009-06-01",
    tot: "2015-10-01",
    description:
      "<p>Tijdens mijn werkzaamheden voor The Cre8ion.Lab was ik, naast mijn reguliere werkzaamheden als ontwikkelaar, een klankbord en sparringspartner voor onze projectmanagers en stuur ik externe partijen aan.</p>",
  },
];
const education = {
  title: "Opleiding & Certificaten",
  items: [
    {
      key: "1",
      date: "November 2018",
      description: "Fullstack Advanced React and GraphQL door Wes Bos",
    },
    {
      key: "2",
      date: "September 2018",
      description: "Learn Node door Wes Bos",
    },
    {
      key: "3",
      date: "Maart 2018",
      description: "UX Fundamentals door Krispian Emert",
    },
    {
      key: "4",
      date: "November 2017",
      description: "React For Beginners door Wes Bos",
    },
    {
      key: "5",
      date: "September 2016",
      description: "Professional Scrum Master I",
    },
    {
      key: "6",
      date: "Februari 2010",
      description:
        "Bachelor of Information & Communication Technology, ICT Media Design, Fontys Hogescholen",
    },
  ],
};

const topics = {
  description: "<p>Met onderstaande onderwerpen kan ik uit de voeten:</p>",
  list: [
    { name: "A11y", level: "normal", type: "concepts" },
    { name: "AngularJs (1.x)", level: "good", type: "frameworks" },
    { name: "Ant Design", level: "normal", type: "frameworks" },
    { name: "AWS", level: "normal", type: "platforms" },
    { name: "Bootstrap", level: "good", type: "frameworks" },
    { name: "CSS", level: "good", type: "languages" },
    { name: "ES6", level: "good", type: "languages" },
    { name: "Express", level: "good", type: "languages" },
    { name: "Figma", level: "normal", type: "platforms" },
    { name: "Foundation", level: "good", type: "frameworks" },
    { name: "Gatsby", level: "normal", type: "frameworks" },
    { name: "Git", level: "normal", type: "platforms" },
    { name: "HTML", level: "good", type: "languages" },
    { name: "JavaScript", level: "good", type: "languages" },
    { name: "Jest", level: "normal", type: "frameworks" },
    { name: "Kanban", level: "good", type: "methodologies" },
    { name: "Learning", level: "good", type: "other" },
    { name: "Mentoring/Coaching", level: "good", type: "other" },
    { name: "Netlify", level: "average", type: "platforms" },
    { name: "NextJS", level: "normal", type: "frameworks" },
    { name: "NodeJS", level: "normal", type: "languages" },
    { name: "Now", level: "average", type: "platforms" },
    { name: "Presenteren", level: "good", type: "other" },
    { name: "Progressive enhancement", level: "normal", type: "concepts" },
    { name: "ReactJs", level: "good", type: "frameworks" },
    { name: "Responsive webdesign", level: "normal", type: "concepts" },
    { name: "Sass", level: "normal", type: "frameworks" },
    { name: "Scrum", level: "good", type: "methodologies" },
    { name: "SEO", level: "normal", type: "concepts" },
    { name: "Service workers", level: "enthusiast", type: "concepts" },
    { name: "Sketch", level: "above average", type: "platforms" },
    { name: "Storybook", level: "normal", type: "frameworks" },
    { name: "UX", level: "enthusiast", type: "other" },
    { name: "VueJS", level: "good", type: "frameworks" },
    { name: "Webpack", level: "normal", type: "frameworks" },
  ],
};

const media = {
  description:
    "<p>Ik volg de volgende bronnen met regelmaat om op de hoogte te blijven van technieken en mogelijkheden:</p>",
  list: [
    { name: "Syntax.fm", type: "podcast" },
    { name: "Undefined", type: "podcast" },
    { name: "JavaScript Weekly", type: "newsletter" },
    { name: "Web Design Weekly", type: "newsletter" },
    { name: "NodeJS Weekly", type: "newsletter" },
    { name: "Smashing Magazine", type: "website" },
    { name: "React Blog", type: "website" },
    { name: "CSS Tricks", type: "website" },
    { name: "Scotch.io", type: "website" },
    { name: "Hackernoon", type: "website" },
    { name: "UX Collective", type: "newsletter" },
    { name: "UX Design Weekly", type: "newsletter" },
  ],
};

const footer = {
  description:
    "<span>Heb ik je aandacht?<br/>Wie weet kunnen we een afspraak maken om elkaar beter te leren kennen!</span>",
};

const contact = {
  fullName: "Joran Quinten",
  personalUrl: "https://joranquinten.nl",
  organisation: "QTN Consulting",
  organisationUrl: "https://qtnconsulting.nl",
  email: "joran@joranquinten.nl",
  phone: "0611047809",
  address: {
    street: "Evertshoeve 13",
    zipcode: "5463 LP",
    city: "Veghel",
  },
};

export {
  meta,
  about,
  projects,
  experience,
  education,
  topics,
  media,
  footer,
  contact,
};
