const SHOP_DATA = [
  {
    title: "Entradas",
    items: [
      {
        title: "Endivias Recheadas com Creme de Salmão",
        imageUrl: "https://i.imgur.com/cd3fc0G.jpg",
        price: 25,
        servings: 1,
        description: "Experimente uma de nossas entradas!",
        options: [],
      },
      {
        title: "Lagarto em Conserva",
        imageUrl: "https://i.imgur.com/cd3fc0G.jpg",
        price: 25,
        servings: 1,
        description: "Experimente uma de nossas entradas!",
        options: [],
      },
      {
        title: "Mini Tapioca com Guacamole",
        imageUrl: "https://i.imgur.com/cd3fc0G.jpg",
        price: 25,
        servings: 1,
        description: "Experimente uma de nossas entradas!",
        options: [],
      },
      {
        title: "Pizza de Queijo Brie com Pera, Mel e Castanha de Caju",
        imageUrl: "https://i.imgur.com/cd3fc0G.jpg",
        price: 25,
        servings: 1,
        description: "Experimente uma de nossas entradas!",
        options: [],
      },
      {
        title: "Shitake com Grão de Bico",
        imageUrl: "https://i.imgur.com/cd3fc0G.jpg",
        price: 25,
        servings: 1,
        description: "Experimente uma de nossas entradas!",
        options: [],
      },
    ],
  },
  {
    title: "Massas Tradicionais",
    items: [
      {
        title: "Capelleti",
        imageUrl: "https://i.imgur.com/cd3fc0G.jpg",
        price: 25,
        servings: 1,
        description: "Deliciosas massas com varias opcoes!",
        options: [
          {
            title: "Recheio",
            items: [
              { id: "Recheio", name: "Queijo", price: 5.49 },
              { id: "Recheio", name: "Carne", price: 0 },
              { id: "Recheio", name: "Frango com Catupiry", price: 0 },
            ],
          },
          // {
          //   title: "Molho",
          //   items: [
          //     { id: "Molho", name: "Pomodoro", price: 5.49 },
          //     { id: "Molho", name: "Béchamel", price: 5.0 },
          //     { id: "Molho", name: "Velouté", price: 5.34 },
          //     { id: "Molho", name: "Hollandaise", price: 5.0 },
          //   ],
          // },
        ],
      },
      {
        title: "Conchigliones",
        imageUrl: "https://i.imgur.com/wMx2a7O.jpg",
        price: 18,
        servings: 2,
        description: "Deliciosas massas com varias opcoes!",
        options: [
          {
            title: "Recheio",
            items: [
              { id: "Recheio", name: "Ricota com Espinafre", price: 5.49 },
              {
                id: "Recheio",
                name: "Muçarela com Presunto e Catupiry",
                price: 5.0,
              },
              { id: "Recheio", name: "4 Queijos", price: 5.34 },
            ],
          },
          // {
          //   title: "Tempero",
          //   items: [
          //     { id: "Tempero", name: "Tempero 1", price: 5.49 },
          //     { id: "Tempero", name: "Tempero 2", price: 0 },
          //     { id: "Tempero", name: "Tempero 3", price: 0 },
          //     { id: "Tempero", name: "Tempero 4", price: 0 },
          //   ],
          // },
        ],
      },
      {
        title: "Lasanha",
        imageUrl: "https://i.imgur.com/EKS2eGZ.jpg",
        price: 35,
        servings: 4,
        description: "Deliciosas massas com varias opcoes!",
        options: [
          {
            title: "Recheio",
            items: [
              { id: "Recheio", name: "4 Queijos", price: 5.49 },
              {
                id: "Recheio",
                name: "Carne Seca com Abóbora",
                price: 5.0,
              },
              { id: "Recheio", name: "Queijo e Presunto", price: 5.34 },
              {
                id: "Recheio",
                name: "Bacalhau ao molho de Curry e Abobrinha",
                price: 5.2,
              },
            ],
          },
        ],
      },
      {
        title: "Nhoque",
        imageUrl: "https://i.imgur.com/2CU0ViU.jpg",
        price: 25,
        servings: 5,
        description: "Deliciosas massas com varias opcoes!",
        options: [
          {
            title: "Recheio",
            items: [
              { id: "Recheio", name: "Batata", price: 5.49 },
              {
                id: "Recheio",
                name: "Mandioquinha",
                price: 5.0,
              },
              { id: "Recheio", name: "Beterraba", price: 5.34 },
              {
                id: "Recheio",
                name: "Abóbora",
                price: 5.2,
              },
              {
                id: "Recheio",
                name: "Espinafre",
                price: 5,
              },
            ],
          },
        ],
      },
      {
        title: "Ravioli",
        imageUrl: "https://i.imgur.com/GWL2sDT.jpg",
        price: 18,
        servings: 1,
        description: "Deliciosas massas com varias opcoes!",
        options: [
          {
            title: "Recheio",
            items: [
              { id: "Recheio", name: "Queijo", price: 5.49 },
              {
                id: "Recheio",
                name: "Carne ",
                price: 5.0,
              },
              { id: "Recheio", name: "Frango com Catupiry", price: 5.34 },
              {
                id: "Recheio",
                name: "Carne Seca com Abóbora",
                price: 5.2,
              },
              {
                id: "Recheio",
                name: "Costela ao molho de Vinho",
                price: 5,
              },
              {
                id: "Recheio",
                name: "Gorgonzola com Maçã Caramelizada",
                price: 5,
              },
            ],
          },
        ],
      },
      {
        title: "Rondelli",
        imageUrl: "https://i.imgur.com/5ibIQDk.jpg",
        price: 14,
        servings: 1,
        description: "Deliciosas massas com varias opcoes!",
        options: [
          {
            title: "Recheio",
            items: [
              {
                id: "Recheio",
                name: "Queijo com Presunto e Catupiry",
                price: 5.49,
              },
              {
                id: "Recheio",
                name: "Muçarela com Manjericão Fresco",
                price: 5.0,
              },
              { id: "Recheio", name: "Frango com Catupiry", price: 5.34 },
              {
                id: "Recheio",
                name: "Muçarela com Tomate Seco e Rúcula",
                price: 5.2,
              },
              {
                id: "Recheio",
                name: "Ricota com Espinafre",
                price: 5,
              },
              {
                id: "Recheio",
                name: "4 Queijos",
                price: 5,
              },
            ],
          },
        ],
      },
      {
        title: "Sorrentino",
        imageUrl: "https://i.imgur.com/GSryRl9.jpg",
        price: 18,
        servings: 1,
        description: "Deliciosas massas com varias opcoes!",
        options: [
          {
            title: "Recheio",
            items: [
              {
                id: "Recheio",
                name: "Muçarela com Limão Siciliano",
                price: 5.49,
              },
              {
                id: "Recheio",
                name: "Búfala com Geléia de Pimenta",
                price: 5.0,
              },
              { id: "Recheio", name: "Frango com Catupiry", price: 5.34 },
              {
                id: "Recheio",
                name: "Gorgonzola com Alho Poró",
                price: 5.2,
              },
              {
                id: "Recheio",
                name: "Gorgonzola com Pera Caramelizada",
                price: 5,
              },
            ],
          },
        ],
      },
      {
        title: "Torta",
        imageUrl: "https://i.imgur.com/GSryRl9.jpg",
        price: 18,
        servings: 1,
        description: "Deliciosas massas com varias opcoes!",
        options: [
          {
            title: "Recheio",
            items: [
              {
                id: "Recheio",
                name: "Camarão",
                price: 5.49,
              },
              {
                id: "Recheio",
                name: "Frango",
                price: 5.0,
              },
              { id: "Recheio", name: "Frango com Catupiry", price: 5.34 },
              {
                id: "Recheio",
                name: "Palmito",
                price: 5.2,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Bebidas",
    items: [
      {
        title: "Refrigerante Lata",
        imageUrl: "https://i.imgur.com/OJvK41Z.jpg",
        price: 2.5,
        description: "Lata 350ml",
        options: [
          {
            title: "Refrigerante Lata",
            items: [
              { id: "Refrigerante Lata", name: "Coca", price: 0 },
              { id: "Refrigerante Lata", name: "Coca Zero", price: 0 },
              { id: "Refrigerante Lata", name: "Guarana", price: 0 },
              { id: "Refrigerante Lata", name: "Pepsi", price: 0 },
              { id: "Refrigerante Lata", name: "Fanta", price: 0 },
            ],
          },
        ],
      },
      {
        title: "Refrigerante 1L",
        imageUrl: "https://i.imgur.com/OJvK41Z.jpg",
        price: 5,
        description: "1 Litro",
        options: [
          {
            title: "Refrigerante 1L",
            items: [
              { id: "Refrigerante 1L", name: "Coca", price: 0 },
              { id: "Refrigerante 1L", name: "Coca Zero", price: 0 },
              { id: "Refrigerante 1L", name: "Guarana", price: 0 },
              { id: "Refrigerante 1L", name: "Pepsi", price: 0 },
              { id: "Refrigerante 1L", name: "Fanta", price: 0 },
            ],
          },
        ],
      },
      {
        title: "Refrigerante 2L",
        imageUrl: "https://i.imgur.com/OJvK41Z.jpg",
        price: 10,
        description: "2 Litros",
        options: [
          {
            title: "Refrigerante 2L",
            items: [
              { id: "Refrigerante 2L", name: "Coca", price: 0 },
              { id: "Refrigerante 2L", name: "Coca Zero", price: 0 },
              { id: "Refrigerante 2L", name: "Guarana", price: 0 },
              { id: "Refrigerante 2L", name: "Pepsi", price: 0 },
              { id: "Refrigerante 2L", name: "Fanta", price: 0 },
            ],
          },
        ],
      },
    ],
  },
];

export default SHOP_DATA;
