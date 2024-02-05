import React from 'react'
import { useRouter } from 'next/router';

export default function ImageId() {
    const router = useRouter();
    const {blog_slug, image_id} = router.query;
  return (
    <h1>This is the {image_id} image of {blog_slug} </h1>
  );
};












