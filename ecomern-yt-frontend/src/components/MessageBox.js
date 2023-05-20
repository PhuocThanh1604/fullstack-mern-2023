
import Alert from 'react-bootstrap/Alert'
export default function MessageBox(props){
  
     return (<Alert variant={props.variant ||'nifo'}>
     {props.children}

 </Alert>)
}