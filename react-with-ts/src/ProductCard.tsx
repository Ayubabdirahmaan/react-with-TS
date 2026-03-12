interface ProductCard {
  name: string;
  price: number;
  description?: string;
}
export const ProductCard = ({ name, price, description }: ProductCard) => {
  return (
    <>
      <p>{name}</p>
      <p>{price}</p>
      <p>{description}</p>
    </>
  );
};
