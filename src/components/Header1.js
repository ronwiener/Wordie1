import React from "react";
import Buttons1 from "./Buttons1";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Header1() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <div
        style={{
          fontSize: matchesSM ? "2.25em" : "2.5em",
          color: "white",
          textAlign: "center",
          marginTop: "0px",
        }}
      >
        🅆 🄾{" "}
        <span
          style={{
            fontSize: matchesSM ? "50px" : "80px",
            backgroundColor: "#435057",
            color: "lightgreen",
          }}
        >
          🅁
        </span>{" "}
        🄳 🄸 🄴
      </div>
      <div>
        <p
          style={{
            textAlign: "center",
            fontSize: "0.75em",
            color: "white",
            marginTop: 0,
          }}
        >
          By Ron's Fun & Games
        </p>
      </div>
      <Buttons1 />
    </div>
  );
}
