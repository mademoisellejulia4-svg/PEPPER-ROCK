export type Cocktail = {
  slug: string;
  name: string;
  tag?: string;
  badge?: string;
  description: string;
  ingredients: string;
  price: string;
  tint: [string, string];
  image?: string;
};

export type ClassicCocktail = {
  slug: string;
  name: string;
  note?: string;
  ingredients: string;
  price: string;
};

// The house classics list, Mai Tai first as the signature opener.
export const classicCocktails: ClassicCocktail[] = [
  {
    slug: "mai-tai",
    name: "Mai Tai",
    ingredients:
      "Havana 3yr Rum, Triple Sec, Captain Morgan Dark Rum, Lime Juice, Orgeat Syrup, Pineapple Juice, Orange Juice",
    price: "£8.50",
  },
  {
    slug: "pina-colada",
    name: "Piña Colada",
    ingredients: "Havana 3yr Rum, Malibu, Soya Milk, Pineapple Juice, Coconut Syrup",
    price: "£8.00",
  },
  {
    slug: "cosmopolitan",
    name: "Cosmopolitan",
    ingredients: "Triple Sec, Absolut Citron Vodka, Lime Juice, Cranberry Juice",
    price: "£7.50",
  },
  {
    slug: "sours",
    name: "Sours",
    note: "Amaretto or Whiskey or Midori",
    ingredients: "Foamer, Bitters, Lime Juice, Lemon Juice, Simple Syrup",
    price: "£8.50",
  },
  {
    slug: "french-martini",
    name: "French Martini",
    ingredients: "Absolut Vodka, Chambord, Pineapple Juice",
    price: "£7.50",
  },
  {
    slug: "gin-bramble",
    name: "Gin Bramble",
    ingredients: "Beefeater Gin, Crème de Mure, Lemon Juice, Simple Syrup",
    price: "£8.50",
  },
  {
    slug: "daiquiri",
    name: "Daiquiri",
    note: "Classic, Passionfruit or Strawberry",
    ingredients: "Havana 3yr Rum, Lime Juice, Flavoured Syrup",
    price: "£7.50",
  },
  {
    slug: "mojito",
    name: "Mojito",
    note: "Classic, Passionfruit or Strawberry",
    ingredients: "Havana 3yr Rum, Lime Juice, Limes, Mint, Soda, Flavoured Syrup",
    price: "£8.50",
  },
  {
    slug: "long-island-ice-tea",
    name: "Long Island Ice Tea",
    ingredients: "Tequila, Vodka, Gin, Rum, Triple Sec, Lemon Juice, Simple Syrup, Coke",
    price: "£8.50",
  },
  {
    slug: "negroni-classic",
    name: "Negroni",
    ingredients: "Campari, Bombay Sapphire Gin, Cinzano Rosso Vermouth, Orange Bitters",
    price: "£8.00",
  },
  {
    slug: "english-garden",
    name: "English Garden",
    ingredients: "Beefeater Gin, Strawberry Liqueur, Lemon Juice, Apple Juice, Elderflower Syrup",
    price: "£8.00",
  },
  {
    slug: "woo-woo",
    name: "Woo Woo",
    ingredients: "Archers, Absolut Vodka, Lime Juice, Cranberry Juice",
    price: "£7.50",
  },
  {
    slug: "paloma",
    name: "Paloma",
    ingredients: "Olmeca Blanco Tequila, Lime Juice, Pink Grapefruit Syrup, Lemonade",
    price: "£7.50",
  },
  {
    slug: "white-russian",
    name: "White Russian",
    ingredients: "Kahlua, Absolut Vanilia Vodka, Soya Milk, Vanilla Syrup",
    price: "£8.00",
  },
  {
    slug: "margarita",
    name: "Margarita",
    ingredients: "Triple Sec, Olmeca Blanco Tequila, Lime Juice, Agave",
    price: "£8.00",
  },
  {
    slug: "spicy-margarita",
    name: "Spicy Margarita",
    ingredients: "Triple Sec, Olmeca Blanco Tequila, Lime Juice, Agave, Tabasco",
    price: "£8.00",
  },
  {
    slug: "old-fashioned",
    name: "Old Fashioned",
    ingredients: "Bulleit Bourbon, Aromatic or Orange Bitters, Agave Syrup",
    price: "£9.50",
  },
  {
    slug: "espressotini-classic",
    name: "Espressotini",
    ingredients: "Absolut Vanilia Vodka, Kahlua, Cold Brew, Simple Syrup",
    price: "£8.00",
  },
];

export const cocktails: Cocktail[] = [
  {
    slug: "lychee-martini",
    name: "Lychee Martini",
    tag: "Pepper's Favourites",
    badge: "Signature",
    description: "Pepper Rocks' most-loved pour, served up in a coupe.",
    ingredients: "Kwai Feh · Licor 43 · Lemon juice · Apple juice · Lychee syrup",
    price: "£8.50",
    tint: ["#e9dcb8", "#a9843f"],
  },
  {
    slug: "mai-tai",
    name: "Mai Tai",
    tag: "The house favourite",
    badge: "Bestseller",
    description: "Three rums, orgeat and citrus — a tiki classic done right.",
    ingredients: "Havana 3yr Rum · Triple sec · Dark rum · Lime · Orgeat · Pineapple · Orange",
    price: "£8.50",
    tint: ["#e8a24a", "#8a4312"],
    image: "/assets/img/cocktails/mai-tai.jpg",
  },
  {
    slug: "peppers-pornstar",
    name: "Pepper's Pornstar",
    tag: "Pepper's Favourites",
    description: "Passionfruit and vanilla, bright and unapologetically fun.",
    ingredients: "Absolut Vodka · Passionfruit liqueur · Vanilla syrup · Lime · Mango · Pineapple",
    price: "£8.00",
    tint: ["#f4b8c4", "#c9612e"],
  },
  {
    slug: "cherry-bakewell",
    name: "Cherry Bakewell",
    tag: "Pepper's Favourites",
    description: "An English classic, shaken — dessert in a glass.",
    ingredients: "Cherry brandy · Amaretto · Cranberry juice · Lemon juice · Simple syrup",
    price: "£7.50",
    tint: ["#f3c6d0", "#7a1d3a"],
  },
  {
    slug: "negroni",
    name: "Negroni",
    description: "Equal parts bitter, bold and Nottingham after dark.",
    ingredients: "Campari · Bombay Sapphire Gin · Cinzano Rosso Vermouth · Orange bitters",
    price: "£8.00",
    tint: ["#c9522e", "#4a0e0a"],
  },
  {
    slug: "espressotini",
    name: "Espressotini",
    description: "Cold brew and vanilla vodka, for the ones who dance till close.",
    ingredients: "Absolut Vanilia Vodka · Kahlua · Cold brew · Simple syrup",
    price: "£8.00",
    tint: ["#8a5a2c", "#1a0f09"],
  },
];
