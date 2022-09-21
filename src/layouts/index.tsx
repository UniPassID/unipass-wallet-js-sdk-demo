import { useEffect, useState } from "react";
import { Outlet, history } from "umi";
import { Spin } from "antd";
import { useUnipass } from "@/hooks/useUnipass";
import styles from "./index.less";

export default function Layout() {
  const [pageLoading, setPageLoading] = useState(true);
  const { unipassWallet } = useUnipass();

  useEffect(() => {
    if (unipassWallet) {
      setPageLoading(true);
      unipassWallet
        .isLoggedIn()
        .then((loggedIn) => {
          if (loggedIn) {
            history.push("/success");
          } else {
            history.replace("/");
          }
        })
        .finally(() => {
          setPageLoading(false);
        });
    }
  }, [unipassWallet]);

  return <div className={styles.navs}>{pageLoading ? <Spin spinning /> : <Outlet />}</div>;
}
