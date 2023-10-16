// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// const BasketItem = ({ item }) => {
//   const basketProducts = useSelector((state) => state.basket.basketProducts);
//   const dispatch = useDispatch();
//   const findedItem = basketProducts?.find(
//     (pr) =>
//       item.product.id === pr?.product?.id &&
//       item.product.title === pr?.product?.title
//   );

//   const handleAddToBasket = () => {
//     if (findedItem) {
//       const filteredProducts = basketProducts?.filter(
//         (pr) => item.product.title !== pr?.product?.title
//       );
//       dispatch(
//         addToBasketAction([
//           ...filteredProducts,
//           { product: item?.product, count: findedItem.count + 1 },
//         ])
//       );
//     }
//   };

//   const handleRemoveFromBasket = () => {
//     if (findedItem) {
//       const filteredProducts = basketProducts?.filter(
//         (pr) =>
//           item.product.id !== pr?.product?.id &&
//           item.product.title !== pr?.product?.title
//       );
//       if (findedItem.count - 1 === 0) {
//         dispatch(addToBasketAction([...filteredProducts]));
//       } else {
//         dispatch(
//           addToBasketAction([
//             ...filteredProducts,
//             { product: item?.product, count: findedItem.count - 1 },
//           ])
//         );
//       }
//     }
//   };

//   const handleRemoveItemFromBasket = () => {
//     if (findedItem) {
//       const filteredProducts = basketProducts?.filter(
//         (pr) =>
//           item.product.id !== pr?.product?.id &&
//           item.product.title !== pr?.product?.title
//       );
//       dispatch(addToBasketAction([...filteredProducts]));
//     }
//   };
//   return <div></div>;
// };

// export default BasketItem;
