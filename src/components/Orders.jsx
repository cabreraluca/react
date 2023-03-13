import { collection, getFirestore, getDocs} from 'firebase/firestore'
import { React, useState, useEffect } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Orders() {
    const [ordersList, setOrdersList] = useState([]);
    useEffect(() => {
        const db = getFirestore();
        const orders = collection(db, "orders");

        const fetchOrders = async () => {
        const data = await getDocs(orders);
        if (data) {
          setOrdersList(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })).sort((a, b) => b.date.seconds + a.date.seconds));
        }
};
fetchOrders();
}, []);
  return (
    <div style={{backgroundColor:'black', color:'white', textAlign:'left' }}>
        <h2 style={{textAlign:'center', fontSize:'3rem'}}>Órdenes</h2>
        {ordersList.map((order)=>(
            <div style={{borderBottom:'3px solid red', marginBottom:'3rem'}} key={order.id}>
                <h3>Orden: {order.id}</h3>
                <h3>Comprador: {order.buyer.nombre}</h3>
                <Accordion sx={{backgroundColor:'black', color:'white'}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{backgroundColor:'white'}}/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                <Typography>
                    Productos
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <ul style={{listStyleType:'none'}}>
                        {order.items.map((item)=>(
                            <li key={item.id}>
                               {item.quantity} x {item.title},
                                Id: {item.id}
                            </li>
                        ))}
                    </ul>
                </Typography>
                </AccordionDetails>
                </Accordion>
                            </div>
                        ))}
                    </div>
  )
}
