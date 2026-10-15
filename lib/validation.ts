const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PK_PHONE_RE = /^03\d{9}$/;

export function validateRequired(value: string, label: string): string | undefined {
  if (!value.trim()) return `${label} is required`;
}

export function validateName(value: string, label: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return `${label} is required`;
  if (trimmed.length < 2) return `${label} is too short`;
  if (!/^[A-Za-z\s'-]+$/.test(trimmed)) return `${label} should contain letters only`;
}

export function validateEmail(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return "Email is required";
  if (!EMAIL_RE.test(trimmed)) return "Enter a valid email address";
}

export function validatePakistaniPhone(value: string): string | undefined {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "Phone number is required";
  if (!PK_PHONE_RE.test(digits)) {
    return "Enter a valid 11-digit number starting with 03 (e.g. 03001234567)";
  }
}

export function validatePassword(value: string): string | undefined {
  if (!value) return "Password is required";
  if (value.length < 8) return "Must be at least 8 characters";
  if (!/[a-z]/.test(value)) return "Include at least one lowercase letter";
  if (!/[A-Z]/.test(value)) return "Include at least one uppercase letter";
  if (!/\d/.test(value)) return "Include at least one number";
  if (!/[^A-Za-z0-9]/.test(value)) return "Include at least one special character";
}

export function validateConfirmPassword(value: string, password: string): string | undefined {
  if (!value) return "Please confirm your password";
  if (value !== password) return "Passwords do not match";
}

export type PasswordCheck = { label: string; met: boolean };

export function getPasswordChecks(value: string): PasswordCheck[] {
  return [
    { label: "8+ characters", met: value.length >= 8 },
    { label: "Uppercase", met: /[A-Z]/.test(value) },
    { label: "Lowercase", met: /[a-z]/.test(value) },
    { label: "Number", met: /\d/.test(value) },
    { label: "Symbol", met: /[^A-Za-z0-9]/.test(value) },
  ];
}
