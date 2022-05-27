const SHOP_DATA = [
  {
    id: 1,
    section: "Massas",
    items: [
      {
        id: 1,
        name: "Massa 1",
        imageUrl: "https://i.imgur.com/cd3fc0G.jpg",
        price: 25,
        servings: 1,
        description: "Deliciosas massas com varias opcoes!",
        options: [
          {
            id: 1,
            section: "Molho",
            items: [
              { id: "Molho", name: "Espagnole", price: 5.49 },
              { id: "Molho", name: "Béchamel", price: 5.0 },
              { id: "Molho", name: "Velouté", price: 5.34 },
              { id: "Molho", name: "Hollandaise", price: 5.0 },
            ],
          },
          {
            id: 2,
            section: "Tempero",
            items: [
              { id: "Tempero", name: "Tempero 1", price: 5.49 },
              { id: "Tempero", name: "Tempero 2", price: 0 },
              { id: "Tempero", name: "Tempero 3", price: 0 },
              { id: "Tempero", name: "Tempero 4", price: 0 },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Massa 2",
        imageUrl: "https://i.imgur.com/wMx2a7O.jpg",
        price: 18,
        servings: 2,
        description: "Deliciosas massas com varias opcoes!",
        options: [
          {
            id: 1,
            section: "Molho",
            items: [
              { id: "Molho", name: "Espagnole", price: 5.49 },
              { id: "Molho", name: "Béchamel", price: 5.0 },
              { id: "Molho", name: "Velouté", price: 5.34 },
              { id: "Molho", name: "Hollandaise", price: 5.0 },
            ],
          },
          {
            id: 2,
            section: "Tempero",
            items: [
              { id: "Tempero", name: "Tempero 1", price: 5.49 },
              { id: "Tempero", name: "Tempero 2", price: 0 },
              { id: "Tempero", name: "Tempero 3", price: 0 },
              { id: "Tempero", name: "Tempero 4", price: 0 },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "Massa 3",
        imageUrl: "https://i.imgur.com/EKS2eGZ.jpg",
        price: 35,
        servings: 4,
        description: "Deliciosas massas com varias opcoes!",
        options: [],
      },
      {
        id: 4,
        name: "Massa 4",
        imageUrl: "https://i.imgur.com/2CU0ViU.jpg",
        price: 25,
        servings: 5,
        description: "Deliciosas massas com varias opcoes!",
        options: [],
      },
      {
        id: 5,
        name: "Massa 5",
        imageUrl: "https://i.imgur.com/GWL2sDT.jpg",
        price: 18,
        servings: 1,
        description: "Deliciosas massas com varias opcoes!",
        options: [],
      },
      {
        id: 6,
        name: "Massa 6",
        imageUrl: "https://i.imgur.com/5ibIQDk.jpg",
        price: 14,
        servings: 1,
        description: "Deliciosas massas com varias opcoes!",
        options: [],
      },
      {
        id: 7,
        name: "Massa 7",
        imageUrl: "https://i.imgur.com/GSryRl9.jpg",
        price: 18,
        servings: 1,
        description: "Deliciosas massas com varias opcoes!",
        options: [],
      },
      {
        id: 8,
        name: "Massa 8",
        imageUrl: "https://i.imgur.com/thIbLgh.jpg",
        price: 14,
        servings: 1,
        description: "Deliciosas massas com varias opcoes!",
        options: [],
      },
      {
        id: 9,
        name: "Massa 9",
        imageUrl: "https://i.imgur.com/aVjUZ1j.jpg",
        price: 16,
        servings: 1,
        description: "Deliciosas massas com varias opcoes!",
        options: [],
      },
    ],
  },
  {
    id: 2,
    section: "Bebidas",
    items: [
      {
        id: 10,
        name: "Refrigerante Lata",
        imageUrl: "https://i.imgur.com/OJvK41Z.jpg",
        price: 5,
        description: "Lata 350ml",
        options: ["Coca-Cola", "Fanta", "Guarana"],
      },
      {
        id: 11,
        name: "Refrigerante 1L",
        imageUrl: "https://i.imgur.com/OJvK41Z.jpg",
        price: 18,
        description: "1 Litro",
        options: ["Coca-Cola", "Fanta", "Guarana"],
      },
      {
        id: 12,
        name: "Refrigerante 2L",
        imageUrl: "https://i.imgur.com/OJvK41Z.jpg",
        price: 9.9,
        description: "2 Litros",
        options: ["Coca-Cola", "Fanta", "Guarana"],
      },
    ],
  },
];

export default SHOP_DATA;