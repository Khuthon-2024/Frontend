import React from "react";
import "./specStyle.css";

export default function SpecficationPage() {
  return (
    <div>
      <div className="wrapper">
        <h1>Letter-like form with inline fields</h1>

        <form className="form__contact" action="">
          <fieldset>
            <p>Hey, Stranger!</p>
            <p>
              My name is{" "}
              <span
                className="form__field field--name"
                data-placeholder="your name"
                tabIndex="1"
                contentEditable
              ></span>{" "}
              and I'm writting to you since I'm interested in{" "}
              <span
                className="form__field field--message"
                data-placeholder="your message"
                tabIndex="2"
                contentEditable
              ></span>
              .
            </p>
            <p>
              This is my{" "}
              <span
                className="form__field field--email"
                data-placeholder="email address"
                tabIndex="3"
                contentEditable
              ></span>
              .
            </p>
            <p>Hope to get in touch soon. Cheers!</p>
            <button type="submit" className="button button--xlarge" tabIndex="4">
              Send message &#187;
            </button>
          </fieldset>
        </form>
      </div>

      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
      >
        <defs>
          <filter id="blur0">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0 0" />
          </filter>
          <filter id="blur1">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0 5" />
          </filter>
          <filter id="blur2">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0 10" />
          </filter>
          <filter id="blur3">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0 15" />
          </filter>
          <filter id="blur4">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0 20" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
