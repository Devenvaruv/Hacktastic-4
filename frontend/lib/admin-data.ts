// Types for admin dashboard data
export type OrderStatus = "pending" | "preparing" | "ready" | "completed" | "cancelled"

export type OrderItem = {
  id: string
  name: string
  quantity: number
  price: number
}

export type Order = {
  id: string
  customerId: string
  customerName: string
  customerEmail: string
  items: OrderItem[]
  total: number
  status: OrderStatus
  createdAt: string
  updatedAt: string
  pickupTime: string
  pickupLocation: string
  paymentMethod: string
  notes?: string
  statusHistory?: {
    status: OrderStatus
    timestamp: string
    updatedBy?: string
  }[]
}

export type Customer = {
  id: string
  name: string
  email: string
  phone?: string
  createdAt: string
  orders?: Order[]
  totalSpent?: number
  orderCount?: number
}

// Mock customers data
export const mockCustomers: Customer[] = [
  { id: "1", name: "Alex Johnson", email: "alex@usfca.edu", phone: "415-555-0101", createdAt: "2025-01-15T10:30:00Z" },
  {
    id: "2",
    name: "Maria Rodriguez",
    email: "maria@usfca.edu",
    phone: "415-555-0102",
    createdAt: "2025-01-20T14:45:00Z",
  },
  { id: "3", name: "James Lee", email: "james@usfca.edu", phone: "415-555-0103", createdAt: "2025-02-01T09:15:00Z" },
  {
    id: "4",
    name: "Sarah Williams",
    email: "sarah@usfca.edu",
    phone: "415-555-0104",
    createdAt: "2025-02-10T16:20:00Z",
  },
  {
    id: "5",
    name: "Michael Brown",
    email: "michael@usfca.edu",
    phone: "415-555-0105",
    createdAt: "2025-02-15T11:10:00Z",
  },
  { id: "6", name: "Emma Davis", email: "emma@usfca.edu", phone: "415-555-0106", createdAt: "2025-02-20T13:25:00Z" },
  { id: "7", name: "David Wilson", email: "david@usfca.edu", phone: "415-555-0107", createdAt: "2025-03-01T10:05:00Z" },
  {
    id: "8",
    name: "Olivia Martinez",
    email: "olivia@usfca.edu",
    phone: "415-555-0108",
    createdAt: "2025-03-05T15:30:00Z",
  },
  {
    id: "9",
    name: "Daniel Taylor",
    email: "daniel@usfca.edu",
    phone: "415-555-0109",
    createdAt: "2025-03-10T12:45:00Z",
  },
  {
    id: "10",
    name: "Sophia Anderson",
    email: "sophia@usfca.edu",
    phone: "415-555-0110",
    createdAt: "2025-03-15T09:50:00Z",
  },
]

