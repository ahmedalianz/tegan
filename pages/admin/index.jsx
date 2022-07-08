import { Table, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import ProductController from "components/admin/ProductController";
import { setProducts } from "redux/products";
import Loader from "components/Loader/Loader";
import ProductService from "services/ProductService";
import Image from "next/image";
import UserService from "services/UserService";
import { setAdminData } from "redux/admin";

export default function Index({ productsList, adminData }) {
  const [loading, setLoading] = useState(true);
  const { admin } = useSelector((state) => state.admin);
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProducts(productsList));
    if (adminData) {
      dispatch(setAdminData(adminData));
      setLoading(false);
      return;
    }
    Cookies.remove("decoreAdmin", { path: "/" });
    setLoading(false);
  }, [adminData]);
  const [addProductModal, setAddProductModal] = useState(false);
  const [removeProductModal, setRemoveProductModal] = useState(false);
  const [productToBeEdited, setProductToBeEdited] = useState(null);
  const addProduct = () => {
    setAddProductModal(true);
  };
  const removeProduct = (e, product) => {
    e.stopPropagation();
    setProductToBeEdited(product);
    setRemoveProductModal(true);
  };
  const editProduct = (e, product) => {
    e.stopPropagation();
    setProductToBeEdited(product);
    setAddProductModal(true);
  };

  return loading ? (
    <Loader />
  ) : (
    <section id="admin-page">
      <Container>
        <div className="d-flex justify-content-between">
          <h1>Projects</h1>
          <div>
            <button onClick={addProduct} className="main-btn">
              Add Project
            </button>
          </div>
        </div>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Project Name</th>
              <th>Project Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{product.title} </td>
                <td>
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_API_URL + "/" + product.image ||
                      "/images/about1.jpg"
                    }
                    width={100}
                    height={100}
                  />
                </td>
                <td>
                  <div className="d-flex justify-content-center">
                    <Button
                      className="mx-2"
                      variant="warning"
                      onClick={(e) => editProduct(e, product)}
                    >
                      Edit
                    </Button>
                    <Button
                      className="mx-2"
                      variant="danger"
                      onClick={(e) => removeProduct(e, product)}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <ProductController
        {...{
          admin,
          addProductModal,
          setAddProductModal,
          removeProductModal,
          setRemoveProductModal,
          productToBeEdited,
          setProductToBeEdited,
        }}
      />
    </section>
  );
}
export const getServerSideProps = async (ctx) => {
  let productsListResponse = [];
  productsListResponse = await ProductService.getProducts();
  let admin = null;

  const myCookies = ctx.req?.cookies || "";
  if (!myCookies.decoreAdmin) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  } else {
    let res = await UserService.authorizeMe(myCookies.decoreAdmin);
    if (res?.status === "success") {
      admin = res.data;
    }
  }

  return {
    props: {
      productsList: productsListResponse,
      adminData: admin,
    },
  };
};
