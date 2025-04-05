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

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Avocado Toast",
    description: "Smashed avocado on artisan sourdough bread with cherry tomatoes and microgreens",
    price: 8.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "breakfast",
    tags: ["vegetarian", "healthy"],
    nutritionalInfo: {
      calories: 320,
      protein: 8,
      carbs: 42,
      fat: 14,
    },
    allergens: ["gluten"],
    available: true,
  },
  {
    id: "2",
    name: "Breakfast Burrito",
    description: "Scrambled eggs, black beans, cheese, and pico de gallo wrapped in a flour tortilla",
    price: 9.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "breakfast",
    tags: ["protein", "hearty"],
    nutritionalInfo: {
      calories: 550,
      protein: 22,
      carbs: 58,
      fat: 24,
    },
    allergens: ["gluten", "dairy", "eggs"],
    available: true,
  },
  {
    id: "3",
    name: "Greek Yogurt Parfait",
    description: "Creamy Greek yogurt layered with fresh berries, honey, and house-made granola",
    price: 6.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "breakfast",
    tags: ["vegetarian", "healthy", "protein"],
    nutritionalInfo: {
      calories: 310,
      protein: 18,
      carbs: 38,
      fat: 9,
    },
    allergens: ["dairy", "nuts"],
    available: true,
  },
  {
    id: "4",
    name: "Chicken Caesar Wrap",
    description: "Grilled chicken, romaine lettuce, parmesan cheese, and Caesar dressing in a spinach wrap",
    price: 10.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "lunch",
    tags: ["protein", "popular"],
    nutritionalInfo: {
      calories: 480,
      protein: 32,
      carbs: 45,
      fat: 18,
    },
    allergens: ["gluten", "dairy", "eggs"],
    available: true,
  },
  {
    id: "5",
    name: "Quinoa Bowl",
    description: "Tri-color quinoa with roasted vegetables, chickpeas, and tahini dressing",
    price: 11.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "lunch",
    tags: ["vegan", "gluten-free", "healthy"],
    nutritionalInfo: {
      calories: 420,
      protein: 14,
      carbs: 62,
      fat: 16,
    },
    allergens: ["sesame"],
    available: true,
  },
  {
    id: "6",
    name: "Turkey Club Sandwich",
    description: "Roasted turkey, bacon, lettuce, tomato, and mayo on toasted wheat bread",
    price: 10.49,
    image: "/placeholder.svg?height=300&width=300",
    category: "lunch",
    tags: ["protein", "classic"],
    nutritionalInfo: {
      calories: 520,
      protein: 28,
      carbs: 48,
      fat: 22,
    },
    allergens: ["gluten", "eggs"],
    available: true,
  },
  {
    id: "7",
    name: "Grilled Salmon",
    description: "Sustainably sourced salmon with lemon herb butter, quinoa, and seasonal vegetables",
    price: 15.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "dinner",
    tags: ["protein", "healthy", "seafood"],
    nutritionalInfo: {
      calories: 480,
      protein: 36,
      carbs: 32,
      fat: 22,
    },
    allergens: ["fish", "dairy"],
    available: true,
  },
  {
    id: "8",
    name: "Vegetable Stir Fry",
    description: "Fresh vegetables stir-fried with tofu in a ginger soy sauce, served with brown rice",
    price: 12.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "dinner",
    tags: ["vegan", "healthy"],
    nutritionalInfo: {
      calories: 380,
      protein: 18,
      carbs: 58,
      fat: 10,
    },
    allergens: ["soy"],
    available: true,
  },
  {
    id: "9",
    name: "Pasta Primavera",
    description: "Whole wheat pasta with seasonal vegetables in a light garlic olive oil sauce",
    price: 11.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "dinner",
    tags: ["vegetarian", "pasta"],
    nutritionalInfo: {
      calories: 450,
      protein: 14,
      carbs: 68,
      fat: 16,
    },
    allergens: ["gluten"],
    available: true,
  },
  {
    id: "10",
    name: "Sweet Potato Fries",
    description: "Crispy baked sweet potato fries with chipotle aioli",
    price: 4.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "snacks",
    tags: ["vegetarian", "sides"],
    nutritionalInfo: {
      calories: 280,
      protein: 3,
      carbs: 42,
      fat: 12,
    },
    allergens: ["eggs"],
    available: true,
  },
  {
    id: "11",
    name: "Hummus & Pita",
    description: "House-made hummus with warm pita bread and vegetable crudités",
    price: 6.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "snacks",
    tags: ["vegetarian", "protein"],
    nutritionalInfo: {
      calories: 320,
      protein: 10,
      carbs: 48,
      fat: 12,
    },
    allergens: ["gluten", "sesame"],
    available: true,
  },
  {
    id: "12",
    name: "Fresh Fruit Cup",
    description: "Seasonal fresh fruit mix",
    price: 4.49,
    image: "/placeholder.svg?height=300&width=300",
    category: "snacks",
    tags: ["vegan", "healthy", "gluten-free"],
    nutritionalInfo: {
      calories: 90,
      protein: 1,
      carbs: 22,
      fat: 0,
    },
    allergens: [],
    available: true,
  },
  {
    id: "13",
    name: "Iced Coffee",
    description: "Cold brewed coffee served over ice",
    price: 3.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "beverages",
    tags: ["caffeine", "cold"],
    nutritionalInfo: {
      calories: 5,
      protein: 0,
      carbs: 1,
      fat: 0,
    },
    allergens: [],
    available: true,
  },
  {
    id: "14",
    name: "Green Smoothie",
    description: "Spinach, banana, mango, and almond milk smoothie",
    price: 5.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "beverages",
    tags: ["vegan", "healthy"],
    nutritionalInfo: {
      calories: 220,
      protein: 5,
      carbs: 42,
      fat: 4,
    },
    allergens: ["nuts"],
    available: true,
  },
  {
    id: "15",
    name: "Sparkling Water",
    description: "Refreshing sparkling water with natural flavors",
    price: 2.49,
    image: "/placeholder.svg?height=300&width=300",
    category: "beverages",
    tags: ["vegan", "sugar-free"],
    nutritionalInfo: {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
    },
    allergens: [],
    available: true,
  },
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

