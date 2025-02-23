'use client';
import { useState } from 'react';
import { Zap, Shield, Cpu, Globe, Database, Gauge, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navbar */}
      <nav className="fixed top-4 left-10 right-10 flex justify-between items-center bg-transparent backdrop-blur-md border border-gray-500 rounded-xl px-8 py-3 z-50 shadow-md">
        <h1 className="text-xl font-bold text-white">Short Craze</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 border border-gray-500 rounded-lg text-white hover:bg-gray-700 transition">
            Login
          </button>
          <button className="px-4 py-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700 transition">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Trim-URL 
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-4">
            Shorten your long URLs, customize them with keywords, track analytics, and manage your links effortlessly!
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <button className="px-6 py-3 text-lg font-semibold bg-purple-600 rounded-lg hover:bg-purple-700 transition">
              <Sparkles className="inline h-5 w-5 mr-2" />
              Get Started
            </button>
            <button className="px-6 py-3 text-lg font-semibold border border-gray-500 rounded-lg hover:bg-gray-800 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Trim-URL?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 border border-gray-700 rounded-xl bg-gray-800 hover:scale-105 transition-transform"
              >
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-300 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-purple-700 text-center">
        <h2 className="text-3xl font-semibold">Start Shortening URLs Today</h2>
        <p className="text-lg text-purple-200 mt-2">
          Join thousands of users managing their links efficiently with our platform.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition">
          Get Started Now
        </button>
      </section>
    </main>
  );
}

const features = [
  { icon: <Zap className="h-8 w-8" />, title: 'Custom Short Links', description: 'Shorten long URLs with ease.' },
  { icon: <Shield className="h-8 w-8" />, title: 'Secure & Private', description: 'Your data is safe and encrypted.' },
  { icon: <Cpu className="h-8 w-8" />, title: 'Analytics & Tracking', description: 'Monitor clicks, location, and devices.' },
  { icon: <Globe className="h-8 w-8" />, title: 'Expiring Links', description: 'Set expiration dates for links.' },
  { icon: <Database className="h-8 w-8" />, title: 'Custom Keywords', description: 'Personalize links with unique keywords.' },
  { icon: <Gauge className="h-8 w-8" />, title: 'QR Code Generation', description: 'Generate QR codes for your links.' },
];
