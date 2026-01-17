function Page() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = `Count is ${count}`;
  });

  return (
    <button onClick={() => setCount(count + 1)}>
      Click
    </button>
  );
}

// import React from 'react'

// const Page = () => {
//   return (
//     <div>Page</div>
//   )
// }

// export default Page
