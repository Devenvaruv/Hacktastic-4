import type { OrderItem } from "@/lib/admin-data"
// Add import for user store
import { getUserById } from "@/lib/user-store"

export type OrderStatus = "pending" | "preparing" | "ready" | "completed" | "cancelled"

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
  specialInstructions?: string
  statusHistory?: {
    status: OrderStatus
    timestamp: string
    updatedBy?: string
  }[]
}

// Get all orders from localStorage
export function getAllOrders(): Order[] {
  if (typeof window === "undefined") return []

  try {
    const orders = localStorage.getItem("orders")
    return orders ? JSON.parse(orders) : []
  } catch (error) {
    console.error("Error retrieving orders:", error)
    return []
  }
}

// Get orders for a specific user
export function getUserOrders(userId: string): Order[] {
  const orders = getAllOrders()
  return orders.filter((order) => order.customerId === userId)
}

// Save a new order
export function saveOrder(order: Order): Order {
  const orders = getAllOrders()

  // If the order has a customerId but no customer details, try to get them from the user store
  if (order.customerId && (!order.customerName || !order.customerEmail)) {
    const user = getUserById(order.customerId)
    if (user) {
      order.customerName = user.name
      order.customerEmail = user.email
    }
  }

  // Add the new order to the beginning of the array
  orders.unshift(order)

  // Save back to localStorage
  localStorage.setItem("orders", JSON.stringify(orders))

  return order
}

// Update an existing order
export function updateOrder(updatedOrder: Order): Order {
  const orders = getAllOrders()

  const updatedOrders = orders.map((order) => (order.id === updatedOrder.id ? updatedOrder : order))

  localStorage.setItem("orders", JSON.stringify(updatedOrders))

  return updatedOrder
}

// Update order status
export function updateOrderStatus(orderId: string, newStatus: OrderStatus, updatedBy = "Admin User"): Order | null {
  const orders = getAllOrders()
  let updatedOrder: Order | null = null

  const updatedOrders = orders.map((order) => {
    if (order.id === orderId) {
      const now = new Date().toISOString()

      // Create status history if it doesn't exist
      const statusHistory = order.statusHistory || []

      updatedOrder = {
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

      return updatedOrder
    }
    return order
  })

  localStorage.setItem("orders", JSON.stringify(updatedOrders))

  return updatedOrder
}

// Generate a unique order ID
export function generateOrderId(): string {
  return `USF${100000 + Math.floor(Math.random() * 900000)}`
}

