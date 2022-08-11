import classes from "./ProductSummary.module.css";
const ProductSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>SHIPPING INFORMATION</h2>
      <h4>
        1. Curbside pickup at their store or a farmers market or other location
      </h4>
      <h4>2. They will ship to you using a carrier they choose.</h4>
      <h4>
        When you place an order you will receive an order confirmation email
        that confirms where to pickup your order or advises that the order will
        be shipped.
      </h4>
      <h4>
        When the order has been shipped or is ready for pickup you will receive
        a second order shipping or pickup confirmation email. Do not travel to
        the sellers store until you receive the email that advises the order is
        ready for pickup.
      </h4>
      <h4>
        If the order is shipped a tracking number may be included in the
        shipping confirmation email that you can click on to track your order.
      </h4>
      <h4>
        You can also contact the seller directly to confirm delivery or pickup
        status.
      </h4>
      <h4>
        If you have any questions about our policies please contact us in the
        contact us section of the OpenForBusinessMarketplace site.
      </h4>
    </section>
  );
};
export default ProductSummary;
