# Text Reverser

A simple Next.js application that reverses input text and displays it in a randomly colored box with animation.

## Features
- Text input with instant reversal
- Random background color generation for results
- Spinning animation on text update
- Fully responsive design
- Static site export capability

## Tech Stack
- Next.js 14
- TypeScript
- Tailwind CSS

## Getting Started

### Prerequisites
- Node.js (v18.17 or higher)
- npm (included with Node.js)

### Installation
1. Clone the repository   ```bash
   git clone [repository-url]
   cd text-reverser   ```

2. Install dependencies   ```bash
   npm install   ```

3. Run development server   ```bash
   npm run dev   ```

Visit `http://localhost:3000` to view the application.

### Building for Production
1. Build the static site:   ```bash
   npm run build   ```

2. The static site will be generated in the `out` directory.

### Running Static Build Locally
Using Python's built-in HTTP server:   ```bash
   cd out
   python -m http.server 8000   ```
Visit `http://localhost:8000` to view the static site.

## Project Structure
text-reverser/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   └── TextReverser.tsx
├── public/            # Static assets
└── next.config.ts     # Next.js configuration

## License
[Your chosen license]

## Author
[Your name]