import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaTrash, FaUserCheck } from 'react-icons/fa6';
import { IoPersonRemove } from 'react-icons/io5';
import Swal from 'sweetalert2';

const ApproveRiders = () => {
    const axiosSecure = useAxiosSecure();

    const {refetch, data: riders = []} = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async()=>{
            const res = await axiosSecure.get("/riders");
            return res.data;
        }
    })

    const riderUpdateStatus = (rider, status) =>{

    const updateInfo = {status: status, email: rider.email}
     axiosSecure.patch(`/riders/${rider._id}`, updateInfo)
     .then(res=>{
        if(res.data.modifiedCount){
            refetch();
         Swal.fire({
            title: "Are you sure?",
            text: `Rider status is set to ${status}.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
           
        })
        }
     })

    }

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "This rider will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
            axiosSecure.delete(`/riders/${id}`)
                .then(res => {
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire(
                    "Deleted!",
                    "Rider has been deleted successfully.",
                    "success"
                    );
                }
                });
            }
        });
        };




    const handleApproval = rider =>{

        riderUpdateStatus(rider, 'approved')

    }
    const handleRejection = rider =>{
         riderUpdateStatus(rider, 'rejected')

    }


    return (
        <div>
            <h2 className="text-4xl">Rider Pending Approval: {riders.length} </h2>

            <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Vehicle</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                    riders.map((rider, index)=> <tr key={index}>
                    <th>{index+1}</th>
                    <td>{rider.name}</td>
                    <td>{rider.email}</td>
                    <td>
                        {
                            <span className={rider.status === "approved" ? "text-green-600" : ""}> {rider.status}
                            </span>
                        }
                    </td>
                    <td >{rider.vehicle}</td>

                   <td className="flex gap-2">
                     <button
                        onClick={() => handleApproval(rider)}
                        className="btn btn-success btn-sm"
                    >
                        <FaUserCheck />
                    </button>
                       <button
                        onClick={() => handleRejection(rider)}
                        className="btn btn-warning btn-sm"
                    >
                        <IoPersonRemove />
                    </button>

                    <button
                        onClick={() => handleDelete(rider)}
                        className="btn btn-error btn-sm"
                    >
                        <FaTrash />
                    </button>
                   </td>
                       
                </tr>)
                }
                
               
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ApproveRiders;