import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import useShowToast from "../hooks/useShowToast";
import { useState } from "react";
import Post from "../components/Post";
import { useRecoilState } from "recoil";
import postAtom from "../atoms/postsAtom";
import SuggestedUsers from "../components/SuggestedUsers";

const HomePage = () => {
  const showToast = useShowToast();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useRecoilState(postAtom);

  useEffect(() => {
    const getFeedPost = async () => {
      setLoading(true);
      setPost([]);
      try {
        const res = await fetch("/api/post/feed");
        const data = await res.json();

        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        setPost(data);
      } catch (error) {
        showToast("Error", error, "error");
      } finally {
        setLoading(false);
      }
    };
    getFeedPost();
  }, [showToast, setPost]);

  return (
    <>
      <Flex gap={10} alignItems={"flex-start"}>
        <Box flex={70}>
          {loading && (
            <Flex justifyContent={"center"}>
              <Spinner size={"xl"} />
            </Flex>
          )}
          {!loading && post.length === 0 && (
            <h1>Follow some users to see the feed</h1>
          )}

          {post.map((post) => (
            <Post key={post._id} post={post} postedBy={post.postedBy} />
          ))}
        </Box>
        <Box flex={30} 
        display={{
          base: "none",
          md: "block"
        }}>
          <SuggestedUsers />
        </Box>
      </Flex>
    </>
  );
};

export default HomePage;
