"use client"
import HeaderContainer from "@/components/header/HeaderContainer";
import styles from "./page.module.css";
import useDeviceType from "@/hooks/useDeviceType";
import DesktopHeaderContainer from "@/components/header/DesktopHeaderContainer";

export default function Home() {
  const { isMobile, isDesktop } = useDeviceType();  

  console.log(isMobile, isDesktop)
  return (
    <div className={styles.page}>
      { isMobile &&
      <HeaderContainer/>
      }
      {isDesktop &&
      <DesktopHeaderContainer isMobile={false}/>
      }
     
    </div>
  );
}
