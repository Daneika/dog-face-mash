import React from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { makeStyles } from "@material-ui/core/styles";

import "./picturegallery.css";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: theme.spacing(1),
  },
  gridList: {
    width: "50%",
    height: "50%",
    overflow: "visible",
  },
}));

export default function PictureGallery() {
  const classes = useStyles();
  const isLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const cols = isLg ? 4 : isMd ? 2 : 1;

  return (
    <div className={classes.container}>
      <GridList className={classes.gridList} cols={cols}>
        {Array.from({ length: 16 }).map((ignore, index) => (
          <GridListTile
            className="tile"
            key={`/images/Dog${index + 1}.jpg`}
            cols={1}
          >
            <img
              src={process.env.PUBLIC_URL + `/images/Dog${index + 1}.jpg`}
              alt={`Dog${index + 1}`}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
