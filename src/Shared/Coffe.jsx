
import { AiFillEye } from 'react-icons/ai';
import { FaEyeDropper } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";


const Coffe = ({coffe,coffees,setCoffees}) => {
    
  
    const{photo,name,chef,_id}=coffe

    const deleteHandler = _id => {
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              
              fetch(`http://localhost:5000/coffees/${_id}`,{
                method:"DELETE"
              })
              .then(res=>res.json())
              .then(data => {
                if(data.deletedCount>0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                      const remaining = coffees.filter(cof => cof._id !== _id)
                      setCoffees(remaining)
                }
              })
            
            }
          })

    }

    return (
        <div className="bg-[#F5F4F1] flex items-center gap-3 md:gap-9 p-8">
            <img className="h-60 w-48" src={photo} alt="" />
            <div className="flex-grow">
                <p><span className="font-semibold">Name:</span> {name}</p>
                <p><span className="font-semibold">Chef:</span> {chef}</p>
                <p><span className="font-semibold">Price:</span> 890TK</p>
            </div>
            <div className="btn-group space-y-3 btn-group-vertical">
  <button className="btn bg-[#D2B48C] text-white"><AiFillEye className="text-2xl"/></button>
  <Link to={`/update/${_id}`}><button className="btn bg-[#3C393B] text-white"><FaEyeDropper className="text-2xl"/></button></Link>
  <button onClick={()=>deleteHandler(_id)} className="btn bg-[#EA4744] text-white"><MdDelete className="text-2xl"/></button>
</div>
        </div>
    );
};

export default Coffe;