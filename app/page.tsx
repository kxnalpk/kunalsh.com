'use client'

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import styles from "@/app/page.module.css";
import { useEffect, useRef } from "react";

export default function Home() {

  const loader = useRef(null);
  const path = useRef(null);
  
  const initialCurve = 200;
  const duration = 600;
  let start: number | undefined;

  useEffect(() => {
    setPath(initialCurve)
    setTimeout( () => {
      requestAnimationFrame(animate)
    }, 500)
  }, [])

  const animate = (timestamp: number | undefined) => {
    if(start === undefined){
      start = timestamp
    }

    //@ts-ignore
    const elapsed = timestamp - start;
    //@ts-ignore
    loader.current.style.top = easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";

    if(elapsed < duration){
      requestAnimationFrame(animate)
    }

  }

  const easeOutQuad = (time:any, start:any, end:any, duration:any) => {
    return -end * (time /= duration) * (time - 2) + start;
  }

  const loaderHeight = () => {
    //@ts-ignore
    const loaderBounds = loader.current.getBoundingClientRect();
    return loaderBounds.height;
  }

  const setPath = (curve: number) => {
    const width = window.innerWidth
    const height = loaderHeight();

    //@ts-ignore
    path.current.setAttributeNS(null, "d",
    `M0 0
    L${width} 0
    L${width} ${height}
    Q${width/2} ${height - curve} 0 ${height}
    L0 0`
    )
  }

  return (
      <main ref={loader} className={styles.loader}>
        <svg>
          <path ref={path}></path>
        </svg>

        <Navbar/>
        <Header/>
      </main>
  );
}