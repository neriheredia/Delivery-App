import styles from "../styles/PizzaList.module.css";
import ProductCard from "./ProductCard";

const ProductsList = ({ burgerList }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST HAMBURGER IN TOWN</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
                in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
            </p>
            <div className={styles.wrapper}>
                {burgerList?.map((burger) => (
                    <ProductCard key={burger._id} burger={burger} />
                ))}
            </div>
        </div>
    );
};

export default ProductsList;
