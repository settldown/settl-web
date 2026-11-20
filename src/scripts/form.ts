interface Messages {
  sending: string;
  failed: string;
  invalid: string;
}

type Field = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

function errorFor(field: Field) {
  const id = field.getAttribute("aria-describedby");
  return id ? document.getElementById(id) : null;
}

function showError(field: Field, message: string) {
  const el = errorFor(field);
  if (el) el.textContent = message;
  if (message) field.setAttribute("aria-invalid", "true");
  else field.removeAttribute("aria-invalid");
}

/** Shows a message next to each invalid field. Returns true when all pass. */
function validate(form: HTMLFormElement) {
  const fields = Array.from(form.querySelectorAll<Field>("[data-error]"));
  let firstInvalid: Field | null = null;
  for (const field of fields) {
    field.value = field.value.trim();
    const valid = field.checkValidity();
    showError(field, valid ? "" : (field.dataset.error ?? ""));
    if (!valid && !firstInvalid) firstInvalid = field;
  }
  firstInvalid?.focus();
  return !firstInvalid;
}

function setStatus(el: HTMLElement | null, text: string, state = "") {
  if (!el) return;
  el.textContent = text;
  el.dataset.state = state;
}

/** Swaps the fields for the “Message sent” note and moves focus to it. */
function showSent(form: HTMLFormElement) {
  const body = form.querySelector<HTMLElement>("[data-form-body]");
  const sent = form.querySelector<HTMLElement>("[data-form-sent]");
  if (!body || !sent) return;
  body.hidden = true;
  sent.hidden = false;
  sent.focus();
}

async function send(form: HTMLFormElement, endpoint: string) {
  const data = new URLSearchParams();
  new FormData(form).forEach((value, key) => data.append(key, String(value)));
  data.append("ajax", "1");
  const response = await fetch(endpoint, { method: "POST", body: data });
  const result: { ok?: boolean } = await response.json();
  if (!response.ok || !result.ok) throw new Error("Form not saved");
}

function setup(form: HTMLFormElement) {
  const endpoint = form.dataset.endpoint ?? "";
  const messages: Messages = JSON.parse(form.dataset.messages ?? "{}");
  const status = form.querySelector<HTMLElement>("[data-form-status]");
  const button = form.querySelector<HTMLButtonElement>("button[type='submit']");
  const buttonText = button?.textContent ?? "";

  form.noValidate = true;
  form.addEventListener("input", (event) => {
    const field = event.target as Field;
    if (field.getAttribute("aria-invalid") && field.checkValidity())
      showError(field, "");
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!validate(form)) return setStatus(status, messages.invalid, "error");
    if (!endpoint) return setStatus(status, messages.failed, "error");

    if (button) {
      button.disabled = true;
      button.textContent = messages.sending;
    }
    setStatus(status, "");
    try {
      await send(form, endpoint);
      form.reset();
      showSent(form);
    } catch {
      setStatus(status, messages.failed, "error");
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = buttonText;
      }
    }
  });
}

/** Adds fetch submit, inline errors and status messages to contact forms. */
export function setupForms() {
  document
    .querySelectorAll<HTMLFormElement>("form[data-contact-form]")
    .forEach(setup);
}
