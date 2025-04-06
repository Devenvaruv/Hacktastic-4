# USFCA Food Ordering

A mobile-friendly web application to help students at the University of San Francisco (USFCA) order food online, reducing time spent waiting in line at the canteen. This project aims to streamline the food ordering process by allowing users to place orders in advance, either picking them up on-site or requesting delivery on campus.

## Table of Contents
- [Overview](#1-overview)
- [Project Structure](#2-project-structure)
- [Features & Functionality](#3-features--functionality)
- [Chatbot](#4-chatbot)

## 1. Overview

### Purpose
- **Main Goal**: Eliminate or reduce the wait time in the university canteen by allowing students to place online orders.
- **Problem Solved**: Long queues and inefficient order-taking at the canteen.
- **Who Benefits**: Primarily students on campus, but also canteen staff and potential delivery personnel (also students).

### Scope
- **User Flow**: Students can browse the canteen menu, place orders, and either pick up in person or have orders delivered.
- **Administration**: Canteen admins can view and manage incoming orders, update order statuses, and keep track of order history.
- **Delivery System**: Any student can register as a delivery person to fulfill delivery requests on campus, possibly earning tips.


## 2. Project Structure

A high-level view of the core folders:

```
.
├── backend
│   └── (Python script & other backend logic)
└── frontend
    ├── app
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── components
    │   │   ├── admin
    │   │   │   └── order-detail-dialog.tsx
    │   │   ├── ui
    │   │   │   ├── admin-auth-check.tsx
    │   │   │   ├── admin-sidebar.tsx
    │   │   ├── auth-provider.tsx
    │   │   ├── ChatbotModal.js
    │   │   ├── footer.tsx
    │   │   ├── header.tsx
    │   │   ├── mode-toggle.tsx
    │   │   └── student-profile.tsx
    │   ├── hooks
    │   ├── lib
    │   ├── public
    │   ├── styles
    │   ├── ...
    │   └── ...
    ├── .gitignore
    ├── components.json
    ├── next.config.mjs
    ├── package.json
    ├── package-lock.json
    └── ...
```

- **backend/** – Contains the Python script(s) handling some background tasks.
- **frontend/** – The Next.js application.
  - **app/** – The main Next.js routing and pages directory.
  - **components/** – Reusable components for admin, user, and UI-related functionalities.
  - **layout.tsx & page.tsx** – Layout and main page configuration for Next.js.
  - **globals.css** – Global CSS definitions.
  - **hooks/** – React hooks for shared logic.
  - **lib/** – Utility functions or service logic.
  - **public/** – Static files.
  - **styles/** – Additional global or component-level styling.

## 3. Features & Functionality

### User
- **Place Orders**: Browse the menu, select items, and check out.
- **Order Status**: View current order status in real time.
- **Delivery Option**: Request delivery by available student-delivery personnel.
- **Pickup Option**: Skip the line, pick up when ready.

### Admin
- **Dashboard**: View all current and past orders.
- **Update Order Status**: Mark orders as in progress, ready for pickup, or delivered.
- **Order History**: Access and filter through all completed orders.

### Delivery
- **Delivery Dashboard**: See available orders that need delivery.
- **Logistics & Tips**: View estimated delivery times and any tips offered.
- **Status Updates**: Mark delivery as complete once the order is handed off.

### Ordering Flow
1. User places an order via the app.
2. Admin sees the new order in real time.
3. Admin updates the order status to in progress, then ready, then picked up or delivered.
4. User gets notifications or sees status updates in their dashboard.

## 4. Chatbot

- **Purpose**: The chatbot is designed to answer questions about the canteen menu.
- **Integration**: A simple UI in ChatbotModal.js allows the user to open a chat interface and interact with the bot.
