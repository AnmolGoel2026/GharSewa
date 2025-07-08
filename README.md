# ![logo](https://github.com/user-attachments/assets/0ec657c7-030f-47cc-aff8-8ee94b2ac35f)
## 🚀 **GharSewa**


GharSewa is a modern, full-stack web application built with Next.js that allows users to seamlessly discover, book, and manage home services. From cleaning and repairs to plumbing and electrical work, GharSewa connects users with local service providers through an intuitive and responsive interface.

## ✨ Features

*   **User Authentication**: Secure sign-in and sign-up functionality using NextAuth.js with Descope.
*   **Service Discovery**: A powerful search and an organized category list to explore various home services.
*   **Detailed Business Pages**: View comprehensive details for each service provider, including descriptions, image galleries, contact information, and operating hours.
*   **Appointment Booking**: An easy-to-use booking system with a calendar for date selection and available time slots.
*   **Booking Management**: Users can view their upcoming and completed bookings in a dedicated "My Bookings" section.
*   **Suggests Similar Businesses**: View suggestions for similar services on business detail pages.
*   **Responsive Design**: A mobile-first design that ensures a great user experience on all devices.

## 🛠️ Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **Authentication**: [NextAuth.js](https://next-auth.js.org/) with [Descope](https://descope.com/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
*   **Backend & Database**: [Hygraph (GraphQL)](https://hygraph.com/)
*   **API Client**: [graphql-request](https://github.com/prisma-labs/graphql-request)
*   **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
*   **Date & Time**: [date-fns](https://date-fns.org/), [Moment.js](https://momentjs.com/)
*   **Deployment**: [Vercel](https://vercel.com/)

## ⚙️ Environment Variables

To run this project, you will need to create a `.env.local` file in the root directory and add the following environment variables:

```
# Hygraph GraphQL API Endpoint Key
NEXT_PUBLIC_MASTER_URL_KEY=

# Hygraph API Authorization Token
NEXT_PUBLIC_HYGRAPH_TOKEN=

# Descope OAuth Provider Client ID
DESCOPE_CLIENT_ID=

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET= # Generate a secret using: `openssl rand -hex 32`
```

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

*   Node.js (v18.18.0 or later)
*   npm, yarn, or pnpm

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/anmolgoel2026/GharSewa.git
    cd GharSewa
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and populate it with the required keys as described in the [Environment Variables](#️-environment-variables) section.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📂 Project Structure

The project uses the Next.js App Router, and the key directories are organized as follows:

```
gharsewa/
├── app/
│   ├── (routes)/              # Main application routes (details, mybooking, search)
│   ├── _components/           # Global components (Header, Footer, Hero, etc.)
│   ├── _services/             # API service for communicating with Hygraph
│   ├── api/auth/              # NextAuth.js API route
│   ├── globals.css            # Global CSS styles
│   └── layout.js              # Root layout
├── components/
│   └── ui/                    # UI components from shadcn/ui
├── lib/
│   └── utils.js               # Utility functions
└── public/                    # Static assets (images, logos)
```

## 🌐 Connect with Me

You can find me on the following platforms:

*   **GitHub**: [@AnmolGoel2026](https://github.com/AnmolGoel2026)
*   **LinkedIn**: [Anmol Goel](https://www.linkedin.com/in/anmol-goel-5a0511248)
*   **Facebook**: [Anmol Goel](https://www.facebook.com/share/16bLw8ZwJd/)
