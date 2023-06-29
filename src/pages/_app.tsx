import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'

import '../styles/globals.css'
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
export default function App({ Component, pageProps }: AppProps) {
    const [inactive, setInactive] = useState(false);
  const router = useRouter();


  useEffect(() => {
  import('preline')
  }, [])
  useEffect(() => {
    let inactivityTimer = setTimeout(() => {
      setInactive(true);
    }, 1800000); // 30 minutes

    function resetInactivityTimer() {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setInactive(true);
        toast.success("loged out automatically!!! 🎉");
      }, 1800000); // 30 minutes
    }

    document.addEventListener("mousemove", resetInactivityTimer);
    document.addEventListener("keydown", resetInactivityTimer);

    return () => {
      document.removeEventListener("mousemove", resetInactivityTimer);
      document.removeEventListener("keydown", resetInactivityTimer);
      clearTimeout(inactivityTimer);
    };
  }, []);

    if (inactive) {
    // alert('You are inactive, system is logging you out!');
    localStorage.removeItem("AUTH_TOKEN");
    router.push({
      pathname: `/dashboard/`,
    });
    setInactive(false)
  }
  return <Component {...pageProps} />
}
