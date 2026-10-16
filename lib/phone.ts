/**
 * Converts a Pakistani phone number in any common input form
 * (03001234567, 0092 300 1234567, 92-300-1234567, +923001234567)
 * into the E.164 international format the backend expects: +923001234567
 */
export function toInternationalPakistaniPhone(value: string): string {
  const cleaned = value.replace(/[^\d+]/g, "");

  if (cleaned.startsWith("+92")) {
    return `+92${cleaned.slice(3).replace(/\D/g, "")}`;
  }
  if (cleaned.startsWith("0092")) {
    return `+92${cleaned.slice(4).replace(/\D/g, "")}`;
  }
  if (cleaned.startsWith("92")) {
    return `+92${cleaned.slice(2).replace(/\D/g, "")}`;
  }
  if (cleaned.startsWith("0")) {
    return `+92${cleaned.slice(1).replace(/\D/g, "")}`;
  }
  return `+92${cleaned.replace(/\D/g, "")}`;
}
