import React, { useState, useEffect } from 'react';
import './Products.css';

const Products = () => {
  const data = [
    { img:"https://static.wixstatic.com/media/308690_bf52f526f470400ba3a5cb490a2eb728~mv2.png/v1/fill/w_863,h_520,al_c,q_90,enc_auto/308690_bf52f526f470400ba3a5cb490a2eb728~mv2.png",name: "sddsgf", describe: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus pariatur provident libero voluptates quaerat vitae maxime? Aspernatur eum itaque voluptatem soluta iste cum explicabo perspiciatis rerum tenetur, nemo quam." },
    { img:"https://static.wixstatic.com/media/308690_44670ff9c56e4c77bc46d9739f421010~mv2.png/v1/fill/w_863,h_520,al_c,q_90,enc_auto/308690_44670ff9c56e4c77bc46d9739f421010~mv2.png",name: "sadf", describe: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus pariatur provident libero voluptates quaerat vitae maxime? Aspernatur eum itaque voluptatem soluta iste cum explicabo perspiciatis rerum tenetur, nemo quam." },
    { img:"https://static.wixstatic.com/media/308690_b535a98c5ce94e28965cc632b38346e4~mv2.png/v1/fill/w_863,h_520,al_c,q_90,enc_auto/308690_b535a98c5ce94e28965cc632b38346e4~mv2.png",name: "gdsf", describe: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus pariatur provident libero voluptates quaerat vitae maxime? Aspernatur eum itaque voluptatem soluta iste cum explicabo perspiciatis rerum tenetur, nemo quam." },
    { img:"https://static.wixstatic.com/media/308690_f2ec435f61114f818b09df9cf2cdf1e0~mv2.png/v1/fill/w_863,h_521,al_c,q_90,enc_auto/308690_f2ec435f61114f818b09df9cf2cdf1e0~mv2.png",name: "fete", describe: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus pariatur provident libero voluptates quaerat vitae maxime? Aspernatur eum itaque voluptatem soluta iste cum explicabo perspiciatis rerum tenetur, nemo quam." },
  ];

  const itemsPerPage = 3; 
  const [currentPage, setCurrentPage] = useState(1);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedData = data.slice(startIndex, endIndex);
    setDisplayData(slicedData);
  }, [currentPage]);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };


  return (
    <div className='home-product-display'>
      <h3>Products</h3>
      <div className='hm-product-upper'>
        {displayData.map((item, index) => (
          <div className='hm-product-inner' key={index}>
            <picture>
              <img src={item.img} alt={item.name} />
            </picture>
            <div>
              <div>{item.name}</div>
              {item.describe}
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>{'←'}</button>
        <button onClick={nextPage} disabled={currentPage === totalPages}>{'→'}</button>
      </div>
    </div>
  );
};

export default Products;