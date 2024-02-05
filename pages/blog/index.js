import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Blog() {
  const router = useRouter();

  const clickHandler = () =>{
    //http -> api
    router.push('/blog/title-3');
  }

  return (
    <>
    <div className='blog'>
    <h1><Link href="blog/title-1" replace>Title 1</Link></h1>
    <h1><Link href="blog/title-2">Title 2</Link></h1>
    <h1><button onClick={clickHandler}  className='blogbutton'>Title 3</button></h1>

    <h1><Link href="blog/title-4">Title 4</Link></h1>
    <h1><Link href="blog/title-5">Title 5</Link></h1>
    </div>
    </>
  );
};


// State: The state is a buit-in React object that is used to contain data or information about the Component.
// Redux : A state management library















