import React from "react";

import { PuffLoader } from "react-spinners";

const override = {
  display: "flex",
  margin: "0 auto",
  borderColor: "#788d64",
  textAlign: "center",
};

const Loading = () => {
  return (
    <div>
      <PuffLoader color="#788d64" loading={true} cssOverride={override} size={150} />
    </div>
  );
};

export default Loading;
