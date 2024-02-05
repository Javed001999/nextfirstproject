import React from 'react';
import { useRouter } from 'next/router';

export default function Course() {
  const router = useRouter();

  const clickHandler = () =>{
    //http -> api
    router.push('/course/nextjs');
  }
  return (
    <>
    <div className='course'>
    <h1>This is a Course Page</h1>
    <h2 style={{textAlign:"left"}}>Click Here 👇 to check Courses</h2>
    </div>
    <button onClick={clickHandler} className='coursebutton'>Click Me</button>
    </>
  );
};













