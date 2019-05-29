import img1 from './images/image-01.png';
import img2 from './images/image-02.jpg';

export default [
  {
    id: 1,
    name: "Pesto Bruchetta",
    author: "Peter Carlsson",
    mainImageUrl: img1,
    ingredientsIconUrl:
      "https://www.gstatic.com/angular/material-adaptive/pesto/quick.png",
    description:
      "Bask in greens this season by trying this delightful take on traditional bruschetta. Top with a dollop of homemade pesto, and season with freshly ground sea salt and pepper.",
    ingredients: [
      { amount: "6 pieces", description: "Mozzarella cheese" },
      { amount: "6 pieces", description: "Toasts" },
      { amount: "⅔ cup", description: "Homemade pesto" },
      { amount: "1tbsp", description: "Freshly ground pepper" },
      { amount: "1 tsp", description: "Salt" }
    ]
  },
  {
    id: 2,
    name: "Rustic purple mash",
    author: "Trevor Hansen",
    mainImageUrl: img2,
    ingredientsIconUrl:
      "https://www.gstatic.com/angular/material-adaptive/pesto/veggie.png",
    description:
      "Abundant in color, and healthy, delicious goodness, cooking with these South American purple potatoes is a treat. Boil, mash, bake, or roast them. For taste cook with chicken stock, and a dash of extra virgin olive oil.",
    ingredients: [
      { amount: "2 lbs", description: "Purple potatoes, skin on" },
      { amount: "1 tbsp", description: "Salt" },
      { amount: "1 tbsp", description: "Lemon" },
      { amount: "2 cups", description: "Chicken stock" },
      { amount: "1tbsp", description: "Extra virgin olive oil" }
    ]
  }
];
