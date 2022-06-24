import React from 'react';
import { Button, Tooltip } from 'antd';


const MyButton = (props) => {
    return(
        <Tooltip title={props.tooltip}>
        <Button 
          type={props.type}
          shape="round" 
          size="large"
          onClick={props.onClick}
          icon={props.icon}
          style={{margin: 5}}>
            {props.children}
        </Button>
        </Tooltip>
    )
}

export default MyButton;