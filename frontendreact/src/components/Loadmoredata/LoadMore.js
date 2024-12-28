import React, { useEffect, useState } from "react";
import "./Loadmore.css"
const LoadMore = () => {
  const [Datacount, setDatacount] = useState(0);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const[disbalebutton,setDisablebutton]=useState(false)
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          Datacount === 0 ? 0 : Datacount * 20
        }`
      );
      const data = await res.json();
      console.log(data);

      /*limit:
The limit parameter in a query typically specifies the maximum number of results (or records) to return from a request.
In this case, limit=20 means you want to retrieve 20 products from the dummyjson.com API.
2. skip:
The skip parameter specifies how many records should be skipped before returning the results. It is often used in pagination to determine where the next set of results should start.
For example, if skip=40, it means you will skip the first 40 records and start returning the next set of records.*/
      if (data && data.products && data.products.length) {
        setProducts((prevdata) => [...prevdata, ...data.products]);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    if(products.length===100){ setDisablebutton(true)}
    fetchData();
  }, [Datacount]);
//   useEffect(() => {
//     if (products && products.length === 100) setDisablebutton(true);
//   }, [products]);
  if (loading) {
    return <div>Loding data plz wait</div>;
  }
  return (
    <div className="loadmore-container">
      <div className="product-container">
        {/* /array.map(() => ())
Syntax: This syntax uses parentheses ().
Function Body: When you use parentheses, you're defining a function with a concise body.
// Return Value: The value following the => is implicitly returned, so you don't need to use the return statement. */}
        {/*  array.map(() => {})
Syntax: This syntax uses curly braces {}.
Function Body: When you use curly braces, you're defining a function with a block body.
Return Value: If you use {} as the function body, you must explicitly return a value using the return statement. If you don't, the function will return undefined by default. */}
        {products && products.length
          ? products.map((item,index) => (
              <div className="products" key={index}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="buttonclick" >
<button onClick={()=>setDatacount(Datacount+1)} disabled={disbalebutton}>
Load More Products
</button>
{disbalebutton?"you have reached 100 products":null}
      </div>
    </div>
  );
};

export default LoadMore;
