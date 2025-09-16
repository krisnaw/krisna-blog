"use client"
import styles from './nav-menu.module.css'
import {useEffect, useRef} from "react";
import {usePathname, useRouter} from 'next/navigation';
import {HomeIcon} from "lucide-react";

export function NavMenu() {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabElementRef = useRef<HTMLButtonElement>(null);
  const router = useRouter()
  const pathname = usePathname()


  useEffect(() => {
    const container = containerRef.current;

    if (pathname && container) {
      const activeTabElement = activeTabElementRef.current;

      if (activeTabElement) {
        const {offsetLeft, offsetWidth} = activeTabElement;

        const clipLeft = offsetLeft;
        const clipRight = offsetLeft + offsetWidth;

        container.style.clipPath = `inset(0 ${Number(100 - (clipRight / container.offsetWidth) * 100).toFixed()}% 0 ${Number((clipLeft / container.offsetWidth) * 100).toFixed()}% round 17px)`;
      }
    }
  }, [pathname, activeTabElementRef, containerRef]);

  return (
    <div>
      <div className={styles.wrapper}>

        <ul className={styles.list}>
          {TABS.map((tab) => (
            <li key={tab.name}>
              <button
                ref={activeTabElementRef}
                onClick={() => router.push(tab.href)}
                className={styles.navLinkButton}>
                {tab.icon}
                {tab.name}
              </button>
            </li>
          ))}
        </ul>

        <div aria-hidden className={styles.clipPathContainer} ref={containerRef}>
          <ul className={`${styles.list} ${styles.listOverlay}`}>
            {TABS.map((tab) => (
              <li key={tab.name}>
                <button
                  data-tab={tab.name}
                  onClick={() => router.push(tab.href)}
                  className={`${styles.buttonOverlay} ${styles.navLinkButton}`}
                  tabIndex={-1}
                >
                  {tab.icon}
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}

const TABS = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon />
  },

  // {
  //   name: "Article",
  //   href: "/articles",
  //   icon: (
  //     <svg
  //       data-testid="primary-nav-item-icon"
  //       aria-hidden="true"
  //       width="16"
  //       height="16"
  //       viewBox="0 0 16 16"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         fill="currentColor"
  //         d="M1 2a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 1 2Zm0 8a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5A.75.75 0 0 1 1 10Zm2.25-4.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5ZM2.5 14a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 2.5 14Z"
  //       ></path>
  //       <path
  //         fillRule="evenodd"
  //         clipRule="evenodd"
  //         fill="currentColor"
  //         d="M16 11.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.5 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
  //       ></path>
  //     </svg>
  //   ),
  // },

];