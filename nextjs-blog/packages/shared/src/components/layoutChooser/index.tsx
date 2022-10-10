import React from "react"

function noLayout(node) {
  return node
}

export const LayoutChooser = ({
  children,
  renderLayout,
  pageProps,
  keyId, 
}) => {
  const getLayout = renderLayout || noLayout
  return (
    <React.Fragment key={keyId}>{getLayout(children, pageProps)}</React.Fragment>
  )
}