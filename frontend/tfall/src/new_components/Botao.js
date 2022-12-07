import React from "react";
import Button from "react-bootstrap/Button";

function Botao() {
  const clickHandler = () => {};
  return (
    <>
      <style type="text/css">
        {`
  .btn-flat {
    background-color: #333333;
    color: white;
  }

  .btn-xxl {
    padding: 0.5rem 0.5rem;
    font-size: 1.2rem;
  }
  `}
      </style>
      <Button
        type="button"
        onClick={clickHandler}
        variant="flat"
        size="xxl"
        className="border-bottom mb-3"
      >
        Clique para saber mais
      </Button>
    </>
  );
}

export default Botao;
