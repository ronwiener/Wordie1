import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Filter5Icon from "@mui/icons-material/Filter5Rounded";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Buttons1() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const onResetGame = () => {
    window.location.assign("https://ronsword.netlify.app/sixapp");
  };

  return (
    <div className="buttons" style={{ display: "inline-flex" }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Filter5Icon
          style={{
            marginTop: "5px",
            marginRight: matchesSM ? "0px" : "15px",
            paddingLeft: matchesSM ? "25px" : "18px",
            fontSize: matchesSM ? "22px" : "26px",
            color: "white",
          }}
        />
        <Typography
          style={{
            marginTop: "2px",
            marginBottom: "8px",
            lineHeight: "0.75em",
            fontSize: matchesSM ? "14px" : "18px",
            color: "white",
            paddingRight: matchesSM ? "5px" : "20px",
            paddingLeft: matchesSM ? "5px" : "2px",
          }}
        >
          letter game
        </Typography>
      </Link>

      <IconButton onClick={onResetGame}>
        <RestartAltIcon
          style={{
            paddingLeft: matchesSM ? "160px" : "230px",
            fontSize: "30px",
            color: "#43D312",
          }}
        />
      </IconButton>
    </div>
  );
}
