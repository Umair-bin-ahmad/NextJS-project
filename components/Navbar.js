import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/imgs/hacker.png';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <Link href="/" class="navbar-brand">
          <a className='navbar-brand'>
            <Image src={logo} alt="Vercel Logo" width={36} height={38} />
          </a>
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link href="/">
                <a class="nav-link text-dark">Home</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/about">
                <a class="nav-link text-dark">About</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/contact">
                <a class="nav-link text-dark">Contact us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;