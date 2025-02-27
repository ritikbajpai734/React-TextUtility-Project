import React,{ useState, useEffect } from 'react'
import axios from 'axios';


export default function FeaturedProducts () {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
    const fetchProducts = (page = 1) => {
      axios
      .get(`http://iottechbazaar.com/api/get-all-products?page=${page}&limit=5`) 
              .then((res) => {
          setProducts(res.data.onSale);
          setTotalPages(res.data.totalPages); // Assuming the API returns totalPages
        })
        .catch((err) => {
          console.log(err);
        });
    };

    useEffect(() => {
      fetchProducts(currentPage);
    }, [currentPage]);

    return (
      <div>
        <h1 className='my-3'>Featured Products</h1>
        <div className='item-container'>
          {products.map((product) => (
            <div className='card' key={product.id}>
              <img src={`https://iottechbazaar.com/${product.primary_image}`} alt='Iottechbazaar product' />
              <h5 className='my-3'>{product.name}</h5>
            </div>
          ))}
        </div>
    
        <div className='pagination'>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
    
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          ))}
    
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    );
}
