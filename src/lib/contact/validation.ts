import { products } from "@/lib/products";

/** Shared by the client form (instant feedback) and the server action (authoritative). */

export const productOptions = [
  ...products.map((p) => ({ value: p.slug, label: p.name })),
  { value: "general", label: "General inquiry / not sure yet" },
] as const;

export type ContactField = "name" | "email" | "organization" | "product" | "message";
export type ContactValues = Record<ContactField, string>;
export type FieldErrors = Partial<Record<ContactField, string>>;

export const emptyValues: ContactValues = {
  name: "",
  email: "",
  organization: "",
  product: "",
  message: "",
};

export const limits = { name: 100, email: 254, organization: 150, message: 5000 } as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function readValues(formData: FormData): ContactValues {
  const get = (k: ContactField) => String(formData.get(k) ?? "").trim();
  return {
    name: get("name"),
    email: get("email"),
    organization: get("organization"),
    product: get("product"),
    message: get("message"),
  };
}

export function validateContact(v: ContactValues): FieldErrors {
  const errors: FieldErrors = {};

  if (!v.name) errors.name = "Enter your name.";
  else if (v.name.length > limits.name) errors.name = `Name must be ${limits.name} characters or fewer.`;

  if (!v.email) errors.email = "Enter your work email.";
  else if (v.email.length > limits.email || !EMAIL_RE.test(v.email))
    errors.email = "Enter a valid email address, like name@organization.com.";

  if (!v.organization) errors.organization = "Enter your organization’s name.";
  else if (v.organization.length > limits.organization)
    errors.organization = `Organization must be ${limits.organization} characters or fewer.`;

  if (!productOptions.some((o) => o.value === v.product))
    errors.product = "Choose the product you’re interested in.";

  if (!v.message) errors.message = "Enter a message.";
  else if (v.message.length < 10) errors.message = "Please add a little more detail (at least 10 characters).";
  else if (v.message.length > limits.message)
    errors.message = `Message must be ${limits.message} characters or fewer.`;

  return errors;
}

export function productLabel(value: string) {
  return productOptions.find((o) => o.value === value)?.label ?? value;
}
