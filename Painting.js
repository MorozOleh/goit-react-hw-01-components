// import PropTypes from 'prop-types';

// import defaultImage from './default.jpg';
// // when we want to use default image we need to import this one like above;


// console.log(defaultImage);
// export default function Painting(props) {
//   const { urlImg = defaultImage, title, profileUrl, authorName, price = 555 , quantity} = props;
//         return (
//           <div>
//     <img src={urlImg} alt={title} width="480" />
//     <h2>{title}</h2>
//     <p>
//       author: <a href={profileUrl}>{authorName}</a>
//     </p>
//     <p>price: {price} dollars</p>
//     <p>available: {quantity < 10 ? 'remained a few' : 'remained a lot'} </p>
//     <button type="button"> Add to basket </button>
//           </div>
//   )
// }

// Painting.propTypes = {
//   urlImg: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   profileUrl: PropTypes.string.isRequired,
//   authorName: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   quantity: PropTypes.number.isRequired,
// }