import localFont from "next/font/local";

export const displayFont = localFont({
  src: [
    {
      path: "../fonts/playfair-display-variable.woff2",
      weight: "400 700",
      style: "normal",
    },
    {
      path: "../fonts/playfair-display-italic-variable.woff2",
      weight: "400 600",
      style: "italic",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

export const sansFont = localFont({
  src: [
    {
      path: "../fonts/jost-variable.woff2",
      weight: "300 600",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});
