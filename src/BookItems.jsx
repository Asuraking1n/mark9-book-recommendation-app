import React, { Suspense } from "react";
const BookItem = React.lazy(() => import("./Booktem"));

export default function BookItems({ book }) {
  return (
    <div className="menu">
      {book.map((f) => (
        <Suspense
          key={f.id}
          fallback={
            <div
              style={{
                color: "#777",
                height: "268px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="menu-item"
            >
              Loading...
            </div>
          }
        >
          <BookItem key={f.id} item={f} />
        </Suspense>
      ))}
    </div>
  );
}
