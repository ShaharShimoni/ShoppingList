import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../app/features/productsSlice";
import { useState, useEffect } from "react";
import ProductListByCategory from "./ProductListByCategory";
import { Box, FormControl, Select, MenuItem } from "@mui/material";
import { fetchCategories } from "../utils/fetchFromDb";
import { useNavigate } from "react-router-dom";
import useStyles from "./ShoppingListScreenStyles";

export default function ShoppingListScreen() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.categories);
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const [listOfCategory, setListOfCategory] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCategories();
      setListOfCategory(data || []);
    };

    fetchData();
  }, []);

  const totalProducts = Object.values(productList).reduce(
    (acc, category) =>
      acc + category.reduce((count, product) => count + product.count, 0),
    0
  );

  function onAddProductClick() {
    if (category && product)
      dispatch(addProduct({ category: category, item: product }));
  }

  return (
    <div dir="rtl" className={classes.root}>
      <div className={classes.upperDiv}>
        <h1 className={classes.title}>רשימת קניות</h1>
        <p className={classes.totalProducts}>סה"כ : {totalProducts} מוצרים</p>
        <div className={classes.addProductSection}>
          <div dir="rtl" className={classes.productInput}>
            <TextField
              autoComplete="off"
              error={buttonClicked && product === ""}
              id="outlined-required"
              required
              placeholder="מוצר"
              onChange={(e) => {
                setProduct(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <Box className={classes.categoryBox}>
            <FormControl fullWidth>
              <Select
                error={buttonClicked && category === ""}
                required
                value={category || -1}
                onChange={(event) => {
                  setCategory(event.target.value);
                }}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}>
                <MenuItem dir="rtl" value={-1} disabled>
                  <em>בחר קטגוריה </em>
                </MenuItem>
                {listOfCategory.map((category, index) => (
                  <MenuItem
                    dir="rtl"
                    key={index}
                    value={category.category_name}>
                    {category.category_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Button
            className={classes.addButton}
            variant="outlined"
            onClick={() => {
              onAddProductClick();
              setButtonClicked(true);
            }}>
            הוסף
          </Button>
        </div>
      </div>
      <hr className={classes.separator} />
      <div className={classes.lowerDiv}>
        <h3 className={classes.collectInstruction}>
          {" "}
          יש לאסוף מוצרים אלו במחלקות המתאימות
        </h3>
        <ProductListByCategory />
        <div className={classes.finishOrderButton}>
          <Button
            variant="contained"
            size="x-large"
            onClick={() => {
              navigate("/orderSummary");
            }}>
            סיים הזמנה
          </Button>
        </div>
      </div>
    </div>
  );
}
