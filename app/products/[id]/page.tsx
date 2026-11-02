// import { Suspense } from "react";

// export default async function ProductDetailPage({
//   params,
//   searchParams,
// }: {
//   params: Promise<{ id: string }>;
//   searchParams: Promise<{ page: string }>;
// }) {
//   return (
//     <div>
//       <Suspense fallback={<div>loading</div>}>
//         <DetailPage params={params} searchParams={searchParams} />
//       </Suspense>
//     </div>
//   );
// }

// async function DetailPage({
//   params,
//   searchParams,
// }: {
//   params: Promise<{ id: string }>;
//   searchParams: Promise<{ page: string }>;
// }) {
//   const { id } = await params;
//   const { page } = await searchParams;
//   return (
//     <div>
//       page of {id} page{page}
//     </div>
//   );
// }
// import { Suspense, use } from "react";

// export default function ProductDetailPage({
//   params,
//   searchParams,
// }: {
//   params: Promise<{ id: string }>;
//   searchParams: Promise<{ page: string }>;
// }) {
//   return (
//     <div>
//       <Suspense fallback={<div>loading</div>}>
//         <DetailPage params={params} searchParams={searchParams} />
//       </Suspense>
//     </div>
//   );
// }

// function DetailPage({
//   params,
//   searchParams,
// }: {
//   params: Promise<{ id: string }>;
//   searchParams: Promise<{ page: string }>;
// }) {
//   const { id } = use(params);
//   const { page } = use(searchParams);
//   return (
//     <div>
//       page of {id} page{page}
//     </div>
//   );
// }
// import ProductDetailsPage from "../../features/products/pages/ProductDetailsPage";

// export default function Page() {
//   return <ProductDetailsPage />;
// }

import { Suspense } from "react";
import ProductDetailsPage from "@/app/features/products/pages/ProductDetailsPage";
import { products } from "../data/products";

import { Metadata } from "next";

// type Props = {
//   params: Promise<{ id: string }>;
// };
async function getProducts(id: string) {
  "use cache";
  return products.find((product) => product.id === Number(id));
}
export async function generateMetadata({
  params,
}: PageProps<"/products/[id]">): Promise<Metadata> {
  const { id } = await params;
  const product = await getProducts(id);

  return {
    title: product?.name ?? "Test",
    description: product?.description ?? "not found",
  };
}
