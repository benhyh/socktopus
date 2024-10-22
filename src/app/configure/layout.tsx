import React, { ReactNode } from "react";
import { MaxWidthWrapper } from "../appComponents/MaxWidthWrapper";
import Steps from "../appComponents/Steps";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
};

export default Layout;
