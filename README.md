# Kisan Crop Advisor - AI-Powered Farming Guide

*A professional agricultural decision support system helping Indian farmers choose the best crops for their land*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://v0-farmer-crop-advisor.vercel.app/)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app)

## 🌾 Overview

Kisan Crop Advisor is a comprehensive web application designed to empower Indian farmers with data-driven crop recommendations. By analyzing soil conditions, climate data, rainfall patterns, and location-specific factors, the app suggests the most suitable crops for maximizing yield and profit.

**Live Demo:** [https://v0-farmer-crop-advisor.vercel.app/](https://v0-farmer-crop-advisor.vercel.app/)

## ✨ Key Features

### 🎯 Intelligent Crop Recommendations
- **State-based defaults**: Auto-filled soil pH, rainfall, and recommended crops for each Indian state
- **Smart scoring**: Crops ranked by suitability based on agronomic data
- **Jharkhand support**: Full coverage including rice, wheat, maize, and pulses
- **Real yield data**: Average productivity and water requirements per crop

### 🗺️ Comprehensive Coverage
- **29 Indian states** with regional crop varieties
- **Multiple soil types**: Loam, clay, sandy, laterite, alluvial, black soil
- **Seasonal recommendations**: Kharif (monsoon), Rabi (winter), Zaid (summer)
- **Reference maps**: Major cropping systems and soil type distributions in India

### 🌐 Multilingual Support
- **English** - Default interface
- **हिंदी (Hindi)** - Full Hindi translation
- **ਪੰਜਾਬੀ (Punjabi)** - Complete Punjabi support
- **One-click switching** - Instant language toggle preserves navigation

### 📱 Mobile-First Design
- Responsive UI optimized for all devices
- Touch-friendly navigation arrows
- Share functionality for WhatsApp, Twitter, Telegram, Facebook
- Copy-to-clipboard for quick sharing

### 👥 Community & Resources
- **Resources Hub** (`/resources`): Browse and click crops for detailed info
- **Community Page** (`/community`): Farmer testimonials and crop success stories
- **About Section** (`/about`): Mission, approach, and features
- **Farmer Helpline**: 1800-180-1551 (Kisan Call Center)

## 📋 Pages

| Route | Purpose |
|-------|---------|
| `/` | Home page with hero, state highlights, how-it-works |
| `/recommend` | Crop recommendation form and results |
| `/resources` | Clickable crop cards with full details and yield data |
| `/about` | About the app, mission, and features |
| `/community` | Farmer testimonials and shared experiences |

## 🛠️ Tech Stack

- **Frontend**: Next.js 16 (App Router), React, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **State Management**: React Context (i18n)
- **Data**: Static crop database with state-specific variants
- **Deployment**: Vercel

## 🚀 Getting Started

### Local Development

```bash
# Clone the repository
git clone https://github.com/shubhamjrd4559-sudo/kisan-crop-advisor.git
cd kisan-crop-advisor

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

## 📊 Crop Database

The app includes data for major Indian crops:
- **Cereals**: Rice, Wheat, Maize, Sorghum
- **Pulses**: Chickpea, Lentil, Pigeon pea
- **Cash Crops**: Cotton, Sugarcane
- **Vegetables & Fruits**: Regional varieties by state

Each crop includes:
- Optimal pH range
- Water requirements (mm/year)
- Maturity period (days)
- Productivity (tonnes/hectare)
- Best regions and seasons

## 🌍 Supported States

Punjab, Haryana, Uttar Pradesh, Bihar, West Bengal, Jharkhand, Madhya Pradesh, Maharashtra, Gujarat, Rajasthan, Karnataka, Andhra Pradesh, Tamil Nadu, Telangana, Odisha, Chhattisgarh, and more.

## 📱 Sharing

Share crop recommendations via:
- **WhatsApp**: Direct link with pre-filled state & crop data
- **X/Twitter**: Short recommendation format
- **Telegram**: Cross-platform compatibility
- **Facebook**: Social network integration
- **Copy Link**: Manual sharing with all parameters encoded

## 🔗 Deployment

Your project is live at:

**[https://v0-farmer-crop-advisor.vercel.app/](https://v0-farmer-crop-advisor.vercel.app/)**

GitHub Repository:

**[https://github.com/shubhamjrd4559-sudo/kisan-crop-advisor](https://github.com/shubhamjrd4559-sudo/kisan-crop-advisor)**

## 📝 How It Works

1. **Select Your State** → Auto-populated defaults (pH, rainfall, soil)
2. **Fill Farm Details** → Soil type, season, irrigation availability
3. **Get Recommendations** → Ranked crops with scores and reasoning
4. **Learn More** → Click crop cards for detailed yield and region info
5. **Share & Discuss** → Share with family or post in community

## 🎨 Design

- **Color Scheme**: Green (primary), Earth tones, High contrast
- **Typography**: Professional sans-serif for readability
- **Accessibility**: WCAG compliant, screen reader friendly
- **Mobile UX**: Touch targets, lazy loading, minimal scrolling

## 🔄 Auto-Sync with v0.app

This repository automatically syncs with [v0.app](https://v0.app) deployments. Changes made in the v0 interface are automatically pushed to GitHub.

Build your app: **[https://v0.app/](https://v0.app/)**

## 📄 License

Open source project for agricultural development.

## 👨‍🌾 For Farmers

**This app is free and open to all.** Bookmark it, share it with your farming community, and help others make better crop decisions for higher yields and sustainability.

**Questions?** Call the Kisan Call Center: **1800-180-1551** (Free, 24/7)
