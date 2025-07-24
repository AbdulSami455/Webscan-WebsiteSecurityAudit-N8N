import React, { useState } from 'react';
import BlurText from './components/BlurText';
import Squares from './components/Squares';
import FeatureCard from './components/FeatureCard';
import { Shield, Globe, Mail, Layers, FileText, Eye, Lock, Linkedin, Github } from 'lucide-react';
import axios from 'axios';
import { createClient } from '@supabase/supabase-js';

declare global {
  interface ImportMeta {
    env: {
      VITE_WEBSCAN_BASE_URL: string;
      VITE_WEBSCAN_USERNAME: string;
      VITE_WEBSCAN_PASSWORD: string;
      VITE_SUPABASE_URL: string;
      VITE_SUPABASE_ANON_KEY: string;
    };
  }
}

const features = [
  {
    icon: Layers,
    title: 'Dual-Layer Security Analysis',
    description: (
      <ul className="list-disc ml-5">
        <li>Header Configuration Audit</li>
        <li>CORS Policies & CSP Review</li>
        <li>Cookie Security</li>
      </ul>
    ),
  },
  {
    icon: Eye,
    title: 'Vulnerability Assessment',
    description: (
      <ul className="list-disc ml-5">
        <li>XSS Vector Identification</li>
        <li>Info Disclosure Detection</li>
        <li>Client-side Weaknesses</li>
      </ul>
    ),
  },
  {
    icon: FileText,
    title: 'Detailed Security Grading',
    description: (
      <ul className="list-disc ml-5">
        <li>Grade (A+ to F)</li>
        <li>Severity-based Calculations</li>
        <li>Industry Benchmarks</li>
      </ul>
    ),
  },
  {
    icon: Mail,
    title: 'Professional Report Generation',
    description: (
      <ul className="list-disc ml-5">
        <li>HTML Report with Visualization</li>
        <li>Color-coded Categories</li>
        <li>Example Fixes</li>
      </ul>
    ),
  },
  {
    icon: Globe,
    title: 'Non-Invasive Testing',
    description: (
      <ul className="list-disc ml-5">
        <li>Safe Methods, No Exploitation</li>
        <li>System-Friendly Assessments</li>
      </ul>
    ),
  },
  {
    icon: Lock,
    title: 'Secure & Confidential',
    description: (
      <ul className="list-disc ml-5">
        <li>Encrypted Transmission</li>
        <li>Privacy-First</li>
        <li>No Data Stored</li>
      </ul>
    ),
  },
];

const API_URL = import.meta.env.VITE_WEBSCAN_BASE_URL;
const API_USER = import.meta.env.VITE_WEBSCAN_USERNAME;
const API_PASS = import.meta.env.VITE_WEBSCAN_PASSWORD;

