import { Suspense } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

type ProductResponse = {
  data: Product[];
  pagination: {
    page: number;
    limit: number;
    total: number;
  };
};

async function LiveProducts() {
  const response = await fetch(`${process.env.API_BASE_URL}/products`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  console.log("Rendering products on the server");
  const result: ProductResponse = await response.json();
  const products = result.data;

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>₹{product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default function LiveProductsPage() {
  return (
    <main>
      <h1>SSR Products</h1>

      <Suspense fallback={<p>Loading products...</p>}>
        <LiveProducts />
      </Suspense>
    </main>
  );
}
