const Product = require("../models/product");

const getAllProducts = async (req, res) => {

  const { company, name, featured, sort, select } = req.query;
  const queryObject = {};

  if (featured){
    queryObject.featured = featured;
  }

  if (company){
    queryObject.company = company;
  }

  if (name){
    queryObject.name = { $regex: name, $options: "i" };
    console.log(name);
  }

  let apiData = Product.find(queryObject);

  if (sort){
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }

  if (select){
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 10;
  
  // Formula of Pagination
  let skip = (page - 1) * limit;
  
  // page = 2;
  // limit = 3;
  // skip = 1 * 3 = 3;

  apiData = apiData.skip(skip).limit(limit);

  console.log(queryObject);

  const products = await apiData;
  res.status(200).json({ products, nbHits: myData.length });
};

const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query).select("name company");
  console.log(
    " ~file: products.js ~ line 10 ~ getAllProductsTesting ~ req.query",
    req.query
  );

  //In Express. js, req. query is an object containing a set of key-value pairs representing the query parameters of the URL. 
  //This object is used to get the values of query parameters, which are appended to the end of the URL after a question mark.
  
  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
