import React, { useEffect } from "react";
import { useRouter } from "next/router";

const rayhan = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Rayahn</h1>
      <pre>{JSON.stringify(router.query, undefined, 4)}</pre>
    </div>
  );
};

export default rayhan;
