import "./Crud.css"
import { useState } from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';



const Crud = () => {

    const blankuser = {
        "name" : "",
        "email" : "",
        "contact" : "",
        "roll" : "",
        "Address" : ""
    }

    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({blankuser});
    const [userdata, setUserdata] = useState([]);
    const [action, setAction] = useState("Add");
    const [editIndex, setIditIndex] = useState(null);

    const onOpenModal = () => setOpen(true);

    const onCloseModal = () => {
        setOpen(false)
        setAction('Add')
    } 
    const adduser = () => {
          setUserdata([...userdata, user]);
          setUser(blankuser);
          onCloseModal();
    }

    const editUser = (index) => {
         setAction('Edit')
         const selectedUser = userdata.find((x, i) => i === index);
         setUser(selectedUser);
         setIditIndex(index)
         onOpenModal()
    }
    const deleteUser = (index) => {
        let newUsers = userdata.filter((x, i) => {return i != index})
        setUserdata(newUsers);
    }

    const updateUser = () => {
         const newUsers = userdata.map((x ,i) => {
            if(i===editIndex){
                x = user
            }
            return x;
         })
         setUserdata(newUsers);
         setUser(blankuser);
         setIditIndex(null);
         onCloseModal()
    }

  return (
    <div className='containerr'>
      <div className="d-flex">
        <h1>Crud Applcation</h1>
      </div>
       <div className="toolbar">
         <button className="add" onClick={onOpenModal}>
            <span >Add</span>
         </button>
       </div>
       <hr />
       {/* <p>{JSON.stringify(user)}</p> */}
       <table className='table'>
           <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Roll</th>
                <th>Address</th>
                <th>Action</th>
            </tr>
           </thead>
           <tbody>
            {userdata.length > 0 && userdata.map((user, index) => {
                return (
                    <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.contact}</td>
                <td>{user.roll}</td>
                <td>{user.address}</td>
                <td>
                    <buton className="btn" onClick={()=>editUser(index)}>
                        <span> Edit</span>
                    </buton>
                    <buton className="btn" onClick={() =>deleteUser(index)}>
                        <span>Delete</span>
                    </buton>
                </td>
            </tr>
                )
            })}
            </tbody>
       </table>
       <Modal open={open} onClose={onCloseModal} center>
        <h2>{action} User</h2>
        {/* <p>{JSON.stringify(user)}</p> */}
        <div className="form">
            <label htmlFor="name">Name</label>
            <input type="text" value={user.name} autoComplete="off" onChange={(e) => setUser({...user, "name":e.target.value})} />
            <label htmlFor="email">Email</label>
            <input type="text" value={user.emai} autoComplete="off" onChange={(e) => setUser({...user, "email":e.target.value})} />
            {/* <label htmlFor="email" autoComplete="off">Email</label>
            <input type="text" value={user.email} onChange={(e) => setUser({...user, "email":e.target.value})} /> */}
            <label htmlFor="contact">Contact</label>
            <input type="text" value={user.contact} onChange={(e) => setUser({...user, "contact":e.target.value})} />
            <label htmlFor="contact">Roll</label>
            <input type="contact" value={user.roll} autoComplete="off" onChange={(e) => setUser({...user, "roll":e.target.value})} />
            <label htmlFor="contact">Address</label>
            <textarea name="address" value={user.address} id="" cols="30" rows="10"  onChange={(e) => setUser({...user, "address":e.target.value})}></textarea>
            
            {action === "Add" && <button onClick={()=>adduser()} className="btns">Submit</button> }
            {action === "Edit" && <button onClick={()=>updateUser()} className="btns">Update</button> }
        </div>
      </Modal>
    </div>
  );
}

export default Crud;
