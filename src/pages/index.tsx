import React from "react";
import NavBar from "../components/NavBar";
import { withUrqlClient } from "next-urql";
import { creatUrqlClient } from "../utils/creatUrqlClient";
import { usePostsQuery } from "../generated/graphql";

const Index = () => {
  const [{ data }] = usePostsQuery();

  return (
    <>
      <NavBar />
      <div>Hello bro</div>
      {data && data.posts.map((post) => <div key={post.id}>{post.title}</div>)}
    </>
  );
};
export default withUrqlClient(creatUrqlClient, { ssr: true })(Index);
