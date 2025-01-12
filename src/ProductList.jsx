import { useState } from 'react';
import './ProductList.css'
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const plantsArray = [
    {
      category: "Low Maintenance",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Tolerates low light and infrequent watering.",
          cost: "$15"
        },
        {
          name: "Pothos",
          image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
          description: "Forgiving of neglect and comes in various colors.",
          cost: "$10"
        },
      ]
    },
    {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Rosemary",
                    image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                    description: "Invigorating scent, often used in cooking.",
                    cost: "$15"
                },
                {
                    name: "Mint",
                    image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
                    description: "Refreshing aroma, used in teas and cooking.",
                    cost: "$12"
                },
                {
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Citrusy scent, relieves stress and promotes sleep.",
                    cost: "$14"
                },
                {
                    name: "Hyacinth",
                    image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
                    description: "Hyacinth is a beautiful flowering plant known for its fragrant.",
                    cost: "$22"
                }
            ]
        },
		 {
            category: "Insect Repellent Plants",
            plants: [
                {
                    name: "oregano",
                    image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
                    description: "The oregano plants contains compounds that can deter certain insects.",
                    cost: "$10"
                },
                {
                    name: "Marigold",
                    image:"https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
                    description: "Natural insect repellent, also adds color to the garden.",
                    cost: "$8"
                },
                {
                    name: "Geraniums",
                    image: "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg",
                    description: "Known for their insect-repelling properties while adding a pleasant scent.",
                    cost: "$20"
                },
                {
                    name: "Basil",
                    image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
                    description: "Repels flies and mosquitoes, also used in cooking.",
                    cost: "$9"
                }
            ]
        },
    {
            category: "Medicinal Plants",
            plants: [
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Soothing gel used for skin ailments.",
                    cost: "$14"
                },
                {
                    name: "Echinacea",
                    image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
                    description: "Boosts immune system, helps fight colds.",
                    cost: "$16"
                },
                {
                    name: "Peppermint",
                    image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
                    description: "Relieves digestive issues and headaches.",
                    cost: "$13"
                },
                {
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Calms nerves and promotes relaxation.",
                    cost: "$14"
                }
            ]
        }
  ];

  const styleObj = {
    backgroundColor: '#4CAF50',
    color: '#fff!important',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '20px',
  };

  const styleA = {
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div>
      <div className="navbar" style={styleObj}>
        <div className="tag">
          <div className="centered">
           <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
            <a href="/" style={{ textDecoration: 'none' }}>
              <div style={{ paddingLeft: '20px' }}>
                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
              </div>
            </a>
          </div>
        </div>
            <div>
                <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}>
                <h1 className="cart">
                    <span>{cart.numOfItems}</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png" alt="Shopping Cart" height="68" width="68" />
                </h1>
                </a>
            </div>
      </div>
      {!showCart ? (
        <div>
          {plantsArray.map((section, sectionIndex) => (
            <div className="product-grid" key={sectionIndex}>
              <h2 className="plant_heading">{section.category}</h2>
              <div className="product-list">
                {section.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <h3 className="product-title">{plant.name}</h3>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <p className="product-price">{plant.cost}</p>
                    <p>{plant.description}</p>
                    {cart.items.some(item => item.name === plant.name) ? (
                      <button className="product-button added-to-cart">Added to Cart</button>
                    ) : (
                      <button className="product-button" onClick={() => handleAddToCart(plant)}>Add to Cart</button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
