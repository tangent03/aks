import {
  affordableImg1,
  affordableImg2,
  hotelRoom01,
  hotelRoom02,
  hotelRoom03,
  RecommendedIcon,
} from "../assets/Images";

import {
  spaghettiImg,
  burgerImg,
  margaritaPizza,
  nachosImg,
  saladImg,
  icedCoffeImg,
  lemonadeImg,
  manogoLassiImg,
  mojitoImg,
  strawberryImg,
} from "../assets/foodImage";

const hotelData = [
  {
    id: 1,
    name: "AKS Night Retro Bar",
    avgRating: 4.8,
    noOfRating: "120+",
    distance: "2.8 km away",
    hotelImg: hotelRoom01,
    price: "$28",
    recommendedIcon: RecommendedIcon,
    affordablePackages: [
      {
        id: 1,
        name: "Bachelor",
        image: affordableImg1,
        foodItems: [
          {
            id: 1,
            itemName: "Caramello Spaghetti",
            price: 285,
            itemImg: spaghettiImg,
          },
          {
            id: 2,
            itemName: "Margarita Pizza",
            price: 350,
            itemImg: margaritaPizza,
          },
          {
            id: 3,
            itemName: "Caesar Salad",
            price: 200,
            itemImg: saladImg,
          },
        ],
        price: 835,
      },
      {
        id: 2,
        name: "Family",
        image: affordableImg2,
        foodItems: [
          {
            id: 4,
            itemName: "Grilled Chicken Burger",
            price: 420,
            itemImg: burgerImg,
          },
          {
            id: 5,
            itemName: "Classic Nachos",
            price: 250,
            itemImg: nachosImg,
          },
          {
            id: 6,
            itemName: "Iced Coffee",
            price: 150,
            itemImg: icedCoffeImg,
          },
        ],
        price: 820,
      },
      {
        id: 3,
        name: "Business",
        image: affordableImg1,
        foodItems: [
          {
            id: 7,
            itemName: "Strawberry Smoothie",
            price: 200,
            itemImg: strawberryImg,
          },
          {
            id: 8,
            itemName: "Mango Lassi",
            price: 120,
            itemImg: manogoLassiImg,
          },
          {
            id: 9,
            itemName: "Lemonade",
            price: 100,
            itemImg: lemonadeImg,
          },
        ],
        price: 420,
      },
      {
        id: 4,
        name: "Friend",
        image: affordableImg2,
        foodItems: [
          {
            id: 10,
            itemName: "Mojito",
            price: 180,
            itemImg: mojitoImg,
          },
          {
            id: 11,
            itemName: "Caesar Salad",
            price: 200,
            itemImg: saladImg,
          },
          {
            id: 12,
            itemName: "Classic Nachos",
            price: 250,
            itemImg: nachosImg,
          },
        ],
        price: 630,
      },
      {
        id: 5,
        name: "Couples",
        image: affordableImg1,
        foodItems: [
          {
            id: 13,
            itemName: "Grilled Chicken Burger",
            price: 420,
            itemImg: burgerImg,
          },
          {
            id: 14,
            itemName: "Caramello Spaghetti",
            price: 285,
            itemImg: spaghettiImg,
          },
          {
            id: 15,
            itemName: "Strawberry Smoothie",
            price: 200,
            itemImg: strawberryImg,
          },
        ],
        price: 905,
      },
    ],
    drinks: [
      { id: 16, itemName: "Mojito", price: 180, itemImg: mojitoImg },
      {
        id: 17,
        itemName: "Strawberry Smoothie",
        price: 200,
        itemImg: strawberryImg,
      },
      {
        id: 18,
        itemName: "Iced Coffee",
        price: 150,
        itemImg: icedCoffeImg,
      },
      {
        id: 19,
        itemName: "Mango Lassi",
        price: 120,
        itemImg: manogoLassiImg,
      },
      {
        id: 20,
        itemName: "Lemonade",
        price: 100,
        itemImg: lemonadeImg,
      },
    ],
  },
  {
    id: 2,
    name: "Ocean Breeze Hotel",
    avgRating: 4.5,
    noOfRating: "250+",
    distance: "1.5 km away",
    hotelImg: hotelRoom02,
    price: "$28",
    recommendedIcon: "",
    affordablePackages: [
      {
        id: 6,
        name: "Bachelor",
        image: affordableImg1,
        foodItems: [
          {
            id: 21,
            itemName: "Margarita Pizza",
            price: 350,
            itemImg: margaritaPizza,
          },
          {
            id: 22,
            itemName: "Grilled Chicken Burger",
            price: 420,
            itemImg: burgerImg,
          },
          {
            id: 23,
            itemName: "Lemonade",
            price: 100,
            itemImg: lemonadeImg,
          },
        ],
        price: 870,
      },
      {
        id: 7,
        name: "Family",
        image: affordableImg2,
        foodItems: [
          {
            id: 24,
            itemName: "Caramello Spaghetti",
            price: 285,
            itemImg: spaghettiImg,
          },
          {
            id: 25,
            itemName: "Classic Nachos",
            price: 250,
            itemImg: nachosImg,
          },
          {
            id: 26,
            itemName: "Mojito",
            price: 180,
            itemImg: mojitoImg,
          },
        ],
        price: 715,
      },
      {
        id: 8,
        name: "Business",
        image: affordableImg1,
        foodItems: [
          {
            id: 27,
            itemName: "Iced Coffee",
            price: 150,
            itemImg: icedCoffeImg,
          },
          {
            id: 28,
            itemName: "Caesar Salad",
            price: 200,
            itemImg: saladImg,
          },
          {
            id: 29,
            itemName: "Mango Lassi",
            price: 120,
            itemImg: manogoLassiImg,
          },
        ],
        price: 470,
      },
      {
        id: 9,
        name: "Friend",
        image: affordableImg2,
        foodItems: [
          {
            id: 30,
            itemName: "Strawberry Smoothie",
            price: 200,
            itemImg: strawberryImg,
          },
          {
            id: 31,
            itemName: "Grilled Chicken Burger",
            price: 420,
            itemImg: burgerImg,
          },
          {
            id: 32,
            itemName: "Classic Nachos",
            price: 250,
            itemImg: nachosImg,
          },
        ],
        price: 870,
      },
      {
        id: 10,
        name: "Couples",
        image: affordableImg1,
        foodItems: [
          {
            id: 33,
            itemName: "Caramello Spaghetti",
            price: 285,
            itemImg: spaghettiImg,
          },
          {
            id: 34,
            itemName: "Margarita Pizza",
            price: 350,
            itemImg: margaritaPizza,
          },
          {
            id: 35,
            itemName: "Iced Coffee",
            price: 150,
            itemImg: icedCoffeImg,
          },
        ],
        price: 785,
      },
    ],
    drinks: [
      {
        id: 36,
        itemName: "Lemonade",
        price: 100,
        itemImg: lemonadeImg,
      },
      { id: 37, itemName: "Mojito", price: 180, itemImg: mojitoImg },
      {
        id: 38,
        itemName: "Iced Coffee",
        price: 150,
        itemImg: icedCoffeImg,
      },
      {
        id: 39,
        itemName: "Strawberry Smoothie",
        price: 200,
        itemImg: strawberryImg,
      },
      {
        id: 40,
        itemName: "Mango Lassi",
        price: 120,
        itemImg: manogoLassiImg,
      },
    ],
  },
  {
    id: 3,
    name: "Skyline Cafe & Lounge",
    avgRating: 4.2,
    noOfRating: "300+",
    distance: "3.2 km away",
    hotelImg: hotelRoom03,
    price: "$28",
    recommendedIcon: "",
    affordablePackages: [
      {
        id: 11,
        name: "Bachelor",
        image: affordableImg1,
        foodItems: [
          {
            id: 41,
            itemName: "Classic Nachos",
            price: 250,
            itemImg: nachosImg,
          },
          {
            id: 42,
            itemName: "Iced Coffee",
            price: 150,
            itemImg: icedCoffeImg,
          },
          {
            id: 43,
            itemName: "Mojito",
            price: 180,
            itemImg: mojitoImg,
          },
        ],
        price: 580,
      },
      {
        id: 12,
        name: "Family",
        image: affordableImg2,
        foodItems: [
          {
            id: 44,
            itemName: "Caramello Spaghetti",
            price: 285,
            itemImg: spaghettiImg,
          },
          {
            id: 45,
            itemName: "Margarita Pizza",
            price: 350,
            itemImg: margaritaPizza,
          },
          {
            id: 46,
            itemName: "Strawberry Smoothie",
            price: 200,
            itemImg: strawberryImg,
          },
        ],
        price: 835,
      },
      {
        id: 13,
        name: "Business",
        image: affordableImg1,
        foodItems: [
          {
            id: 47,
            itemName: "Grilled Chicken Burger",
            price: 420,
            itemImg: burgerImg,
          },
          {
            id: 48,
            itemName: "Caesar Salad",
            price: 200,
            itemImg: saladImg,
          },
          {
            id: 49,
            itemName: "Lemonade",
            price: 100,
            itemImg: lemonadeImg,
          },
        ],
        price: 720,
      },
      {
        id: 14,
        name: "Friend",
        image: affordableImg2,
        foodItems: [
          {
            id: 50,
            itemName: "Mango Lassi",
            price: 120,
            itemImg: manogoLassiImg,
          },
          {
            id: 51,
            itemName: "Iced Coffee",
            price: 150,
            itemImg: icedCoffeImg,
          },
          {
            id: 52,
            itemName: "Mojito",
            price: 180,
            itemImg: mojitoImg,
          },
        ],
        price: 450,
      },
      {
        id: 15,
        name: "Couples",
        image: affordableImg1,
        foodItems: [
          {
            id: 53,
            itemName: "Strawberry Smoothie",
            price: 200,
            itemImg: strawberryImg,
          },
          {
            id: 54,
            itemName: "Grilled Chicken Burger",
            price: 420,
            itemImg: burgerImg,
          },
          {
            id: 55,
            itemName: "Classic Nachos",
            price: 250,
            itemImg: nachosImg,
          },
        ],
        price: 870,
      },
    ],
    drinks: [
      {
        id: 56,
        itemName: "Strawberry Smoothie",
        price: 200,
        itemImg: strawberryImg,
      },
      {
        id: 57,
        itemName: "Mango Lassi",
        price: 120,
        itemImg: manogoLassiImg,
      },
      {
        id: 58,
        itemName: "Iced Coffee",
        price: 150,
        itemImg: icedCoffeImg,
      },
      { id: 59, itemName: "Mojito", price: 180, itemImg: mojitoImg },
      {
        id: 60,
        itemName: "Lemonade",
        price: 100,
        itemImg: lemonadeImg,
      },
    ],
  },
  {
    id: 4,
    name: "Grand Paradise Inn",
    avgRating: 4.6,
    noOfRating: "180+",
    distance: "4.0 km away",
    hotelImg: hotelRoom01,
    price: "$28",
    recommendedIcon: RecommendedIcon,
    affordablePackages: [
      {
        id: 16,
        name: "Bachelor",
        image: affordableImg1,
        foodItems: [
          {
            id: 61,
            itemName: "Caesar Salad",
            price: 200,
            itemImg: saladImg,
          },
          {
            id: 62,
            itemName: "Grilled Chicken Burger",
            price: 420,
            itemImg: burgerImg,
          },
          {
            id: 63,
            itemName: "Lemonade",
            price: 100,
            itemImg: lemonadeImg,
          },
        ],
        price: 720,
      },
      {
        id: 17,
        name: "Family",
        image: affordableImg2,
        foodItems: [
          {
            id: 64,
            itemName: "Caramello Spaghetti",
            price: 285,
            itemImg: spaghettiImg,
          },
          {
            id: 65,
            itemName: "Classic Nachos",
            price: 250,
            itemImg: nachosImg,
          },
          {
            id: 66,
            itemName: "Mojito",
            price: 180,
            itemImg: mojitoImg,
          },
        ],
        price: 715,
      },
      {
        id: 18,
        name: "Business",
        image: affordableImg1,
        foodItems: [
          {
            id: 67,
            itemName: "Margarita Pizza",
            price: 350,
            itemImg: margaritaPizza,
          },
          {
            id: 68,
            itemName: "Iced Coffee",
            price: 150,
            itemImg: icedCoffeImg,
          },
          {
            id: 69,
            itemName: "Strawberry Smoothie",
            price: 200,
            itemImg: strawberryImg,
          },
        ],
        price: 700,
      },
      {
        id: 19,
        name: "Friend",
        image: affordableImg2,
        foodItems: [
          {
            id: 70,
            itemName: "Mango Lassi",
            price: 120,
            itemImg: manogoLassiImg,
          },
          {
            id: 71,
            itemName: "Caesar Salad",
            price: 200,
            itemImg: saladImg,
          },
          {
            id: 72,
            itemName: "Grilled Chicken Burger",
            price: 420,
            itemImg: burgerImg,
          },
        ],
        price: 740,
      },
      {
        id: 20,
        name: "Couples",
        image: affordableImg1,
        foodItems: [
          {
            id: 73,
            itemName: "Caramello Spaghetti",
            price: 285,
            itemImg: spaghettiImg,
          },
          {
            id: 74,
            itemName: "Mojito",
            price: 180,
            itemImg: mojitoImg,
          },
          {
            id: 75,
            itemName: "Classic Nachos",
            price: 250,
            itemImg: nachosImg,
          },
        ],
        price: 715,
      },
    ],
    drinks: [
      { id: 76, itemName: "Mojito", price: 180, itemImg: mojitoImg },
      {
        id: 77,
        itemName: "Iced Coffee",
        price: 150,
        itemImg: icedCoffeImg,
      },
      {
        id: 78,
        itemName: "Lemonade",
        price: 100,
        itemImg: lemonadeImg,
      },
      {
        id: 79,
        itemName: "Mango Lassi",
        price: 120,
        itemImg: manogoLassiImg,
      },
      {
        id: 80,
        itemName: "Strawberry Smoothie",
        price: 200,
        itemImg: strawberryImg,
      },
    ],
  },
  {
    id: 5,
    name: "Moonlight Diner",
    avgRating: 4,
    noOfRating: "90+",
    distance: "5.3 km away",
    hotelImg: hotelRoom02,
    price: "$28",
    recommendedIcon: "",
    affordablePackages: [
      {
        id: 21,
        name: "Bachelor",
        image: affordableImg1,
        foodItems: [
          {
            id: 81,
            itemName: "Margarita Pizza",
            price: 350,
            itemImg: margaritaPizza,
          },
          {
            id: 82,
            itemName: "Iced Coffee",
            price: 150,
            itemImg: icedCoffeImg,
          },
          {
            id: 83,
            itemName: "Mojito",
            price: 180,
            itemImg: mojitoImg,
          },
        ],
        price: 680,
      },
      {
        id: 22,
        name: "Family",
        image: affordableImg2,
        foodItems: [
          {
            id: 84,
            itemName: "Grilled Chicken Burger",
            price: 420,
            itemImg: burgerImg,
          },
          {
            id: 85,
            itemName: "Caesar Salad",
            price: 200,
            itemImg: saladImg,
          },
          {
            id: 86,
            itemName: "Strawberry Smoothie",
            price: 200,
            itemImg: strawberryImg,
          },
        ],
        price: 820,
      },
      {
        id: 23,
        name: "Business",
        image: affordableImg1,
        foodItems: [
          {
            id: 87,
            itemName: "Classic Nachos",
            price: 250,
            itemImg: nachosImg,
          },
          {
            id: 88,
            itemName: "Caramello Spaghetti",
            price: 285,
            itemImg: spaghettiImg,
          },
          {
            id: 89,
            itemName: "Mango Lassi",
            price: 120,
            itemImg: manogoLassiImg,
          },
        ],
        price: 655,
      },
      {
        id: 24,
        name: "Friend",
        image: affordableImg2,
        foodItems: [
          {
            id: 90,
            itemName: "Mojito",
            price: 180,
            itemImg: mojitoImg,
          },
          {
            id: 91,
            itemName: "Iced Coffee",
            price: 150,
            itemImg: icedCoffeImg,
          },
          {
            id: 92,
            itemName: "Lemonade",
            price: 100,
            itemImg: lemonadeImg,
          },
        ],
        price: 430,
      },
      {
        id: 25,
        name: "Couples",
        image: affordableImg1,
        foodItems: [
          {
            id: 93,
            itemName: "Strawberry Smoothie",
            price: 200,
            itemImg: strawberryImg,
          },
          {
            id: 94,
            itemName: "Grilled Chicken Burger",
            price: 420,
            itemImg: burgerImg,
          },
          {
            id: 95,
            itemName: "Caesar Salad",
            price: 200,
            itemImg: saladImg,
          },
        ],
        price: 820,
      },
    ],
    drinks: [
      {
        id: 96,
        itemName: "Lemonade",
        price: 100,
        itemImg: lemonadeImg,
      },
      {
        id: 97,
        itemName: "Iced Coffee",
        price: 150,
        itemImg: icedCoffeImg,
      },
      { id: 98, itemName: "Mojito", price: 180, itemImg: mojitoImg },
      {
        id: 99,
        itemName: "Mango Lassi",
        price: 120,
        itemImg: manogoLassiImg,
      },
      {
        id: 100,
        itemName: "Strawberry Smoothie",
        price: 200,
        itemImg: strawberryImg,
      },
    ],
  },
  {
    id: 6,
    name: "The Urban Stay",
    avgRating: 4.7,
    noOfRating: "200+",
    distance: "2.1 km away",
    hotelImg: hotelRoom03,
    price: "$28",
    recommendedIcon: "",
    affordablePackages: [
      {
        id: 26,
        name: "Bachelor",
        image: affordableImg1,
        foodItems: [
          {
            id: 101,
            itemName: "Grilled Chicken Burger",
            price: 420,
            itemImg: burgerImg,
          },
          {
            id: 102,
            itemName: "Mojito",
            price: 180,
            itemImg: mojitoImg,
          },
          {
            id: 103,
            itemName: "Iced Coffee",
            price: 150,
            itemImg: icedCoffeImg,
          },
        ],
        price: 750,
      },
      {
        id: 27,
        name: "Family",
        image: affordableImg2,
        foodItems: [
          {
            id: 104,
            itemName: "Caesar Salad",
            price: 200,
            itemImg: saladImg,
          },
          {
            id: 105,
            itemName: "Classic Nachos",
            price: 250,
            itemImg: nachosImg,
          },
          {
            id: 106,
            itemName: "Strawberry Smoothie",
            price: 200,
            itemImg: strawberryImg,
          },
        ],
        price: 650,
      },
      {
        id: 28,
        name: "Business",
        image: affordableImg1,
        foodItems: [
          {
            id: 107,
            itemName: "Margarita Pizza",
            price: 350,
            itemImg: margaritaPizza,
          },
          {
            id: 108,
            itemName: "Mojito",
            price: 180,
            itemImg: mojitoImg,
          },
          {
            id: 109,
            itemName: "Lemonade",
            price: 100,
            itemImg: lemonadeImg,
          },
        ],
        price: 630,
      },
      {
        id: 29,
        name: "Friend",
        image: affordableImg2,
        foodItems: [
          {
            id: 110,
            itemName: "Mango Lassi",
            price: 120,
            itemImg: manogoLassiImg,
          },
          {
            id: 111,
            itemName: "Iced Coffee",
            price: 150,
            itemImg: icedCoffeImg,
          },
          {
            id: 112,
            itemName: "Caesar Salad",
            price: 200,
            itemImg: saladImg,
          },
        ],
        price: 470,
      },
      {
        id: 30,
        name: "Couples",
        image: affordableImg1,
        foodItems: [
          {
            id: 113,
            itemName: "Grilled Chicken Burger",
            price: 420,
            itemImg: burgerImg,
          },
          {
            id: 114,
            itemName: "Classic Nachos",
            price: 250,
            itemImg: nachosImg,
          },
          {
            id: 115,
            itemName: "Strawberry Smoothie",
            price: 200,
            itemImg: strawberryImg,
          },
        ],
        price: 870,
      },
    ],
    drinks: [
      {
        id: 116,
        itemName: "Iced Coffee",
        price: 150,
        itemImg: icedCoffeImg,
      },
      { id: 117, itemName: "Mojito", price: 180, itemImg: mojitoImg },
      {
        id: 118,
        itemName: "Lemonade",
        price: 100,
        itemImg: lemonadeImg,
      },
      {
        id: 119,
        itemName: "Mango Lassi",
        price: 120,
        itemImg: manogoLassiImg,
      },
      {
        id: 120,
        itemName: "Strawberry Smoothie",
        price: 200,
        itemImg: strawberryImg,
      },
    ],
  },
  {
    id: 7,
    name: "Vintage Corner Bistro",
    avgRating: 4.3,
    noOfRating: "150+",
    distance: "3.8 km away",
    hotelImg: hotelRoom01,
    price: "$28",
    recommendedIcon: RecommendedIcon,
    affordablePackages: [
      {
        id: 31,
        name: "Bachelor",
        image: affordableImg1,
        foodItems: [
          {
            id: 121,
            itemName: "Caesar Salad",
            price: 200,
            itemImg: saladImg,
          },
          {
            id: 122,
            itemName: "Grilled Chicken Burger",
            price: 420,
            itemImg: burgerImg,
          },
          {
            id: 123,
            itemName: "Mojito",
            price: 180,
            itemImg: mojitoImg,
          },
        ],
        price: 800,
      },
      {
        id: 32,
        name: "Family",
        image: affordableImg2,
        foodItems: [
          {
            id: 124,
            itemName: "Margarita Pizza",
            price: 350,
            itemImg: margaritaPizza,
          },
          {
            id: 125,
            itemName: "Iced Coffee",
            price: 150,
            itemImg: icedCoffeImg,
          },
          {
            id: 126,
            itemName: "Lemonade",
            price: 100,
            itemImg: lemonadeImg,
          },
        ],
        price: 600,
      },
      {
        id: 33,
        name: "Business",
        image: affordableImg1,
        foodItems: [
          {
            id: 127,
            itemName: "Classic Nachos",
            price: 250,
            itemImg: nachosImg,
          },
          {
            id: 128,
            itemName: "Strawberry Smoothie",
            price: 200,
            itemImg: strawberryImg,
          },
          {
            id: 129,
            itemName: "Mango Lassi",
            price: 120,
            itemImg: manogoLassiImg,
          },
        ],
        price: 570,
      },
      {
        id: 34,
        name: "Friend",
        image: affordableImg2,
        foodItems: [
          {
            id: 130,
            itemName: "Grilled Chicken Burger",
            price: 420,
            itemImg: burgerImg,
          },
          {
            id: 131,
            itemName: "Caesar Salad",
            price: 200,
            itemImg: saladImg,
          },
          {
            id: 132,
            itemName: "Mojito",
            price: 180,
            itemImg: mojitoImg,
          },
        ],
        price: 800,
      },
      {
        id: 35,
        name: "Couples",
        image: affordableImg1,
        foodItems: [
          {
            id: 133,
            itemName: "Margarita Pizza",
            price: 350,
            itemImg: margaritaPizza,
          },
          {
            id: 134,
            itemName: "Classic Nachos",
            price: 250,
            itemImg: nachosImg,
          },
          {
            id: 135,
            itemName: "Strawberry Smoothie",
            price: 200,
            itemImg: strawberryImg,
          },
        ],
        price: 800,
      },
    ],
    drinks: [
      { id: 136, itemName: "Mojito", price: 180, itemImg: mojitoImg },
      {
        id: 137,
        itemName: "Iced Coffee",
        price: 150,
        itemImg: icedCoffeImg,
      },
      {
        id: 138,
        itemName: "Lemonade",
        price: 100,
        itemImg: lemonadeImg,
      },
      {
        id: 139,
        itemName: "Mango Lassi",
        price: 120,
        itemImg: manogoLassiImg,
      },
      {
        id: 140,
        itemName: "Strawberry Smoothie",
        price: 200,
        itemImg: strawberryImg,
      },
    ],
  },
  {
    id: 8,
    name: "Luxe Riverside Suites",
    avgRating: 4.9,
    noOfRating: "400+",
    distance: "1.0 km away",
    hotelImg: hotelRoom02,
    price: "$28",
    recommendedIcon: "",
    affordablePackages: [
      {
        id: 36,
        name: "Bachelor",
        image: affordableImg1,
        foodItems: [
          {
            id: 141,
            itemName: "Grilled Chicken Burger",
            price: 420,
            itemImg: burgerImg,
          },
          {
            id: 142,
            itemName: "Classic Nachos",
            price: 250,
            itemImg: nachosImg,
          },
          {
            id: 143,
            itemName: "Mojito",
            price: 180,
            itemImg: mojitoImg,
          },
        ],
        price: 850,
      },
      {
        id: 37,
        name: "Family",
        image: affordableImg2,
        foodItems: [
          {
            id: 144,
            itemName: "Margarita Pizza",
            price: 350,
            itemImg: margaritaPizza,
          },
          {
            id: 145,
            itemName: "Iced Coffee",
            price: 150,
            itemImg: icedCoffeImg,
          },
          {
            id: 146,
            itemName: "Lemonade",
            price: 100,
            itemImg: lemonadeImg,
          },
        ],
        price: 600,
      },
      {
        id: 38,
        name: "Business",
        image: affordableImg1,
        foodItems: [
          {
            id: 147,
            itemName: "Caesar Salad",
            price: 200,
            itemImg: saladImg,
          },
          {
            id: 148,
            itemName: "Strawberry Smoothie",
            price: 200,
            itemImg: strawberryImg,
          },
          {
            id: 149,
            itemName: "Mango Lassi",
            price: 120,
            itemImg: manogoLassiImg,
          },
        ],
        price: 520,
      },
      {
        id: 39,
        name: "Friend",
        image: affordableImg2,
        foodItems: [
          {
            id: 150,
            itemName: "Grilled Chicken Burger",
            price: 420,
            itemImg: burgerImg,
          },
          {
            id: 151,
            itemName: "Classic Nachos",
            price: 250,
            itemImg: nachosImg,
          },
          {
            id: 152,
            itemName: "Iced Coffee",
            price: 150,
            itemImg: icedCoffeImg,
          },
        ],
        price: 820,
      },
      {
        id: 40,
        name: "Couples",
        image: affordableImg1,
        foodItems: [
          {
            id: 153,
            itemName: "Margarita Pizza",
            price: 350,
            itemImg: margaritaPizza,
          },
          {
            id: 154,
            itemName: "Strawberry Smoothie",
            price: 200,
            itemImg: strawberryImg,
          },
          {
            id: 155,
            itemName: "Mojito",
            price: 180,
            itemImg: mojitoImg,
          },
        ],
        price: 730,
      },
    ],
    drinks: [
      { id: 156, itemName: "Mojito", price: 180, itemImg: mojitoImg },
      {
        id: 157,
        itemName: "Iced Coffee",
        price: 150,
        itemImg: icedCoffeImg,
      },
      {
        id: 158,
        itemName: "Lemonade",
        price: 100,
        itemImg: lemonadeImg,
      },
      {
        id: 159,
        itemName: "Mango Lassi",
        price: 120,
        itemImg: manogoLassiImg,
      },
      {
        id: 160,
        itemName: "Strawberry Smoothie",
        price: 200,
        itemImg: strawberryImg,
      },
    ],
  },
  {
    id: 9,
    name: "Hilltop Haven Resort",
    avgRating: 4.4,
    noOfRating: "220+",
    distance: "6.0 km away",
    hotelImg: hotelRoom03,
    price: "$28",
    recommendedIcon: "",
    affordablePackages: [
      {
        id: 41,
        name: "Bachelor",
        image: affordableImg1,
        foodItems: [
          {
            id: 161,
            itemName: "Grilled Chicken Burger",
            price: 420,
            itemImg: burgerImg,
          },
          {
            id: 162,
            itemName: "Mojito",
            price: 180,
            itemImg: mojitoImg,
          },
          {
            id: 163,
            itemName: "Iced Coffee",
            price: 150,
            itemImg: icedCoffeImg,
          },
        ],
        price: 750,
      },
      {
        id: 42,
        name: "Family",
        image: affordableImg2,
        foodItems: [
          {
            id: 164,
            itemName: "Caesar Salad",
            price: 200,
            itemImg: saladImg,
          },
          {
            id: 165,
            itemName: "Classic Nachos",
            price: 250,
            itemImg: nachosImg,
          },
          {
            id: 166,
            itemName: "Mango Lassi",
            price: 120,
            itemImg: manogoLassiImg,
          },
        ],
        price: 570,
      },
      {
        id: 43,
        name: "Business",
        image: affordableImg1,
        foodItems: [
          {
            id: 167,
            itemName: "Margarita Pizza",
            price: 350,
            itemImg: margaritaPizza,
          },
          {
            id: 168,
            itemName: "Strawberry Smoothie",
            price: 200,
            itemImg: strawberryImg,
          },
          {
            id: 169,
            itemName: "Lemonade",
            price: 100,
            itemImg: lemonadeImg,
          },
        ],
        price: 650,
      },
      {
        id: 44,
        name: "Friend",
        image: affordableImg2,
        foodItems: [
          {
            id: 170,
            itemName: "Caesar Salad",
            price: 200,
            itemImg: saladImg,
          },
          {
            id: 171,
            itemName: "Grilled Chicken Burger",
            price: 420,
            itemImg: burgerImg,
          },
          {
            id: 172,
            itemName: "Mojito",
            price: 180,
            itemImg: mojitoImg,
          },
        ],
        price: 800,
      },
      {
        id: 45,
        name: "Couples",
        image: affordableImg1,
        foodItems: [
          {
            id: 173,
            itemName: "Classic Nachos",
            price: 250,
            itemImg: nachosImg,
          },
          {
            id: 174,
            itemName: "Strawberry Smoothie",
            price: 200,
            itemImg: strawberryImg,
          },
          {
            id: 175,
            itemName: "Iced Coffee",
            price: 150,
            itemImg: icedCoffeImg,
          },
        ],
        price: 600,
      },
    ],
    drinks: [
      {
        id: 176,
        itemName: "Iced Coffee",
        price: 150,
        itemImg: icedCoffeImg,
      },
      { id: 177, itemName: "Mojito", price: 180, itemImg: mojitoImg },
      {
        id: 178,
        itemName: "Lemonade",
        price: 100,
        itemImg: lemonadeImg,
      },
      {
        id: 179,
        itemName: "Mango Lassi",
        price: 120,
        itemImg: manogoLassiImg,
      },
      {
        id: 180,
        itemName: "Strawberry Smoothie",
        price: 200,
        itemImg: strawberryImg,
      },
    ],
  },
  {
    id: 10,
    name: "Cozy Nook Hostel",
    avgRating: 3.8,
    noOfRating: "80+",
    distance: "4.5 km away",
    hotelImg: hotelRoom01,
    price: "$28",
    recommendedIcon: RecommendedIcon,
    affordablePackages: [
      {
        id: 46,
        name: "Bachelor",
        image: affordableImg1,
        foodItems: [
          {
            id: 181,
            itemName: "Caesar Salad",
            price: 200,
            itemImg: saladImg,
          },
          {
            id: 182,
            itemName: "Mojito",
            price: 180,
            itemImg: mojitoImg,
          },
          {
            id: 183,
            itemName: "Iced Coffee",
            price: 150,
            itemImg: icedCoffeImg,
          },
        ],
        price: 530,
      },
      {
        id: 47,
        name: "Family",
        image: affordableImg2,
        foodItems: [
          {
            id: 184,
            itemName: "Grilled Chicken Burger",
            price: 420,
            itemImg: burgerImg,
          },
          {
            id: 185,
            itemName: "Classic Nachos",
            price: 250,
            itemImg: nachosImg,
          },
          {
            id: 186,
            itemName: "Strawberry Smoothie",
            price: 200,
            itemImg: strawberryImg,
          },
        ],
        price: 870,
      },
      {
        id: 48,
        name: "Business",
        image: affordableImg1,
        foodItems: [
          {
            id: 187,
            itemName: "Margarita Pizza",
            price: 350,
            itemImg: margaritaPizza,
          },
          {
            id: 188,
            itemName: "Lemonade",
            price: 100,
            itemImg: lemonadeImg,
          },
          {
            id: 189,
            itemName: "Mango Lassi",
            price: 120,
            itemImg: manogoLassiImg,
          },
        ],
        price: 570,
      },
      {
        id: 49,
        name: "Friend",
        image: affordableImg2,
        foodItems: [
          {
            id: 190,
            itemName: "Iced Coffee",
            price: 150,
            itemImg: icedCoffeImg,
          },
          {
            id: 191,
            itemName: "Strawberry Smoothie",
            price: 200,
            itemImg: strawberryImg,
          },
          {
            id: 192,
            itemName: "Mojito",
            price: 180,
            itemImg: mojitoImg,
          },
        ],
        price: 530,
      },
      {
        id: 50,
        name: "Couples",
        image: affordableImg1,
        foodItems: [
          {
            id: 193,
            itemName: "Grilled Chicken Burger",
            price: 420,
            itemImg: burgerImg,
          },
          {
            id: 194,
            itemName: "Classic Nachos",
            price: 250,
            itemImg: nachosImg,
          },
          {
            id: 195,
            itemName: "Caesar Salad",
            price: 200,
            itemImg: saladImg,
          },
        ],
        price: 870,
      },
    ],
    drinks: [
      { id: 196, itemName: "Mojito", price: 180, itemImg: mojitoImg },
      {
        id: 197,
        itemName: "Iced Coffee",
        price: 150,
        itemImg: icedCoffeImg,
      },
      {
        id: 198,
        itemName: "Lemonade",
        price: 100,
        itemImg: lemonadeImg,
      },
      {
        id: 199,
        itemName: "Mango Lassi",
        price: 120,
        itemImg: manogoLassiImg,
      },
      {
        id: 200,
        itemName: "Strawberry Smoothie",
        price: 200,
        itemImg: strawberryImg,
      },
    ],
  },
];

export { hotelData };
