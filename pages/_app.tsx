import React from "react";
import { AppProps } from "next/app";
import "../styles/index.css";

const TailWindNextRoot = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="container">
      <Component {...pageProps} />
    </div>
  );
};

export default TailWindNextRoot;
