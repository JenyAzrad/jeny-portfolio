import p1 from "./assets/p1.jpg";
import p2 from "./assets/p2.jpg";
import p3 from "./assets/p3.jpg";
import d_sales from "./assets/dash/sales.jpg";
import d_users from "./assets/dash/users.jpg";
import d_products from "./assets/dash/products.jpg";
import d_logistics from "./assets/dash/logistics.jpg";
import d_trends from "./assets/dash/trends.jpg";
import d_insights from "./assets/dash/insights.jpg";

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
  { icon: "bar", title: "Amazon E-Commerce", subtitle: "Power BI Analysis", tags: ["Power BI", "DAX", "Power Query"], desc: "Interactive Power BI dashboard covering sales, customers, products, returns and delivery performance.", keywords: ["Data modeling & DAX", "KPI analysis & trends", "Customer & product performance", "Return & shipping rates"],  img: p2, images: [d_sales, d_users, d_products, d_logistics, d_trends, d_insights], url: "#/amazon-dashboard", cta: "View Dashboard" },
];

export const timeline = [
  ["cap", "2001–2003", "Technion", ["Practical Engineering", "Interactive Communication, Multimedia & Internet"]],
  ["ux", "2004–2018", "UX/UI Designer", ["Yad2 · Founding team member", "Wireframes, prototypes, Figma"]],
  ["pc", "2018–2025", "Frontend Developer", ["Yad2", "React, Vue, JavaScript, HTML5 & SCSS"]],
  ["bar", "2026", "Data Analytics", ["John Bryce", "Completed with honors"]],
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

// ---- Power BI dashboard page ----
export const PBIX_BLOB = REPO + "/blob/main/amazon.pbix";
export const PBIX_RAW = "https://github.com/JenyAzrad/Data-Analyst-Projects/raw/main/amazon.pbix";

export const dashboardKpis = [["4.46M", "Total sales"], ["500", "Purchases"], ["181", "Users"], ["307", "Sellers"]];

export const dashboardPages = [
  { label: "Sales", title: "Sales Overview", desc: "Total sales, revenue and performance by category, brand and location.", img: d_sales,
    points: ["4.46M in total sales across 500 purchases", "Electronics drives about 60% of sales", "Filter by year, quarter, month and category"] },
  { label: "Users", title: "Users Overview", desc: "Customer behaviors, segments and purchase patterns.", img: d_users,
    points: ["181 users with an average purchase value of 8.92K", "Return rate and users split by device", "Payment methods compared by users and sales"] },
  { label: "Products", title: "Products Overview", desc: "Top products, categories and ratings.", img: d_products,
    points: ["315 products with an average rating of 3.92", "Return rate by discount bins", "Average discount, price and reviews per product"] },
  { label: "Logistics", title: "Logistics and Delivery Overview", desc: "Delivery performance, returns and shipping metrics.", img: d_logistics,
    points: ["Average shipping days, on-time delivery and return rate", "Shipping days by city and delivery status breakdown", "Return reasons by total sales"] },
  { label: "Trends", title: "Trends & Forecast", desc: "Sales trends, forecast and key insights.", img: d_trends,
    points: ["Year-over-year growth by year and quarter", "Sales compared with last year by category", "Forecast with a confidence band through 2028"] },
  { label: "Insights", title: "Key Insights & Conclusions", desc: "Executive summary of sales, customers, products and delivery performance.", img: d_insights,
    points: ["Electronics accounts for about 60% of total sales", "Beauty has the most purchases, but not the highest value", "No single KPI explains performance, so use several together"] },
];

export const dashboardAbout = [
  ["db", "Source", "Amazon e-commerce dataset"],
  ["db", "Data preparation", "SQL Server + Power Query"],
  ["bar", "Analysis & visualization", "Power BI"],
  ["target", "DAX", "KPIs, time intelligence, ranking and comparative analysis"],
];
