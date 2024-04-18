import React from "react";

const Tabs = ({ children, buttons, ButtonContainer }) => {
  //   const ButtonContainer = buttonsContainer;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
};

export default Tabs;
