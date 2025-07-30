# WebScan - Website Security Audit Tool

A modern, comprehensive web application for conducting security audits of websites. WebScan provides non-invasive security assessments with detailed reporting and professional-grade analysis.

## 🛡️ Features

### Core Security Analysis
- **Dual-Layer Security Analysis**: Header configuration audit, CORS policies & CSP review, cookie security
- **Vulnerability Assessment**: XSS vector identification, info disclosure detection, client-side weaknesses
- **Detailed Security Grading**: Grade (A+ to F) with severity-based calculations and industry benchmarks

### Professional Reporting
- **HTML Report Generation**: Comprehensive reports with visualization
- **Color-coded Categories**: Easy-to-understand security classifications
- **Example Fixes**: Actionable recommendations for security improvements

### Security & Privacy
- **Non-Invasive Testing**: Safe methods, no exploitation
- **Secure & Confidential**: Encrypted transmission, privacy-first approach
- **No Data Stored**: Your data remains private and secure

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd WebScan-WebsiteSecuirtyAudit-N8N
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm start` - Start production server

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Validation**: Validator.js
- **Database**: Supabase (configured but not active)

## 🏗️ Project Structure

```
WebScan-WebsiteSecuirtyAudit-N8N/
├── src/
│   ├── components/
│   │   ├── BlurText.tsx      # Animated blur text component
│   │   ├── FeatureCard.tsx   # Feature showcase cards
│   │   └── Squares.tsx       # Animated background squares
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
└── postcss.config.js        # PostCSS configuration
```

## 🔧 Configuration

The application is designed to work with external security audit APIs. To configure the backend integration:

1. Create a `.env` file in the root directory
2. Add your API credentials:
   ```env
   VITE_WEBSCAN_BASE_URL=your_api_base_url
   VITE_WEBSCAN_USERNAME=your_username
   VITE_WEBSCAN_PASSWORD=your_password
   ```

## 🎨 UI Components

### BlurText
Animated text component with blur effects for engaging user experience.

### FeatureCard
Showcase cards displaying security features with icons and descriptions.

### Squares
Animated background component with floating squares for visual appeal.

## 🔒 Security Features

- **Input Validation**: Comprehensive URL validation using validator.js
- **Secure API Communication**: Encrypted data transmission
- **Privacy-First**: No data storage, all processing is temporary
- **Non-Intrusive**: Safe testing methods that don't exploit vulnerabilities

## 📊 Security Grading System

The application provides security grades from A+ to F based on:
- Header security configurations
- CORS policy implementation
- Content Security Policy (CSP) settings
- Cookie security parameters
- Vulnerability detection results

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team

## 🔄 Version History

- **v1.0.0**: Initial release with core security audit functionality
- Modern React + TypeScript implementation
- Tailwind CSS for responsive design
- Framer Motion animations

---

**Note**: This tool is designed for legitimate security testing and should only be used on websites you own or have explicit permission to test.