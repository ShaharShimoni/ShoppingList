import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  count: {
    fontSize: "smaller",
    marginRight: "10px",
  },
  trashIconWrapper: {
    width: "30px",
    height: "30px",
    display: "inline-block",
  },
  trashIcon: {
    "&:hover": {
      color: "red",
      cursor: "pointer",
    },
  },
  item: {
    fontSize: "smaller",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "15vh",
  },
  box: {
    color: "black",
    display: "flex",
    maxHeight: "10vh",
  },
  list: {
    overflow: "auto",
    overflowX: "hidden",
    maxHeight: "25vh",
  },
  categoryBox: {
    marginRight: "100px",
    maxWidth: "30vh",
  },
  root: {
    display: "flex",
    minHeight: "30vh",
    "@media (max-width: 600px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      overflow: "auto",
      overflowX: "hidden",
      maxHeight: "22vh",
    },
  },
  title: {
    color: "black",
    marginBottom: 0,
    "@media (max-width: 600px)": {
      width: "22vh",
    },
  },
  separator: {
    width: "100%",
    margin: "5px 0",
  },
}));

export default useStyles;
