export type NewsItem = {
  id: string;
  date: string;         // e.g. "May 2026"
  year: number;
  headline: string;
  body: string;
  images?: { src: string; alt: string }[];
  links?: { title: string; href?: string }[];
  videos?: { src: string; title: string }[];  // YouTube embed URLs
};

export const newsItems: NewsItem[] = [
  // ── 2026 ──────────────────────────────────────────────────────────
  {
    id: "senior-awards-2026",
    date: "May 2026",
    year: 2026,
    headline: "Graduating Senior Awards — Spring 2026",
    body: "Two ARC Lab researchers were selected for Graduating Senior Awards for the EE Class of Spring 2026. Elizabeth Petersen received the EE E-Days Engineer Award, and Kobe Prior received the Outstanding Graduating Senior Award for the Electrical Engineering Department. Both have been integral members of the ARC Lab and contributed to multiple research projects including their Viceroy Symposium research on \"Shielding Material for Reducing Electromagnetic Interference (EMI)\" and \"16-Element Phased Array for Coarse AoA Estimation,\" respectively.",
    images: [
      { src: "/Media_1/pictures/Liz_EDAYS_Engineer_Award.jpeg", alt: "Elizabeth Petersen E-Days Engineer Award" },
      { src: "/Media_1/portraits/kprior.jpg", alt: "Kobe Prior" },
    ],
  },
  {
    id: "viceroy-symposium-2026",
    date: "April 2026",
    year: 2026,
    headline: "Viceroy Symposium — Williamsburg, VA",
    body: "Several ARC Lab researchers — Elizabeth Petersen, Kobe Prior, Andrew Smith, Natalie Smith, and Dr. Elsherbeni — attended the Viceroy Symposium in Williamsburg, Virginia. They presented posters on phased arrays, EMI shielding, and FDTD acceleration, and networked with officials from the Under Secretary of Defense for Research and Engineering (USDR&E) and other Viceroy Scholars.",
    images: [
      { src: "/Media_1/pictures/team_photo.png", alt: "ARC Team at Viceroy Symposium" },
      { src: "/Media_1/pictures/liz-nat-viceroy.jpeg", alt: "Elizabeth and Natalie at Viceroy" },
      { src: "/Media_1/pictures/kobe-viceroy.jpeg", alt: "Kobe at Viceroy" },
      { src: "/Media_1/pictures/andrew-viceroy.jpeg", alt: "Andrew at Viceroy" },
    ],
    links: [
      { title: "16-Element Phased Array for Coarse AoA Estimation", href: "/Media_1/research/Prior_16_Port_Phasing Network.pdf" },
      { title: "Shielding Material for Reducing Electromagnetic Interference (EMI)", href: "/Media_1/research/Liz_Viceroy.pdf" },
      { title: "Accelerating Computational Electromagnetics Using FDTD Method", href: "/Media_1/research/Andrew_viceroy.pdf" },
    ],
  },
  {
    id: "silje-thesis-2026",
    date: "April 2026",
    year: 2026,
    headline: "Silje Ostrem — Thesis Defense & GRADS Best Poster",
    body: "Silje Ostrem successfully defended her MS thesis \"Conformal Circularly Polarized Array of Patch Antennas For Mining Applications.\" She was also awarded Best Overall Poster Presentation at the 2026 Graduate Research and Discovery Symposium (GRADS), along with first place in her category (Energy & Mechanical Systems – MSc Thesis).",
    images: [
      { src: "/Media_1/pictures/Silje_Poster.jpg", alt: "Silje's GRADS Poster" },
      { src: "/Media_1/pictures/Silje_thesis_1.jpg", alt: "Silje Thesis Defense" },
      { src: "/Media_1/pictures/Silje_winning_poster.jpg", alt: "Silje with winning poster" },
      { src: "/Media_1/pictures/Silje_thesis_2.jpg", alt: "Silje Thesis Defense 2" },
    ],
  },
  {
    id: "nrsm-2026",
    date: "January 2026",
    year: 2026,
    headline: "National Radio Science Meeting — Boulder, CO",
    body: "From January 6–9, three ARC researchers — Matthew Dodd (not pictured), Silje Ostrem, and Kobe Prior — along with Director Dr. Atef Elsherbeni attended and presented at the National Radio Science Meeting in Boulder, Colorado.",
    images: [
      { src: "/Media_1/pictures/NRSM_Photo.jpeg", alt: "NRSM 2026 attendees" },
    ],
    links: [
      { title: "Low-cost Software-controlled Phase Shifting Network — Kobe Prior et al.", href: "/Media_1/research/NRSM_Prior_Rev3.pdf" },
      { title: "A Circularly Polarized Patch Antenna System for Mining Communications — Silje Ostrem et al.", href: "/Media_1/research/CP_Mining.pdf" },
      { title: "RCS of Targets due to Excitation with Structured Waves — Matthew Dodd et al.", href: "/Media_1/research/Dodd_NRSM.pdf" },
    ],
  },

  // ── 2025 ──────────────────────────────────────────────────────────
  {
    id: "redwire-2025",
    date: "December 2025",
    year: 2025,
    headline: "Redwire Space Lab Tour",
    body: "On Thursday, December 11th, ARC students toured Redwire Space. They learned about Redwire's focus on resilient, space-proof RF systems and antenna designs, and got to see the offices, production floors, and a large near/far-field chamber. Thanks to Redwire for hosting, and to Brian Sanders, Colton Dunlap, and Mike Sharkey for sharing their expertise.",
    images: [
      { src: "/Media_1/pictures/redwire.jpg", alt: "Redwire Space tour" },
    ],
  },
  {
    id: "natalie-symposium-2025",
    date: "September 2025",
    year: 2025,
    headline: "Natalie Smith — Fall Undergraduate Research Symposium",
    body: "Natalie presented at the Fall 2025 Undergraduate Research Symposium. Her poster focused on the design of wideband wire dipole antennas, achieving more than a 30% increase in bandwidth compared to traditional dipole antennas.",
    images: [
      { src: "/Media_1/news_awards/Natalie_Research_Presentation.jpg", alt: "Natalie Smith research presentation" },
    ],
  },
  {
    id: "aces-award-2025",
    date: "May 2025",
    year: 2025,
    headline: "Dr. Elsherbeni — ACES 2025 Computational EM Award",
    body: "Dr. Atef Elsherbeni was awarded the ACES 2025 Computational Electromagnetics Award.",
    images: [
      { src: "/Media_1/news_awards/ACES_2025_computational_Electromagnetics_Award.jpg", alt: "ACES 2025 Computational Electromagnetics Award" },
    ],
  },
  {
    id: "lydia-3rd-2025",
    date: "May 2025",
    year: 2025,
    headline: "Lydia Tan — 3rd Place at Spring UG Research Symposium",
    body: "Congratulations to Lydia Tan on tying for 3rd place in the oral presentation category of the Spring 2025 Undergraduate Research Symposium! Lydia is a sophomore in EE, president of SOFC, vice president of SASE, and campus outreach chair of Evolve. Her research focused on Parameters Visualization for Coaxial Cables, Parallel Plates, and Two-Wires — creating MATLAB apps for dynamic visualization of frequency-dependent transmission line characteristics. Mentored by Dr. Atef Elsherbeni.",
    images: [
      { src: "/Media_1/news_awards/Lydia_3rd.jpeg", alt: "Lydia Tan 3rd place" },
    ],
  },
  {
    id: "silje-grads-2025",
    date: "April 2025",
    year: 2025,
    headline: "Silje Ostrem — 1st Place at GRADS 2025",
    body: "Silje Ostrem, a combined BS/MS student, received first place in the 2025 GRADS Computation & Theory Poster Session (MSc Thesis). Her poster, \"Design of a Circularly Polarized Patch Antenna System for Mining Applications,\" focuses on developing a conformal circularly polarized patch antenna for underground mining — enabling reliable communication of bit wear on continuous miner machines to improve mine safety.",
    images: [
      { src: "/Media_1/research/Silje_Grad_Poster.jpg", alt: "Silje Ostrem GRADS 2025 poster" },
    ],
  },

  // ── 2024 ──────────────────────────────────────────────────────────
  {
    id: "summet-shadow-2024",
    date: "November 2024",
    year: 2024,
    headline: "LEAD SUMMET High School Lab Shadowing",
    body: "Two high school students, Sophia and Kainoa, began lab shadowing in the ARC Lab as part of the LEAD SUMMET program — an expansion of the Summer Multicultural Engineering Training initiative. They visited Connor Denny in the thin-film deposition lab, learned about wire bonding and plasma etching, then did hands-on antenna prototyping in the ARC Lab: Kaino designed a 1.5 GHz Yagi-Uda antenna and Sophia designed a 3 GHz microstrip patch antenna. Both tested their designs in the anechoic chamber.",
    images: [
      { src: "/Media_1/pictures/Shadow1.JPG", alt: "Students doing antenna prototyping" },
      { src: "/Media_1/pictures/Shadow2.JPG", alt: "Students in the anechoic chamber" },
      { src: "/Media_1/pictures/Shadow3.JPG", alt: "Lab shadowing" },
    ],
  },
  {
    id: "aces-symposium-2024",
    date: "May 2024",
    year: 2024,
    headline: "Applied Computational Electromagnetics Symposium — Orlando, FL",
    body: "Members of the ARC research group participated in the Applied Computational Electromagnetics Symposium in Orlando (May 2024). Six papers were presented by Matthew Dodd, Charles Vath, Nelson Angels, Silje Ostrem, Kenny Hora, and Lisa Elmiladi. Four members co-chaired sessions and all helped manage conference logistics. Additional contributors include Nolan Grant, Cameron Evanovich, Collin Kringlen, and Trevor Wolf.",
    images: [
      { src: "/Media_1/news_awards/ACESSymposium2024.jpg", alt: "ACES Symposium 2024" },
    ],
    links: [
      { title: "An Interactive Visualization of Electrostatic Field — Charles Vath & Atef Elsherbeni", href: "/Media_1/research/Vath_ACES_Presentation_Atef_Edit.pdf" },
      { title: "Wireless Monitoring of S-Parameters using a Nano-VNA — Lisa Elmiladi et al.", href: "/Media_1/research/VNA Remote Sensing_Kenny_Lisa_AE_Edits.pdf" },
      { title: "Sensor Data Relay System for Underground Mine Communications — Kenny Hora et al.", href: "/Media_1/research/Collin_kenny_Sensor Data Relay_AE.pdf" },
      { title: "Simulation of Mutual Coupling in Aperiodic Arrays — Matthew Dodd & Atef Elsherbeni", href: "/Media_1/research/Matt_Dodd_ACES_2024.pdf" },
      { title: "Safety of Wireless Brain Implants: A Systematic Review — Nelson Angels & Atef Elsherbeni", href: "/Media_1/research/ACES Presentation_Atef_Edit_Complete.pdf" },
      { title: "Towards the Design of a Non-invasive Glucose Monitoring Sensor — Silje Ostrem et al.", href: "/Media_1/research/Silje_ACES_Presentation_V2.pdf" },
      { title: "Automated Pixelated Unit Cell Design for Reflectarray Antennas — Nolan Grant et al.", href: "/Media_1/research/ACES_2024_Confernece_Slides.pdf" },
    ],
  },
  {
    id: "grads-2024",
    date: "April 2024",
    year: 2024,
    headline: "Kenny Hora — GRADS 2024",
    body: "Kenny Hora presented at the 2024 Graduate Research and Discovery Symposium (GRADS). Together with Silje Ostrem and Charles Vath, he presented on a Sensor Data Relay System for Underground Mine Equipment — a novel system to communicate data from sensor-enabled 'smart bits' on a continuous mining cutterhead, enabling operators to monitor rock cutting tool wear in real time.",
    images: [
      { src: "/Media_1/news_awards/GRAD Symposium_2024.jpeg", alt: "GRADS Symposium 2024" },
    ],
  },
  {
    id: "iceaa-2024",
    date: "September 2024",
    year: 2024,
    headline: "Dr. Elsherbeni at ICEAA/IEEE APWC — Lisbon, Portugal",
    body: "Dr. Atef Elsherbeni presented two papers and offered a short course at the combined ICEAA and IEEE APWC conferences (September 3–6, 2024) in Lisbon, Portugal. He also chaired the conference awards committee.",
    images: [
      { src: "/Media_1/news_awards/ElsherShortCourse.jpg", alt: "Dr. Elsherbeni short course in Lisbon" },
    ],
    links: [
      { title: "Pyramidally Shaped Absorbing Boundary for FDTD Simulations" },
      { title: "A Review of Radar Cross-Section Evaluation of Canonical and Complex Objects"},
      { title: "Short Course: Time Domain Simulation of EM Problems with Linear and Nonlinear Circuit Elements"},
    ],
  },

  // ── 2023 ──────────────────────────────────────────────────────────
  {
    id: "harrington-mittra-2023",
    date: "2023",
    year: 2023,
    headline: "Dr. Elsherbeni — Harrington-Mittra Award in Computational EM",
    body: "Dr. Atef Elsherbeni received the 2023 IEEE Antennas and Propagation Society Harrington-Mittra Award in Computational Electromagnetics, cited for his contributions to computational electromagnetics with hardware acceleration techniques.",
    images: [
      { src: "/Media_1/news_awards/Atef_award.jpg", alt: "Dr. Elsherbeni with award" },
      { src: "/Media_1/news_awards/Harrington-Mittra Award.jpg", alt: "Harrington-Mittra Award" },
    ],
  },
  {
    id: "aps-ues-2023",
    date: "2023",
    year: 2023,
    headline: "Matthew Dodd at APS-UES 2023",
    body: "Congratulations to Matthew Dodd for his participation at the APS-UES 2023 meeting.",
    images: [
      { src: "/Media_1/news_awards/Matthew_DODD APS-UES.jpg", alt: "Matthew Dodd at APS-UES 2023" },
    ],
  },
  {
    id: "aces-2023",
    date: "April 2023",
    year: 2023,
    headline: "Nelson, Rachel, and Silje at ACES 2023 — Monterey, CA",
    body: "Congratulations to Nelson Angels, Rachel Lumnitzer, and Silje Ostrem for their participation in the 2023 ACES Conference held in Monterey, CA.",
    images: [
      { src: "/Media_1/portraits/sostrem.jpg", alt: "Silje Ostrem" },
      { src: "/Media_1/portraits/nangels.jpg", alt: "Nelson Angels" },
      { src: "/Media_1/portraits/rlumnitzer_updated.jpg", alt: "Rachel Lumnitzer" },
    ],
  },
  {
    id: "rachel-masters-2023",
    date: "April 2023",
    year: 2023,
    headline: "Rachel Lumnitzer Earns her Master's Degree",
    body: "Congratulations to Rachel Lumnitzer on successfully earning her Master's degree!",
    images: [
      { src: "/Media_1/portraits/rlumnitzer_updated.jpg", alt: "Rachel Lumnitzer" },
    ],
  },
  {
    id: "ardc-2023",
    date: "April 2023",
    year: 2023,
    headline: "Nelson Angels & Silje Ostrem — ARDC Award",
    body: "Congratulations to Nelson Angels and Silje Ostrem for receiving the ARDC Award.",
    images: [
      { src: "/Media_1/portraits/sostrem.jpg", alt: "Silje Ostrem" },
      { src: "/Media_1/portraits/nangels.jpg", alt: "Nelson Angels" },
    ],
  },
  {
    id: "ugrads-2023",
    date: "April 2023",
    year: 2023,
    headline: "5 ARC Members at the 2023 Undergraduate Research Symposium",
    body: "Congratulations to five ARC research group members who presented at the 2023 Undergraduate Research Symposium: Kenny Hora, Charles Vath, Silje Ostrem, Trevor Wolf, and Kobe Prior.",
    images: [
      { src: "/Media_1/news_awards/Charles_UGRADS.jpg", alt: "Charles Vath at UGRADS" },
      { src: "/Media_1/news_awards/Kenny_UGRADS.jpg", alt: "Kenny Hora at UGRADS" },
      { src: "/Media_1/news_awards/Silje_UGRADS.jpg", alt: "Silje Ostrem at UGRADS" },
      { src: "/Media_1/news_awards/Trevor_UGRADS.jpg", alt: "Trevor Wolf at UGRADS" },
    ],
  },

  // ── 2020 ──────────────────────────────────────────────────────────
  {
    id: "thesis-defenses-2020",
    date: "August 2020",
    year: 2020,
    headline: "Three Successful Thesis & Dissertation Defenses",
    body: "Congratulations to three ARC research group members who successfully defended their Thesis/Dissertation: Abdullah Algarni (Ph.D. Dissertation), Yuhao Feng (Master's Thesis), and Madison Le (Master's Thesis).",
    images: [
      { src: "/Media_1/portraits/aalgarni-2.jpg", alt: "Abdullah Algarni" },
      { src: "/Media_1/portraits/yfeng1.jpg", alt: "Yuhao Feng" },
      { src: "/Media_1/portraits/mle1.jpg", alt: "Madison Le" },
    ],
  },
  {
    id: "distinguished-lecturer-2020",
    date: "June 2020",
    year: 2020,
    headline: "Dr. Elsherbeni — IEEE AP-S Distinguished Lecturer 2020–2022",
    body: "Dr. Atef Elsherbeni was selected as a Distinguished Lecturer of the IEEE Antennas and Propagation Society (AP-S) for the period of 2020–2022.",
    images: [
      { src: "/Media_1/news_awards/Distinguished_lecturer_elsherbeni.jpg", alt: "Dr. Elsherbeni Distinguished Lecturer" },
    ],
  },
  {
    id: "grads-awards-2020",
    date: "April 2020",
    year: 2020,
    headline: "GRADS 2020 — ARC Members Win Category Awards",
    body: "Two ARC group members won category awards at the Mines GRADS 2020 Awards Ceremony. Madison Le won the Modeling and Simulation category for her presentation on sub-gridding errors in FDTD simulations. Rachel Lumnitzer placed second in the Engineering category for her presentation on 1D FDTD in dispersive media for biomedical imaging applications.",
    videos: [
      { src: "https://www.youtube.com/embed/7ewQodttd5c", title: "GRADS 2020 Awards Ceremony" },
      { src: "https://www.youtube.com/embed/fG1WrC37S5U", title: "Madison Le GRADS Presentation" },
      { src: "https://www.youtube.com/embed/xD_Iz4k0A4k", title: "Rachel Lumnitzer GRADS Presentation" },
    ],
  },

  // ── 2019 ──────────────────────────────────────────────────────────
  {
    id: "aces-madison-2019",
    date: "March 2019",
    year: 2019,
    headline: "Madison Le — 3rd Place at ACES 2019 Student Paper Competition",
    body: "Madison Le's paper \"Error Analysis of Subgridding when Modeling Multiscale Structures using the Finite-Difference Time-Domain Method\" won third place in the 2019 ACES student paper competition. A poster is displayed in the hallway outside the EE department office BB310C.",
    images: [
      { src: "/Media_1/news_awards/ACES-Award-Madison.jpg", alt: "Madison Le ACES Award 2019" },
    ],
  },
];

// Get unique years descending
export const newsYears = [...new Set(newsItems.map(n => n.year))].sort((a, b) => b - a);

// Get items for a given year
export function getNewsByYear(year: number): NewsItem[] {
  return newsItems.filter(n => n.year === year);
}