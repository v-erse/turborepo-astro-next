export const Button = ({ onClick = () => {} }: { onClick?: () => void }) => {
  return <button onClick={onClick}>hello</button>;
};
