import Container from "@/components/common/container";
import PageHeader from "@/components/common/pageHeader";

const Cart = () => {
  return (
    <section>
      <Container width="md">
        <PageHeader title="Cart" children={<>Right content</>} />
      </Container>
    </section>
  );
};

export default Cart;
