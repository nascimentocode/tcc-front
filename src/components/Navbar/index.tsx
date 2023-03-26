export function Navbar() {
  if (['/login', '/cadastrar'].includes(window.location.pathname)) return <></>;

  return <div>Navbar</div>;
}
