# AppointFlow Website

The public, customer-facing website for **AppointFlow**, a multi-business appointment platform. Customers can discover businesses such as dental clinics, salons, and consultants, explore their services, and book appointments.

For business operations, see the **[AppointFlow Dashboard](https://github.com/<your-username>/appointflow-dashboard)** repository. The full requirements for this project are in [`docs/requirements.md`](docs/requirements.md).

## How the platform is organized

| Project | Who uses it | Purpose |
| --- | --- | --- |
| **appointflow-website** (this repo) | Customers | Browse businesses, book, cancel, and reschedule appointments |
| **appointflow-dashboard** | Super Admin, Business Admin, Staff | Manage businesses, services, staff, and schedules |
| **appointflow-backend** | Both frontends | Django REST API and PostgreSQL database |

## Features (MVP)

- Home page with search and featured businesses
- Business directory with search and category and city filters
- Business detail pages with services, staff, and working hours
- Booking flow: choose a service, staff member, date, and time slot, then confirm
- Customer registration and login
- Appointment management: view, cancel, and reschedule bookings
- Customer profile management
- **For Businesses** link to the dashboard registration page

## Tech stack

| Part | Technology |
| --- | --- |
| Framework | Next.js (React) and TypeScript |
| Styling | Tailwind CSS |
| API | Django REST Framework backend |
| Version control | Git and GitHub |

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm
- AppointFlow backend running locally

### Installation

```bash
git clone https://github.com/<your-username>/appointflow-website.git
cd appointflow-website
npm install
```

### Environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_DASHBOARD_URL=http://localhost:3001
```

Environment files (`.env*`) are ignored by Git. Do not commit secrets or local environment values.

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
npm run build   # Build for production
npm run start   # Run the production build
npm run lint    # Run ESLint
```

## Project structure

```text
appointflow-website/
├── app/          # Next.js App Router pages and layouts
├── public/       # Static assets
├── docs/         # Project documentation
└── ...           # Configuration and other project files
```

## Roadmap

1. Finalize requirements
2. Build the public pages: home, business directory, and business details
3. Build the booking flow and connect it to the backend slot API
4. Add customer login and appointment management
5. Test and deploy

Later phases may include email and WhatsApp reminders, payments, and reviews.

## License

Proprietary. All rights reserved.
