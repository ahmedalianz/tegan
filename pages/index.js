import About from "components/HOME/About";
import Services from "components/HOME/Services";
import Cookies from "js-cookie";
import Featured from "components/HOME/Featured";
import Head from "next/head";
import ProductService from "services/ProductService";
import UserService from "services/UserService";
import Loader from "components/Loader/Loader";
import { setAdminData } from "redux/admin";
import { setProducts } from "redux/products";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Projects from "components/HOME/Projects";
import Contact from "components/HOME/Contact";
export default function Home({ productsList, admin }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(setProducts(productsList));
    if (admin) {
      dispatch(setAdminData(admin));
      setLoading(false);
      return;
    }
    Cookies.remove("decoreAdmin", { path: "/" });
    setLoading(false);
  }, [admin]);
  useEffect(() => {
    productsList && dispatch(setProducts(productsList));
  }, [productsList]);
  return (
    <div>
      <Head>
        <title>Tegan</title>
        <meta name="description" content="Your best Design is here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Featured />
          <About />
          <Services />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  );
}
export const getServerSideProps = async (ctx) => {
  let productsListResponse = [];
  const myCookies = ctx.req?.cookies || "";
  let admin = null;
  productsListResponse = await ProductService.getProducts();
  if (myCookies.decoreAdmin) {
    let res = await UserService.authorizeMe(myCookies.decoreAdmin);
    if (res?.status === "success") {
      admin = res.data;
    }
  }

  return {
    props: {
      productsList: productsListResponse,
      admin,
    },
  };
};
