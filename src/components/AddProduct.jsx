import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Select,
  RadioGroup,
  Radio,
  useDisclosure,
} from "@chakra-ui/react";

const AddProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  const handleChange = (e) => {
    console.log(e);

  }
  
  const formSubmit = (e) => {
    e.preventDefault();

  }




  return (
    <>
      <Button onClick={onOpen} data-cy="add-product-button">Open Modal</Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <form onSubmit={formSubmit}>
        <ModalOverlay />
        <ModalContent>

          <ModalHeader>Add New Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            
          <label>Title</label>
          <Input data-cy="add-product-title" onChange={handleChange} />

          <label>Category </label>
          <Select data-cy="add-product-category" onChange={handleChange}>
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>

          <label htmlFor="" >Gender</label>
          <RadioGroup data-cy="add-product-gender" onChange={handleChange}>
            <Radio data-cy="add-product-gender-male" name="gender" >Male</Radio>
            <Radio data-cy="add-product-gender-female" name="gender" >Female</Radio>
            <Radio data-cy="add-product-gender-unisex" name="gender" >Unisex</Radio>
          </RadioGroup>

          <label htmlFor="">Price</label>
          <Input data-cy="add-product-price" onChange={handleChange} placeholder="Rs. Price" />
          {/* <Button data-cy="add-product-submit-button">Create</Button>           */}
           
          </ModalBody>

          <ModalFooter>
            <Button data-cy="add-product-submit-button" colorScheme='blue' mr={3} >
            Create
            </Button>  
                     
          </ModalFooter>
        </ModalContent>
        </form> 
      </Modal>
    </>
  );
};

export default AddProduct;