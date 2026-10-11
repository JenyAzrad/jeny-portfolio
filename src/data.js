import p1 from "./assets/p1.jpg";
import p2 from "./assets/p2.jpg";
import p3 from "./assets/p3.jpg";

export const EMAIL = "evgenia2006@gmail.com";
export const GITHUB_PROFILE = "https://github.com/JenyAzrad";
export const LINKEDIN = "https://www.linkedin.com/in/jeny-azrad-4385438a/";
export const REPO = "https://github.com/JenyAzrad/Data-Analyst-Projects";

export const NAV = [["Home", "home"], ["About", "about"], ["Projects", "projects"], ["Skills", "skills"], ["Background", "background"], ["Contact", "contact"]];

// [name, background, text color]
export const chips = [["SQL", "#1A5B8A"], ["Python", "#3776AB"], ["Pandas", "#6B3FD1"], ["Excel", "#1D6F42"], ["Power BI", "#F2C811", "#082B4C"]];

export const facts = [["bag", "20+ Years", "in Technology"], ["bar", "Data Analytics", "SQL · Python · BI"], ["ux", "UX/UI Background", "Strong visual eye"], ["bar", "Dashboard Design", "Clear & intuitive"]];

export const skills = [
  ["bar", "Data Analysis", ["SQL · Python · Pandas · Excel"]],
  ["bar", "Business Intelligence", ["Power BI · DAX · Power Query"]],
  ["eye", "Data Visualization", ["Dashboard Design · Data Visualization", "KPI Analysis"]],
  ["pc", "Technical Background", ["React · JavaScript · HTML · CSS", "Git"]],
];

export const projects = [
  { icon: "db", title: "Amazon E-Commerce", subtitle: "Data Analysis", tags: ["SQL", "SQL Server", "Data Modeling"], desc: "End-to-end SQL analysis of an Amazon e-commerce dataset: data cleaning, relational modeling, KPIs and product insights.", keywords: ["Data cleaning", "JOINs & subqueries", "CTEs & window functions", "Business KPIs"],  img: p3, url: REPO + "/blob/main/project1_Amazon.sql", cta: "View Project" },
  { icon: "py", title: "Employee Attrition", subtitle: "Analysis", tags: ["Python", "Pandas", "Jupyter"], desc: "Exploratory analysis in Python and Pandas to identify the factors behind employee turnover.", keywords: ["Missing values", "GroupBy & pivot tables", "Correlations & outliers", "Visual insights"],  img: p1, url: REPO + "/blob/main/project3B.ipynb", cta: "View Project" },
  { icon: "bar", title: "Amazon E-Commerce", subtitle: "Power BI Analysis", tags: ["Power BI", "DAX", "Power Query"], desc: "Interactive Power BI dashboard covering sales, customers, products, returns and delivery performance.", keywords: ["Data modeling & DAX", "KPI analysis & trends", "Customer & product performance", "Return & shipping rates"],  img: p2, url: REPO + "/blob/main/amazon.pbix", cta: "View Dashboard" },
];

export const timeline = [
  ["cap", "2001–2003", "Technion", ["Practical Engineering", "Interactive Communication, Multimedia & Internet"]],
  ["pc", "2004–2025", "Technology / UX/UI", ["Web Design / Frontend", "Yad2 & High-Tech"]],
  ["bar", "2026", "Data Analytics", ["John Bryce", "Turning data into insights"]],
  ["user", "Today", "Data Analyst", ["Turning data into insights"]],
];

export const why = [
  ["target", "Analytical Thinking", "I enjoy turning raw data into meaningful insights."],
  ["pc", "Technical Background", "Strong understanding of technology and software development."],
  ["eye", "Visual Thinking", "UX/UI experience helps me create dashboards that are clear, intuitive and easy to understand."],
  ["bag", "Business Perspective", "I focus not only on calculating metrics, but on understanding what they mean for the business."],
];

// Color of each technology tag on the project cards
export const tagColors = {"SQL": "#4FA3E8", "SQL Server": "#F0605D", "Data Modeling": "#34D399", "Python": "#FFD43B", "Pandas": "#A78BFA", "Jupyter": "#FF9F43", "Power BI": "#F2C811", "DAX": "#38BDF8", "Power Query": "#34D399"};
