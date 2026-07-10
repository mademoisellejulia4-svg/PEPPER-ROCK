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
