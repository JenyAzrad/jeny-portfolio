import p1 from "./assets/p1.jpg";
import p2 from "./assets/p2.jpg";
import p3 from "./assets/p3.jpg";
import d_sales from "./assets/dash/sales.jpg";
import d_users from "./assets/dash/users.jpg";
import d_products from "./assets/dash/products.jpg";
import d_logistics from "./assets/dash/logistics.jpg";
import d_trends from "./assets/dash/trends.jpg";
import d_insights from "./assets/dash/insights.jpg";

// Language-independent data: links, icons, images, colors.
// All visible text lives in src/content/en.js and src/content/he.js (same order as the lists here).

export const EMAIL = "evgenia2006@gmail.com";
export const GITHUB_PROFILE = "https://github.com/JenyAzrad";
export const LINKEDIN = "https://www.linkedin.com/in/jeny-azrad-4385438a/";
export const REPO = "https://github.com/JenyAzrad/Data-Analyst-Projects";
export const PBIX_BLOB = REPO + "/blob/main/amazon.pbix";
export const PBIX_RAW = "https://github.com/JenyAzrad/Data-Analyst-Projects/raw/main/amazon.pbix";

export const NAV_IDS = ["home", "about", "projects", "skills", "background", "contact"];

// [name, background, text color]
export const chips = [["SQL", "#1A5B8A"], ["Python", "#3776AB"], ["Pandas", "#6B3FD1"], ["Excel", "#1D6F42"], ["Power BI", "#F2C811", "#082B4C"]];

export const factIcons = ["bag", "bar", "ux", "bar"];
export const skillIcons = ["bar", "bar", "eye", "pc"];
export const timelineIcons = ["cap", "ux", "pc", "bar", "user"];
export const whyIcons = ["target", "pc", "eye", "bag"];

export const projects = [
  { icon: "db", tags: ["SQL", "SQL Server", "Data Modeling"], img: p3, url: REPO + "/blob/main/project1_Amazon.sql" },
  { icon: "py", tags: ["Python", "Pandas", "Jupyter"], img: p1, url: REPO + "/blob/main/project3B.ipynb" },
  { icon: "bar", tags: ["Power BI", "DAX", "Power Query"], img: p2, images: [d_sales, d_users, d_products, d_logistics, d_trends, d_insights], url: "#/amazon-dashboard" },
];

// Color of each technology tag on the project cards
export const tagColors = {"SQL":"#4FA3E8","SQL Server":"#F0605D","Data Modeling":"#34D399","Python":"#FFD43B","Pandas":"#A78BFA","Jupyter":"#FF9F43","Power BI":"#F2C811","DAX":"#38BDF8","Power Query":"#34D399"};

// Power BI dashboard page
export const dashboardKpiValues = ["4.46M", "500", "181", "307"];
export const dashboardImages = [d_sales, d_users, d_products, d_logistics, d_trends, d_insights];
export const dashboardAboutIcons = ["db", "db", "bar", "target"];
