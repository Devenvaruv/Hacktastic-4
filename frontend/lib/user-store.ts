export type User = {
  id: string
  name: string
  email: string
  password: string // In a real app, this would be hashed
  isAdmin?: boolean
  createdAt: string
  phone?: string
}

// Get all users from localStorage
export function getAllUsers(): User[] {
  if (typeof window === "undefined") return []

  try {
    const users = localStorage.getItem("users")
    return users ? JSON.parse(users) : getInitialUsers()
  } catch (error) {
    console.error("Error retrieving users:", error)
    return getInitialUsers()
  }
}

// Get a user by email
export function getUserByEmail(email: string): User | undefined {
  const users = getAllUsers()
  return users.find((user) => user.email.toLowerCase() === email.toLowerCase())
}

// Get a user by ID
export function getUserById(id: string): User | undefined {
  const users = getAllUsers()
  return users.find((user) => user.id === id)
}

// Save a new user
export function saveUser(user: User): User {
  const users = getAllUsers()

  // Check if user with this email already exists
  if (users.some((u) => u.email.toLowerCase() === user.email.toLowerCase())) {
    throw new Error("A user with this email already exists")
  }

  // Add the new user
  users.push(user)

  // Save back to localStorage
  localStorage.setItem("users", JSON.stringify(users))

  return user
}

// Update an existing user
export function updateUser(updatedUser: User): User {
  const users = getAllUsers()

  const updatedUsers = users.map((user) => (user.id === updatedUser.id ? updatedUser : user))

  localStorage.setItem("users", JSON.stringify(updatedUsers))

  return updatedUser
}

// Generate initial users if none exist
function getInitialUsers(): User[] {
  const initialUsers = [
    {
      id: "1",
      name: "USFCA Student",
      email: "student@usfca.edu",
      password: "password", // In a real app, this would be hashed
      isAdmin: false,
      createdAt: new Date("2025-01-15").toISOString(),
      phone: "415-555-0101",
    },
    {
      id: "admin-1",
      name: "USFCA Admin",
      email: "admin@usfca.edu",
      password: "password", // In a real app, this would be hashed
      isAdmin: true,
      createdAt: new Date("2025-01-01").toISOString(),
      phone: "415-555-0102",
    },
    {
      id: "admin-2",
      name: "Dining Services",
      email: "dining@usfca.edu",
      password: "password", // In a real app, this would be hashed
      isAdmin: true,
      createdAt: new Date("2025-01-05").toISOString(),
      phone: "415-555-0103",
    },
  ]

  // Save initial users to localStorage
  localStorage.setItem("users", JSON.stringify(initialUsers))

  return initialUsers
}

