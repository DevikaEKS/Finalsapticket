// import React, { useEffect, useState } from 'react'
// import { useParams, Link } from 'react-router-dom'
// import axios from 'axios'

// function TicketsCount() {

//     const { id } = useParams()
//     const decodedId = atob(id)
//     console.log(decodedId);

//     const [tickets, setTickets] = useState([])

//     useEffect(() => {
//         axios.get(`http://192.168.252.158:5000/api/tickets/count/${decodedId}`)
//             .then(res => {
//                 console.log(res.data);
//                 setTickets(res.data)
//             })
//     }, [])
//     return (
//         <div className='container-fluid'>
//             <table className='dynamictable'>
//                 <thead>
//                     <th>Company Name</th>
//                     <th>Total Number of Tickets</th>
//                 </thead>
//                 <tbody>
//                 {
//                 tickets.map(e => (
//                     <Link to={`/manger/showtickets/${id}`} className='card text-decoration-none d-flex justify-content-around'>
//                         <tr>
//                             <td>{e.company_name}</td>
//                             <td>{e.ticket_count}</td>
//                         </tr>
                        
//                     </Link>
//                 ))
//             }
//                 </tbody>
           
//             </table>
           
//         </div>
//     )
// }

// export default TicketsCount





import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function TicketsCount() {
    const { id } = useParams();
    const decodedId = atob(id);

    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        axios.get(`http://192.168.252.158:5000/api/tickets/count/${decodedId}`)
            .then(res => {
                console.log(res.data)
                setTickets(res.data);
            })
            .catch(error => {
                console.error('Error fetching tickets:', error);
            });
    }, [decodedId]);

    return (
        <div className='container-fluid'>
            <table className='dynamictable w-100 mt-5'>
                <thead>
                    <tr>
                        <th className='p-2'>Company Name</th>
                        <th className='p-2'>Total Number of Tickets</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map(ticket => (
                        <tr key={ticket.company_name}>
                            <td>
                                <Link to={`/manager/showtickets/${id}`}>
                                    {ticket.company_name}
                                </Link>
                            </td>
                            <td>{ticket.ticket_count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TicketsCount;
