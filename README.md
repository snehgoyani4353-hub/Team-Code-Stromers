# Team-Code-Stromers
# 🏙️ CIVICA ગુજરાત — Civic Engagement & Urban Mobility Platform
### Developed by **Team Code Stromers**

[![Platform](https://img.shields.io/badge/Platform-Web%20Application-blue.svg)](index.html)
[![Gujarat Municipalities](https://img.shields.io/badge/Municipalities-AMC%20%7C%20SMC%20%7C%20VMC%20%7C%20RMC%20%7C%20GMC-orange.svg)](data.js)
[![Languages](https://img.shields.io/badge/Languages-English%20%7C%20%E0%AA%97%E0%AB%81%E0%AA%9C%E0%AA%B0%E0%AA%BE%E0%AA%A4%E0%AB%80%20%7C%20%E0%A4%B9%E0%A4%BF%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A5%80-success.svg)](app.js)
[![License](https://img.shields.io/badge/License-MIT-lightgrey.svg)](LICENSE)

---

## 📌 Overview

**CIVICA** is an end-to-end Smart City Civic Engagement and Urban Mobility Platform designed for the municipal corporations of Gujarat (Ahmedabad, Surat, Vadodara, Rajkot, and Gandhinagar).

It bridges the gap between citizens, municipal field officers, and state-level command centers through real-time geospatial reporting, an anti-spam escrow deposit system, multi-lingual support, and an Integrated Command & Control Centre (ICCC).

---

## 🌟 Key Features

### 1. 👥 Citizen Portal
- **Rapid Issue Reporting**: Log complaints across 7 civic categories:
  - 💡 **Streetlights & Electrical**
  - 🚧 **Roads & Potholes**
  - 🗑️ **Solid Waste Management & Sanitation**
  - 🌊 **Monsoon Drainage & Waterlogging**
  - 🚌 **BRTS / Public Transit Infrastructure**
  - 💧 **Hydraulics & Potable Water Supply**
  - 📋 **General Administration**
- **₹50 Refundable Anti-Spam Escrow**: Citizens deposit a refundable ₹50 fee held in municipal escrow to eliminate prank reports. It is automatically refunded to their Civic Wallet once an officer validates the site inspection.
- **Real-Time Ticket Tracking**: Live SLA timelines, official engineer field logs, and photo verification.
- **Tri-Lingual Interface**: Instant toggling between **English**, **ગુજરાતી (Gujarati)**, and **हिन्दी (Hindi)**.
- **AI Civic Assistant**: Floating 24/7 AI chat widget assisting citizens with municipal queries, ticket statuses, and escrow refunds.
- **Transit & Community Flow**: Live BRTS updates, bus corridor status, and community feed with society-sharing features.

### 2. 🏛️ Municipal Officer Portal
- **Complaint Inbox & Prioritization**: Filter by urgency, SLA risk, and routine vs. monsoon alerts.
- **Interactive Ward Map**: Real-time Leaflet GIS mapping with live GPS pins for pending and active tasks.
- **Escrow Refund Release**: 1-click inspection verification and instant escrow deposit disbursement.
- **Shift Rostering & Action Checklists**: Daily task management, duty logs, and crew dispatch controls.
- **Performance KPIs**: MTTR (Mean Time to Resolution), SLA adherence, and crowdsourced accuracy analytics.

### 3. 🛰️ Tactical Command Center (ICCC)
- **State-Wide Municipal Switchboard**: Real-time monitoring across **AMC**, **SMC**, **VMC**, **RMC**, and **GMC**.
- **Geospatial Radar Simulation**: Live rotating radar tracking active incidents and rapid-response vehicles.
- **Fleet Management**: Live telemetry tracking of municipal repair trucks, drainage pumps, and inspection vans.
- **Emergency Sirens & Audio Alerts**: Built-in sound generator and tactical alert dispatch system.

---

## ⚡ Quick Start & Demo Credentials

### 1. Running Locally

You can run CIVICA without external dependencies. Choose any of the following methods:

#### Option A: Python (Recommended)
```bash
python3 -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

#### Option B: Direct Browser Open
Simply double-click or open `index.html` in any modern web browser (Chrome, Edge, Firefox, Safari).

#### Option C: PowerShell Server (Windows)
```powershell
.\server.ps1
```
Visit [http://localhost:8080](http://localhost:8080).

---

### 2. Demo Credentials

You can use the **⚡ DEMO LOGIN** button in the header for 1-click access, or log in with the following demo credentials:

| Role | Username / Email | Password / Token | Description |
| :--- | :--- | :--- | :--- |
| **Citizen** | `priya.patel@gmail.com` | `civica2026` | Full access to Citizen Dashboard, Civic Wallet, and Complaint Filing |
| **Municipal Officer** | `officer@amc.gujarat.gov.in` | `2026` | Access to Ward 7 Navrangpura Admin Dashboard & Shift Roster |
| **ICCC Commander** | `commander.rathore@iccc.gujarat.gov.in` | `2026` | Access to Tactical Command Center, Radar & Fleet Telemetry |

---

## 📁 Repository Structure

```text
Team-Code-Stromers/
├── index.html                    # Unified master web application entry point
├── styles.css                    # Comprehensive styling, glassmorphism, responsive UI
├── app.js                        # Main application controller, i18n, logic, state management
├── data.js                       # Gujarat municipal datasets, categories, ticket models
├── rules-and-contact.html        # Citizen charter, SLA definitions, and 24x7 helpline directory
├── server.ps1                    # Optional local API & mock server (PowerShell)
├── README.md                     # Project documentation
│
├── admins/                       # Administrative ward profiles & duty rosters
│   ├── admin_01_rajesh_parmar/   # Ward Officer Rajesh Parmar (duty_log, shift_roster, tickets)
│   ├── admin_02_sunita_desai/    # Ward Officer Sunita Desai
│   ├── admin_03_mahesh_solanki/  # Ward Officer Mahesh Solanki
│   └── admin_04_farida_sheikh/   # Ward Officer Farida Sheikh
│
├── citizens/                     # Pre-configured citizen profile records
│   ├── citizen_01_aarav_patel/   # Profile, civic activity, wallet, and ticket data
│   ├── citizen_02_priya_sharma/
│   └── ... (citizen_03 through citizen_15)
│
└── command_center/               # Integrated Command & Control Centre (ICCC)
    ├── command_center_dashboard.html # Standalone tactical command interface
    ├── command_system.js         # Radar engine, fleet simulation, and sound controller
    ├── fleet_units.json          # Live municipal vehicle telemetry
    ├── tactical_incidents.json   # High-priority municipal alerts
    └── operator_commander_profile.json
```

---

## 🛠️ Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript (ES6+), Vanilla CSS3 (Custom Design System with CSS variables)
- **Mapping & GIS**: [Leaflet.js](https://leafletjs.com/) with OpenStreetMap tiles
- **Icons & Typography**: Font Awesome 6.5, Google Fonts (*Outfit*, *Cinzel*, *Plus Jakarta Sans*, *Noto Sans Gujarati*)
- **Audio & Simulation**: HTML5 Web Audio API (Synthesized sirens and radar pings)
- **Data Format**: Lightweight JSON structures for offline-first resilience

---

## 👥 Team

**Team Code Stromers**
- Sneh Goyani 
- Rudra Lakkad
- Divy Gadhiya
- Raj Virani
- Bhavesh Suthar 
*Built for innovation in civic technology and municipal urban governance.*
