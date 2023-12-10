import * as yup from "yup";

export const productSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "*too short!")
    .max(50, "*too long!")
    .required("*required"),
  description: yup.string().max(100, "*too long!").required("*required"),
  actual_price: yup
    .number()
    .positive()
    .min(1, "*product price should be minimum 1")
    .required("*required"),
  selling_price: yup
    .number()
    .positive()
    .min(1, "*product price should be minimum 1")
    .max(
      yup.ref("actual_price"),
      "*selling price must be lesser than or equal to product actual price"
    )
    .required("*required"),
  inventory_count: yup
    .number()
    .positive()
    .min(1, "*add product")
    .required("*required"),
  gender: yup.string().oneOf(["m", "f"]).required("*required"),
  category: yup
    .string()
    .oneOf([
      "pant",
      "shirt",
      "t-shirt",
      "dress",
      "saree",
      "sweater",
      "hoodie",
      "jacket",
      "top",
      "jeans",
    ])
    .required("*select one"),
  colors: yup.array().min(1, "choose at least one").required("*required"),
  sizes: yup.array().min(1, "choose at least one").required("*required"),
  imageUrls: yup
    .array()
    .min(1, "choose at least one")
    .max(4, "can upload max 4 images")
    .required("*required"),
});
