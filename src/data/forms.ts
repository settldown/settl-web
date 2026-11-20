export type FieldType = "text" | "email" | "textarea" | "select";

export interface FormFieldConfig {
  name: string;
  label: string;
  type?: FieldType;
  required?: boolean;
  autocomplete?: string;
  options?: string[];
  half?: boolean;
  error?: string;
}

export interface FormMessages {
  sending: string;
  sent: string;
  sentText: string;
  failed: string;
  invalid: string;
}

const errors = {
  name: "Please tell us your name.",
  email: "Please enter a valid email, like name@example.com.",
  message: "Please tell us a little about what you need.",
};

export const businessTypes = [
  "Restaurant or café",
  "Building or property management",
  "Office or clinic",
  "Shop or gallery",
  "Salon or studio",
  "Something else",
];

export const homeFormFields: FormFieldConfig[] = [
  {
    name: "name",
    label: "Name",
    required: true,
    autocomplete: "name",
    half: true,
    error: errors.name,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    autocomplete: "email",
    half: true,
    error: errors.email,
  },
  {
    name: "message",
    label: "Your business and what you’d like help with",
    type: "textarea",
    required: true,
    error: errors.message,
  },
];

export const contactFormFields: FormFieldConfig[] = [
  {
    name: "firstName",
    label: "First name",
    required: true,
    autocomplete: "given-name",
    half: true,
    error: errors.name,
  },
  {
    name: "lastName",
    label: "Last name",
    autocomplete: "family-name",
    half: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    autocomplete: "email",
    error: errors.email,
  },
  {
    name: "business",
    label: "Business name",
    autocomplete: "organization",
    half: true,
  },
  {
    name: "type",
    label: "Type of business",
    type: "select",
    options: businessTypes,
    half: true,
  },
  {
    name: "message",
    label: "What would you like help with?",
    type: "textarea",
    required: true,
    error: errors.message,
  },
];

export const formText = {
  submit: "Send message",
  honeypot: "Leave this field empty",
  messages: {
    sending: "Sending…",
    sent: "Message sent",
    sentText: "Thanks for reaching out. We’ll reply by email soon.",
    failed: `Sorry, that didn’t go through. Please try again, or email us at business@settlhere.com.`,
    invalid: "Please fix the highlighted fields.",
  } satisfies FormMessages,
};
