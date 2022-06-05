import React, { useCallback, useContext, useEffect } from "react";
import "./HomePage.scss";
import { Grid } from "@material-ui/core";
import MyContext from "../contexts/MyContext";

export const HomePage = (props) => {
  const myContext = useContext(MyContext);

  useEffect(() => {
    // fetchTotalCostMax();
  }, []);

  return (
    <MyContext.Consumer>
      {(context) => (
        <Grid container className="container custom padding top-2 bottom-2 left-0 right-0" justifyContent="center">
          <Grid item>
            <div>Home page</div>
          </Grid>
        </Grid>
      )}
    </MyContext.Consumer>
  );
};