// Get Supabase credentials from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      await axios.get(`${API_URL}?landing_page_url=${encodeURIComponent(website)}&email=${encodeURIComponent(email)}`, {
        auth: { username: API_USER, password: API_PASS },
      });
      // Insert into Supabase users table
      const { data, error } = await supabase
        .from('users')
        .insert([{ email, landingpage: website }]);
      if (error) {
        setError('Supabase error: ' + error.message);
      } else {
        setSuccess('Audit requested! Check your email for audit after 1 minute.');
      }
    } catch (err: any) {
      setError('Failed to request audit. Please check your details and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#181a20] text-white overflow-x-hidden">
      <Squares speed={0.5} squareSize={40} direction="diagonal" borderColor="#23263a" hoverFillColor="#222" />
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-20 flex items-center justify-between px-8 py-4 bg-glass border-b border-glass-border shadow-glass backdrop-blur-md">
        <div className="flex items-center gap-3">
         
          <span className="text-2xl font-extrabold text-primary tracking-tight">WebScan By Hinterbuild </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/AbdulSami455"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-white transition"
          >
            <Github className="w-7 h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-sami-a48b78234/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-white transition"
          >
            <Linkedin className="w-7 h-7" />
          </a>
        </div>
      </header>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 pt-32">
        {success ? (
          <div className="max-w-md w-full mx-auto bg-glass border border-glass-border rounded-2xl shadow-glass p-8 flex flex-col items-center backdrop-blur-md animate-fade-in">
            <span className="bg-primary/30 p-4 rounded-full mb-4 shadow-glow">
              <Shield className="w-8 h-8 text-primary" />
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-4">Check your email for audit After 1 Minute</h2>
            <p className="text-gray-300 text-center mb-4">
              If you still do not get the audit report, email me at <a href="mailto:as1987137@gmail.com" className="underline text-primary">as1987137@gmail.com</a><br />
              or reach me on LinkedIn: <a href="https://www.linkedin.com/in/abdul-sami-a48b78234/" target="_blank" rel="noopener noreferrer" className="underline text-primary">@abdul-sami-a48b78234</a>
            </p>
            <button
              className="w-full py-3 mt-2 rounded-lg bg-primary text-white font-bold text-lg shadow-glow hover:bg-primary/80 transition"
              onClick={() => { setSuccess(''); setWebsite(''); setEmail(''); }}
            >
              Go Back
            </button>
          </div>
        ) : (
          <div className="max-w-md w-full mx-auto bg-glass border border-glass-border rounded-2xl shadow-glass p-8 flex flex-col items-center backdrop-blur-md">
            <div className="flex flex-col items-center mb-6">
              <span className="bg-primary/30 p-4 rounded-full mb-4 shadow-glow">
                <Shield className="w-8 h-8 text-primary" />
              </span>
              <BlurText
                text="Scan Your Website for Security Vulnerabilities"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-2xl md:text-3xl font-extrabold text-white text-center mb-2"
              />
              <p className="text-gray-400 text-center text-base mb-2">
                Enter your website URL and email to receive a comprehensive security report
              </p>
            </div>
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
              <div>
                <label className="text-sm font-semibold flex items-center gap-2 mb-1" htmlFor="website">
                  <Globe className="w-4 h-4 text-primary" /> Website URL
                </label>
                <input
                  id="website"
                  type="url"
                  required
                  placeholder="https://your-website.com"
                  className="w-full px-4 py-3 rounded-lg bg-glass-light border border-glass-border text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
                  value={website}
                  onChange={e => setWebsite(e.target.value)}
                  disabled={loading}
                />
              </div>
              <div>
                <label className="text-sm font-semibold flex items-center gap-2 mb-1" htmlFor="email">
                  <Mail className="w-4 h-4 text-primary" /> Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your-email@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-glass-light border border-glass-border text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 mt-2 rounded-lg bg-primary text-white font-bold text-lg shadow-glow hover:bg-primary/80 transition disabled:opacity-60"
                disabled={loading}
              >
                {loading ? 'Scanning...' : 'Scan Website Security'}
              </button>
              {success && <div className="text-green-400 text-center text-sm mt-2">{success}</div>}
              {error && <div className="text-red-400 text-center text-sm mt-2">{error}</div>}
            </form>
            <div className="text-gray-500 text-xs mt-6 flex items-center gap-2">
              <span className="inline-block"><Lock className="w-4 h-4 inline-block mr-1 text-primary" /></span>
              Your data is secure. We perform non-invasive testing and never store sensitive information.
            </div>
          </div>
        )}
        {/* Features Section */}
        <div className="max-w-5xl w-full mx-auto mt-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-2">Advanced Security Features</h2>
          <p className="text-gray-400 text-center mb-10">Comprehensive website security analysis powered by AI-driven assessment tools</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FeatureCard key={i} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <span className="bg-glass-light border border-glass-border rounded-full px-6 py-2 text-primary font-semibold text-sm shadow-glass">
              <Lock className="w-4 h-4 inline-block mr-2 text-primary" /> Enterprise-Grade Security
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 