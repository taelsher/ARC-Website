export type Project = {
  title: string;
  href: string;
};

export type Person = {
  id: string;
  name: string;
  photo: string; // path relative to /public
  role?: string; // e.g. "Director", "Co-Director"
  researchInterests?: string;
  linkedin?: string;
  email?: string;
  website?: string;
  projects?: Project[];
  // Which sections this person appears in
  sections: ("faculty" | "phd" | "ms" | "undergrad" | "past-faculty" | "past-phd" | "past-ms" | "past-undergrad")[];
};

export const people: Person[] = [
  // ── FACULTY ──────────────────────────────────────────────────────────────────
  {
    id: "elsherbeni",
    name: "Dr. Atef Elsherbeni",
    photo: "/Media_1/portraits/aelsherb2.jpg",
    role: "Director",
    researchInterests:
      "Scattering/diffraction of EM waves, computational EM using FDTD, field visualization & software development for EM education, RFID/sensor integrated RFID systems, and reflector/printed antennas & antenna arrays.",
    linkedin: "https://www.linkedin.com/in/atef-elsherbeni-4172733/",
    email: "aelsherb@mines.edu",
    website: "https://atef.elsherbeni.com/",
    sections: ["faculty"],
  },
  {
    id: "aaen",
    name: "Dr. Peter Aaen",
    photo: "/Media_1/portraits/aaen_peter_headshot.jpg",
    role: "Co-Director",
    researchInterests:
      "Multi-physics based modeling and measurement methodologies for high-power and high-frequency electronic devices, nonlinear electrothermal transistor modeling, efficient electromagnetic simulations, compact models for microwave power transistors and RFICs, calibration techniques for microwave measurements.",
    linkedin: "https://www.linkedin.com/in/peteraaen/",
    email: "paaen@mines.edu",
    sections: ["faculty"],
  },
  {
    id: "shao",
    name: "Dr. Sihua Shao",
    photo: "/Media_1/portraits/Bio_Shao.jpg",
    role: "Co-Director",
    researchInterests:
      "Backscatter communication, energy-neutral design, optical wireless communications, integrated sensing and communication, drone-assisted wireless networks, reconfigurable intelligent surfaces, machine learning in communications and networking, and wireless communications in harsh environments.",
    linkedin: "https://www.linkedin.com/in/sihua-shao-6163829b/",
    email: "sihua.shao@mines.edu",
    website: "https://shao-wireless-lab.github.io/",
    sections: ["faculty"],
  },

  // ── CURRENT PHD ───────────────────────────────────────────────────────────────
  {
    id: "diener",
    name: "Joseph Diener",
    photo: "/Media_1/portraits/jdiener-2.jpg",
    researchInterests: "Antenna design, SDR applications, FDTD, and channel sounding.",
    linkedin: "https://www.linkedin.com/in/josephediener/",
    projects: [
      { title: "Polarization Reconfigurable Patch Antenna for 5.8 GHz ISM – GRADS 2020", href: "/Projects/GRADS/Joseph_GRADS_2020_V2.pdf" },
      { title: "Miniaturized Omnidirectional Antennas for RFID/UHF", href: "/Media_1/research/jdiener_uhfant.pdf" },
      { title: "SDR Based Switched-Array Channel Sounder for 5.8 GHz ISM Band", href: "/Media_1/research/jdiener_rjones_jkast_sdr.pdf" },
      { title: "Isoflux Antenna for CubeSats", href: "/Media_1/research/jdiener_rjones_isoflux.pdf" },
    ],
    sections: ["phd"],
  },
  {
    id: "dodd",
    name: "Matthew Dodd",
    photo: "/Media_1/portraits/mdodd.jpg",
    researchInterests: "Wideband antenna design and antenna array optimization.",
    linkedin: "https://www.linkedin.com/in/matthew-dodd-214650105/",
    projects: [
      { title: "RCS of Targets due to Excitation with Structured Waves", href: "/Media_1/research/Dodd_NRSM.pdf" },
      { title: "Wideband Antennas with Circular Polarization for Low-SWaP Vehicle Applications", href: "/Projects/GRADS/Robert_GRADS_2020_V6.pdf" },
      { title: "Optimization of Finite Wideband Steerable Arrays with Non-Uniform Elements", href: "/Media_1/research/jdiener_rjones_isoflux.pdf" },
      { title: "Simulation of Mutual Coupling in Aperiodic Arrays", href: "/Media_1/research/Matt_Dodd_ACES_2024.pdf" },
    ],
    sections: ["phd"],
  },
  {
    id: "rjones",
    name: "Robert Jones",
    photo: "/Media_1/portraits/rjones1.jpg",
    researchInterests: "Antenna design and metrology, and channel sounding.",
    linkedin: "https://www.linkedin.com/in/robert-jones-154ab9134/",
    projects: [
      { title: "Pyramidal Absorbing Layers for Electromagnetic Simulations – GRADS 2020", href: "/Projects/GRADS/Robert_GRADS_2020_V6.pdf" },
      { title: "Isoflux Antenna for CubeSats", href: "/Media_1/research/jdiener_rjones_isoflux.pdf" },
      { title: "SDR Based Switched-Array Channel Sounder for 5.8 GHz ISM Band", href: "/Media_1/research/jdiener_rjones_jkast_sdr.pdf" },
      { title: "Underground Mine Localization", href: "/Media_1/research/Jones_mines_0052N_12242.pdf" },
      { title: "Microstrip and CPW Calibration Kit Comparison", href: "/Media_1/research/BCICTS_Jones_BERB_final_updt.pdf.pdf" },
    ],
    sections: ["phd", "past-ms", "past-undergrad"],
  },
  {
    id: "connolly",
    name: "Cameron Connolly",
    photo: "/Media_1/portraits/CConnolly.jpg",
    researchInterests: "Microwave circuit design, advanced electromagnetic analysis software, RFID systems, and space communications.",
    linkedin: "https://www.linkedin.com/in/cameronrconnolly/",
    projects: [
      { title: "Surface Wave Launcher", href: "/Projects/UGRADS/SWLPresentation.pdf" },
      { title: "Doppler Radar for X Band", href: "/Projects/UGRADS/DopplerRadarXband.pdf" },
    ],
    sections: ["phd", "past-undergrad"],
  },

  // ── CURRENT MS ────────────────────────────────────────────────────────────────
  {
    id: "evanovich",
    name: "Cameron Evanovich",
    photo: "/Media_1/portraits/cevanovich.jpg",
    linkedin: "https://www.linkedin.com/in/cameron-evanovich-b91a11113/",
    sections: ["ms"],
  },
  {
    id: "angels",
    name: "Nelson Angels",
    photo: "/Media_1/portraits/nangels.jpg",
    researchInterests: "FDTD for biomedical applications, brain-computer interfaces, wireless communications, and antenna design.",
    linkedin: "https://www.linkedin.com/in/nelsonangels/",
    projects: [
      { title: "MRI Discretization Tools for FDTD Solvers and Analysis", href: "/Projects/GRADS/Nelson_research.pdf" },
      { title: "Safety of Wireless Brain Implants: A Systematic Review", href: "/Media_1/research/ACES Presentation_Atef_Edit_Complete.pdf" },
    ],
    sections: ["ms"],
  },
  {
    id: "prior",
    name: "Kobe Prior",
    photo: "/Media_1/portraits/kprior.jpg",
    researchInterests:
      "Antenna design, computational electromagnetics, structured electromagnetic waves including orbital angular momentum (OAM) modes, phased array synthesis, and experimental characterization of scattering phenomena.",
    linkedin: "https://www.linkedin.com/in/kobeprior/",
    projects: [
      { title: "Target Illumination by Structured Beam for Advanced Radar Scattering Analysis", href: "/Media_1/research/Kobe_MURF_Presentation-V6.pdf" },
      { title: "16-Element Phased Array for Coarse AoA Estimation", href: "/Media_1/research/Prior_16_Port_Phasing Network.pdf" },
      { title: "Low Cost Phase Shifting Network Paper", href: "/Media_1/research/_Kobe_Low-Cost_16-Port_Phasing_V7.pdf" },
      { title: "Low Cost Phase Shifting Network Presentation", href: "Media_1/research/NRSM_Prior_Rev3.pdf" },
      { title: "Hardware and Software Development of Antenna Demonstration Module", href: "/Projects/UGRADS/Antenna Demonstration Poster.pdf" },
    ],
    website: "https://kobeprior99.github.io/",
    sections: ["ms", "past-undergrad"],
  },
  {
    id: "petersen",
    name: "Elizabeth Petersen",
    photo: "/Media_1/portraits/EPetersen.jpg",
    researchInterests: "Antenna design and optimization for healthcare applications.",
    linkedin: "https://www.linkedin.com/in/elizabeth-petersen-ab7317269/",
    projects: [
      { title: "Review of Non-Invasive Glucose Monitoring Methods", href: "/Media_1/research/Elizabeth_Poster_MURF_2026_V2.pdf" },
      { title: "Shielding Material for Reducing EMI", href: "/Media_1/research/Liz_Viceroy.pdf" },
    ],
    sections: ["ms", "past-undergrad"],
  },

  // ── CURRENT UNDERGRAD ─────────────────────────────────────────────────────────
  {
    id: "nsmith",
    name: "Natalie Smith",
    photo: "/Media_1/portraits/NatSmith.jpg",
    researchInterests: "RF and antenna design for secure spacecraft communication, navigation, and advanced space system applications.",
    linkedin: "https://www.linkedin.com/in/nataliersmith33/",
    projects: [
      { title: "Shielding Material for Reducing EMI", href: "/Media_1/research/Liz_Viceroy.pdf" },
      { title: "Dipole Antenna for Experimental EMI Shielding Effectiveness", href: "/Media_1/research/natalie_fall_symposium.pdf" },
    ],
    sections: ["undergrad"],
  },
  {
    id: "tan",
    name: "Lydia Tan",
    photo: "/Media_1/portraits/Ltan.jpg",
    researchInterests: "Developing computational tools for visualization of electromagnetic waves and antenna patterns.",
    linkedin: "https://www.linkedin.com/in/lydiatan1/",
    projects: [
      { title: "Parameters Visualization for Coaxial Cable, Parallel Plates, and Two Wires", href: "/Projects/UGRADS/Lydia_Tan_MURF_2025_V3 1.pdf" },
    ],
    sections: ["undergrad"],
  },
  {
    id: "asmith",
    name: "Andrew Smith",
    photo: "/Media_1/portraits/ASmith.jpeg",
    researchInterests: "Computational electromagnetics and antenna design.",
    linkedin: "https://www.linkedin.com/in/andrew-smith-73a35836b/",
    projects: [
      { title: "AR and VR Applications for Electromagnetic Education", href: "/Media_1/research/Andrew_MURF_Poster_2026.pdf" },
      { title: "Accelerating Computational Electromagnetics Using FDTD Method", href: "/Media_1/research/Andrew_viceroy.pdf" },
    ],
    sections: ["undergrad"],
  },
  {
    id: "zantua",
    name: "Jann Tyler Zantua",
    photo: "/Media_1/portraits/Isidore.jpg",
    researchInterests: "Antenna design and simulation.",
    linkedin: "https://www.linkedin.com/in/jann-tyler-zantua-673b3135b/",
    sections: ["undergrad"],
  },
  {
    id: "lindseth",
    name: "Bennett Lindseth",
    photo: "/Media_1/portraits/Bennet.jpg",
    researchInterests: "RF/microwave circuits and antenna design.",
    projects: [
      { title: "Design of Circularly Polarized Antenna Element for Phased Array Antenna System", href: "/Media_1/research/Bennett+Symposium-Presentation Poster.pdf" },
    ],
    sections: ["undergrad"],
  },
  {
    id: "kidney",
    name: "Lauren Kidney",
    photo: "/Media_1/portraits/Lauren.jpeg",
    researchInterests: "Circuit design, RFID systems, and antenna design.",
    sections: ["undergrad"],
  },
  {
    id: "reed",
    name: "Cypress Reed",
    photo: "/Media_1/portraits/Cypress.jpeg",
    researchInterests: "Computational electromagnetics and medical applications for RF.",
    projects: [
      { title: "Review of Non-Invasive Glucose Monitoring Methods", href: "/Media_1/research/Elizabeth_Poster_MURF_2026_V2.pdf" },
    ],
    sections: ["undergrad"],
  },
  {
    id: "fent",
    name: "Charlie Fent",
    photo: "/Media_1/portraits/CharlieFent.jpg",
    researchInterests: "Antenna design and signal processing methods for wireless communications and computational electromagnetics.",
    linkedin: "https://www.linkedin.com/in/charlie-fent-904579309/",
    sections: ["undergrad"],
  },

  // ── PAST FACULTY ──────────────────────────────────────────────────────────────
  {
    id: "hadi",
    name: "Dr. Mohammed Hadi",
    photo: "/Media_1/portraits/mohammed-hadi.jpeg",
    role: "Past Co-Director",
    researchInterests: "Finite-difference time-domain theory, large-scale and multi-scale electromagnetics systems, and GPU computing.",
    sections: ["past-faculty"],
  },

  // ── PAST PHD ──────────────────────────────────────────────────────────────────
  {
    id: "weiss",
    name: "Alec Weiss",
    photo: "/Media_1/portraits/aweiss-2.jpg",
    researchInterests: "Multi-GPU/CPU FDTD and RFID localization.",
    linkedin: "https://www.linkedin.com/in/alec-weiss-bbb370113/",
    projects: [
      { title: "Comparing Runtimes of Python and MATLAB for Computational EM – GRADS 2020", href: "/Projects/GRADS/Alec_GRADS_Presentation_V2.pdf" },
      { title: "Wideband Antenna Array for 5G NR mid-band frequencies", href: "/Media_1/research/aweiss_array.pdf" },
      { title: "Multi-GPU/CPU FDTD with MATLAB", href: "/Media_1/research/aweiss_multicore.pdf" },
      { title: "RFID Localization", href: "/Media_1/research/jkast_aweiss_rfid.pdf" },
    ],
    sections: ["past-phd", "past-ms"],
  },
  {
    id: "kast",
    name: "Joshua Kast",
    photo: "/Media_1/portraits/jkast-2.jpg",
    researchInterests: "Beamforming, RFID localization, and SDR.",
    linkedin: "https://www.linkedin.com/in/joshua-kast-321124128/",
    projects: [
      { title: "Simulation of a Nonlinear Frequency Multiplier using FDTD – GRADS 2020", href: "/Projects/GRADS/JosH_GRADS_Presentation_2020_R2.pdf" },
      { title: "Beamforming Networks", href: "/Media_1/research/jkast_beamforming.pdf" },
      { title: "RFID Localization", href: "/Media_1/research/jkast_aweiss_rfid.pdf" },
      { title: "SDR Based Switched-Array Channel Sounder for 5.8 GHz ISM Band", href: "/Media_1/research/jdiener_rjones_jkast_sdr.pdf" },
    ],
    sections: ["past-phd", "past-ms"],
  },
  {
    id: "algarni",
    name: "Abdullah Algarni",
    photo: "/Media_1/portraits/aalgarni-2.jpg",
    researchInterests: "Cylindrical FDTD for drilling applications.",
    projects: [
      { title: "Passive and Active Circuit Elements in Cylindrical FDTD – GRADS 2020", href: "/Projects/GRADS/Abdulla_GRADS_2020_Voice.pdf" },
    ],
    sections: ["past-phd"],
  },
  {
    id: "chen",
    name: "Yimming Chen",
    photo: "/Media_1/portraits/Yimming.jpg",
    researchInterests: "Antenna array optimization and machine learning.",
    projects: [
      { title: "Cavity Backed Patch-Slot Antenna for Lower Band 5G Communication – GRADS 2020", href: "/Projects/GRADS/Yiming_GRADS_presentation.pdf" },
    ],
    sections: ["past-phd"],
  },
  {
    id: "grant",
    name: "Nolan Grant",
    photo: "/Media_1/portraits/placeholder.jpg",
    projects: [
      { title: "Automated Pixelated Unit Cell Design for Reflectarray Antennas and RIS", href: "/Media_1/research/ACES_2024_Confernece_Slides.pdf" },
    ],
    sections: ["past-phd"],
  },
  {
    id: "patel",
    name: "Kyle Patel",
    photo: "/Media_1/portraits/kyle_square.jpg",
    sections: ["past-phd", "past-ms", "past-undergrad"],
  },

  // ── PAST MS ───────────────────────────────────────────────────────────────────
  {
    id: "le",
    name: "Madison Le",
    photo: "/Media_1/portraits/mle1.jpg",
    researchInterests: "Computational electromagnetics in FDTD, antenna design, and numerical method analysis.",
    linkedin: "https://www.linkedin.com/in/madisonmaile/",
    projects: [
      { title: "Sub-Gridding Errors in Standard and Hybrid Higher Order FDTD Simulations – GRADS 2020", href: "/Projects/GRADS/Madison_GRADS_Subgridding_V3.pdf" },
      { title: "FDTD Subgridding", href: "/Media_1/research/mle_subgrid_slides.pdf" },
      { title: "Vivaldi Array for Wideband Applications", href: "/Media_1/research/mle_vivaldi.pdf" },
    ],
    sections: ["past-ms", "past-undergrad"],
  },
  {
    id: "velasco",
    name: "Andy Velasco",
    photo: "/Media_1/portraits/avelasco_square.jpg",
    researchInterests: "Dispersive material simulations.",
    linkedin: "https://www.linkedin.com/in/andresvelascof/",
    projects: [
      { title: "Dispersive Analysis for Wireline Logging", href: "/Media_1/research/avelasco_dispersive.pdf" },
    ],
    sections: ["past-ms"],
  },
  {
    id: "feng",
    name: "Yuhao Feng",
    photo: "/Media_1/portraits/yfeng1.jpg",
    researchInterests: "5G antenna design and testing.",
    projects: [
      { title: "Arrow Patch-Slot Antenna for 5G Lower Frequency Band – GRADS 2020", href: "/Projects/GRADS/Yuhao_GRADS_Presentation_2020.pdf" },
      { title: "Wideband CPWG Antennas For 5G Applications", href: "/Media_1/research/yfeng_5g_ant.pdf" },
    ],
    sections: ["past-ms"],
  },
  {
    id: "desposito",
    name: "Tony D'Esposito",
    photo: "/Media_1/portraits/tdesposito1.jpg",
    researchInterests: "Higher-order FDTD.",
    projects: [
      { title: "Fourth Order Accurate FDTD Implementation", href: "/Media_1/research/tdesposito_fourthorder.pdf" },
    ],
    sections: ["past-ms"],
  },
  {
    id: "lumnitzer",
    name: "Rachel Lumnitzer",
    photo: "/Media_1/portraits/rlumnitzer_updated.jpg",
    researchInterests: "Dispersive material simulations, FDTD analysis for 5G biomedical applications, and electromagnetic education.",
    linkedin: "https://www.linkedin.com/in/rachel-lumnitzer-8570691b/",
    projects: [
      { title: "One Dimensional FDTD in Dispersive Media for Biomedical Imaging – GRADS 2020", href: "/Projects/GRADS/Rachel_GRADS_MURF_Presentation_4-7.pdf" },
    ],
    sections: ["past-ms", "past-undergrad"],
  },
  {
    id: "kringlen",
    name: "Collin Kringlen",
    photo: "/Media_1/portraits/Collin_K.jpg",
    researchInterests: "Computational electromagnetics and electromagnetic education via field visualizations and software programs.",
    linkedin: "https://www.linkedin.com/in/collin-kringlen/",
    projects: [
      { title: "Sensor Data Relay System for Underground Mine Communications", href: "/Media_1/research/Collin_kenny_Sensor Data Relay_AE.pdf" },
      { title: "Towards the Design of a Non-invasive Glucose Monitoring Sensor", href: "/Media_1/research/Silje_ACES_Presentation_V2.pdf" },
    ],
    sections: ["past-ms"],
  },
  {
    id: "ostrem",
    name: "Silje Ostrem",
    photo: "/Media_1/portraits/sostrem.jpg",
    researchInterests: "Unique/wideband antenna geometry and biomedical applications of RF/Microwave design.",
    linkedin: "https://www.linkedin.com/in/silje-ostrem/",
    projects: [
      { title: "Development of a Conformal Antenna Array for Mining Applications", href: "/Media_1/research/Ostrem_GRADS_26_V1.pdf" },
      { title: "A Circularly Polarized Patch Antenna System for Mining Communications", href: "/Projects/research/CP_Mining.pdf" },
      { title: "Antenna Simulation and Design for Underground Localization Systems", href: "/Projects/UGRADS/Silje_antenna_sim.pdf" },
      { title: "Towards the Design of a Non-invasive Glucose Monitoring Sensor", href: "/Media_1/research/Silje_ACES_Presentation_V2.pdf" },
    ],
    sections: ["past-ms", "past-undergrad"],
  },

  // ── PAST UNDERGRAD ────────────────────────────────────────────────────────────
  {
    id: "homza",
    name: "Jonathan Homza",
    photo: "/Media_1/portraits/Jonathan_Homza.png",
    researchInterests: "Computational electromagnetics and space communications.",
    sections: ["past-undergrad"],
  },
  {
    id: "malensek",
    name: "Aidan Malensek",
    photo: "/Media_1/portraits/Aiden_G.Portrait.jpg",
    researchInterests: "Narrowband Electronically Steerable Arrays (ESA), RFID, spacecraft communication systems.",
    linkedin: "https://www.linkedin.com/in/aidan-malensek/",
    sections: ["past-undergrad"],
  },
  {
    id: "moore",
    name: "Thomas Moore",
    photo: "/Media_1/portraits/TMoore.jpg",
    researchInterests: "High speed board design, radar applications, and antenna design.",
    linkedin: "https://www.linkedin.com/in/thomasjamesm/",
    sections: ["past-undergrad"],
  },
  {
    id: "elmiladi",
    name: "Lisa Elmiladi",
    photo: "/Media_1/portraits/lelmiladi.jpg",
    researchInterests: "Embedded system design, wireless/RF communications, and non-invasive medical technology.",
    linkedin: "https://www.linkedin.com/in/lisa-elmiladi-9aa869211/",
    projects: [
      { title: "Wireless Monitoring of S-Parameters using a Nano-VNA for Biomedical Applications", href: "/Media_1/research/VNA Remote Sensing_Kenny_Lisa_AE_Edits.pdf" },
    ],
    sections: ["past-undergrad"],
  },
  {
    id: "morrison",
    name: "Aiden Morrison",
    photo: "/Media_1/portraits/Aiden_M.jpg",
    researchInterests: "Antennas in aerospace applications.",
    linkedin: "https://www.linkedin.com/in/aidenmorrison/",
    sections: ["past-undergrad"],
  },
  {
    id: "hora",
    name: "Kenny Hora",
    photo: "/Media_1/portraits/khora.jpg",
    researchInterests: "Embedded development, RFID localization, and SDR.",
    linkedin: "https://www.linkedin.com/in/kenny-hora/",
    projects: [
      { title: "Wireless Communication System for Smart Bits on Horizontal Drilling Machines", href: "/Projects/UGRADS/Kenny_mining.pdf" },
      { title: "Comparing Printed and Milled Patch Antenna at 10 GHz", href: "/Projects/UGRADS/Kenny_printed_pathc.pdf" },
      { title: "Sensor Data Relay System for Underground Mine Communications", href: "/Media_1/research/Collin_kenny_Sensor Data Relay_AE.pdf" },
    ],
    sections: ["past-ms", "past-undergrad"],
  },
  {
    id: "vath",
    name: "Charles Vath",
    photo: "/Media_1/portraits/cvath.jpg",
    researchInterests: "Computational electromagnetics and electromagnetic education via field visualizations and software programs.",
    projects: [
      { title: "Electromagnetic Visualization and Interaction Tools to Aid EM Education", href: "/Projects/UGRADS/Mines_Undergraduate_Research_Poster_Vath.pdf" },
      { title: "An Interactive Visualization of Electrostatic Electric Field and Potential Distribution", href: "/Media_1/research/Vath_ACES_Presentation_Atef_Edit.pdf" },
    ],
    sections: ["past-undergrad"],
  },
  {
    id: "nightengale",
    name: "Madeleine Nightengale-Luhan",
    photo: "/Media_1/portraits/M_Night.jpeg",
    researchInterests: "Antenna theory and design, SDR applications, microwave devices, and RF systems.",
    sections: ["past-undergrad"],
  },
  {
    id: "wolf",
    name: "Trevor Wolf",
    photo: "/Media_1/portraits/t_wolf.jpg",
    researchInterests: "SDR, RFID, and satellite communication.",
    linkedin: "https://www.linkedin.com/in/trevorwolf/",
    projects: [
      { title: "Hardware and Software Development of Antenna Demonstration Module", href: "/Projects/UGRADS/Antenna Demonstration Poster.pdf" },
      { title: "Sensor Data Relay System for Underground Mine Communications", href: "/Media_1/research/Collin_kenny_Sensor Data Relay_AE.pdf" },
    ],
    sections: ["past-undergrad"],
  },
  {
    id: "hutchinson",
    name: "Spencer Hutchinson",
    photo: "/Media_1/portraits/shutchinson_square-2.jpg",
    researchInterests: "Chipless RFID, RFID localization and applications.",
    projects: [
      { title: "Chipless RFID Tag Design", href: "/Media_1/research/shutchinson_chipless.pdf" },
    ],
    sections: ["past-undergrad"],
  },
  {
    id: "tanner",
    name: "Allison Tanner",
    photo: "/Media_1/portraits/atanner_square.jpg",
    researchInterests: "Finite Difference Time Domain time reversal.",
    projects: [
      { title: "Time Reversal Using the FDTD Method", href: "/Media_1/research/atanner_timereversal.pdf" },
    ],
    sections: ["past-undergrad"],
  },
  {
    id: "martinez",
    name: "Grace Martinez",
    photo: "/Media_1/portraits/gmartinez.jpg",
    researchInterests: "Advancing the efficacy of implantable antennas in medical devices.",
    linkedin: "https://www.linkedin.com/in/grace-martinez-587952232/",
    sections: ["past-undergrad"],
  },
];

// Helper to filter by section
export function getPeople(section: Person["sections"][number]): Person[] {
  return people.filter((p) => p.sections.includes(section));
}
