import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    console.log('iuseeffect')
    fetch('http://localhost:3000/api/user_endpoint').then((data) => {
      return data.json();
    })
      .then((parsed) => {
        setUsersData(parsed[0]);
      })
  }, [])
  console.log('usersData', usersData);
  return (
    <div className={styles.container}>
      <Head>
        <title>Demoapp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2 className='text-center'>
          Github Random Users
        </h2>

        {usersData.map((item) => {
          return (
            <Link href={item?.html_url}>
              <div class="card my-4" role="button">
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="p-4 w-75">
                      <h5 class="card-title">{item?.login}</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <p class="card-text">{item?.organizations_url}</p>
                    </div>
                    <div class="text-center p-4 w-25">
                      <img src={item?.avatar_url} className={styles.avatarHeight} alt="Avatar" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </main>
    </div>
  )
}