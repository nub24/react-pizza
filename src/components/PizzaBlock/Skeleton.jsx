import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="267" rx="11" ry="11" width="280" height="23" /> 
    <circle cx="125" cy="125" r="125" /> 
    <rect x="0" y="307" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="420" rx="9" ry="9" width="60" height="30" /> 
    <rect x="1" y="424" rx="0" ry="0" width="12" height="24" /> 
    <rect x="120" y="415" rx="20" ry="20" width="148" height="50" />
  </ContentLoader>
)

export default Skeleton