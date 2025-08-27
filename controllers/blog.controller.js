import { Blogs } from "../models/blog.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find();
    return res.status(200).json({ status: "success", blogs });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blogs.findById(id);

    if (!blog) {
      return res
        .status(404)
        .json({ message: "Blog topilmadi!", status: "failed" });
    }
    return res.status(200).json(blog);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    const { title, description, image, tags } = req.body;

    if (!title || !description || !image || tags.length < 1) {
      return res
        .status(409)
        .json({ message: "Barcha malumotlarni to'ldiring!", status: "failed" });
    }

    const newBlog = new Blogs({
      title,
      description,
      image,
      tags,
    });

    await newBlog.save();
    return res.status(200).json(newBlog);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image, tags } = req.body;

    if (!title || !description || !image || tags.length < 1) {
      return res
        .status(409)
        .json({ message: "Barcha malumotlarni to'ldiring!", status: "failed" });
    }

    const updatedBlog = {
      title,
      description,
      image,
      tags,
    };

    await Blogs.findByIdAndUpdate(id, updatedBlog, { new: true });
    return res.status(200).json(updatedBlog);
  } catch (error) {
    return res.status(200).json({ message: error.message });
  }
};

export const removeBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blogs.findByIdAndDelete(id);

    if (!blog) {
      return res
        .status(404)
        .json({ message: "Blog topilmadi!", status: "failed" });
    }
    return res.status(200).json({
      message: "success",
      message: "Blog muvaffaqiyatli o'chirib tashlandi!",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
