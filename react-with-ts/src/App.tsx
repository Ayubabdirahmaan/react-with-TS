import { Welcome } from "./Welcome";

import { UserInfo } from "./UserInfo";

import { ProductCard } from "./ProductCard";

function App() {
  return (
    <>
      <Welcome username="welcome back premium user" isPremium={true} />
      <ProductCard name="iphone x" price={2000} />
      <UserInfo name="ayub" status={false} />
    </>
  );
}

export default App;
