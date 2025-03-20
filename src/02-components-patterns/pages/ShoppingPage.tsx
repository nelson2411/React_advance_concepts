import React from "react"
import ProductCard from "../components/ProductCard"
import {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components/ProductCard"
import { useProduct } from "02-components-patterns/hooks/useProduct"

const product = {
  id: 1,
  title: "Coffee Mug",
  img: "./coffee-mug.png",
}

const ShoppingPage = () => {
  const { counter, increaseBy } = useProduct()
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr style={{ marginBottom: "1rem", marginTop: "1rem", width: "40%" }} />
      <p>
        I'm baby mukbang adaptogen YOLO biodiesel normcore cardigan shabby chic
        waistcoat. Sartorial raw denim try-hard cold-pressed green juice cronut.
        Trust fund vaporware hella kinfolk DSA. Artisan hot chicken mixtape,
        synth tilde franzen keffiyeh pabst jianbing health goth distillery.
      </p>
      <hr style={{ marginBottom: "1rem", marginTop: "1rem", width: "40%" }} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginBottom: "2rem",
        }}
      >
        <ProductCard product={product}>
          <ProductImage img={product.img} />
          <ProductTitle title={product.title} />
          <ProductButtons counter={counter} increaseBy={increaseBy} />
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage
