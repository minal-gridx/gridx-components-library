import React from 'react'
//import './button.scss'
import 'antd/dist/antd.css';
import { Button } from 'antd';

const NewButton = ({ message = 'Hello world' }) => (<>
	<Button type="primary">{message}</Button>
	<Button>{message}</Button>
	<Button type="dashed">Dashed Button</Button>
	<br />
	<Button type="text">Text Button</Button>
	<Button type="link">Link Button</Button>
</>
)

export default NewButton