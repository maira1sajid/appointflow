# AppointFlow Website - Requirements

## 1. Purpose

The public website where customers discover businesses and book appointments. It shows data that businesses manage in the AppointFlow Dashboard.

This document covers the **website only**. The dashboard has its own requirements file.

## 2. Users

| User | Description |
| --- | --- |
| Visitor | Anyone not logged in. Can browse businesses and view available slots. |
| Customer | A logged-in user. Can book, cancel, and reschedule appointments. |

Business owners and staff do **not** use this site to manage anything. They use the dashboard.

## 3. Pages

### Public

1. Home: hero, search, featured businesses, "how it works"
2. Businesses list: search and filter by category and city
3. Business detail: about, services, staff, working hours
4. Booking flow: service, staff, date, time slot, confirm
5. Login and Register (customer)
6. For Businesses: small link in the footer or navbar that leads to the dashboard registration page

### Customer area (login required)

7. My Appointments: upcoming and past bookings
8. Appointment detail: cancel or reschedule
9. Profile: name, phone, password

## 4. Booking Flow

```text
Home / Search
  → Business page
  → Select service
  → Select staff (or "Any available")
  → Select date
  → Select time slot
  → Login or Register (only if not logged in)
  → Confirm (summary of service, staff, date, time, price)
  → Success page
  → My Appointments
```

Login is requested at the **last step**, so visitors can see slots before creating an account.

## 5. Functional Requirements

1. Visitors can search and filter businesses.
2. Only **approved** businesses are shown.
3. A business page shows its services (name, duration, price) and staff.
4. The user can pick a date and see only the available time slots.
5. The user must be logged in to confirm a booking.
6. After booking, the user sees a confirmation with all details.
7. A customer can view all of their own appointments.
8. A customer can cancel an appointment. The slot is released.
9. A customer can reschedule by choosing a new available slot.
10. The site works on desktop and mobile.

## 6. Business Rules (as they affect the website)

1. Customers can only book available time slots.
2. Slots are calculated by the backend. The website never decides availability by itself.
3. The backend re-checks the slot at confirm time. If it was just taken, the website shows an error and asks the user to pick another slot.
4. Appointment times must respect the business's working hours.
5. Cancelled appointments release their time slots.
6. A customer can only see and change their own appointments.

## 7. Error States to Handle

- Slot no longer available
- No slots on the selected date
- Session expired (redirect to login)
- Network or server error

## 8. Non-Functional Requirements

- **Responsive:** mobile-first layout
- **Performance:** business list and detail pages load quickly
- **SEO:** public pages (home, business list, business detail) have proper titles and descriptions
- **Security:** no secrets in the frontend, authenticated requests for private data
- **Accessibility:** forms have labels, buttons are keyboard accessible

## 9. Out of Scope for the MVP

- Online payments
- Email or WhatsApp reminders
- Reviews and ratings
- Multi-language support

## 10. Technologies

| Part | Technology |
| --- | --- |
| Framework | Next.js (React) + TypeScript |
| Styling | Tailwind CSS |
| API | REST (Django REST Framework) |
| Version control | Git + GitHub |

## 11. Related Projects

- `appointflow-dashboard`: business side (Super Admin, Business Admin, Staff)
- `appointflow-backend`: Django REST API and PostgreSQL database
