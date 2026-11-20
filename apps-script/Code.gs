/**
 * Settl contact form handler.
 *
 * Setup:
 * 1. Create a Google Sheet. Open Extensions > Apps Script and paste this file.
 * 2. Deploy > New deployment > Web app.
 *    Execute as: Me. Who has access: Anyone.
 * 3. Copy the web app URL (ends in /exec) into PUBLIC_FORM_ENDPOINT.
 */
const CONFIG = {
  sheetName: "Messages",
  notifyEmail: "business@settlhere.com",
  thanksUrl: "https://settlhere.com/thanks",
  headers: ["Date", "Page", "Name", "Email", "Business", "Type", "Message"],
  maxLength: 5000,
};

function doPost(e) {
  const p = (e && e.parameter) || {};
  const ajax = p.ajax === "1";

  // Honeypot: bots fill this in. Pretend it worked and save nothing.
  if (p.website) return respond(ajax, true);

  const name = clean(
    p.name || [p.firstName, p.lastName].filter(Boolean).join(" "),
  );
  const email = clean(p.email);
  const message = clean(p.message);
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !validEmail || !message)
    return respond(ajax, false, "Missing fields");

  const row = [
    new Date(),
    clean(p.page),
    name,
    email,
    clean(p.business),
    clean(p.type),
    message,
  ];

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    getSheet().appendRow(row.map(safeCell));
  } finally {
    lock.releaseLock();
  }

  MailApp.sendEmail({
    to: CONFIG.notifyEmail,
    replyTo: email,
    subject: "New Settl message from " + name,
    body: CONFIG.headers.map((h, i) => h + ": " + row[i]).join("\n"),
  });

  return respond(ajax, true);
}

function getSheet() {
  const book = SpreadsheetApp.getActiveSpreadsheet();
  const sheet =
    book.getSheetByName(CONFIG.sheetName) || book.insertSheet(CONFIG.sheetName);
  if (sheet.getLastRow() === 0) sheet.appendRow(CONFIG.headers);
  return sheet;
}

function clean(value) {
  return String(value || "")
    .trim()
    .slice(0, CONFIG.maxLength);
}

// Stop text starting with = + - @ from running as a formula in the sheet.
function safeCell(value) {
  return typeof value === "string" && /^[=+\-@]/.test(value)
    ? "'" + value
    : value;
}

function respond(ajax, ok, error) {
  if (ajax) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: ok, error: error || null }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
  // No-JavaScript visitors: send them back to the site.
  const url = ok
    ? CONFIG.thanksUrl
    : CONFIG.thanksUrl.replace("/thanks", "/contact");
  const html =
    '<!doctype html><base target="_top"><meta http-equiv="refresh" content="0;url=' +
    url +
    '">' +
    '<script>window.top.location.href = "' +
    url +
    '";</script>' +
    '<p><a href="' +
    url +
    '">Continue to Settl</a></p>';
  return HtmlService.createHtmlOutput(html);
}
