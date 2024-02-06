import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  title: {
    color: "black",
    "@media (max-width: 600px)": {
      marginTop: "10vh",
      display: "flex",
      justifyContent: "center",
    },
  },
  secondTitle: {
    color: "black",
    "@media (max-width: 600px)": {
      marginTop: "2vh",
      display: "flex",
      justifyContent: "center",
    },
  },
  detailsSection: {
    display: "flex",
    marginTop: "5%",
    justifyContent: "center",
    "@media (max-width: 600px)": {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      gap: "1vh",
      marginTop: "5vh",
    },
  },
  listTitle: {
    color: "black",
    marginTop: "6vh",
    marginBottom: 0,
    width: "100%",
  },
  listSection: {
    display: "inline-block",
    width: "50vh",
    maxHeight: "30vh",
    "@media (max-width: 600px)": {
      display: "flex",
    },
  },
  divSection: {
    justifyContent: "center",
    display: "flex",
    marginTop: "2vh",
  },
  listItem: {
    color: "black",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    "@media (max-width: 600px)": {
      overflowY: "audo",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "40vw",
    },
  },

  ul: {
    maxHeight: "30vh",
    overflow: "auto",
    overflowX: "hidden",
    textOverflow: "ellipsis",
    "@media (max-width: 600px)": {
      overflowY: "audo",
      overflowX: "hidden",
      paddingLeft: "2vh",
      fontSize: "smaller",
      textOverflow: "ellipsis",
    },
  },
  orderButton: {
    display: "flex",
    margin: "5%",
    "@media (max-width: 600px)": {
      justifyContent: "center",
      display: "flex",
      marginTop: "10vh",
    },
  },
}));

export default useStyles;
