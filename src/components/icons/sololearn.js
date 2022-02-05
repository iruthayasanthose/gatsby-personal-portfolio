import React from "react"
import PropTypes from "prop-types"

const Sololearn = ({ color }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      fill={color}
      x="0px"
      y="0px"
      width="430.117px"
      height="430.117px"
      viewBox="0 0 430.117 430.117"
    >
      <g>
        <path d="m699.9 98.8s-597.3 699.4 135.7 1478.5c0 0-643.4-214-713.4-713.4 0 0-103.5-509.1 577.7-765.1z" />
        <path d="m639.7 1119.9s83.9-1021.1 1156.8-891c0 0-465.8-381.9-895.2-158.1-1.4 0-611.3 331.5-261.6 1049.1z" />
        <path d="m891.5 668.1s261.6-437.8 923.2-345.5c0 0 479.8 144.1 401.4 979.1-1.4 0-267.2-1011.3-1324.6-633.6z" />
        <path d="m1431.4 644.3s815.5 797.3 0 1566.6c0 0 499.4-132.9 688.2-594.5 0 0 193-686.7-688.2-972.1z" />
      </g>
      <path d="m1693 1189.8s-363.7 1035.1-1342.8 734.3c0 0 292.3 398.6 812.7 286.7-.1.1 661.5-50.2 530.1-1021z" />
      <path d="m35.5 896.1s226.6 937.2 1314.8 720.4c0 0-384.7 468.6-1000.1 230.8 0-.1-482.6-244.8-314.7-951.2z" />
    </svg>
  )
}

Linkedin.propTypes = {
  color: PropTypes.string,
}

Linkedin.defaultProps = {
  color: "#000000",
}

export default Sololearn
