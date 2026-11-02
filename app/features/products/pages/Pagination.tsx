// "use client";

// import { parseAsInteger, useQueryStates } from "nuqs";

// type Props = {
//   page: number;
//   totalPages: number;
// };

// export default function Pagination({ page, totalPages }: Props) {
//   const [, setPagination] = useQueryStates({
//     page: parseAsInteger.withDefault(1),
//     limit: parseAsInteger.withDefault(10),
//   });

//   return (
//     <div className="mt-8 flex justify-center gap-3">
//       {Array.from({ length: totalPages }, (_, index) => index + 1).map(
//         (pageNumber) => (
//           <button
//             key={pageNumber}
//             onClick={() => setPagination({ page: pageNumber })}
//             className={`rounded border px-4 py-2 ${
//               page === pageNumber
//                 ? "bg-black text-white"
//                 : "bg-white text-black"
//             }`}
//           >
//             {pageNumber}
//           </button>
//         ),
//       )}
//     </div>
//   );
// }

"use client";

import { parseAsInteger, useQueryStates } from "nuqs";

type Props = {
  page: number;
  totalPages: number;
};

export default function Pagination({ page, totalPages }: Props) {
  const [, setPagination] = useQueryStates(
    {
      page: parseAsInteger.withDefault(1),
    },
    {
      shallow: false,
    },
  );

  if (totalPages <= 1) return null;

  return (
    <div className="mt-8 flex justify-center gap-3">
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (pageNumber) => (
          <button
            key={pageNumber}
            type="button"
            onClick={() => setPagination({ page: pageNumber })}
            className={`rounded border px-4 py-2 ${
              page === pageNumber
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {pageNumber}
          </button>
        ),
      )}
    </div>
  );
}
