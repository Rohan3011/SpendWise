"use strict"
import React, { useState } from 'react'

// type Session  = {
//   user?: {
//     name?: string | null
//     email?: string | null
//     image?: string | null
//   }
//   expires?: string
// }

export default function useSession() {

  const [data, setData] = useState({});
  const [status, setStatus] = useState("");

  return {data, status};
};