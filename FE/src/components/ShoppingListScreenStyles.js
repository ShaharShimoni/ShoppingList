import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  title: {
    color: "black",
    position: "absolute",
    "@media (max-width: 600px)": {
      top: "3vh",
    },
  },
  totalProducts: {
    color: "black",
    position: "absolute",
    left: "10%",
    top: "10%",
    "@media (max-width: 600px)": {
      top: "15vh",
    },
  },
  addProductSection: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    top: "22%",
    "@media (max-width: 600px)": {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      top: "23vh",
      gap: "2vh",
    },
  },
  productInput: {
    marginLeft: "5%",
  },
  categoryBox: {
    minWidth: "30vh",
    "@media (max-width: 600px)": {
      minWidth: "31.5vh",
      marginLeft: "5%",
    },
  },
  upperDiv: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "40%",
  },
  lowerDiv: {
    display: "flex",
    width: "100%",
    maxHeight: "70%",
    justifyContent: "center",
    flexDirection: "column",
  },
  addButton: {
    marginRight: "5% !important",
  },
  separator: {
    border: "1px solid black",
    width: "100%",
    position: "absolute",
    top: "35%",
    "@media (max-width: 600px)": {
      top: "50vh",
    },
  },
  collectInstruction: {
    color: "#1976d2",
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 600px)": {
      display: "flex",
      marginTop: "13vh",
    },
  },
  finishOrderButton: {
    paddingTop: "2%",
    textAlign: "end",
    paddingLeft: "3%",
    "@media (max-width: 600px)": {
      display: "flex",
      justifyContent: "center",
    },
  },
}));

export default useStyles;
