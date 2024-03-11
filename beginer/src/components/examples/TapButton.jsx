export default function TapButton({ children, setStyle, ...props }) {
  return (
    <li>
      <button className={setStyle ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
