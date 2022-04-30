import { useForm } from "react-hook-form";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import React, { useState } from "react";


const FormSection = (props) => {
  const { dataRes, setDataRes } = props;
  const { register, handleSubmit, errors, reset } = useForm();
  const [date, setDate] = useState();

  const handleToDate = (from) => {
    const dateObj = new Date(from);
    const month = dateObj.getMonth() + 2;
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const newToDate = month + "/" + day + "/" + year;
    return newToDate;
  };

  const onSetDate = (event) => {
    const newToDate = handleToDate(event.target.value);
    setDate(new Date(newToDate));
  };

  const onSubmit = (data) => {
    const {
      destination,
      country,
      name,
      fromDate,
      receiveDate,
      dateOfBirth,
      passportNo,
      phoneNo,
      plan,
    } = data;

    const idGenarete = ` WC - ${Math.floor(Math.random() * 1000000 + 1)}`;
    const date = new Date();

    const finalData = {
      id: idGenarete,
      issueDate: date.toLocaleDateString(),
      destination,
      country,
      name,
      fromDate,
      receiveDate: handleToDate(fromDate),
      dateOfBirth,
      passportNo,
      phoneNo,
      plan,
    };
    setDataRes(finalData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3 className="text-center my-4">
            Travel insurance certificate
          </h3>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col className="mb-5" md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(onSubmit)} className="">
            <Form.Group className="mb-1" controlId="destination">
              <Form.Label>Enter destination</Form.Label>
              <Form.Control
                type="text"
                name="destination"
                placeholder="Enter destination"
                {...register("destination", { required: true })}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="country">
              <Form.Label>Enter Country Name</Form.Label>
              <Form.Control
                type="text"
                name="country"
                defaultValue="Bangladesh"
                placeholder="Enter Country Name"
                {...register("country", {
                  required: true,
                })}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="name">
              <Form.Label>Enter Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Full Name"
                {...register("name", {
                  required: true,
                })}
              />
            </Form.Group>
            <Row className="mb-1">
              <Col className="mb-1">
                <Form.Group controlId="fromDate">
                  <Form.Label>Enter From date </Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    placeholder="Enter date from "
                    {...register("fromDate", { required: true })}
                    onChange={onSetDate}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="receiveDate">
                  <Form.Label>Enter Receive Date </Form.Label>

                  <Form.Control
                    type="date"
                    name="date"
                    value={date?.toLocaleDateString("en-CA")}
                    placeholder="Enter Receive Date to"
                    {...register("receiveDate", { required: true })}
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="dateOfBirth">
                  <Form.Label>Enter Date of Brith</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    placeholder="Enter Date of Brith"
                    {...register("dateOfBirth", { required: false })}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                {" "}
                <Form.Group controlId="passportNo">
                  <Form.Label>Enter passport number</Form.Label>
                  <Form.Control
                    type="text"
                    name="passportNo"
                    placeholder="Enter your passport number"
                    {...register("passportNo", { required: true })}
                  />
                </Form.Group>
              </Col>
              <Col>
                {" "}
                <Form.Group controlId="phoneNo">
                  <Form.Label>Enter Phone number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Enter your Phone number"
                    {...register("phoneNo", { required: false })}
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Label>Plan menu</Form.Label>
                <Form.Select
                  {...register("plan", { required: false })}
                  aria-label="Default select example"
                >
                  <option>Plan menu</option>
                  <option value="Covid Plan (KSA)">Covid Plan (KSA)</option>
                  <option value="Covid Plan (KSA)">Covid Plan (KSA)</option>
                  <option value="Covid Plan (KSA)">Covid Plan (KSA)</option>
                </Form.Select>
              </Col>
            </Row>
            <small className="text-muted">*Required Info</small> <br />
            <Button
              className="w-100 fw-bold"
              variant="warning"
              type="submit"
            >
              Generate PDF
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormSection;
