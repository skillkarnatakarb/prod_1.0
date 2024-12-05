// companiesSec1.js
const customCompanies = [
  {
    id: 1,
    name: "Tech Mahindra",
    image: `${process.env.PUBLIC_URL}/Assets/techmahindra.png`, // Replace with the correct image path
    date: "20 - Nov - 2024",
    jobRole: "Python Developer", // Updated to job role
    url: "https://rankbook.codedamn.org/exam/rxxfoxsw12hghwnivmndl ",
  },
  {
    id: 2,
    name: "Cognitive Clouds",
    image: `${process.env.PUBLIC_URL}/Assets/cognitiveclouds.png`, // Replace with the correct image path
    date: "20 - Nov - 2024",
    jobRole: "Reactjs Developer", // Updated to job role
    url: "https://rankbook.codedamn.org/exam/itr2hjl0vahqblurbtnjz",
  },
  {
    id: 3,
    name: "Razorpay",
    image: `${process.env.PUBLIC_URL}/Assets/razorpay.png`, // Replace with the correct image path
    date: "22 - Nov - 2024",
    jobRole: "Software Engineer", // Updated to job role
    url: "https://rankbook.codedamn.org/exam/lbxriqcnse5mw_qdhhjzp",
  },
  {
    id: 4,
    name: "LTI Mindtree",
    image: `${process.env.PUBLIC_URL}/Assets/ltimindtree.png`, // Replace with the correct image path
    date: "23 - Nov - 2024",
    jobRole: "Python Developer", // Updated to job role
    url: "https://rankbook.codedamn.org/exam/rxxfoxsw12hghwnivmndl ",
  },
  {
    id: 5,
    name: "Motorolo solutions",
    image: `${process.env.PUBLIC_URL}/Assets/motorolo.png`, // Replace with the correct image path
    date: "24 - Nov - 2024",
    jobRole: "Software Developer", // Updated to job role
    url: "https://rankbook.codedamn.org/exam/lbxriqcnse5mw_qdhhjzp",
  },
  {
    id: 6,
    name: "Ey",
    image: `${process.env.PUBLIC_URL}/Assets/ey.png`, // Replace with the correct image path
    date: "24 - Nov - 2024",
    jobRole: "Data Analyst", // Updated to job role
    url: "https://rankbook.codedamn.org/exam/0dxafnh8lvzowdffak3yv",
  },
  {
    id: 7,
    name: "Green Tiger Mobility",
    image: `${process.env.PUBLIC_URL}/Assets/Green_Tiger_Mobility.png`, // Replace with the correct image path
    date: "24 - Nov - 2024",
    jobRole: "Frontend Developer", // Updated to job role
    url: "https://rankbook.codedamn.org/exam/itr2hjl0vahqblurbtnjz",
  },

  {
    id: 8,
    name: "Kriya Nextwealth",
    image: `${process.env.PUBLIC_URL}/Assets/kriya.png`, // Replace with the correct image path
    date: "24 - Nov - 2024",
    jobRole: "Business Analyst", // Updated to job role
    url: "https://rankbook.codedamn.org/exam/z0j7lt_lroww0efhxh1uu",
  },
  {
    id: 9,
    name: "Dollar Bird",
    image: `${process.env.PUBLIC_URL}/Assets/dollarbird.png`, // Replace with the correct image path
    date: "24 - Nov - 2024",
    jobRole: "BDE", // Updated to job role
    url: "https://rankbook.codedamn.org/exam/z0j7lt_lroww0efhxh1uu",
  },
  {
    id: 10,
    name: "Infopine",
    image: `${process.env.PUBLIC_URL}/Assets/infopine.png`, // Replace with the correct image path
    date: "24 - Nov - 2024",
    jobRole: "Quality Analyst", // Updated to job role
    url: "https://rankbook.codedamn.org/exam/z0j7lt_lroww0efhxh1uu",
  },
  {
    id: 11,
    name: "Vibrace",
    image: `${process.env.PUBLIC_URL}/Assets/vibrace.png`, // Replace with the correct image path
    date: "24 - Nov - 2024",
    jobRole: "MERN Developer", // Updated to job role
    url: "https://rankbook.codedamn.org/exam/itr2hjl0vahqblurbtnjz",
  },

  {
    id: 12,
    name: "Equaliser CRM",
    image: `${process.env.PUBLIC_URL}/Assets/equalize.png`, // Replace with the correct image path
    date: "24 - Nov - 2024",
    jobRole: "AR Executive", // Updated to job role
    url: "https://rankbook.codedamn.org/exam/z0j7lt_lroww0efhxh1uu",
  },
  {
    id: 13,
    name: "Kotak",
    image: `${process.env.PUBLIC_URL}/Assets/kotak.png`, // Replace with the correct image path
    date: "24 - Nov - 2024",
    jobRole: "Senior Executive", // Updated to job role
    url: "https://rankbook.codedamn.org/exam/z0j7lt_lroww0efhxh1uu",
  },
  {
    id: 14,
    name: "Tecchowff",
    image: `${process.env.PUBLIC_URL}/Assets/techowff.png`, // Replace with the correct image path
    date: "24 - Nov - 2024",
    jobRole: "DM Spcialist", // Updated to job role
    url: "https://rankbook.codedamn.org/exam/z0j7lt_lroww0efhxh1uu",
  },
  {
    id: 15,
    name: "TVS Electronics",
    image: `${process.env.PUBLIC_URL}/Assets/tvs.png`, // Replace with the correct image path
    date: "24 - Nov - 2024",
    jobRole: "Desktop Engineer", // Updated to job role
    url: "https://rankbook.codedamn.org/exam/z0j7lt_lroww0efhxh1uu",
  },
  // {
  //   id: 16,
  //   name: "Kriya Nextwealth",
  //   image: `${process.env.PUBLIC_URL}/Assets/sbi.png`, // Replace with the correct image path
  //   date: "24 - Nov - 2024",
  //   jobRole: "Human Resources", // Updated to job role
  //   url: "https://rankbook.codedamn.org/exam/z0j7lt_lroww0efhxh1uu",
  // },
  // {
  //   id: 15,
  //   name: "Kriya Nextwealth",
  //   image: `${process.env.PUBLIC_URL}/Assets/tata.png`, // Replace with the correct image path
  //   date: "24 - Nov - 2024",
  //   jobRole: "Power BI Analyst", // Updated to job role
  //   url: "https://rankbook.codedamn.org/exam/z0j7lt_lroww0efhxh1uu",
  // },
  // {
  //   id: 16,
  //   name: "Kriya Nextwealth",
  //   image: `${process.env.PUBLIC_URL}/Assets/sbi.png`, // Replace with the correct image path
  //   date: "24 - Nov - 2024",
  //   jobRole: "Cloud Architect", // Updated to job role
  //   url: "https://rankbook.codedamn.org/exam/z0j7lt_lroww0efhxh1uu",
  // },

  // {
  //   id: 15,
  //   name: "Kriya Nextwealth",
  //   image: `${process.env.PUBLIC_URL}/Assets/tata.png`, // Replace with the correct image path
  //   date: "24 - Nov - 2024",
  //   jobRole: "Cloud Engineer", // Updated to job role
  //   url: "https://rankbook.codedamn.org/exam/z0j7lt_lroww0efhxh1uu",
  // },
  // {
  //   id: 16,
  //   name: "Kriya Nextwealth",
  //   image: `${process.env.PUBLIC_URL}/Assets/sbi.png`, // Replace with the correct image path
  //   date: "24 - Nov - 2024",
  //   jobRole: "Network Engineer", // Updated to job role
  //   url: "https://rankbook.codedamn.org/exam/z0j7lt_lroww0efhxh1uu",
  // },



  // {
  //   id: 17,
  //   name: "Kriya Nextwealth",
  //   image: `${process.env.PUBLIC_URL}/Assets/tata.png`, // Replace with the correct image path
  //   date: "24 - Nov - 2024",
  //   jobRole: "Cloud AWS Engineer", // Updated to job role
  //   url: "https://rankbook.codedamn.org/exam/z0j7lt_lroww0efhxh1uu",
  // },
  // {
  //   id: 18,
  //   name: "Kriya Nextwealth",
  //   image: `${process.env.PUBLIC_URL}/Assets/sbi.png`, // Replace with the correct image path
  //   date: "24 - Nov - 2024",
  //   jobRole: "Security Engineer", // Updated to job role
  //   url: "https://rankbook.codedamn.org/exam/z0j7lt_lroww0efhxh1uu",
  // },



  // {
  //   id: 19,
  //   name: "Kriya Nextwealth",
  //   image: `${process.env.PUBLIC_URL}/Assets/tata.png`, // Replace with the correct image path
  //   date: "24 - Nov - 2024",
  //   jobRole: "Software Testing ", // Updated to job role
  //   url: "https://rankbook.codedamn.org/exam/z0j7lt_lroww0efhxh1uu",
  // },
  // {
  //   id: 20,
  //   name: "Kriya Nextwealth",
  //   image: `${process.env.PUBLIC_URL}/Assets/sbi.png`, // Replace with the correct image path
  //   date: "24 - Nov - 2024",
  //   jobRole: "Security Administrator", // Updated to job role
  //   url: "https://rankbook.codedamn.org/exam/z0j7lt_lroww0efhxh1uu",
  // },


  // {
  //   id: 21,
  //   name: "Kriya Nextwealth",
  //   image: `${process.env.PUBLIC_URL}/Assets/tata.png`, // Replace with the correct image path
  //   date: "24 - Nov - 2024",
  //   jobRole: "DevOps Engineer", // Updated to job role
  //   url: "https://rankbook.codedamn.org/exam/z0j7lt_lroww0efhxh1uu",
  // },
  // {
  //   id: 22,
  //   name: "Kriya Nextwealth",
  //   image: `${process.env.PUBLIC_URL}/Assets/sbi.png`, // Replace with the correct image path
  //   date: "24 - Nov - 2024",
  //   jobRole: "Project Manager", // Updated to job role
  //   url: "https://rankbook.codedamn.org/exam/z0j7lt_lroww0efhxh1uu",
  // },


  // {
  //   id: 23,
  //   name: "Kriya Nextwealth",
  //   image: `${process.env.PUBLIC_URL}/Assets/tata.png`, // Replace with the correct image path
  //   date: "24 - Nov - 2024",
  //   jobRole: "Backend Developer", // Updated to job role
  //   url: "https://rankbook.codedamn.org/exam/z0j7lt_lroww0efhxh1uu",
  // },
  // {
  //   id: 24,
  //   name: "Kriya Nextwealth",
  //   image: `${process.env.PUBLIC_URL}/Assets/sbi.png`, // Replace with the correct image path
  //   date: "24 - Nov - 2024",
  //   jobRole: "Accountant", // Updated to job role
  //   url: "https://rankbook.codedamn.org/exam/z0j7lt_lroww0efhxh1uu",
  // },

  
];

