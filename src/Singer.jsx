/* eslint-disable react/prop-types */
// export default function Singer({ singer }) {
//   console.log(singer);
//   return (
//     <div>
//       <h3>Singers: {singer.name}</h3>
//       <p>Age: {singer.age}</p>
//     </div>
//   );
// }
export default function Singer({ singer }) {
  console.log(singer);
  return (
    <div>
      <h3>Singers: {singer.name}</h3>
      <p>Age: {singer.age}</p>
      <p>Id: {singer.id}</p>
    </div>
  );
}
