import React from "react";

type Props = {
  jsonString: string;
};

const JsonWindow = ({ jsonString }: Props) => {
  return (
    <div className="json-window-wrapper">
      <textarea className="json-output" disabled value={jsonString} />
    </div>
  );
};

export default JsonWindow;
