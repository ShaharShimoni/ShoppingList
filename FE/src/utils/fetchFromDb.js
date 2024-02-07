export const fetchCategories = async () => {
  try {
    const response = await fetch("http://localhost:5000/listOfCategories");
    if (!response.ok) {
      throw new Error("Error in network response");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

export const saveOrder = async (name, email, address, products) => {
  try {
    const response = await fetch("http://localhost:5207/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, address, products }),
    });

    if (!response.ok) {
      throw new Error("Error creating order detail");
    }
    console.log("Order detail created successfully:");
  } catch (error) {
    console.error("Error creating order detail:", error.message);
  }
};
