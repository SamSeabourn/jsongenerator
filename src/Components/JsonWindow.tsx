import ReactJson from "react-json-view";
import { Cat } from "../module";

type Props = {
  catList: Array<Cat>;
};

const JsonWindow = ({ catList }: Props) => {
  return (
    <div className="json-window-wrapper">
      <ReactJson
        src={{ currentKittens: [...catList] }}
        displayObjectSize={false}
        name={"root"}
        theme={"bright:inverted"}
        iconStyle={"circle"}
        indentWidth={4}
        collapsed={false}
        shouldCollapse={false}
        displayDataTypes={false}
      />
    </div>
  );
};

export default JsonWindow;
