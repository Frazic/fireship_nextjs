/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import toast from 'react-hot-toast';

import Loader from '../components/Loader';

export default function Home() {
  return (
    <div>
      <Link prefetch={false} href={{
        pathname: '/[username]',
        query: { username: 'jeff' },
      }}>
        <a>Jeff's Profile</a>
      </Link>
      <div>
        <Loader show></Loader>
      </div>
      <div>
        <button onClick={() => toast.success("Hello toast!")}>
          Toast
        </button>
      </div>
    </div >
  );
}
