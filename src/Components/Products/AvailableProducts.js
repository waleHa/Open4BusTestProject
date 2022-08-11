import classes from "./AvailableProducts.module.css";
import Card from "../UI/Card";
import ProductItem from "./ProductItem/ProductItem";
const DUMMY_PRODUCTS = [
  {
    id: "m1",
    name: "Flavon Max",
    description:
      "Conscious choice of adults. \nIf we want to stay on top, to meet the expectations and face the challenges of the 21st century, to keep up with the accelerated pace of the world, we need to live a conscious and active life. \nThis challenge ",
    price: 60.0,
  },
  {
    id: "m2",
    name: "Karen's Tropical Heat Unique Hot Sauce",
    description:
      "Medium Hot Just the right combination of sweet and heat. \nThis sauce has mango for the fuity sweet, pineapple for the tartness, Adam's Wildflower Honey for the sweetness and Habanero peppers for the heat. \nYou will fall in love with this sauce as soon as you taste it.",
    price: 10.0,
  },
  {
    id: "m3",
    name: "Terry's Cherry Bomb Unique Hot Sauce",
    description:
      "Our Terry’s Cherry Bomb Unique Hot Sauce is HOT! WE use Wiri-Wiri peppers ,imported from Guyana, giving the sauce a deliciously unique fruity flavour with sharp tomato undertones. \nMy favourite!",
    price: 10.0,
  },
  {
    id: "m4",
    name: "Blade Steak",
    description:
      "It is a very versitle cut of meat.\nIt is tender enough to be served whole, but also does great sliced up for stir fry's or fajita's. \nOur blade steaks are packaged individually.\nOur grass fed beef is raised and finished on pasture. \nWe breed prodominantly red angus cattle which are an excellent breed for the grass fed - grass finished blue print. Our animals thrive on natural grasses and legumes giving their meat a bold flavour and tenderness that people love about beef. All of our beef is 100% hormone and antibiotic free.",
    price: 14.5,
  },
];

const AvailableProducts = () => {
  const productList = DUMMY_PRODUCTS.map((product) => (
    <ProductItem
      key={product.id}
      props={product}
      // name={product.name}
      // description={product.description}
      // price={product.price}
    />
  ));
  return (
    <section className={classes.products}>
      <Card>
        <ul>{productList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;
