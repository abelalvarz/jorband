import React from "react"

interface Props {
  children: React.ReactNode
}
export const LayoutComponent = ({ children }: Props) => {
  return (
    <div className='page-container'>{children}</div>
  )
}
