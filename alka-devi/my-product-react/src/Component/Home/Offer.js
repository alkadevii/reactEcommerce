import React from 'react';
import './Offer.css'

const Offers = () => {
  // Hardcoded offers data
  const offers = [
    { id: 1, title: '50% Off', thumbnail: "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg", description: 'on all skin-care products' },
    { id: 2, title: 'Sale',thumbnail: "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg", description: 'upto 80% off on all perfumes' },
    { id: 3, title: 'Black Friday Deals', thumbnail: "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",description: 'on All Electronics' },
  ];

  return (
    <div className="offers container">
      <h2 className='text-center offer-title'>Mega Offers</h2>
      <div className="row justify-content-around ">
        {offers.map((offer) => (
          <div key={offer.id} className="col-md-4">
            <div className="card offer-card">
              <img src={offer.thumbnail} className="card-img-top" alt={offer.title} />
              <div className=" card-body offer-body">
                <h3 className="card-title text-danger">{offer.title}</h3>
                <p className=" text-secondary">{offer.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;