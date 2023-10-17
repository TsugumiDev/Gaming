// import React from "react";
// // import { useSelector } from "react-redux";
// import "./Basket.scss";
// import { IoIosArrowRoundBack } from "react-icons/io";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { addToBasketAction } from "../../store/actions/actions";

// const Basket = () => {
//   const basketProducts = useSelector((state) => state.basket.basketProducts);

//   const dispatch = useDispatch();
//   // const findedItem = basketProducts?.find(
//   //   (pr) =>
//   //     item.product.id === pr?.product?.id &&
//   //     item.product.title === pr?.product?.title
//   // );

//   // const handleAddToBasket = () => {
//   //   if (findedItem) {
//   //     const filteredProducts = basketProducts?.filter(
//   //       (pr) => item.product.title !== pr?.product?.title
//   //     );
//   //     dispatch(
//   //       addToBasketAction([
//   //         ...filteredProducts,
//   //         { product: item?.product, count: findedItem.count + 1 },
//   //       ])
//   //     );
//   //   }
//   // };

//   const handleRemoveFromBasket = () => {
//     //   if (findedItem) {
//     //     const filteredProducts = basketProducts?.filter(
//     //       (pr) =>
//     //         item.product.id !== pr?.product?.id &&
//     //         item.product.title !== pr?.product?.title
//     //     );
//     //     if (findedItem.count - 1 === 0) {
//     //       dispatch(addToBasketAction([...filteredProducts]));
//     //     } else {
//     //       dispatch(
//     //         addToBasketAction([
//     //           ...filteredProducts,
//     //           { product: item?.product, count: findedItem.count - 1 },
//     //         ])
//     //       );
//     //     }
//     //   }
//   };

//   const handleRemoveItemFromBasket = () => {
//     // if (findedItem) {
//     //   const filteredProducts = basketProducts?.filter(
//     //     (pr) =>
//     //       item.product.id !== pr?.product?.id &&
//     //       item.product.title !== pr?.product?.title
//     //   );
//     //   dispatch(addToBasketAction([...filteredProducts]));
//     // }
//   };

//   return (
//     <div className="basket">
//       <div className="container">
//         <div className="section-top">
//           <div className="btn-back">
//             <IoIosArrowRoundBack className="back-icon" />
//             <span className="back-text">Continue shopping</span>
//           </div>
//           <h2 className="cart-text">Your cart</h2>
//         </div>
//         <div className="section-contenet">
//           <div className="left">
//             <div className="cart-items">
//               <table class="cart-table">
//                 <thead>
//                   <tr>
//                     <th className="img">IMAGE</th>
//                     <th className="name">NAME</th>
//                     <th className="price">PRICE</th>
//                     <th className="quantiy">QUANTITY</th>
//                     <th className="total">TOTAL</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="cart-item">
//                     <td className="cart-item-media">
//                       <img src="/images/10.webp" alt="cart-img" />
//                     </td>
//                     <td className="name">
//                       <span class="cart-item__name">{item.productName}</span>
//                       <div class="product-option">
//                         <span className="parameters">Size:</span>
//                         <div className="parameters-text">32 Inches</div>
//                       </div>
//                     </td>
//                     <td className="cart-price">
//                       <span className="price">850.00 </span>
//                       <span class="currency-type">USD</span>
//                     </td>
//                     <td className="cart-item__quantity">
//                       <div className="counter">
//                         <button onClick={handleRemoveFromBasket}>
//                           <AiOutlinePlus />
//                         </button>
//                         <span>{item?.count}</span>
//                         <button onClick={handleAddToBasket}>
//                           <AiOutlineMinus />
//                         </button>
//                       </div>
//                     </td>
//                     <td class="cart-item-totals">
//                       <div class="cart-item-price">
//                         <div class="price-end">
//                           <span className="total-price">
//                             {item?.products?.price}
//                           </span>
//                           <span class="currency-type">USD</span>
//                         </div>
//                         <div className="remove-btn">
//                           <RiDeleteBin6Line className="remove-icon" />
//                         </div>
//                       </div>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           <div className="right">
//             <div className="right-top">
//               <span className="order">Order special instructions</span>
//               <textarea
//                 class="text-area"
//                 placeholder="Order special instructions"
//               ></textarea>
//             </div>
//             <div className="right-bottom">
//               <div className="subtotal-content">
//                 <div class="totals">
//                   <h3 class="totals-subtotal">Subtotal</h3>
//                   <p class="totals-subtotal-value">
//                     <span className="price">3,430.00 </span>
//                     <span class="currency-type">USD</span>
//                   </p>
//                 </div>
//                 <small class="tax-note">
//                   Taxes and shipping calculated at checkout
//                 </small>
//               </div>
//               <div className="checkout">
//                 <button type="submit" class="checkout-btn">
//                   Proceed to checkout
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Basket;
