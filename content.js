/* =====================================================================
   BHK WORLD — EDIT YOUR WEBSITE HERE
   ---------------------------------------------------------------------
   Everything written on the page comes from this one file.
   • Change only the text between the quotes "like this".
   • Keep the commas and brackets as they are.
   • Save the file and refresh the page to see your changes.
   • To hide a contact option, leave its value empty: ""
   ===================================================================== */

window.SITE = {

  /* ---------- COLOUR THEME ----------
     "emerald" = Royal Emerald & Metallic Gold
     "forest"  = Racing Green & Antique Gold
     "jade"    = Bottle Green & Champagne Gold          */
  theme: "emerald",

  /* TIP: wrap words in *stars* in any title to make them gold. */

  /* ---------- BRAND ---------- */
  brand: {
    name: "BHK World",
    shortName: "BHK",                // shown in the logo badge
    tagline: "Where Families Find Homes & Investors Build Legacies",
    rera: "MahaRERA No. A51700032661",
  },

  /* ---------- CONTACT (used by every button on the page) ---------- */
  contact: {
    phone: "+91 98208 02090",                 // main number, shown on the page
    phoneLink: "+919820802090",               // same number, no spaces
    phone2: "+91 98670 21641",                // second number ("" to hide)
    phone2Link: "+919867021641",
    whatsapp: "919820802090",                 // WhatsApp number: country code + number, no + or spaces
    whatsappMessage: "Hi BHK World, I'd like to know more about your properties.",
    email: "bhkworldofficial@gmail.com",
    instagram: "",                            // e.g. "https://www.instagram.com/bhkworld"
    instagramHandle: "",                      // e.g. "@bhkworld"
    region: "Thane – Mumbai Metropolitan Region (MMR)",
    address: "312, One Wagle, Road No. 16, Opp. Sunrise Business Park, Wagle Estate, Thane West, Maharashtra 400604",
    mapLink: "https://www.google.com/maps/search/?api=1&query=One+Wagle+Road+No+16+Opp+Sunrise+Business+Park+Wagle+Estate+Thane",
  },

  /* ---------- TOP SECTION ---------- */
  hero: {
    eyebrow: "Luxury Real Estate Solutions · India & Dubai",
    titleLines: ["Where families", "find homes &", "investors build", "legacies."],
    highlightLines: [3],             // which lines are gold (0 = first line)
    subtitle:
      "Premium homes, commercial assets and exclusive off-market deals across Thane, Mumbai, Pune and Dubai — with RERA-compliant developers and an advisor by your side at every step.",
    primaryButton: "Chat on WhatsApp",
    secondaryButton: "See how it works",
  },

  /* ---------- SCROLLING STRIP ---------- */
  marquee: [
    "Penthouses", "Duplexes", "Villas", "Commercial Assets", "Off-Market Deals",
    "Second Homes", "Thane", "Mumbai", "Pune", "Dubai", "Alibaug", "Lonavala",
  ],

  /* ---------- NUMBERS ---------- */
  //   prefix = text before the number, suffix = text after it
  stats: [
    { value: 10231, suffix: "+", label: "Verified leads" },
    { value: 2000,  suffix: "+", label: "Site visits" },
    { value: 25,    suffix: "+", label: "Years of leadership experience" },
    { value: 4,     label: "Markets — Thane, Mumbai, Pune & Dubai" },
  ],

  /* ---------- ABOUT / VISION ---------- */
  about: {
    eyebrow: "Our vision",
    statement:
      "At BHK World, our vision is to help families achieve their dream homes while empowering investors to build lasting legacies — with exceptional service and unmatched dedication in every property journey.",
  },

  /* ---------- FOUNDER ---------- */
  founder: {
    eyebrow: "Founder & leadership",
    name: "Anand Khanvilkar",
    role: "Founder & CEO, BHK World",
    photo: "assets/founder.jpg",     // replace the file to change the photo ("" to hide)
    highlights: [
      "Former VP, Runwal Group",
      "Former Business Unit Head, Mahindra Holidays",
      "25+ years across Telecom, Automobiles, Financial Services, Hospitality & Real Estate",
    ],
    quote: "Success is about making lasting connections and empowering families to find their dream homes and investors to build legacies.",
  },

  /* ---------- THE PROCESS (add, remove or reorder steps freely) ---------- */
  process: {
    eyebrow: "Our process",
    title: "How *BHK World* works",
    intro: "A clear, structured journey — so you always know what happens next.",
    steps: [
      {
        icon: "chat",
        title: "Free consultation",
        text: "Share your budget, preferred location and goal — your own home, a second home, or an investment. One WhatsApp message is all it takes.",
        time: "Day 1",
      },
      {
        icon: "search",
        title: "Curated shortlist",
        text: "We shortlist the best-fit options from RERA-compliant, legacy developers — including exclusive off-market deals you won't find listed anywhere.",
        time: "Day 1 – 3",
      },
      {
        icon: "car",
        title: "Guided site visits",
        text: "We schedule and accompany you on site visits so you can see the project, the location and the neighbourhood with an expert by your side.",
        time: "Week 1",
      },
      {
        icon: "handshake",
        title: "Best price negotiation",
        text: "We negotiate directly with the developer to secure the lowest market rates, offers and the right payment plan for you.",
        time: "Week 1 – 2",
      },
      {
        icon: "file",
        title: "Loan, legal & paperwork",
        text: "Support with home loans, documentation, agreement review and registration — structured processes built for your protection.",
        time: "Week 2 – 3",
      },
      {
        icon: "key",
        title: "Booking & beyond",
        text: "We help you complete the booking smoothly and stay with you through construction updates and possession — and for your next investment.",
        time: "Keys in hand",
      },
    ],
  },

  /* ---------- SERVICES ---------- */
  services: {
    eyebrow: "Our services",
    title: "Premium & *luxury* real estate, end to end",
    intro: "Homes, commercial searches and exclusive off-market deals for discerning clients in India & Dubai.",
    items: [
      { icon: "home",     title: "Luxury homes at lowest market rates", text: "Signature penthouses, duplexes and villas at prime locations." },
      { icon: "lock",     title: "Off-market deals",       text: "Confidential, off-market opportunities for elite clients." },
      { icon: "chart",    title: "Investor advisory",      text: "Guidance for strategic, long-term real estate decisions." },
      { icon: "building", title: "Commercial search",      text: "Customised searches in Thane, Mumbai, Pune & Dubai." },
      { icon: "spark",    title: "Trophy commercial assets", text: "Landmark commercial properties for discerning investors." },
      { icon: "palm",     title: "Second homes",           text: "Luxury second homes in Alibaug and Lonavala." },
    ],
  },

  /* ---------- OUR EDGE ---------- */
  why: {
    eyebrow: "Our edge",
    title: "Advice you can *trust*, access you won't find elsewhere",
    items: [
      { title: "RERA-compliant developers",   text: "Assurance of regulatory compliance and complete transparency." },
      { title: "Legacy developers",           text: "We work with developers who have proven track records." },
      { title: "Structured client protection", text: "Clear, documented processes designed to protect every client." },
      { title: "Global investor connect",     text: "Access to international opportunities and direct connections with global investors." },
      { title: "Tech-driven service",         text: "A modern, seamless experience — from first enquiry to final paperwork." },
    ],
  },

  /* ---------- QUESTIONS & ANSWERS ---------- */
  faq: {
    eyebrow: "FAQ",
    title: "Questions, *answered*",
    items: [
      { q: "Which locations does BHK World cover?", a: "We cover the Thane–Mumbai Metropolitan Region, Pune and Dubai, plus second homes in Alibaug and Lonavala." },
      { q: "Do you only deal in luxury homes?", a: "We specialise in premium and luxury residences, and we also handle commercial searches and investor advisory." },
      { q: "What are off-market deals?", a: "Properties that are not publicly listed. We share these confidentially with serious buyers and investors." },
      { q: "Are the projects RERA registered?", a: "Yes. We work with RERA-compliant developers with proven track records. BHK World itself is registered under MahaRERA No. A51700032661." },
      { q: "How do I get started?", a: "Tap the WhatsApp button and share your requirement, budget and preferred location. Our team will take it from there." },
    ],
  },

  /* ---------- FINAL CALL-TO-ACTION ---------- */
  cta: {
    title: "Let's find your next *property.*",
    text: "Talk to Anand Khanvilkar or Jyoti Kale from the BHK World team.",
  },
};
