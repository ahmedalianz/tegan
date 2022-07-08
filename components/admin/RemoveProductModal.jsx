import { Button, Modal } from "react-bootstrap";

import ProductService from "services/ProductService";
import { toast } from "react-toastify";

export default function RemoveProductModal(props) {
  const removeProduct = async () => {
    let res = await ProductService.deleteProduct(
      props.product._id,
      props.token
    );

    if (res.status === "success") {
      toast.success("Product Deleted");
      await props.onHide();
      window.location.reload();
    } else {
      toast.error("please fill all fields");
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
          Delete Project
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this project?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" type="button" onClick={props.onHide}>
          No
        </Button>
        <Button
          style={{ backgroundColor: "var(--main-color)" }}
          type="button"
          onClick={removeProduct}
        >
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
