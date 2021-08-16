import React from "react";

export default function BookItemImg({ item }) {
  return <img src={item.location} alt={item.name} width={150} />;
}
