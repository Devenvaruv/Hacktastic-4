"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { OrderStatus } from "@/lib/admin-data"
import type { Order } from "@/lib/order-store"
import { Clock, MapPin, CreditCard, User, Mail, Phone } from "lucide-react"

interface OrderDetailDialogProps {
  order: Order | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onStatusUpdate: (orderId: string, newStatus: OrderStatus) => void
}

export default function OrderDetailDialog({ order, open, onOpenChange, onStatusUpdate }: OrderDetailDialogProps) {
  const [newStatus, setNewStatus] = useState<OrderStatus | "">("")
  const [adminNote, setAdminNote] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)

  if (!order) return null

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    })
  }

  const handleStatusUpdate = async () => {
    if (!newStatus) return

    setIsUpdating(true)

    try {
      // Update the order status
      onStatusUpdate(order.id, newStatus)

      // Reset form
      setNewStatus("")
      setAdminNote("")
    } finally {
      setIsUpdating(false)
    }
  }

  const getStatusBadge = (status: OrderStatus) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
            Pending
          </Badge>
        )
      case "preparing":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            Preparing
          </Badge>
        )
      case "ready":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            Ready
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="outline" className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">
            Completed
          </Badge>
        )
      case "cancelled":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
            Cancelled
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center justify-between">
            <span>Order #{order.id}</span>
            {getStatusBadge(order.status)}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {/* Left column */}
          <div className="space-y-6">
            {/* Customer Information */}
            <div>
              <h3 className="text-lg font-medium mb-2">Customer Information</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>{order.customerName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{order.customerEmail}</span>
                </div>
                {order.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{order.phone}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Order Details */}
            <div>
              <h3 className="text-lg font-medium mb-2">Order Details</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>Ordered: {formatDate(order.createdAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Pickup Location: {order.pickupLocation}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>Pickup Time: {order.pickupTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                  <span>Payment Method: {order.paymentMethod}</span>
                </div>
              </div>
            </div>

            {/* Special Instructions */}
            {order.specialInstructions && (
              <div>
                <h3 className="text-lg font-medium mb-2">Special Instructions</h3>
                <p className="text-sm p-3 bg-muted rounded-md">{order.specialInstructions}</p>
              </div>
            )}

            {/* Status History */}
            {order.statusHistory && order.statusHistory.length > 0 && (
              <div>
                <h3 className="text-lg font-medium mb-2">Status History</h3>
                <div className="space-y-2">
                  {order.statusHistory.map((status, index) => (
                    <div key={index} className="text-sm flex justify-between">
                      <div className="flex items-center gap-2">
                        {getStatusBadge(status.status)}
                        <span className="text-muted-foreground">{status.updatedBy || "System"}</span>
                      </div>
                      <span className="text-muted-foreground">{formatDate(status.timestamp)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Order Items */}
            <div>
              <h3 className="text-lg font-medium mb-2">Order Items</h3>
              <div className="space-y-2">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <div>
                      <span className="font-medium">{item.quantity}x</span> {item.name}
                    </div>
                    <span>{formatCurrency(item.price * item.quantity)}</span>
                  </div>
                ))}
                <Separator className="my-2" />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>{formatCurrency(order.total)}</span>
                </div>
              </div>
            </div>

            {/* Update Status */}
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-4">Update Order Status</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="status">New Status</Label>
                  <Select value={newStatus} onValueChange={(value) => setNewStatus(value as OrderStatus)}>
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select new status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="preparing">Preparing</SelectItem>
                      <SelectItem value="ready">Ready for Pickup</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="note">Admin Note (Optional)</Label>
                  <Textarea
                    id="note"
                    placeholder="Add a note about this status change..."
                    value={adminNote}
                    onChange={(e) => setAdminNote(e.target.value)}
                  />
                </div>

                <Button onClick={handleStatusUpdate} disabled={!newStatus || isUpdating} className="w-full">
                  {isUpdating ? "Updating..." : "Update Status"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

