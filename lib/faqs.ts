export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqGroup = {
  title: string;
  items: FaqItem[];
};

export const FAQ_GROUPS: FaqGroup[] = [
  {
    title: "General",
    items: [
      {
        question: "What is AppointFlow?",
        answer:
          "AppointFlow is a platform where you can find local businesses such as dental clinics, salons and consultants, see their free time slots, and book an appointment online.",
      },
      {
        question: "Is it free to use?",
        answer: "Yes, creating an account and booking through AppointFlow is free for customers.",
      },
      {
        question: "Do I need an account to book?",
        answer:
          "You can browse businesses and see available times without an account. You only need to log in or sign up when you confirm your booking.",
      },
      {
        question: "How do I create an account?",
        answer: "Click Sign Up, enter your name, email and a password, and you're ready to book.",
      },
      {
        question: "I forgot my password. What should I do?",
        answer:
          'Click "Forgot password?" on the login page and follow the steps to reset it.',
      },
    ],
  },
  {
    title: "Booking",
    items: [
      {
        question: "How do I book an appointment?",
        answer:
          'Choose a business, pick a service, choose a staff member (or "Any available"), select a date and time slot, and confirm.',
      },
      {
        question: "How do I know a time slot is really available?",
        answer:
          "The website only shows free slots, based on the business's working hours and existing bookings. If someone books a slot just before you, you'll be asked to pick another one.",
      },
      {
        question: "Can I choose a specific staff member?",
        answer:
          'Yes. You can pick a staff member, or choose "Any available" to get the earliest free slot.',
      },
      {
        question: "Can I book more than one service at a time?",
        answer:
          "Currently each booking is for one service. To book another service, make a separate booking.",
      },
      {
        question: "How far in advance can I book?",
        answer:
          "This depends on each business's booking rules. You'll see the dates that are open on the booking page.",
      },
      {
        question: "Why can't I see any time slots for a date?",
        answer:
          "The business may be closed that day, the staff member may be off, or all slots may already be taken. Try another date or another staff member.",
      },
    ],
  },
  {
    title: "Managing Your Appointments",
    items: [
      {
        question: "Where can I see my appointments?",
        answer: "Go to My Appointments. You can see upcoming, past and cancelled bookings there.",
      },
      {
        question: "How do I cancel an appointment?",
        answer:
          "Open My Appointments, select the booking and click Cancel. The time slot becomes available again for other customers.",
      },
      {
        question: "How do I reschedule an appointment?",
        answer:
          "Open My Appointments, click Reschedule, and choose a new available date and time.",
      },
      {
        question: "Is there a deadline for cancelling or rescheduling?",
        answer:
          "Some businesses may require notice before the appointment. Check the business page or contact the business directly.",
      },
      {
        question: "What do the statuses (Pending, Confirmed, Completed, Cancelled) mean?",
        answer:
          "Pending — your booking was received. Confirmed — the booking is confirmed. Completed — the appointment took place. Cancelled — the booking was cancelled and the slot was released.",
      },
    ],
  },
  {
    title: "Payments & Privacy",
    items: [
      {
        question: "How do I pay for my appointment?",
        answer: "You pay the business directly for the service.",
      },
      {
        question: "Is my personal information safe?",
        answer:
          "Yes. Your details are only used to manage your bookings, and a business can only see the information related to its own appointments.",
      },
    ],
  },
  {
    title: "For Businesses",
    items: [
      {
        question: "I own a business. How can I list it on AppointFlow?",
        answer:
          "Use the Register a Business link at the bottom of the page to send a registration request. Our team reviews it, and once approved you can set up your services, staff and working hours.",
      },
      {
        question: "Who do I contact if I have a problem?",
        answer:
          "Use the Contact details at the bottom of the page, or contact the business directly for questions about a specific appointment.",
      },
    ],
  },
];
