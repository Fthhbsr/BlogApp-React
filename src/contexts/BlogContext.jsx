import axios from "axios";
import { createContext, useState } from "react";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/toastNotify";

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
  const [detailLoading, setDetailLoading] = useState(true);

  const [blogDetail, setBlogDetail] = useState([]);

  const [blogs, setBlogs] = useState([]);

  const [categories, setCategories] = useState([]);

  const [page, setPage] = useState(6);

  const base_url = "http://127.0.0.1:8000/";

  const getBlogs = async () => {
    const blogUrl = base_url + `api/posts/?limit=${page}&offset=0`
    try {
      const res = await axios.get(blogUrl);
      setBlogs(res.data.results);
      // toastSuccessNotify('Posts fetched successfully.')
      
      return res;
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  async function getOneBlog(slug) {
    const token = window.atob(sessionStorage.getItem("token"));

    try {
      var config = {
        method: "get",
        url: `${base_url}api/posts/${slug}`,
        headers: {
          Authorization: `Token ${token}`,
        },
      };
      const result = await axios(config);
      setDetailLoading(false);
      console.log(result.data);
      setBlogDetail(result.data);    
    } catch (error) {
      toastErrorNotify(error.message);
    }
  }

  const setComments = async (slug, commendData) => {
    const token = window.atob(sessionStorage.getItem('token'));
    const commentUrl = base_url + `api/posts/${slug}/add_comment/`;
    try {
      const data = {
        "content": commendData
      };
      var config = {
        method: 'post',
        url: commentUrl,
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json'
        },
        data : data
      };
      await axios(config)
      getOneBlog(slug)
    } catch (error) {
      toastErrorNotify(error.message)
    }
  }

  async function getCategory() {

    try {
      var config = {
        method: 'get',
        url: `${base_url}api/category/`,
      };
      const result = await axios(config);
      console.log(result.data);
      setCategories(result.data);
    } catch (error) {
      toastErrorNotify(error.message)
    }
  }

  const createPost = async (data, navigate) => {

    const token = window.atob(sessionStorage.getItem('token'));

    var config = {
      method: 'post',
      url: `${base_url}api/posts/`,
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json'
      },
      data: data
    };

    try {
      console.log(data)
      const res = await axios(config);
      console.log(res)
      if (res.status === 201) {
        navigate("/")
        toastSuccessNotify("New blog created successfully.")
      }
    } catch (error) {
      toastErrorNotify(error.message);
    } 
  }

  let value = {
    blogs,
    setBlogs,
    getBlogs,
    getOneBlog,
    blogDetail,
    detailLoading,
    setComments,
    getCategory,
    categories,
    createPost,
    page,
    setPage,
  };

  return (
    <BlogContext.Provider value={value}>{props.children}</BlogContext.Provider>
  );
};

export default BlogContextProvider;
