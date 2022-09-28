type Props = {
  onClickFn: () => void;
  children: React.ReactNode;
};

const Button = ({ onClickFn, children }: Props) => {
  return (
    <button className="button" onClick={onClickFn}>
      {children}
    </button>
  );
};

export default Button;
