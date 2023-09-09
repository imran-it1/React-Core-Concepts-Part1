// export default function Todo({ task, isDone }) {
//   return <li>Done: {task}</li>;
// }

// Conditonal Rendering One
// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Done: {task}</li>;
//   } else {
//     return <li>Woking On: {task}</li>;
//   }
// }

// Conditonal Rendering One
// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Done: {task}</li>;
//   } else {
//     return <li>Woking On: {task}</li>;
//   }
// }

// Conditional Rendering Two
// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Done: {task}</li>;
//   }
//   return <li>Work On: {task}</li>;
// }

// Conditinal Rendering Three ---> Ternary Operator

// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {isDone ? "Finished: " : "Work On"} {task}
//     </li>
//   );
// }

// Coditinal Rendering Four --> &&

// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {isDone && "Finished: "} {task}
//     </li>
//   );
// }

// Conditinal Rendering Five --> ||

// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {task} {isDone || " :Do it"}
//     </li>
//   );
// }

// consitonal Rendering Six ---> Using Variable
export default function Todo({ task, isDone }) {
  let listItem;
  if (isDone) {
    listItem = <li>Done: {task}</li>;
  } else {
    listItem = <li>Woking On: {task}</li>;
  }
  return listItem;
}
