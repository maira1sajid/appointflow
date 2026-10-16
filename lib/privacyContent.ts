import type { LegalSection } from "@/lib/legalTypes";

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    heading: "1. Who we are",
    blocks: [
      {
        type: "p",
        text: "AppointFlow (\"we\", \"us\") runs the AppointFlow website and services. This policy explains what personal information we collect, how we use it, and the choices you have. For privacy questions, contact hello@appointflow.com.",
      },
    ],
  },
  {
    heading: "2. Information we collect",
    blocks: [
      { type: "p", text: "From customers" },
      {
        type: "ul",
        items: [
          "Account details: full name, email address, phone number, and password (stored in protected, hashed form, never as plain text).",
          "Booking details: the business, service, staff member, date, time, and status of each appointment, including cancellations and reschedules.",
          "Messages you send us through contact forms.",
        ],
      },
      { type: "p", text: "From businesses and staff" },
      {
        type: "ul",
        items: [
          "Account details: name, email, phone number, role (business administrator or staff) and password (hashed).",
          "Business information: business name, category, address, description, services, prices, durations, staff members, working hours, breaks and days off.",
          "Registration request details, such as owner name and contact details, so we can review the business.",
        ],
      },
      { type: "p", text: "Collected automatically" },
      {
        type: "ul",
        items: [
          "Technical data: IP address, browser and device type, pages visited, and approximate location based on IP.",
          "Cookies and similar technologies (see section 7).",
        ],
      },
      {
        type: "p",
        text: "We do not ask for sensitive information such as health records. Please do not put medical or other sensitive details in booking notes or free-text fields unless the business specifically asks for them.",
      },
    ],
  },
  {
    heading: "3. How we use your information",
    blocks: [
      {
        type: "ul",
        items: [
          "To create and manage your account, and to log you in securely.",
          "To show available time slots, create bookings and prevent double bookings.",
          "To let you view, cancel and reschedule appointments, and to let businesses manage their schedules.",
          "To send service messages about your account and bookings, and appointment reminders.",
          "To review business registration requests and keep the platform trustworthy.",
          "To protect the Service against fraud, abuse and security threats.",
          "To understand how the Service is used and to improve it.",
          "To meet legal obligations.",
        ],
      },
      { type: "p", text: "We do not sell your personal information." },
    ],
  },
  {
    heading: "4. Who can see your information",
    blocks: [
      {
        type: "ul",
        items: [
          "The business you book with. When you book, the business and the staff member assigned to your appointment can see your name, contact details and booking details, so they can provide the service.",
          "Only your business sees your business data. Each business can access only its own private data. Staff see only what their role allows.",
          "Service providers. We use trusted providers to run the Service, such as hosting, database, email and analytics providers. They may process data only on our instructions and for these purposes.",
          "Legal and safety. We may share information if required by law, or to protect the rights, safety and security of users or the Service.",
          "Business changes. If AppointFlow is sold or merged, your information may be transferred to the new owner, who must respect this policy.",
        ],
      },
    ],
  },
  {
    heading: "5. Legal basis (where required)",
    blocks: [
      {
        type: "p",
        text: "Where the law requires a legal basis, we process your data to perform our contract with you (providing the Service), for our legitimate interests (security, improvement), to comply with legal obligations, and, where needed, with your consent.",
      },
    ],
  },
  {
    heading: "6. How long we keep your information",
    blocks: [
      {
        type: "p",
        text: "We keep your information while your account is active and for as long as needed to provide the Service. Appointment records may be kept for 2 years for record keeping and dispute handling. When you delete your account, we delete or anonymise your personal information within 30 days, except where we must keep it by law.",
      },
    ],
  },
  {
    heading: "7. Cookies",
    blocks: [
      {
        type: "p",
        text: "We use cookies and similar technologies to keep you logged in, remember your settings, keep the Service secure, and understand how it is used. You can control or delete cookies in your browser settings. If you block essential cookies, parts of the Service, such as logging in, may not work.",
      },
    ],
  },
  {
    heading: "8. Security",
    blocks: [
      {
        type: "p",
        text: "We protect your information with measures such as encrypted connections (HTTPS), hashed passwords, role-based access control and separation of business data. No system is completely secure, so we cannot guarantee absolute security. Please use a strong, unique password and keep it private.",
      },
    ],
  },
  {
    heading: "9. Your rights and choices",
    blocks: [
      { type: "p", text: "Depending on where you live, you may have the right to:" },
      {
        type: "ul",
        items: [
          "access the personal information we hold about you;",
          "correct information that is wrong or incomplete;",
          "delete your account and personal information;",
          "object to or restrict certain uses of your information;",
          "receive a copy of your data in a portable format;",
          "withdraw consent where we rely on it.",
        ],
      },
      {
        type: "p",
        text: "To use these rights, contact hello@appointflow.com. We may need to verify your identity first. You can also update most account details yourself in your profile.",
      },
    ],
  },
  {
    heading: "10. Children",
    blocks: [
      {
        type: "p",
        text: "The Service is not meant for children under 18. We do not knowingly collect information from them. If you believe a child has given us personal information, contact us and we will delete it. A parent or guardian may book on behalf of a child using their own account.",
      },
    ],
  },
  {
    heading: "11. International transfers",
    blocks: [
      {
        type: "p",
        text: "Your information may be stored and processed in countries other than your own, for example where our hosting providers operate. Where required, we use safeguards to protect it.",
      },
    ],
  },
  {
    heading: "12. Third-party links",
    blocks: [
      {
        type: "p",
        text: "The Service may link to other websites, including business websites. We are not responsible for their content or privacy practices.",
      },
    ],
  },
  {
    heading: "13. Changes to this policy",
    blocks: [
      {
        type: "p",
        text: 'We may update this policy from time to time. We will post the new version with a new "Last updated" date and, for important changes, notify you by email or on the website.',
      },
    ],
  },
  {
    heading: "14. Contact us",
    blocks: [
      {
        type: "p",
        text: "AppointFlow, Islamabad, Pakistan. Email: hello@appointflow.com.",
      },
    ],
  },
];
