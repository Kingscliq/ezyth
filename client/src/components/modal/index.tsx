import React, { ReactNode, useMemo, useState } from 'react';

const Modal: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className="h-full w-screen z-50 bg-black flex items-center justify-center fixed top-0 left-0 bg-opacity-80 ">
      {children}
    </section>
  );
};

export default Modal;