// Generate mock orders data
export function generateMockOrders(count = 100): Order[] {
  const statuses: OrderStatus[] = ["pending", "preparing", "ready", "completed", "cancelled"]
  const locations = ["Market Café", "Crossroads Café", "Wolf & Kettle", "Outtakes"]
  const paymentMethods = ["dons-dollars", "flexi", "credit-card"]

  const mockItems = [
    { id: "1", name: "Avocado Toast", price: 8.99 },
    { id: "2", name: "Breakfast Burrito", price: 9.99 },
    { id: "3", name: "Greek Yogurt Parfait", price: 6.99 },
    { id: "4", name: "Chicken Caesar Wrap", price: 10.99 },
    { id: "5", name: "Quinoa Bowl", price: 11.99 },
    { id: "6", name: "Turkey Club Sandwich", price: 10.49 },
    { id: "7", name: "Grilled Salmon", price: 15.99 },
    { id: "8", name: "Vegetable Stir Fry", price: 12.99 },
    { id: "9", name: "Pasta Primavera", price: 11.99 },
    { id: "10", name: "Sweet Potato Fries", price: 4.99 },
    { id: "11", name: "Hummus & Pita", price: 6.99 },
    { id: "12", name: "Fresh Fruit Cup", price: 4.49 },
    { id: "13", name: "Iced Coffee", price: 3.99 },
    { id: "14", name: "Green Smoothie", price: 5.99 },
    { id: "15", name: "Sparkling Water", price: 2.49 },
  ]

  const orders: Order[] = []

  // Generate orders for the past 30 days
  for (let i = 0; i < count; i++) {
    const customer = mockCustomers[Math.floor(Math.random() * mockCustomers.length)]
    const orderItems: OrderItem[] = []
    const itemCount = Math.floor(Math.random() * 5) + 1 // 1-5 items per order

    // Generate random items for this order
    for (let j = 0; j < itemCount; j++) {
      const item = mockItems[Math.floor(Math.random() * mockItems.length)]
      const quantity = Math.floor(Math.random() * 3) + 1 // 1-3 quantity

      orderItems.push({
        id: item.id,
        name: item.name,
        quantity: quantity,
        price: item.price,
      })
    }

    // Calculate total
    const total = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    // Generate random date within the past 30 days
    const daysAgo = Math.floor(Math.random() * 30)
    const date = new Date()
    date.setDate(date.getDate() - daysAgo)

    // Format pickup time
    const pickupHour = Math.floor(Math.random() * 12) + 8 // 8 AM to 8 PM
    const pickupMinute = Math.random() > 0.5 ? "00" : "30"
    const amPm = pickupHour >= 12 ? "PM" : "AM"
    const formattedHour = pickupHour % 12 === 0 ? 12 : pickupHour % 12
    const pickupTime = `${formattedHour}:${pickupMinute} ${amPm}`

    const status = statuses[Math.floor(Math.random() * statuses.length)]

    // Generate status history
    const statusHistory = []
    statusHistory.push({
      status: "pending",
      timestamp: new Date(date.getTime() - Math.floor(Math.random() * 3600000)).toISOString(),
      updatedBy: "System",
    })

    if (status !== "pending") {
      statusHistory.push({
        status: "preparing",
        timestamp: new Date(date.getTime() - Math.floor(Math.random() * 1800000)).toISOString(),
        updatedBy: "Admin User",
      })
    }

    if (status === "ready" || status === "completed" || status === "cancelled") {
      statusHistory.push({
        status: status === "cancelled" ? "cancelled" : "ready",
        timestamp: new Date(date.getTime() - Math.floor(Math.random() * 900000)).toISOString(),
        updatedBy: "Admin User",
      })
    }

    if (status === "completed") {
      statusHistory.push({
        status: "completed",
        timestamp: date.toISOString(),
        updatedBy: "Admin User",
      })
    }

    orders.push({
      id: `USF${100000 + i}`,
      customerId: customer.id,
      customerName: customer.name,
      customerEmail: customer.email,
      items: orderItems,
      total: Number.parseFloat(total.toFixed(2)),
      status: status,
      createdAt: date.toISOString(),
      updatedAt: date.toISOString(),
      pickupTime: pickupTime,
      pickupLocation: locations[Math.floor(Math.random() * locations.length)],
      paymentMethod: paymentMethods[Math.floor(Math.random() * paymentMethods.length)],
      notes: Math.random() > 0.7 ? "Please include extra napkins and utensils." : undefined,
      statusHistory: statusHistory,
    })
  }

  // Sort by date, newest first
  return orders.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

// Get all customers with their order data
export function getCustomersWithOrders(): Customer[] {
  const orders = generateMockOrders(100)
  const customersMap = new Map<string, Customer>()

  // Initialize customers map with base data
  mockCustomers.forEach((customer) => {
    customersMap.set(customer.id, {
      ...customer,
      orders: [],
      totalSpent: 0,
      orderCount: 0,
    })
  })

  // Add orders to respective customers
  orders.forEach((order) => {
    const customer = customersMap.get(order.customerId)
    if (customer) {
      if (!customer.orders) customer.orders = []
      customer.orders.push(order)
      customer.totalSpent = (customer.totalSpent || 0) + order.total
      customer.orderCount = (customer.orderCount || 0) + 1
    }
  })

  return Array.from(customersMap.values())
}

// Get a specific customer by ID
export function getCustomerById(id: string): Customer | undefined {
  const customers = getCustomersWithOrders()
  return customers.find((customer) => customer.id === id)
}

// Filter orders by date range, status, or customer
export function filterOrders(
  orders: Order[],
  filters: {
    dateFrom?: string
    dateTo?: string
    status?: OrderStatus
    customer?: string
  },
): Order[] {
  return orders.filter((order) => {
    // Filter by date range
    if (filters.dateFrom && new Date(order.createdAt) < new Date(filters.dateFrom)) {
      return false
    }

    if (filters.dateTo) {
      const dateTo = new Date(filters.dateTo)
      dateTo.setHours(23, 59, 59, 999) // End of the day
      if (new Date(order.createdAt) > dateTo) {
        return false
      }
    }

    // Filter by status
    if (filters.status && order.status !== filters.status) {
      return false
    }

    // Filter by customer (name or email)
    if (filters.customer) {
      const searchTerm = filters.customer.toLowerCase()
      return (
        order.customerName.toLowerCase().includes(searchTerm) || order.customerEmail.toLowerCase().includes(searchTerm)
      )
    }

    return true
  })
}

// Update order status
export function updateOrderStatus(
  orders: Order[],
  orderId: string,
  newStatus: OrderStatus,
  updatedBy = "Admin User",
): Order[] {
  return orders.map((order) => {
    if (order.id === orderId) {
      const now = new Date().toISOString()

      // Create status history if it doesn't exist
      const statusHistory = order.statusHistory || []

      return {
        ...order,
        status: newStatus,
        updatedAt: now,
        statusHistory: [
          ...statusHistory,
          {
            status: newStatus,
            timestamp: now,
            updatedBy,
          },
        ],
      }
    }
    return order
  })
}

// Get earnings for a specific date range
export function getEarningsByDateRange(earnings: DailyEarnings[], dateFrom: string, dateTo: string): DailyEarnings[] {
  return earnings.filter((day) => {
    return day.date >= dateFrom && day.date <= dateTo
  })
}

// Calculate summary statistics
export function calculateSummaryStats(orders: Order[]) {
  const totalOrders = orders.length
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0)
  const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0

  const statusCounts = {
    pending: 0,
    preparing: 0,
    ready: 0,
    completed: 0,
    cancelled: 0,
  }

  orders.forEach((order) => {
    statusCounts[order.status]++
  })

  return {
    totalOrders,
    totalRevenue,
    averageOrderValue,
    statusCounts,
  }
}

// Daily earnings type
export type DailyEarnings = {
  date: string
  earnings: number
  orders: number
}

// Generate daily earnings data for the past 30 days
export function generateDailyEarnings(): DailyEarnings[] {
  const earnings: DailyEarnings[] = []
  const today = new Date()

  for (let i = 29; i >= 0; i--) {
    const date = new Date()
    date.setDate(today.getDate() - i)

    // Generate random earnings between $500-2000
    const dailyEarnings = Math.floor(Math.random() * 1500) + 500

    // Generate random order count between 30-100
    const orderCount = Math.floor(Math.random() * 70) + 30

    earnings.push({
      date: date.toISOString().split("T")[0],
      earnings: dailyEarnings,
      orders: orderCount,
    })
  }

  return earnings
}

