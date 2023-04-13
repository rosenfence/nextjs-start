export default function Button({ color, children }) {
  return <button style={{ backgroundColor: { color } }}>{children}</button>;
}
