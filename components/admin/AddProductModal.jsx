import {
  Button,
  Col,
  Form,
  Modal,
  ProgressBar,
  Row,
  Spinner,
} from "react-bootstrap";

import { useEffect, useState } from "react";

import Image from "next/image";
import ProductService from "services/ProductService";
import RequiredStar from "components/RequiredStar";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export default function AddCategoryModal(props) {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const { admin } = useSelector((state) => state.admin);
  const [image, setImage] = useState("");
  const [productFields, setProductFields] = useState({
    title: "",
    desc: "",
  });
  useEffect(() => {
    if (props.product) {
      setProductFields({
        ...props.product,
      });
      setImage(process.env.NEXT_PUBLIC_API_URL + "/" + props.product.image);
    }
  }, [props.product]);

  const changeInputValue = (e) => {
    setProductFields({ ...productFields, [e.target.name]: e.target.value });
  };
  const chooseFile = (e) => {
    setFile(e.target.files[0]);
  };

  const editProduct = async (e) => {
    e.preventDefault();
    setLoading(true);

    let res = await ProductService.editProduct(productFields, admin.token);
    if (res.status === "success") {
      if (file) {
        const data = new FormData();
        data.append("img", file, file.name);
        await ProductService.uploadImage(data, res.data._id, admin.token);
      }
      toast.success("Product Updated");
      await props.onHide();
      window.location.reload();
      setLoading(false);
    } else {
      setLoading(false);
      toast.error("something went wrong");
    }
  };
  const addProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!productFields.title || !productFields.desc) {
      setLoading(false);
      toast.error("please fill all fields");
      return;
    }

    let res = await ProductService.addProduct(productFields, admin.token);
    if (res.status === "success") {
      if (file) {
        const data = new FormData();
        data.append("img", file, file.name);
        await ProductService.uploadImage(data, res.data._id, admin.token);
      }
      toast.success("Product Added");
      await props.onHide();
      window.location.reload();
      setLoading(false);
    } else {
      setLoading(false);
      toast.error("something went wrong");
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.product ? "Edit Product" : "Add Product"}
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={props.product ? editProduct : addProduct}>
        <Modal.Body>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Title
              <RequiredStar />
            </Form.Label>
            <Col sm="10">
              <Form.Control
                value={productFields.title}
                required
                name="title"
                onChange={changeInputValue}
                type="text"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formFileLg" className="mb-3">
            <Form.Label column sm="2">
              Choose Image
            </Form.Label>
            <Col sm="10">
              <Row>
                <Col sm="12" md="9">
                  <Form.Control
                    type="file"
                    onChange={chooseFile}
                    size="md"
                    className="w-50"
                    accept="image/png,image/jpeg,image/jpg,image/webp"
                  />
                </Col>

                <Col sm="12" md="3">
                  {file ? (
                    <Image
                      src={URL.createObjectURL(file)}
                      alt="preview Image"
                      width={50}
                      height={50}
                    />
                  ) : (
                    image?.url && (
                      <Image
                        src={image.url}
                        alt="preview Image"
                        width={50}
                        height={50}
                      />
                    )
                  )}
                </Col>
              </Row>
            </Col>
          </Form.Group>
          <div className="d-flex justify-content-center">
            {file && progress !== 0 && progress !== 100 && (
              <ProgressBar
                className="w-50"
                animated
                label={`${progress}%`}
                now={progress}
              />
            )}
          </div>
          <div className="hint">Fields with * are Required</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type="button" onClick={props.onHide}>
            Close
          </Button>
          <button className="main-btn" type="submit" disabled={loading}>
            {loading ? (
              <div className="mx-4">
                <Spinner animation="border" />
              </div>
            ) : props.product ? (
              "Edit Product"
            ) : (
              "Add Product"
            )}
          </button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
