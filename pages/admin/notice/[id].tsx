import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const NoticeHandle = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>NoticeDetail</h1>
      <h2>{id}</h2>
    </div>
  );
}

export default NoticeHandle;