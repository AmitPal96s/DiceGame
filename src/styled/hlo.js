


// 1. Define raw pixel sizes
export const size = {
  mobileS: "320px",   // Small phones
  mobileM: "375px",   // Standard phones
  mobileL: "480px",   // Large phones
  tablet: "768px",    // Tablets
  laptop: "1024px",   // Small laptops
  desktop: "1200px",  // Desktops
  desktopL: "1440px", // Large screens
};

// 2. Create device media query strings
export const media = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktopL})`,
};