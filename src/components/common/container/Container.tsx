import React from "react";

interface Props{
  children?:React.ReactNode;
}
const Container = ({children}:Props) => {
  return (
    <div className="max-w-[1362px] w-[100%] mx-auto px-[20px]">{children}</div>
  )
}

export default Container