import React from "react";
import { useParams } from "react-router-dom";

export default function User(props) {
  const { userId } = useParams();
  return (
    <>
      <div className="bg-gray-600 text-white text-3xl p-4">Users:{userId}</div>
    </>
  );
}
