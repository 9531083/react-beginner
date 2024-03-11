export default function Tabs({ children, buttons, ButtonTag="menu" }) {
  // const BottonTag = buttonTag;
  return (
    <>
      <ButtonTag>{buttons}</ButtonTag>
      {children}
    </>
  );
}
