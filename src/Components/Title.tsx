//@ts-ignore
//TODO: Fix this dum error at some point
import Logo from "./logo.png";

const Title = () => {
  return (
    <div className="title-wrapper">
      <img className="title-wrapper--logo" src={Logo} />
      <h1> Kitten Clubhouse JSON generator</h1>
    </div>
  );
};

export default Title;
