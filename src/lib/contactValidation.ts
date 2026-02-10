type DialSpec = {
  dial: string;
  countryName: string;
  nationalNumberLengths: number[];
};

const DIAL_SPECS: DialSpec[] = [
  { dial: "+977", countryName: "Nepal", nationalNumberLengths: [10] },
  { dial: "+971", countryName: "United Arab Emirates", nationalNumberLengths: [9] },
  { dial: "+966", countryName: "Saudi Arabia", nationalNumberLengths: [9] },
  { dial: "+880", countryName: "Bangladesh", nationalNumberLengths: [10] },
  { dial: "+974", countryName: "Qatar", nationalNumberLengths: [8] },
  { dial: "+44", countryName: "United Kingdom", nationalNumberLengths: [10] },
  { dial: "+61", countryName: "Australia", nationalNumberLengths: [9] },
  { dial: "+91", countryName: "India", nationalNumberLengths: [10] },
  { dial: "+1", countryName: "United States/Canada", nationalNumberLengths: [10] },
];

const byDialLengthDesc = [...DIAL_SPECS].sort((a, b) => b.dial.length - a.dial.length);

export const normalizeWhitespace = (value: string) => value.replace(/\s+/g, " ").trim();

export const digitsOnly = (value: string) => value.replace(/\D/g, "");

export function validateName(nameRaw: string): string | null {
  const name = normalizeWhitespace(nameRaw);

  if (!name) return "Name is required";
  if (name.length < 2) return "Name must be at least 2 characters";
  if (name.length > 60) return "Name must be 60 characters or less";

  // Allow letters (including accents), spaces and common name punctuation.
  // Requires at least one letter.
  const ok = /\p{L}/u.test(name) && /^[\p{L} .'-]+$/u.test(name);
  if (!ok) return "Name can only contain letters, spaces, . ' -";

  return null;
}

export function validateMessage(messageRaw: string): string | null {
  const msg = messageRaw.trim();
  if (msg.length < 5) return "Message must be at least 5 characters";
  return null;
}

function getDialSpec(dial: string): DialSpec | undefined {
  return DIAL_SPECS.find((d) => d.dial === dial);
}

export function validatePhoneForDial(dial: string, phoneRaw: string): string | null {
  const spec = getDialSpec(dial);
  const phoneDigits = digitsOnly(phoneRaw);

  if (!phoneDigits) return "Phone number is required";

  if (!spec) {
    // Fallback: allow 7-15 digits (E.164 typical range, excluding +)
    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      return "Phone number looks invalid";
    }
    return null;
  }

  if (!spec.nationalNumberLengths.includes(phoneDigits.length)) {
    const expected = spec.nationalNumberLengths.join(" or ");
    return `Enter a valid phone number for ${spec.countryName} (${dial}): ${expected} digits`;
  }

  return null;
}

export function validatePhoneAuto(phoneRaw: string): string | null {
  const trimmed = phoneRaw.trim();
  if (!trimmed) return "Phone number is required";

  const digits = digitsOnly(trimmed);
  if (!digits) return "Phone number is required";

  // Case 1: starts with +<country>
  if (trimmed.startsWith("+")) {
    const digitsAfterPlus = digits; // already excludes +

    for (const spec of byDialLengthDesc) {
      const dialDigits = digitsOnly(spec.dial);
      if (digitsAfterPlus.startsWith(dialDigits)) {
        const national = digitsAfterPlus.slice(dialDigits.length);
        if (!national) return `Enter a valid phone number for ${spec.countryName} (${spec.dial})`;
        if (!spec.nationalNumberLengths.includes(national.length)) {
          const expected = spec.nationalNumberLengths.join(" or ");
          return `Enter a valid phone number for ${spec.countryName} (${spec.dial}): ${expected} digits`;
        }
        return null;
      }
    }

    // Unknown dial: allow generic length.
    if (digitsAfterPlus.length < 7 || digitsAfterPlus.length > 15) return "Phone number looks invalid";
    return null;
  }

  // Case 2: looks like it already contains a country code without + (e.g. 919430946499)
  for (const spec of byDialLengthDesc) {
    const dialDigits = digitsOnly(spec.dial);
    if (digits.startsWith(dialDigits) && digits.length > spec.nationalNumberLengths[0]) {
      const national = digits.slice(dialDigits.length);
      if (spec.nationalNumberLengths.includes(national.length)) return null;
    }
  }

  // Case 3: default to India 10-digit national number
  if (digits.length !== 10) return "Enter a valid phone number: 10 digits (or include country code)";
  return null;
}
