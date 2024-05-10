import { useState } from "react";
import { css } from "@emotion/react";
import { Route, useLocation } from "wouter";

import Entrance from "./Entrance.jsx";
import SpecficationPage from "./pages/specficationPage.jsx";
import RecommendPage from "./pages/RecommendPage.jsx";
import Loading from "./pages/Loading.jsx";

function App() {
  const [originImage, setOriginImage] = useState(null);
  const [resource, setResource] = useState("");
  const [goal, setGoal] = useState("");
  const [detail, setDetail] = useState("");
  const [showSpinner, setSpinnerState] = useState(false);
  const [, setLocation] = useLocation();
  const [recos, setRecos] = useState([]);

  return (
    <>
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: ${showSpinner ? "flex" : "none"};
          align-items: center;
          justify-content: center;
        `}
      >
        <Loading />
      </div>
      <Route path="/">
        <Entrance
          updateOriginItem={(file) => {
            setSpinnerState(true);
            setOriginImage(file);

            const fileForm = new FormData();
            fileForm.append("originImage", file);

            fetch("http://localhost:8000/imp", {
              method: "POST",
              body: fileForm,
            })
              .then((res) => res.json())
              .then(({ resource }) => {
                setResource(resource);
                setSpinnerState(false);
                setLocation("/spec");
              });
          }}
        />
      </Route>
      <Route path="/spec">
        <SpecficationPage
          resource={resource}
          result={goal}
          setResult={setGoal}
          detail={detail}
          setDetail={setDetail}
          sendRequest={() => {
            setSpinnerState(true);

            fetch("http://localhost:8000/beseo", {
              method: "POST",
              body: JSON.stringify({
                detail,
              }),
            })
              .then((res) => res.json())
              .then(({ preferred_style }) => {
                const temp = new FormData();
                temp.append("originImage", originImage);
                temp.append("style", preferred_style);
                temp.append("goal", goal);

                return fetch("http://localhost:8000/stylednn", {
                  method: "POST",
                  body: temp,
                });
              })
              .then((res) => res.json()) // base64 as result
              .then((recos) => {
                setSpinnerState(false);
                setLocation("/reco");

                setRecos(recos);
              });
          }}
        />
      </Route>
      <Route path="/reco">
        <RecommendPage recos={recos} />
      </Route>
    </>
  );
}

export default App;
