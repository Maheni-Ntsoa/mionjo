import { Theme, createStyles, makeStyles } from "@material-ui/core";
import React from "react";

interface LoadingProps {
  isLoading: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "auto",
      marginTop: "10px",
    },
    dot: {
      width: 15,
      height: 15,
      backgroundColor: "#888", // Couleur grise
      borderRadius: "50%",
      margin: "0 4px",
      animation: "$bounce 1.5s infinite",
      "&:nth-child(1)": {
        animationDelay: "0s",
      },
      "&:nth-child(2)": {
        animationDelay: "0.5s",
      },
      "&:nth-child(3)": {
        animationDelay: "1s",
      },
    },
    "@keyframes bounce": {
      "0%, 80%, 100%": {
        transform: "scale(0)",
      },
      "40%": {
        transform: "scale(1)",
      },
    },
  })
);

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  const classes = useStyles();

  if (isLoading) {
    return (
      <div className={classes.root}>
        <div className={classes.dot}></div>
        <div className={classes.dot}></div>
        <div className={classes.dot}></div>
      </div>
    );
  }

  return null;
};

export default Loading;
