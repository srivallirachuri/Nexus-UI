# Nexus UI System

A modern, high-performance design system and component library built for rapid product development. Nexus UI provides a robust set of foundations, primitives, and complex patterns to build beautiful user interfaces with ease.

![Nexus UI Dashboard Preview](https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6)

## 🚀 Vision

Nexus UI is designed to bridge the gap between design and development by providing:
- **Atomic Primitives**: Highly flexible, low-level components.
- **Visual Foundations**: Standardized color, typography, and spacing systems.
- **Production Patterns**: Ready-to-use layouts and complex UI modules.
- **Developer Experience**: Interactive documentation with full code copy-paste capability.

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: SVG-based custom icons

## 📁 Project Structure

```text
nexus-ui-system/
├── components/
│   ├── navigation/    # Navbar, Sidebar
│   ├── ui/
│   │   ├── Foundations.tsx # Colors, Typography, Spacing
│   │   ├── Primitives.tsx  # Button, Text, Heading, Badge, Avatar
│   │   ├── Forms.tsx       # Input, Checkbox, Switch, Select
│   │   └── Layout.tsx      # Container, Stack, Grid, Card
│   └── Composite/     # Modal, Tabs, Accordion (Coming Soon)
├── pages/
│   ├── patterns/      # DashboardPage, LoginPage
│   ├── ComponentPage.tsx # Dynamic documentation template
│   └── LandingPage.tsx   # Project homepage
├── types.ts           # Global type definitions
└── index.html         # Tailwind & Font configuration
```

## 🏗 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd nexus-ui-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📖 Using Snippets in Your Own Project

Nexus UI components are designed to be copy-pasted. To ensure they run correctly in your local environment, please note the following requirements:

### 1. TypeScript Requirement
All code snippets use **TypeScript (.tsx)**. If you are using plain JavaScript, you must remove the type annotations (e.g., `: React.FC`, `<CartItem[]>`) to avoid syntax errors.

### 2. Peer Dependencies
Ensure your project has the following dependencies installed:
```bash
npm install framer-motion lucide-react tailwind-merge clsx
```

### 3. Tailwind CSS
Components rely on Tailwind CSS for styling. Make sure you have Tailwind configured in your project.

### 4. Components Primitives
Complex components (like Templates) often import internal primitives from `./ui`. When copying a complex component, you may also need to copy its dependent primitives like `Button`, `Card`, or `Heading`.

---

## 🎨 Design System

Our system uses a custom Tailwind configuration optimized for accessibility and brand consistency.

- **Primary Color**: Elegant Violet (`#8b5cf6`)
- **Neutral Palette**: Slate-inspired Grays
- **Typography**: Inter (Sans) & JetBrains Mono (Code)

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request or open an issue for any bugs or feature requests.

---

Built with ❤️ by the Nexus UI Team.
