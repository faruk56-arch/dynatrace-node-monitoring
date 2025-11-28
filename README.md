# Dynatrace Full-Stack Monitoring Project 🚀

This project demonstrates end-to-end monitoring of a Node.js application using **Dynatrace OneAgent**, running on **WSL Ubuntu 22.04**.

## 🌐 Overview
I deployed a Node.js/Express application, installed Dynatrace OneAgent, and created a real monitoring dashboard including:
- Install and configure **Dynatrace OneAgent**
- Automatically discover:
  - Host metrics (CPU, memory, network)
  - Processes
  - Node.js services and endpoints
- Build a **Dynatrace dashboard** combining:
  - Service response time, RPS, error rate, slowest requests
  - Host CPU, memory and network usage
- Simulate slow endpoints and errors to validate **Davis AI** anomaly detection


## 📁 Project Structure

dynatrace-node-monitoring/
├── src/
│ └── server.js
├── README.md
└── docs/