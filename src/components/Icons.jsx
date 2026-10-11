export const P={
 db:"M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
 bar:"M5 21V10M12 21V4M19 21v-8M3 21h18",
 ux:"M4 4h16v16H4zM4 10h16M10 10v10",
 eye:"M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 100 6 3 3 0 000-6z",
 pc:"M3 4h18v12H3zM8 20h8M12 16v4",
 bag:"M3 8h18v12H3zM8 8V5h8v3M3 13h18",
 cap:"M2 9l10-5 10 5-10 5zM6 11v5c3 2.5 9 2.5 12 0v-5",
 user:"M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4 4-6 8-6s8 2 8 6",
 target:"M12 3a9 9 0 100 18 9 9 0 000-18zM12 8a4 4 0 100 8 4 4 0 000-8z",
 mail:"M3 5h18v14H3zM3 6l9 7 9-7",
 py:"M12 3C8 3 8 5 8 6v2h4v1H6c-2 0-3 2-3 4s1 4 3 4h2v-3c0-2 2-3 3-3h4c1.500 0 2-1 2-2V6c0-2-2-3-4-3z"
};
export const CI={SQL:P.db,Python:P.py,Pandas:"M9 3v18M15 6v8M15 17v4M5 9h4M15 11h4",Excel:"M4 4h16v16H4zM8 8l8 8M16 8l-8 8","Power BI":"M6 20v-8M12 20V4M18 20V9"};

export const Ic = ({ n, p }) => (
  <span className={"ic" + (p ? " p" : "")} aria-hidden="true">
    <svg viewBox="0 0 24 24"><path d={P[n]} /></svg>
  </span>
);

export const ChipIcon = ({ name }) => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={CI[name]} />
  </svg>
);

export const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a11.500 11.500 0 00-3.600 22.400c.6.100.8-.3.8-.6v-2c-3.200.7-3.900-1.400-3.900-1.400-.5-1.300-1.300-1.700-1.300-1.700-1-.7.1-.7.1-.7 1.200.1 1.800 1.200 1.800 1.200 1 1.800 2.800 1.300 3.400 1 .1-.8.4-1.300.7-1.600-2.600-.3-5.300-1.300-5.300-5.700 0-1.300.5-2.300 1.200-3.100-.1-.3-.5-1.500.1-3.100 0 0 1-.3 3.200 1.200a11 11 0 015.800 0c2.200-1.500 3.200-1.200 3.200-1.200.6 1.600.2 2.800.1 3.100.8.800 1.200 1.800 1.200 3.100 0 4.400-2.700 5.400-5.300 5.700.4.400.8 1.100.8 2.200v3.200c0 .3.2.7.8.600A11.500 11.500 0 0012 .5z" /></svg>
);

export const FigmaLogo = () => (
  <svg viewBox="0 0 38 57" aria-hidden="true">
    <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
    <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
    <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
    <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
    <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
  </svg>
);
