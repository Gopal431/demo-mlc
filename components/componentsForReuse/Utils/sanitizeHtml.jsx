// componentsForReuse/Utils/sanitizeHtml.js
import DOMPurify from 'isomorphic-dompurify';

export function decodeAndSanitizeHtml(html = "") {
  if (!html) return "";

  const decoded = html
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, "&");

  const sanitized = DOMPurify.sanitize(decoded, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p', 'br', 'ul', 'li', 'ol', 'a'],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
  });

  return sanitized;
}
