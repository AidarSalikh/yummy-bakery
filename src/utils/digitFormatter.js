export default function formatter(digits) {
  if (!digits) return;
  return String(digits)
    .split(/(?=(?:\d{3})+$)/)
    .join(" ");
}
