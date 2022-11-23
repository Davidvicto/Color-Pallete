import React from 'react'

const ViewPort = ({ colorValue, hexValue, isDarkText }) => {
  const ViewPortStyle ={
    backgroundColor: colorValue,
    color: isDarkText? '#000' : '#fff'
  }

  return (
    <section 
    className='viewport' 
    style={ViewPortStyle}>
        <p>{colorValue ? colorValue : 'Empty Value'}</p>
        <p>{hexValue ? hexValue : null}</p>
    </section>
  )
}
ViewPort.defaultProps = {
    colorValue: 'Empty Color Value'
}

export default ViewPort;