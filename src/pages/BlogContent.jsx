import React, { useState, useEffect } from "react";
import Comments from "../components/Comments";
import RelatedBlogs from "../components/RelatedBlogs";
import SocialMedia from "../components/socialMedia";
import { useParams } from "react-router-dom";
import axios from "axios";
import "@fontsource/open-sans";

const BlogContent = () => {
  const [blogPost, setBlogPost] = useState("");
  const { category_slug, id } = useParams();

  // console.log(category_slug)
  // console.log(id)
  // console.log(blogPost);

  useEffect(() => {
    const fetchBlogContent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/blog-image/${category_slug}/${id}`
        );
        setBlogPost(response.data);
      } catch (error) {
        console.error("Error fetching blog content:", error.message);
      }
    };

    fetchBlogContent();
  }, [category_slug, id]);

  if (!blogPost) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6" style={{ fontFamily: "Open Sans" }}>
      {/* <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1> */}
      {/* <div className="mb-4">{blogPost.content}</div> */}
      <div
        className="m-6"
        dangerouslySetInnerHTML={{ __html: blogPost.content }}
      />
      <SocialMedia />
      <RelatedBlogs />
      <Comments />
    </div>
  );
};

export default BlogContent;