// List of diverse job roles
const jobRoles = [
  "Software Engineer",
  "Product Manager",
  "Data Analyst",
  "UX Designer",
  "Full Stack Developer",
  "Mechanical Engineer",
  "Customer Support Representative",
  "AI Specialist",
  "Cybersecurity Analyst",
  "Cloud Architect",
  "DevOps Engineer",
  "Business Analyst",
  "Marketing Strategist",
];

// Function to generate a random date in November 2024
const generateRandomDate = (startDay, endDay) => {
  const day = Math.floor(Math.random() * (endDay - startDay + 1)) + startDay;
  return `${day < 10 ? "0" : ""}${day} - Nov - 2024`;
};

// Generate 85 additional companies to total 90
const additionalCompanies = Array.from({ length: 0 }, (_, index) => ({
  id: index + 6, // Start from 6 to continue from the custom companies
  name: `Company ${index + 6}`,
  image: `${process.env.PUBLIC_URL}/Assets/company_logo.png`, // Example image path for generated companies
  date: generateRandomDate(25, 30), // Generate dates from 25th to 30th November
  jobRole: jobRoles[Math.floor(Math.random() * jobRoles.length)], // Random job role from the list
  url: "https://www.example.com",
}));

const companies = [...customCompanies, ...additionalCompanies]; // Combine both arrays

export default companies;
