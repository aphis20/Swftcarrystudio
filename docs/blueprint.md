# **App Name**: SwiftCarry

## Core Features:

- Trip Posting: Allow travelers to post their upcoming trips, specifying departure and arrival locations, dates, mode of transport, and maximum package size.
- Delivery Request: Enable senders to search for available trips based on destination and date, filter by departure time, package type, and transport mode, and submit delivery requests with pickup and drop-off details.
- Package Tracking: Provide live status updates for package delivery, including stages like 'Requested,' 'Accepted,' 'In Transit,' 'Delivered,' and 'Confirmed.'

## Style Guidelines:

- Primary color: Teal (#008080) for trust and reliability.
- Secondary color: Light gray (#F0F0F0) for clean backgrounds.
- Accent: Orange (#FFA500) for calls to action and important notifications.
- Clean and modern fonts for easy readability on mobile devices.
- Simple and intuitive icons for navigation and status indicators.
- Mobile-first responsive design with clear and concise information architecture.

## Original User Request:
🧠 AI Instruction Prompt: Build 3rip – The Peer-to-Peer Delivery Platform
🎯 App Description
3rip is a mobile-first web + native app that connects people traveling to a destination with others who want to send packages to the same destination.

The platform should match senders with trusted travelers (drivers/flyers), both locally (e.g. Ibadan → Lagos) and internationally (e.g. London → Lagos).

🧱 STEP-BY-STEP: 3rip Features + Logic for AI
🧑‍✈️ 1. Trip Posting System
Travelers can post their upcoming journey and declare free space

Fields:

Departure location (GPS / city / airport)

Arrival location

Date & time of departure

Mode of travel (car, flight, bus)

Max package size allowed (e.g. envelope, box, luggage room)

Contact option: In-app chat only (no number upfront)

🧭 2. Delivery Request System
Senders browse available trips and request to send a package

Sender Flow:

Search by destination + date

Filter by:

Departure time

Type of package allowed

Transport mode

Fill delivery form:

Pickup location

Drop-off contact

Package description + optional photos

Estimated delivery deadline (arrival date)

Logic:

Driver can see delivery requests and accept/decline

Notification sent to both sides when accepted

🌐 3. Geolocation + Proximity Matching
Match users within a reasonable radius of pickup and drop-off

Use:

Google Maps API

Haversine formula (backend) to match pickup radius (e.g. 5km max)

Map-based interface for nearby senders/drivers

🔐 4. Trust & Safety Features
KYC verification (photo ID, selfie)

Ratings and reviews

Delivery confirmation code

Real-time GPS tracking during active trip (optional)

Chat history stored securely

📦 5. Package Delivery Tracking
Live status updates for sender & receiver

Stages:

Requested

Accepted

In Transit

Delivered

Confirmed

Optionally allow:

Uploading proof of delivery (image or code confirmation)

💬 6. In-App Chat
Real-time messaging between sender and driver after request is accepted

Tech:

Socket.io (WebSocket) or Firebase Realtime DB

Temporary masked chat (no numbers shared unless confirmed)

💸 7. Payment Flow (Optional Monetization)
Set price per delivery or negotiate

Platform fee (e.g., ₦500 or £3 commission per match)

Wallet system for in-app credits (Stripe, Paystack, Flutterwave)

🌍 8. International Matching
Travelers flying internationally can:

Post flight dates

Set airport pickup/drop-off (e.g., Heathrow → MMIA)

System should:

Convert time zones correctly

Auto-adjust dates

Show customs warning (disclaimer) before approval

📱 9. User Roles
🚗 Driver / Traveler

📬 Sender

📦 Recipient (can be same or different from sender)

Each role gets different dashboards.

🔔 10. Notifications
Push notifications for:

Request updates

Delivery reminders

Confirmations
  