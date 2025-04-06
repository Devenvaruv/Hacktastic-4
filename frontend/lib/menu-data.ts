export type MenuItem = {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  tags: string[]
  nutritionalInfo: {
    calories: number
    protein: number
    carbs: number
    fat: number
  }
  allergens: string[]
  available: boolean
}

export type MenuCategory = {
  id: string
  name: string
  description: string
}

export const categories: MenuCategory[] = [
  {
    id: "breakfast",
    name: "Breakfast",
    description: "Start your day with our delicious breakfast options",
  },
  {
    id: "lunch",
    name: "Lunch",
    description: "Midday meals to keep you going",
  },
  {
    id: "dinner",
    name: "Dinner",
    description: "Evening dining options for a satisfying meal",
  },
  {
    id: "snacks",
    name: "Snacks & Sides",
    description: "Quick bites and accompaniments",
  },
  {
    id: "beverages",
    name: "Beverages",
    description: "Refreshing drinks to quench your thirst",
  },
]

export const menuItems: MenuItem[] = 
[
  {
    "id": "9cc9e4c1-88be-4cc2-8cac-56f533cf4e32",
    "name": "Steel Cut Oats",
    "description": "SIDES: served with raisins, brown sugar, almond slices, dried cranberries, banana chips, and pumpkin seed",
    "price": 3.5,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "breakfast",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "bba5b9f1-206d-4656-a204-ccc4725af430",
    "name": "Hearty Vegetable Bean Soup",
    "description": "onion, celery, carrot, garlic, kidney beans, garbanzo beans ,hominy, coriander, cumin, salt, pepper, tomato paste and vegetable stock, ,.",
    "price": 4.5,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "6a23b4ba-bfe6-41c1-bb83-9d63181df084",
    "name": "Grilled Bratwurst with Toppings",
    "description": "bratwurst, caramelized onions, sauerkraut, deli mustard, bun",
    "price": 14.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Halal"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "1a4dd67e-f927-4107-840b-029b910d72e5",
    "name": "Grilled Plant Based Sausage with Toppings",
    "description": "plant based sausage, bun, caramelized onions, deli mustard, sauerkraut",
    "price": 13.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "59d968d8-4631-4e66-ac75-d7ef9dfa2066",
    "name": "Pretzel Bites with Cheese Sauce",
    "description": "pretzel bites, heavy cream, onion, garlic, cheddar cheese, velveeta cheese, salt, black pepper",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "074c51c3-f3bb-4b9c-9536-1044c40b65c0",
    "name": "Steamed Broccoli",
    "description": "broccoli",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "1c106bb3-7715-435b-8870-eeff82e1e214",
    "name": "Garden Salad with Vinaigrette",
    "description": "mixed greens, radish, carrot, balsamic vinegar, mustard, honey, garlic, black pepper, canola oil",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "957ce2fe-6fbd-485f-ba71-e6b79072946c",
    "name": "Seasonal Fruit",
    "description": "",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "2c6f7f37-a4e5-442d-8540-58904d7c7377",
    "name": "Fresh Mozzarella Soppressata Parmesan Cheese and Hot Honey",
    "description": "00 flour, water, yeast, sugar, salt, canola oil, tomato sauce, fresh mozzarella, shredded mozzarella, pork soppressata, parmesan cheese, honey chili flakes",
    "price": 6.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "9db6c5f9-5526-4b4b-90b3-da867023f428",
    "name": "Avocado",
    "description": "45 cal. NUTRITION INFORMATION",
    "price": 2.5,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "73a1f714-696a-4732-8fb6-9cae2cdef3d1",
    "name": "Roasted Vegetables",
    "description": "70 cal. NUTRITION INFORMATION",
    "price": 4.25,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "524e22fa-ab94-4883-b94b-48263867a4c0",
    "name": "Brown Rice (no Salt)",
    "description": "we are local (f.e.e.d sonoma) 110 cal. NUTRITION INFORMATION",
    "price": 2.25,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients",
      "Farm to Fork"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "e23bc3f4-aead-4f39-8a32-318d61897a82",
    "name": "French Fries",
    "description": "110 cal. NUTRITION INFORMATION",
    "price": 4.5,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "7f2abd36-6147-4d06-8515-9be3a72fc510",
    "name": "Chicken Tenders",
    "description": "230 cal. NUTRITION INFORMATION",
    "price": 6.8,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "af44b834-e56e-4a6a-a6e8-a4999b0dde49",
    "name": "Curly Fries",
    "description": "70 cal. NUTRITION INFORMATION",
    "price": 4.5,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "ed11e374-81a6-464e-bdf8-cc1d184e67cb",
    "name": "Side of Bacon",
    "description": "80 cal. NUTRITION INFORMATION",
    "price": 1.3,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "bd25071b-2819-4eae-a9f7-a7a5f72f6a5d",
    "name": "Grilled Cheese",
    "description": "250 cal. NUTRITION INFORMATION",
    "price": 4.5,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "f665e77a-e4a6-4cea-9c2b-68ec1258815d",
    "name": "Chicken Breast Sandwich",
    "description": "300 cal. NUTRITION INFORMATION",
    "price": 9.45,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Halal"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "359a4fcc-9e4d-42b9-bbdd-c25b796e6bbb",
    "name": "Evergood All-beef Hot Dog",
    "description": "1 each 500 cal. NUTRITION INFORMATION",
    "price": 5.25,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "29cf236e-ec72-47fe-95a7-9ef1656c622d",
    "name": "Tuna Melt",
    "description": "550 cal. NUTRITION INFORMATION",
    "price": 7.5,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Seafood Watch"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "48ab0f0b-b7d8-4ee8-a14d-5551ac994231",
    "name": "Beyond Burger",
    "description": "440 cal. NUTRITION INFORMATION",
    "price": 10.5,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "b667d3ce-dd3d-46d9-8a12-fd6ea3dac7ab",
    "name": "Mindful Meats Beef Burger*",
    "description": "marin sun farms 460 cal. NUTRITION INFORMATION",
    "price": 9.75,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Farm to Fork",
      "Raw/Undercooked"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "481ba1d2-e04e-453a-ad11-c7f5df21143b",
    "name": "Turkey Burger",
    "description": "diestel family turkey ranch 410 cal. NUTRITION INFORMATION",
    "price": 9.45,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "eaadb417-dee1-4584-9017-cb35fa990b63",
    "name": "Don Burger",
    "description": "530 cal. NUTRITION INFORMATION",
    "price": 10.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Farm to Fork"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "b79cff55-0505-4c93-980e-6081a48d7f79",
    "name": "Edamame",
    "description": "70 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "df79f64d-8262-46fb-9acb-e74b48c5fdc3",
    "name": "Wasabi",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "1a07bf06-4c3b-4e66-8348-485f8c662d1e",
    "name": "Hot Sauce",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "0f9acc3f-3d37-4550-ae8f-50284a45badf",
    "name": "Sesame Seaweed Salad",
    "description": "20 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "c0c717a9-8496-4a75-bfb9-8355b82bf52b",
    "name": "Soy Sauce, Wasabi and Ginger",
    "description": "20 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "d08f4da5-4c4d-484c-a39f-3a5ca5315fe2",
    "name": "Fish Sauce",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "1f30c5b1-2aa1-46f9-81d3-f51acb67b432",
    "name": "Sushi Spicy Mayonnaise",
    "description": "110 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "20d63d8b-232b-4062-b932-c917cac7afe1",
    "name": "Ramen Broth",
    "description": "60 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "efb2ee7e-0647-4ad8-a729-86fe4d036f9c",
    "name": "Roasted Chicken",
    "description": "170 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "a17ccaf4-9ee0-4744-91b7-c44f0d406d0c",
    "name": "Vegetable Stock",
    "description": "10 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "cf918d4a-d3e2-4fd9-9c37-7fa77fdcea45",
    "name": "Bamboo Shoot",
    "description": "5 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "85698d40-2b76-4969-9713-a7248e599140",
    "name": "Hard Boiled Eggs",
    "description": "60 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "9631268f-0bda-4b06-a343-29b830df9195",
    "name": "Miso Soup",
    "description": "70 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "a076bd85-85d0-475f-babf-64b7dd2beee9",
    "name": "Caesar Salad",
    "description": "15 cal. NUTRITION INFORMATION",
    "price": 3.95,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "0ac5f488-46cd-47aa-b038-7c5bfcf35e81",
    "name": "Quattro Formaggi",
    "description": "slices3.75 430 cal. NUTRITION INFORMATION",
    "price": 3.75,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "7ac6779f-076a-446e-9ea0-7b285750e03d",
    "name": "Pepperoni Pizza",
    "description": "slices4.00 650 cal. NUTRITION INFORMATION",
    "price": 4.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "643df088-ceac-4bc1-9c45-5e510eac131e",
    "name": "Apple",
    "description": "35 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "77b0b317-7f49-4284-ae83-c004bd43d3ca",
    "name": "Banana",
    "description": "130 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "e6f5e8dc-c6dc-491a-8370-60b5c0f930cd",
    "name": "Mandarin Oranges",
    "description": "10 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "9e773671-35c6-4072-a468-1cd2dbad066a",
    "name": "Oranges",
    "description": "30 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "d09ab38d-450c-48a8-99b3-4e5e383ce380",
    "name": "Peaches",
    "description": "25 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "c6ef7bd0-76eb-4d18-9e22-075199f9bb71",
    "name": "Pears",
    "description": "40 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "35399d15-a508-40b3-8ad9-df9b790c2092",
    "name": "Plums",
    "description": "30 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "a1b98824-2b57-4633-832c-5c4c0fa84cd5",
    "name": "Fruit | Vegetable | Herb Spa Water",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "421a9324-dffa-4d52-8d63-0860fa7b32e2",
    "name": "Tomato",
    "description": "5 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "d94ec9e3-5e87-4728-b221-2a12aac18d14",
    "name": "Shaved Red Onion",
    "description": "5 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "b92b06e4-2ff8-4f51-8113-d310aeaf7d0a",
    "name": "Pickle",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "f9b87f26-f518-4d6a-ba59-01e045b28581",
    "name": "Arugula",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "4c57b088-df1a-48af-a9e6-01b2b3c40269",
    "name": "Iceberg Lettuce",
    "description": "10 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "85a734f5-ec13-4226-bbbb-08ab34fcdc17",
    "name": "Wheat Bread",
    "description": "160 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "04021bbb-1e97-460c-bef2-1ca479219648",
    "name": "White Bread",
    "description": "150 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "d47e65c8-852a-4488-bf2f-40842f96fbb4",
    "name": "Pepper Jack Cheese",
    "description": "50 cal. NUTRITION INFORMATION",
    "price": 1.1,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "d0cb7ef9-5390-42fa-aa1f-c0ba5add11fe",
    "name": "Provolone Cheese",
    "description": "50 cal. NUTRITION INFORMATION",
    "price": 1.1,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "8385664c-7605-4963-afea-d9354ffaa03c",
    "name": "American Cheese",
    "description": "50 cal. NUTRITION INFORMATION",
    "price": 1.1,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "fec812dd-72f7-4365-85cd-d20cf6bf5302",
    "name": "Cheddar Cheese",
    "description": "60 cal. NUTRITION INFORMATION",
    "price": 1.1,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "6b9c34d6-80b8-4119-b2d2-e2f87627ebc0",
    "name": "Swiss Cheese",
    "description": "60 cal. NUTRITION INFORMATION",
    "price": 1.1,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "5ce0ccb2-413b-456c-958c-58ec59780581",
    "name": "Chicken Breast",
    "description": "80 cal. NUTRITION INFORMATION",
    "price": 5.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "3dad0487-490e-4029-a129-24bdf705674a",
    "name": "Turkey Patty",
    "description": "280 cal. NUTRITION INFORMATION",
    "price": 4.25,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "04b85f44-7eba-4542-9b67-e224234c96bc",
    "name": "Ground Beef",
    "description": "310 cal. NUTRITION INFORMATION",
    "price": 5.25,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "3c01817d-a7af-4a88-b853-f714aebfa394",
    "name": "Beyond Burger",
    "description": "280 cal. NUTRITION INFORMATION",
    "price": 5.75,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "fb089aab-7887-4685-9294-6333d7d9464b",
    "name": "Dungeness Crab Mayo",
    "description": "130 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Seafood Watch"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "dd8868c4-0d35-4b70-b1f3-15f3768633dc",
    "name": "Spicy Tuna*",
    "description": "70 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Seafood Watch",
      "Raw/Undercooked"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "23d02d2a-4c91-4727-8da5-08257c8200ef",
    "name": "Sushi Rice",
    "description": "230 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "d67074ea-2424-4516-87aa-2b0727834bca",
    "name": "Chicken Tinga",
    "description": "210 cal. NUTRITION INFORMATION",
    "price": 3.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "75c42134-fda4-4f04-bb37-03d4ef8484a0",
    "name": "Pork Carnitas",
    "description": "370 cal. NUTRITION INFORMATION",
    "price": 3.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "541b7d95-47c4-4a34-ae63-3e6118be7ba2",
    "name": "Carne Asada",
    "description": "340 cal. NUTRITION INFORMATION",
    "price": 3.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "178f59bc-7d8a-40e1-9e5f-e25f4f3fd441",
    "name": "Mushroom Tofu Mojo",
    "description": "140 cal. NUTRITION INFORMATION",
    "price": 3.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Vegan",
      "Made without Gluten-Containing Ingredients",
      "Farm to Fork"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "f2d68f7e-15ef-4d00-8732-469f570974f5",
    "name": "Cilantro Lime Quinoa",
    "description": "60 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Organic"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "5c58f570-28cc-463c-aa47-3377a0bf5267",
    "name": "Roasted Sweet Potato & Poblano",
    "description": "35 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "a85caf17-ddc3-4bb2-86ea-0dce360be6f3",
    "name": "Smoked Paprika Spanish Rice",
    "description": "60 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "0adddf01-26b3-44af-bc6a-b7bb83d48c3b",
    "name": "Beans and Rice Bowl",
    "description": "1310 cal. NUTRITION INFORMATION",
    "price": 3.5,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "33f5a92f-718d-4112-b6b2-5890d9e1b9a8",
    "name": "Guacamole and Chips",
    "description": "350 cal. NUTRITION INFORMATION",
    "price": 5.5,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "fe83c466-9474-42e2-ac7c-82b0be9c4643",
    "name": "Salsa Chili Rojo",
    "description": "40 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "5b173980-e631-46d5-aec4-2ddcf3afbf08",
    "name": "Avocado Creme",
    "description": "70 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "0c2ca9c9-1d65-4ed7-a029-a7b64ecc1539",
    "name": "Salsa Verde",
    "description": "25 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "7f32c862-f610-4914-81d7-3a7933cbde35",
    "name": "LOCA Vegan Cheese Sauce",
    "description": "30 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients",
      "Locally Crafted"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "400b95f3-9857-4367-98f5-031eadf97230",
    "name": "Pinto Beans",
    "description": "60 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "bd7fea7c-aa42-4fc6-b618-33d9a7ac98b3",
    "name": "Organic Black Beans",
    "description": "60 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients",
      "Organic"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "5bee97ba-2520-416c-b28b-3b4664700105",
    "name": "Bean and Cheese Burrito",
    "description": "390 cal. NUTRITION INFORMATION",
    "price": 6.25,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Locally Crafted"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "38b0e1c3-bcc1-4f8a-bfdb-d4f7283ce0bb",
    "name": "Burrito Bowl",
    "description": "360 cal. NUTRITION INFORMATION",
    "price": 6.25,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "37d3cd7f-386f-4302-8fd3-a71242dddd82",
    "name": "Nachos",
    "description": "910 cal. NUTRITION INFORMATION",
    "price": 6.25,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "8b57d8a3-5563-46d3-9b2b-415b37f10e55",
    "name": "Street Taco",
    "description": "170 cal. NUTRITION INFORMATION",
    "price": 3.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "f4ea1ce4-a526-4894-a3af-debc31ce5986",
    "name": "Rye",
    "description": "150 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "4086f547-bd38-4923-a29c-8e972dcc0c5e",
    "name": "Plain Hoagie",
    "description": "150 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "a983008e-43f2-422a-9925-5c0b4a573d7b",
    "name": "Wheat Bread",
    "description": "160 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "c7caec55-cfcf-4141-9bb3-32a65bc0b688",
    "name": "White Bread",
    "description": "150 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "862ad6a6-eb94-467b-a9d3-19b1c668978f",
    "name": "Multigrain Hoagie",
    "description": "140 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "eb0a61ad-a2c9-4386-9b9e-49c704c72f47",
    "name": "Fruit Salad",
    "description": "35 cal. NUTRITION INFORMATION",
    "price": 4.75,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "5fb1644d-4784-4052-80cf-ff20a72b97b0",
    "name": "Caesar Salad",
    "description": "110 cal. NUTRITION INFORMATION",
    "price": 4.75,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "d7cf997c-4cc9-44c6-9ce9-6c4b7e7c82f9",
    "name": "Cucumber",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "62f60dac-12a2-41a0-9f52-f4dd5528fbd2",
    "name": "Bell Pepper",
    "description": "5 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "fb070017-9a68-4274-a1ce-6c063c705d9c",
    "name": "Spinach",
    "description": "5 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "f711b18a-7d84-427d-8bdc-722dae226033",
    "name": "Seasonal Grilled Vegetables",
    "description": "15 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "4f4684b6-3a06-4663-8635-e5a4699e2aed",
    "name": "Leaf Lettuce",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "3be0042a-c21e-4839-bb59-87af0e62cecc",
    "name": "Tomato",
    "description": "5 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "b1bcb202-8ed1-45f7-851e-f3eac9483f34",
    "name": "Onion",
    "description": "5 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "41500148-0b43-415e-afca-9581388c3668",
    "name": "Avocado",
    "description": "45 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "121e0b26-bfdb-4442-929a-80fd7bf22198",
    "name": "Pickle",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "e9b85037-2dd1-46b0-91eb-77e8eacf1b04",
    "name": "Pepperoncini",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "9572532e-f460-48c0-a16d-7faf74ddb949",
    "name": "Banana Pepper Rings",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "b5196e63-c883-4a28-9c0c-9ec905070830",
    "name": "Dijon Mustard",
    "description": "5 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "6b8c0188-93f6-4778-9e9f-aa039d378dd7",
    "name": "Yellow Mustard",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "9e0d602b-a4d7-43c1-92b3-61615be7e975",
    "name": "House-made Hummus",
    "description": "80 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "a8008531-f25d-4d09-8b48-209aad8ab814",
    "name": "Whole Grain Mustard",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "bb047bbc-f1c7-44dc-b10c-79aec08a4fdb",
    "name": "Mayo",
    "description": "90 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "151d0202-e8aa-423a-aab8-c936692da0dc",
    "name": "Sauce Pesto Basil Parmesan",
    "description": "60 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "a2eeed39-b541-4f68-9032-19fb3bdf5ba1",
    "name": "Olive Tapenade",
    "description": "40 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "17496b48-f9a2-4a6a-8cb3-c8d13599860c",
    "name": "Honey Mustard Sauce, Mayo",
    "description": "60 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "92f95c39-93c1-41d3-88ee-524ad6880b9d",
    "name": "Baked Tofu",
    "description": "60 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "fb6635d9-c879-4aab-af75-e7850f9136d2",
    "name": "House-roasted Turkey Breast",
    "description": "70 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "7e837ee6-a788-4dbb-86b2-4d36eebbd0b4",
    "name": "Cooked Chicken Breast No Salt",
    "description": "80 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "9b57da76-8b86-410e-8d4e-ee583e051185",
    "name": "Tuna Salad with Mayo",
    "description": "190 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Made without Gluten-Containing Ingredients",
      "Seafood Watch"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "84271c90-adf9-4f7d-9d45-f12205b755f3",
    "name": "Smoked Ham",
    "description": "40 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "d076e777-09bb-4a51-8708-5add8f3f11b1",
    "name": "Smoked Turkey",
    "description": "30 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "d0446019-e6ea-4cd2-989b-a669566eb5ec",
    "name": "Monterey Jack",
    "description": "110 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "bc7d3628-accd-45dc-9b1f-a25d267ebadd",
    "name": "Part Skim Mozzarella",
    "description": "80 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "24ed2c60-4096-4aaf-b9df-bac6058640d9",
    "name": "Provolone Cheese",
    "description": "100 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "ab88dec3-1f60-433d-8d3d-af0b92c1d193",
    "name": "Pepper Jack Cheese",
    "description": "110 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "83a185dc-bb1b-4812-a23b-bc8b773177a3",
    "name": "Cheddar Cheese",
    "description": "110 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "f59699f0-01d2-46cf-bc68-4b31f6cf310a",
    "name": "Havarti",
    "description": "110 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "27e7074e-4df0-4560-a6f1-94dee721a14e",
    "name": "Soppressata",
    "description": "120 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "a4b65723-9cee-4777-b615-00e2637c3f92",
    "name": "Sesame Ginger Soy Vinaigrette",
    "description": "45 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "552d4d92-eca6-4558-997a-a7efaec0344a",
    "name": "Extra Virgin Olive Oil",
    "description": "110 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "440ee942-a786-49ee-b002-50d983dc624b",
    "name": "Balsamic Vinegar",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "a6b8023f-d34d-41a0-bfcb-abca719d4d46",
    "name": "Red Wine Vinegar",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "40eb8ea1-f8ec-40dc-a84e-39fb9c0fc0b2",
    "name": "Fat Free Italian Dressing",
    "description": "15 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "52132c09-86a7-4060-9683-75138700a057",
    "name": "Balsamic Vinaigrette",
    "description": "170 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "a97b3f0a-db96-4ee3-8286-fe6334c2a06e",
    "name": "Ranch Dressing",
    "description": "100 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "7784568f-c065-4e07-b095-6a9492d33c02",
    "name": "Honey Mustard Dressing",
    "description": "170 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "23654646-4044-4ded-ae2f-7cee4fbcb3e9",
    "name": "Raisin",
    "description": "25 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "343fab05-2035-4dc3-a32f-b0f9027e14e4",
    "name": "Sunflower Seed",
    "description": "30 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "c07174ba-205a-4191-bfcd-194d31ae60e0",
    "name": "Pumpkin Seed",
    "description": "30 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "ea922ed5-7415-4ac9-9f22-94dcf4dbf41d",
    "name": "Cranberry",
    "description": "45 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "031adc9b-4b8e-4fb0-9cf8-40c56e126435",
    "name": "Olive Black",
    "description": "20 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "7597bef7-a6c4-4950-aafb-ff9bbccee16c",
    "name": "Croutons",
    "description": "1/4 cup 90 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "817f1992-a06e-483c-b5f9-387b67337c8d",
    "name": "Chow Mein Noodles",
    "description": "140 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "a0911402-64e9-4b21-ac6b-a9e1ae004ad7",
    "name": "Shelled Edamame",
    "description": "50 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "07fb2b13-ae5e-4566-9953-0b7635f9844f",
    "name": "Garbanzo Bean",
    "description": "45 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "632b8842-f302-4ef2-badc-7204ad383849",
    "name": "Kidney Bean",
    "description": "25 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "b41846fb-0afe-4585-8cd8-465a7bc2ace3",
    "name": "Red Onion",
    "description": "10 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "977b75c1-3f33-498b-b907-a4d94ab7d2c7",
    "name": "Broccoli",
    "description": "10 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "c3dd8b79-4700-433d-883e-4b45f88a4fcd",
    "name": "Shredded Carrot",
    "description": "10 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "5d231628-882e-4a19-afc8-bae079ea3bf4",
    "name": "Celery",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "73dcbc75-ad57-4dc4-b44a-f30cfd9caa13",
    "name": "Cucumber",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "80b50e9e-9f92-4726-89cf-45f762bf79b5",
    "name": "Mushroom",
    "description": "5 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "23acf274-1756-4bd2-ba23-344e1cb55240",
    "name": "Snow Pea",
    "description": "10 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "b26e030e-d819-4048-bd6e-d6d9ed9d78ab",
    "name": "Red & Yellow Pepper",
    "description": "5 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "8427dc11-9a2a-42fb-b77a-159a4c0185ea",
    "name": "Radish",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "904c1d4f-a0ac-4cf6-898c-b6f6a48653b6",
    "name": "Cherry Tomato",
    "description": "5 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "73bbd114-a11b-42db-b026-9f00581e09c5",
    "name": "Zucchini & Yellow Squash",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "9d7fe3f4-36ca-46ef-a915-581102ab720a",
    "name": "Corn",
    "description": "25 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "901b2be6-87d2-442a-9b56-65a6177699e7",
    "name": "Peas",
    "description": "20 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "8aeb17f1-a304-40dd-ac82-6c5e01b1cf43",
    "name": "Roasted Beets",
    "description": "10 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "9edfe8b5-3a0d-4d8a-9c1e-6e012449943c",
    "name": "Scallion",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "15614ba9-c377-4cb1-82f8-a0b32cec6ebc",
    "name": "Roasted Cauliflower",
    "description": "25 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients",
      "Garden Grown"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "34dcea0f-ba39-43e7-b3fe-fb04d4593a85",
    "name": "Honeydew",
    "description": "10 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "87805814-2278-40ba-a595-01afd8e595b3",
    "name": "Peach",
    "description": "10 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "b6eaf6a3-ecf8-44d5-8e0a-9d1b2ddfe032",
    "name": "Cantaloupe",
    "description": "10 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "53c0440a-7b2d-4eb6-9b1a-3783efe7a14d",
    "name": "Lemon Wedges",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "3f4ad764-c77b-4668-984b-fa043d616b7d",
    "name": "Mozzarella",
    "description": "80 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "93338440-6be0-4d62-9472-cd186e492154",
    "name": "Cheddar Cheese",
    "description": "110 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "25cc6943-c981-4278-9ce2-268d3ee7a593",
    "name": "Cottage Cheese Low-fat",
    "description": "25 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "be294947-a931-4989-875a-4ae67e325c5f",
    "name": "Romaine Lettuce",
    "description": "10 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "0265beec-f890-473c-af0a-5196e08e0a39",
    "name": "Local Mixed Baby Greens",
    "description": "10 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "2a9bb1d4-fab4-41ec-bfa1-5a5ac71e089c",
    "name": "Red Cabbage",
    "description": "5 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "1623a573-f253-4406-89f1-67588c7384fd",
    "name": "Baby Kale",
    "description": "25 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "62b21c08-bf1c-4c14-a01d-99b11799ef3c",
    "name": "Baby Spinach",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "28c73b83-5b17-43f0-92ab-099cd4c35b8f",
    "name": "Garden Quinoa Salad",
    "description": "50 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients",
      "Garden Grown"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "43c9008b-91fa-4b4f-9696-5949875feb2a",
    "name": "Yukon Potato Salad",
    "description": "35 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients",
      "Garden Grown"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "c6ce570a-7841-4dc2-bcec-e80d661f6aef",
    "name": "Market Pasta Salad",
    "description": "160 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "In Balance",
      "Locally Crafted",
      "Garden Grown"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "ac6d17d8-2570-4d59-af54-20243f249283",
    "name": "Macaroni Salad",
    "description": "160 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "In Balance",
      "Garden Grown"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "602d796f-eb08-46c6-ba37-85caeeb33ccc",
    "name": "Fried & Marinated Tofu",
    "description": "70 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "1ff5680d-6567-4cc5-aac2-e530ad1282f6",
    "name": "Cage Free Egg",
    "description": "60 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "lunch",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "52156dfa-8b2d-426f-831e-1c2c060e8e9c",
    "name": "Hearty Vegetable Bean Soup",
    "description": "onion, celery, carrot, garlic, kidney beans, garbanzo beans ,hominy, coriander, cumin, salt, pepper, tomato paste and vegetable stock, ,.",
    "price": 4.5,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "f3144df0-1460-4024-8245-163c20a306bc",
    "name": "Chili Cheese Sweet Potato Fries",
    "description": "Marin Sun Farms ground beef, chili, onion, garlic, tomato, cumin, coriander, paprika, cheddar cheese, sweet potato",
    "price": 14.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Farm to Fork"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "15b58549-61ba-412e-848e-349127dc860a",
    "name": "Fresh Mozzarella Soppressata Parmesan Cheese and Hot Honey",
    "description": "00 flour, water, yeast, sugar, salt, canola oil, tomato sauce, fresh mozzarella, shredded mozzarella, pork soppressata, parmesan cheese, honey chili flakes",
    "price": 6.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "3ed01ade-4827-4b1f-8cd6-a5f4e9b79d8c",
    "name": "Bbq Pork Ribs",
    "description": "pork ribs, yellow mustard, paprika, salt, black pepper, cayenne pepper, garlic powder, onion powder,",
    "price": 14.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "306e8561-9e10-49f1-b337-c77cdaa82516",
    "name": "Impossible Meat Bbq Meat Balls",
    "description": "impossible meat, onion, green bell pepper, garlic, bbq sauce",
    "price": 13.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "9ee607ea-55f1-496b-beaa-4e020051318a",
    "name": "Mac and Cheese",
    "description": "elbow mac, heavy cream, onion, garlic, american cheese, cheddar cheese, salt",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "5445d0bd-e891-44ff-a072-cca7ef5c1fd2",
    "name": "Buttery Sweet Corn",
    "description": "corn, butter, salt, black pepper",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "ee5a5bed-018f-4f28-a5d5-34e785f9ea91",
    "name": "Corn Bread and Honey Butter",
    "description": "corn meal, flour, sugar, egg, milk, butter, honey",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "586b8bdf-ab3d-4ff5-9a1b-40446a162f4e",
    "name": "Garden Salad with Vinaigrette",
    "description": "mixed greens, radish, carrot, balsamic vinegar, mustard, honey, garlic, black pepper, canola oil",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "85a112d0-68a2-4fb6-adc5-9bdf28a07bb8",
    "name": "Seasonal Fruit",
    "description": "",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "c12d940e-6eb3-444a-a51f-0719540a9fe0",
    "name": "Avocado",
    "description": "45 cal. NUTRITION INFORMATION",
    "price": 2.5,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "7732a91b-6d54-450a-b809-08f3058636fd",
    "name": "Roasted Vegetables",
    "description": "70 cal. NUTRITION INFORMATION",
    "price": 4.25,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "1a3dff08-57a0-49ed-967d-ba176ca1ff80",
    "name": "Brown Rice (no Salt)",
    "description": "we are local (f.e.e.d sonoma) 110 cal. NUTRITION INFORMATION",
    "price": 2.25,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients",
      "Farm to Fork"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "10eb884d-13a3-4380-9f3b-9883d042c167",
    "name": "French Fries",
    "description": "110 cal. NUTRITION INFORMATION",
    "price": 4.5,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "fc6c2d51-868b-45f6-b22d-a59aeb48f3ce",
    "name": "Chicken Tenders",
    "description": "230 cal. NUTRITION INFORMATION",
    "price": 6.8,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "b8047522-f0d9-4ff2-8ce0-171400c294bb",
    "name": "Curly Fries",
    "description": "70 cal. NUTRITION INFORMATION",
    "price": 4.5,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "b12af5e9-640f-4472-be2c-29fe0c6cd0ed",
    "name": "Side of Bacon",
    "description": "80 cal. NUTRITION INFORMATION",
    "price": 1.3,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "35ad651f-32ca-47bd-9135-c45c20df1c4d",
    "name": "Grilled Cheese",
    "description": "250 cal. NUTRITION INFORMATION",
    "price": 4.5,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "4615f276-3d51-4a2e-b423-23ca76f681cb",
    "name": "Chicken Breast Sandwich",
    "description": "300 cal. NUTRITION INFORMATION",
    "price": 9.45,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Halal"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "133f1333-e5cd-4e2b-ab5c-2d168115811d",
    "name": "Evergood All-beef Hot Dog",
    "description": "1 each 500 cal. NUTRITION INFORMATION",
    "price": 5.25,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "ad02e6a8-f781-4f51-8db8-9184e3392115",
    "name": "Tuna Melt",
    "description": "550 cal. NUTRITION INFORMATION",
    "price": 7.5,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Seafood Watch"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "ffbc1c8e-22a7-4c17-b7bd-a7c0a7136b01",
    "name": "Beyond Burger",
    "description": "440 cal. NUTRITION INFORMATION",
    "price": 10.5,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "b42674b7-5da0-496e-8f35-c811abbca327",
    "name": "Mindful Meats Beef Burger*",
    "description": "marin sun farms 460 cal. NUTRITION INFORMATION",
    "price": 9.75,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Farm to Fork",
      "Raw/Undercooked"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "92289152-8f40-4d82-85b2-0ae46990cb4e",
    "name": "Turkey Burger",
    "description": "diestel family turkey ranch 410 cal. NUTRITION INFORMATION",
    "price": 9.45,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "b4ac1408-2a75-40cd-8d6c-ba91ea39be54",
    "name": "Don Burger",
    "description": "530 cal. NUTRITION INFORMATION",
    "price": 10.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Farm to Fork"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "ad9902d2-679a-43bf-b65d-35516711abae",
    "name": "Sushi Spicy Mayonnaise",
    "description": "110 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "8b2dc652-b5ff-4891-ae5b-db2f3a4625f2",
    "name": "Caesar Salad",
    "description": "15 cal. NUTRITION INFORMATION",
    "price": 3.95,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "179082a2-4cb0-421a-bdc4-4e263518615e",
    "name": "Apple",
    "description": "35 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "2dda5f71-7b82-4ac4-9c85-49ac4c8ac140",
    "name": "Banana",
    "description": "130 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "512f1ee7-0521-4d59-b9a5-c2aa22c7a97b",
    "name": "Mandarin Oranges",
    "description": "10 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "a053a468-178f-46ce-857d-2f497a94d05f",
    "name": "Oranges",
    "description": "30 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "f8260f99-22a8-4b94-a578-f0c2a0021a35",
    "name": "Peaches",
    "description": "25 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "3bf901e1-d182-42b6-bcc2-148db74efd5a",
    "name": "Pears",
    "description": "40 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "2914fd6d-d8a1-4706-91f0-d99d1b0f5bfd",
    "name": "Plums",
    "description": "30 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "f4ba9766-01fd-47f9-880e-a40d6c5b244e",
    "name": "Fruit | Vegetable | Herb Spa Water",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "777b9e47-aaa8-4172-8ce8-6c39a4cc1fd9",
    "name": "Tomato",
    "description": "5 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "67dad016-4839-4750-90af-07c5ee26b8d8",
    "name": "Shaved Red Onion",
    "description": "5 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "b700ec3f-a050-4189-b00b-16e579436989",
    "name": "Pickle",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "9430b6bd-e567-4b20-865c-78f30ca022c4",
    "name": "Arugula",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "6ee80b61-b8c7-457b-8598-11c510f797eb",
    "name": "Iceberg Lettuce",
    "description": "10 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "ed0b7fe3-86ae-4b23-863c-4bb6abd3dd32",
    "name": "Wheat Bread",
    "description": "160 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "2f3c55ca-2cc8-445a-9f03-642f73c58ebf",
    "name": "White Bread",
    "description": "150 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "076961ed-1f10-4b54-a427-2ac4720369a3",
    "name": "Pepper Jack Cheese",
    "description": "50 cal. NUTRITION INFORMATION",
    "price": 1.1,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "c1e705ab-e464-4399-bb7e-323b22be4f45",
    "name": "Provolone Cheese",
    "description": "50 cal. NUTRITION INFORMATION",
    "price": 1.1,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "5c665d26-07d4-4930-bfd1-cc8c29309e30",
    "name": "American Cheese",
    "description": "50 cal. NUTRITION INFORMATION",
    "price": 1.1,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "4b21bb40-64ba-4bbd-830b-94699e3ba7a7",
    "name": "Cheddar Cheese",
    "description": "60 cal. NUTRITION INFORMATION",
    "price": 1.1,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "b016aece-1352-482c-960e-437c59f1b0f3",
    "name": "Swiss Cheese",
    "description": "60 cal. NUTRITION INFORMATION",
    "price": 1.1,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "64c3a55f-236b-4c68-8fb5-f41f85ef676b",
    "name": "Chicken Breast",
    "description": "80 cal. NUTRITION INFORMATION",
    "price": 5.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "d21a4b1e-3c40-4af6-9a3f-c6170dabc725",
    "name": "Turkey Patty",
    "description": "280 cal. NUTRITION INFORMATION",
    "price": 4.25,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "b1806ab9-5bb7-4e67-89f6-67016ee0a3e9",
    "name": "Ground Beef",
    "description": "310 cal. NUTRITION INFORMATION",
    "price": 5.25,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "6edebee3-6fd7-4c5b-b285-202016246267",
    "name": "Beyond Burger",
    "description": "280 cal. NUTRITION INFORMATION",
    "price": 5.75,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "374f5653-0c74-40e6-ac03-9cf7215d5537",
    "name": "Chicken Tinga",
    "description": "210 cal. NUTRITION INFORMATION",
    "price": 3.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "2a1ec656-3c17-49ec-a0ea-30db3840ccbb",
    "name": "Pork Carnitas",
    "description": "370 cal. NUTRITION INFORMATION",
    "price": 3.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "ef9c4878-6664-47a6-bf1d-cd69bb31cab1",
    "name": "Carne Asada",
    "description": "340 cal. NUTRITION INFORMATION",
    "price": 3.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "f48295bb-950b-468b-804f-9290da883316",
    "name": "Mushroom Tofu Mojo",
    "description": "140 cal. NUTRITION INFORMATION",
    "price": 3.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Vegan",
      "Made without Gluten-Containing Ingredients",
      "Farm to Fork"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "18ad1d43-02ac-45b5-9b40-95afa7fe2668",
    "name": "Cilantro Lime Quinoa",
    "description": "60 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Organic"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "28748238-d458-466a-abeb-53217b0e1060",
    "name": "Roasted Sweet Potato & Poblano",
    "description": "35 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "5a7dbfa3-2862-4292-9ac5-058333f7b7fa",
    "name": "Smoked Paprika Spanish Rice",
    "description": "60 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "67a596fc-162d-4b9b-bbfa-226e89e3becc",
    "name": "Beans and Rice Bowl",
    "description": "1310 cal. NUTRITION INFORMATION",
    "price": 3.5,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "91d28d3d-1952-43fb-bfd3-9702b68b2080",
    "name": "Guacamole and Chips",
    "description": "350 cal. NUTRITION INFORMATION",
    "price": 5.5,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "7375005a-9bb0-40d9-8242-7d3e403921a3",
    "name": "Salsa Chili Rojo",
    "description": "40 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "f8cafc6b-980d-4269-9a31-0e7d08cf2777",
    "name": "Avocado Creme",
    "description": "70 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "9b952f5f-5448-40cb-90c7-bb3964202187",
    "name": "Salsa Verde",
    "description": "25 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "3b43d635-3e00-4c63-8511-d3086a4db203",
    "name": "LOCA Vegan Cheese Sauce",
    "description": "30 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients",
      "Locally Crafted"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "003b6e18-166e-4e73-ba0d-6cee11f2379f",
    "name": "Pinto Beans",
    "description": "60 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "00e26c9c-0d15-4cf7-9f7b-8eeb64524937",
    "name": "Organic Black Beans",
    "description": "60 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients",
      "Organic"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "ca540073-be97-4cf0-af7a-cde0e2ce5ba0",
    "name": "Bean and Cheese Burrito",
    "description": "390 cal. NUTRITION INFORMATION",
    "price": 6.25,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Locally Crafted"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "aec50ea8-523e-4774-8d10-cd480e76c9bc",
    "name": "Burrito Bowl",
    "description": "360 cal. NUTRITION INFORMATION",
    "price": 6.25,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "9ad136f4-a08e-4c37-8bec-3034a58bd0a5",
    "name": "Nachos",
    "description": "910 cal. NUTRITION INFORMATION",
    "price": 6.25,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "c766470b-5847-46f4-babd-eca35cf2e244",
    "name": "Street Taco",
    "description": "170 cal. NUTRITION INFORMATION",
    "price": 3.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "08439bf2-bf4a-4a33-ba97-a9ffb17aab80",
    "name": "Fruit Salad",
    "description": "35 cal. NUTRITION INFORMATION",
    "price": 4.75,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "dc38efa3-92d7-4fec-b541-6f8260824f1a",
    "name": "Caesar Salad",
    "description": "110 cal. NUTRITION INFORMATION",
    "price": 4.75,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "f7c4f37e-b3ba-4f63-8fc4-2f2bad56f037",
    "name": "Cucumber",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "6f409c18-4d31-4aef-b429-5c0abd591049",
    "name": "Bell Pepper",
    "description": "5 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "3daf765c-e6c4-4bdc-b86b-c0a7e5ae0a7d",
    "name": "Spinach",
    "description": "5 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "97c2a31c-ba90-49a1-95c5-c21ef5b7fa39",
    "name": "Seasonal Grilled Vegetables",
    "description": "15 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "9df82f66-dca6-4204-8c8c-de8f354b5233",
    "name": "Leaf Lettuce",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "a359a3ac-1209-4b9f-9078-12dbf180aee4",
    "name": "Tomato",
    "description": "5 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "5e368100-6b6f-4015-aab6-4757303f81c6",
    "name": "Onion",
    "description": "5 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "375175d4-bd4d-4140-a437-a1e121ca2cae",
    "name": "Avocado",
    "description": "45 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "688538bc-1457-4c93-8f9c-a916a9ed0cb9",
    "name": "Pickle",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "136c984d-1d96-433b-a730-450e70e6e6c5",
    "name": "Pepperoncini",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "7de822b8-837f-4a1d-b85c-4ab5599576ce",
    "name": "Banana Pepper Rings",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "08e5b59a-4212-4dea-acf3-54bd35276af9",
    "name": "Dijon Mustard",
    "description": "5 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "cc2a8279-645c-4ab1-8db3-88096f75a584",
    "name": "Yellow Mustard",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "9c076e14-a029-4c29-8922-673ef980d833",
    "name": "House-made Hummus",
    "description": "80 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "f44fdfae-f9b0-49e7-beba-0fb1f50f5693",
    "name": "Whole Grain Mustard",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "fa962bf6-5266-4713-aaae-bd89d8bdd952",
    "name": "Mayo",
    "description": "90 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "010426da-6c94-446a-b4d1-0b6424aa2f32",
    "name": "Sauce Pesto Basil Parmesan",
    "description": "60 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "d4d63abe-a18d-49d8-8528-fabb7ff44d08",
    "name": "Olive Tapenade",
    "description": "40 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "db7d000e-c6f8-446c-9240-453689b12f44",
    "name": "Honey Mustard Sauce, Mayo",
    "description": "60 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "fd1c1d82-55ab-44cb-96fe-ffde5e86b298",
    "name": "Baked Tofu",
    "description": "60 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "340d3f4d-4c98-43dd-ba3d-ab7508b2339b",
    "name": "House-roasted Turkey Breast",
    "description": "70 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "f21c37df-999c-42aa-a551-d47059f356a9",
    "name": "Cooked Chicken Breast No Salt",
    "description": "80 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "48f82076-334e-4328-a0dc-74d67cd21b11",
    "name": "Tuna Salad with Mayo",
    "description": "190 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Made without Gluten-Containing Ingredients",
      "Seafood Watch"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "4416560b-24d8-4152-a62a-b394655a1182",
    "name": "Smoked Ham",
    "description": "40 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "8bc41f98-2df8-4edd-a7b8-40be951e0c8e",
    "name": "Smoked Turkey",
    "description": "30 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "516362d9-d259-4583-b617-1a5e9a962e51",
    "name": "Monterey Jack",
    "description": "110 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "3b5d7f67-7dea-4432-958e-6d9c7acd86d7",
    "name": "Part Skim Mozzarella",
    "description": "80 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "609d3a0b-6d65-4bc6-bb2f-a41b2425c7fc",
    "name": "Provolone Cheese",
    "description": "100 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "fba43a85-5998-4a70-ba8d-e0ea278858c5",
    "name": "Pepper Jack Cheese",
    "description": "110 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "32397c6c-37ef-4118-a0b3-ab5f3634103f",
    "name": "Cheddar Cheese",
    "description": "110 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "65def2b8-b294-483f-92ff-8dde5494c8b9",
    "name": "Havarti",
    "description": "110 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "295f9e5e-df28-41de-bbd2-ff68fd64c1aa",
    "name": "Soppressata",
    "description": "120 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "5d42fdc3-5c35-4ff8-8e44-2dfd4cafba9a",
    "name": "Sesame Ginger Soy Vinaigrette",
    "description": "45 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "70370a74-4b49-4279-be6b-cd52bd13f440",
    "name": "Extra Virgin Olive Oil",
    "description": "110 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "281cd9e2-d44b-4b68-bd2f-b9665940dd30",
    "name": "Balsamic Vinegar",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "d4954084-c60b-433d-bcde-970fbd86bcc0",
    "name": "Red Wine Vinegar",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "355189a8-ff8b-4b3e-a249-ae0f3d8047fd",
    "name": "Fat Free Italian Dressing",
    "description": "15 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "40307e6c-8f61-4c8c-97e6-65aa224aa9ec",
    "name": "Balsamic Vinaigrette",
    "description": "170 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "368986e2-5407-486c-809d-16e8e2cd5b80",
    "name": "Ranch Dressing",
    "description": "100 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "66e500b7-052a-4fd4-90ca-ba2cb4877426",
    "name": "Honey Mustard Dressing",
    "description": "170 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "46c64d04-4df3-4413-8ca4-d5fb76557e35",
    "name": "Raisin",
    "description": "25 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "a09cd448-2b20-4c00-9b98-c1dcba1c8502",
    "name": "Sunflower Seed",
    "description": "30 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "575efa59-dc86-4fa1-9970-ef9a7c188537",
    "name": "Pumpkin Seed",
    "description": "30 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "c409982d-6b97-413d-a44a-5fbc15a3e9d5",
    "name": "Cranberry",
    "description": "45 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "62769fd6-98ee-4091-9b2c-f56d96e584f3",
    "name": "Olive Black",
    "description": "20 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "91ab66fc-59c5-477d-bdb4-ea2cdd9aa8d0",
    "name": "Croutons",
    "description": "1/4 cup 90 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "986ba574-9049-46f5-b8d9-8997cfcfc8bf",
    "name": "Chow Mein Noodles",
    "description": "140 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "72f78ab1-43f6-4030-b069-7b76d9bb2701",
    "name": "Shelled Edamame",
    "description": "50 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "6ec26a73-2bc2-4935-9b46-31419ccc20f5",
    "name": "Garbanzo Bean",
    "description": "45 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "0fbef621-32ee-42bf-81ce-84abf59c8956",
    "name": "Kidney Bean",
    "description": "25 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "9d13155f-3acd-4061-812d-51560d04a28d",
    "name": "Red Onion",
    "description": "10 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "b3fb933c-3e26-4616-a266-e57f0fd77aff",
    "name": "Broccoli",
    "description": "10 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "83f035b7-4a7c-4bdc-8587-b1f006b69f51",
    "name": "Shredded Carrot",
    "description": "10 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "64762632-c135-4901-aa0e-c35769a2981d",
    "name": "Celery",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "c1afdfa6-e4cd-4339-9814-6f0d643ce44c",
    "name": "Cucumber",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "a13ffc7c-eaad-4be4-a3e0-7adac28d360e",
    "name": "Mushroom",
    "description": "5 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "52e78602-95ec-4f29-a5e7-16e690970ae8",
    "name": "Snow Pea",
    "description": "10 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "64301b61-8f72-4844-ac12-065491817a79",
    "name": "Red & Yellow Pepper",
    "description": "5 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "8a03ad5e-d332-4854-b631-413dd870d947",
    "name": "Radish",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "09bd1344-8911-4578-bf1d-68cc58baa3ae",
    "name": "Cherry Tomato",
    "description": "5 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "b237224e-a2b8-4ea4-971c-85b27506d3fa",
    "name": "Zucchini & Yellow Squash",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "96653a53-a56b-45f2-9a50-cdcf7e0d475c",
    "name": "Corn",
    "description": "25 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "23e292dd-511b-44b9-b829-1548ee811f8d",
    "name": "Peas",
    "description": "20 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "e29b4c03-8edf-4bb3-a592-2735feb946cd",
    "name": "Roasted Beets",
    "description": "10 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "7d79076e-34c5-4e80-9e63-75990c2713c0",
    "name": "Scallion",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "57143cd4-1bdc-4b5f-a5fd-acfcf0d56cf0",
    "name": "Roasted Cauliflower",
    "description": "25 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients",
      "Garden Grown"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "b251dc05-7432-4e72-b7a1-c2e1ec45743f",
    "name": "Honeydew",
    "description": "10 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "80f293b3-c9af-4034-8be1-66a86f7e0c07",
    "name": "Peach",
    "description": "10 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "8cd7e64f-798e-4184-a19b-95da1b56e1c1",
    "name": "Cantaloupe",
    "description": "10 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "90e0a89f-e2f8-467d-a7ba-9d36ae4c577e",
    "name": "Lemon Wedges",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "1836ceed-1052-4b87-a347-0c346ddfb5db",
    "name": "Mozzarella",
    "description": "80 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "70de2b73-91ec-48b5-9281-2d5d8f038815",
    "name": "Cheddar Cheese",
    "description": "110 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "b0579a6e-c0d6-4df4-a5c0-7438de8380e2",
    "name": "Cottage Cheese Low-fat",
    "description": "25 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "d04beccf-c849-4dd4-963d-8da127a5d14e",
    "name": "Romaine Lettuce",
    "description": "10 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "13f45b7d-a211-4d32-a281-1e4802eece2c",
    "name": "Local Mixed Baby Greens",
    "description": "10 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "baabec0c-21e1-4948-a7d5-816c7a809f2a",
    "name": "Red Cabbage",
    "description": "5 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "1a99ef53-c064-482e-9b5a-4390545efec1",
    "name": "Baby Kale",
    "description": "25 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "cfb4b17d-9002-4fb4-86ee-230e94ca3067",
    "name": "Baby Spinach",
    "description": "0 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "72110139-dc99-4d32-adcf-962088f4c801",
    "name": "Garden Quinoa Salad",
    "description": "50 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients",
      "Garden Grown"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "aef9604c-1ddd-43cf-bb69-0130303c69cd",
    "name": "Yukon Potato Salad",
    "description": "35 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients",
      "Garden Grown"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "dfa6bbb2-e0a0-49fc-920c-83106536ce14",
    "name": "Market Pasta Salad",
    "description": "160 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "In Balance",
      "Locally Crafted",
      "Garden Grown"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "a9b91224-f359-4381-bb53-28ee748a1dca",
    "name": "Macaroni Salad",
    "description": "160 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "In Balance",
      "Garden Grown"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "a75508c2-d228-4103-a6a3-87a36dc51f58",
    "name": "Fried & Marinated Tofu",
    "description": "70 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegan",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  },
  {
    "id": "5f7dd1c7-23aa-4ad3-9ef4-b385ba3c6d98",
    "name": "Cage Free Egg",
    "description": "60 cal. NUTRITION INFORMATION",
    "price": 0.0,
    "image": "/placeholder.svg?height=300&width=300",
    "category": "dinner",
    "tags": [
      "Vegetarian",
      "Made without Gluten-Containing Ingredients"
    ],
    "nutritionalInfo": {
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    },
    "allergens": [],
    "available": true
  }
]

export function getMenuItemsByCategory(categoryId: string): MenuItem[] {
  return menuItems.filter((item) => item.category === categoryId && item.available)
}

export function getAllMenuItems(): MenuItem[] {
  return menuItems.filter((item) => item.available)
}

export function getMenuItem(id: string): MenuItem | undefined {
  return menuItems.find((item) => item.id === id)
}

export function searchMenuItems(query: string): MenuItem[] {
  const lowercaseQuery = query.toLowerCase()
  return menuItems.filter(
    (item) =>
      (item.name.toLowerCase().includes(lowercaseQuery) ||
        item.description.toLowerCase().includes(lowercaseQuery) ||
        item.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))) &&
      item.available,
  )
}

