import React from "react"
import styles from "../styles/styles.module.css"
import noImage from "../assets/no-image.jpg"
import { useProduct } from "../hooks/useProduct"

interface Props {
  product: Product
  children?: React.ReactElement | React.ReactElement[]
  /* React.ReactNode is a type that represents any valid 
  React child: JSX, strings, numbers, etc.
  */
}

interface Product {
  id: number
  title: string
  img?: string
}

interface ProductButtonsProps {
  counter: number
  increaseBy: (value: number) => void
  /* Function that receives a number and returns void. 
  void means that the function does not return anything. 
  If the function returns a value, you should replace void with the type of the return value. 
  for example: (value: number) => string
  */
}

export const ProductImage = ({ img = "" }) => {
  return (
    <img
      src={img ? img : noImage}
      alt="Product"
      className={styles.productImg}
    />
  )
}

export const ProductButtons = ({
  counter,
  increaseBy,
}: ProductButtonsProps) => {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  )
}

export const ProductTitle = ({ title }: { title: string }) => {
  return <span className={styles.productDescription}>{title}</span>
}

const ProductCard = ({ children, product }: Props) => {
  const { counter, increaseBy } = useProduct()

  return (
    <div className={styles.productCard}>
      {/* <ProductImage img={product.img} />
    // <ProductTitle title={product.title} />
    // <ProductButtons counter={counter} increaseBy={increaseBy} />*/}
      {children}
    </div>
  )
}

export default ProductCard

ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage
ProductCard.Buttons = ProductButtons
