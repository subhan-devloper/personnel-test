// Implement your react app here

import React, {useEffect, useState} from 'react';
const API_HOST = "http://localhost:8081";
const Personnel_API_URL = `${API_HOST}/api/personnel`;

export default function App() {
    const [data, setData] = useState([]);

    
    const fetchPersonnel = () => {
        fetch(`${Personnel_API_URL}`)
            .then(res => res.json())
            .then(json => setData(json));
    }
    useEffect(() => {
        fetchPersonnel();
    }, []);
    return<div className="container">
        <h1>Personnel List</h1>
        <table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
            <thead>
            <tr>
                <th>ID</th>
                <th>Family Name</th>
                <th>Given Name</th>
                <th>DOB</th>
                <th>Reference</th>
            </tr>
            </thead>
            <tbody>
            {
                        data.map((item) => (
                           
                            <tr key={item._id}>
                                <td>{item._id}</td>
                                <td>{item.FamilyName}</td>
                                <td>{item.GivenName}</td>
                                <td>{item.DateOfBirth}</td>
                                <td>{item.Reference}</td>
                            </tr>
                        ))
                    }
            </tbody>
        </table>
    </div>;
}