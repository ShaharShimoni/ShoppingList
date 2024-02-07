import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { saveOrder } from "../utils/fetchFromDb";
import useStyles from "./OrderSummaryStyles";

const OrderSummary = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const products = useSelector((state) => state.products.categories);
  const isEmpty = !products || Object.keys(products).length === 0;

  const renderProductList = () => {
    const productList = [];
    Object.keys(products).forEach((category) => {
      products[category].forEach((product, itemIndex) => {
        productList.push(
          <li key={itemIndex} className={classes.listItem}>
            {product.item}
            {product.count > 1 && ` (${product.count})`}
          </li>
        );
      });
    });
    return productList;
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>סיכום הזמנה</h1>
      <div dir="rtl" className={classes.detailsSection}>
        <TextField
          autoComplete="off"
          error={buttonClicked && name === ""}
          required
          id="outlined-required"
          placeholder="שם מלא"
          InputLabelProps={{ shrink: true }}
          style={{ marginLeft: "5%" }}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          autoComplete="off"
          error={buttonClicked && address === ""}
          required
          id="outlined-required"
          placeholder="כתובת מלאה"
          InputLabelProps={{ shrink: true }}
          style={{ marginLeft: "5%" }}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <TextField
          autoComplete="off"
          error={buttonClicked && email === ""}
          required
          id="outlined-required"
          placeholder="מייל"
          style={{ marginLeft: "5%" }}
          InputLabelProps={{ shrink: true }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <h4 className={classes.listTitle}>רשימת מוצרים</h4>
      <div dir="rtl" className={classes.divSection}>
        {isEmpty ? (
          <p className={classes.secondTitle}>ריקה</p>
        ) : (
          <div className={classes.listSection}>
            <ul className={classes.ul}>
              {renderProductList().map((column, columnIndex) => (
                <div key={columnIndex} className={classes.column}>
                  <ul>{column}</ul>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className={classes.orderButton}>
        <Button
          variant="contained"
          size="large"
          onClick={async () => {
            setButtonClicked(true);
            if (email && name && address) {
              await saveOrder(name, email, address, products);
            }
          }}>
          אשר הזמנה
        </Button>
      </div>
    </div>
  );
};

export default OrderSummary;
