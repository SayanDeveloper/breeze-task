'use client'

import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { auth } from '@/config/firebase';
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (auth) {
      onAuthStateChanged(auth, (userAuth) => {
        if (userAuth) {
          // user signed in
          console.log(userAuth);
        } else {
          // User is signed out
          console.log("logged out")
        }
      });
    }
  }, [auth])

  return (
    <>
      <Head>
        <title>Breeze.ai</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className='text-center'>Sign In</h1>
        <div>

        </div>
      </main>
    </>
  )
}
