export function Footer() {
  if (['/login', '/cadastrar'].includes(window.location.pathname)) return <></>;

  return <div>Footer</div>;
}
