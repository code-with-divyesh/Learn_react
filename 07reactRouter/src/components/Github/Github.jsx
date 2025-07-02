import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export function Github(props) {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // // useEffect(() => {
  // //   fetch("https://api.github.com/users/code-with-divyesh")
  // //     .then((res) => res.json())
  // //     .then((data) => {
  // //       console.log(data);
  // //       setData(data);
  // //     });
  // // }, []);
  return (
    <>
      <div className="bg-gray-600 text-xl p-4 text-white">
        Github Followers:{data.followers}
        <img src={data.avatar_url} alt="github pic" width={300} />
      </div>
    </>
  );
}

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/code-with-divyesh");
  return res.json();
};
