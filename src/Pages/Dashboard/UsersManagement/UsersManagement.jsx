import { useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaUserShield } from 'react-icons/fa6';
import { FiShieldOff } from 'react-icons/fi';
import Swal from 'sweetalert2';

const UsersManagement = () => {
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();
    const  {refetch, data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
         const res = await axiosSecure.get(`/users`);
         return res.data;
        }
    })

     const handleMakeAdmin = user => {
        const roleInfo = { role: 'admin' }
       
        axiosSecure.patch(`/users/${user._id}`, roleInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    queryClient.invalidateQueries(['users'])
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.displayName} marked as an Admin`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }


    const handleRemoveAdmin = user => {
        const roleInfo = { role: 'user' }
        
        axiosSecure.patch(`/users/${user._id}`, roleInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    queryClient.invalidateQueries(['users'])
                   refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.displayName} removed from Admin`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }
    return (
        <div>
            <h2 className="text-4xl">Users: {users.length}</h2>


        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
              <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>User</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin Action</th>
                            <th>Others Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <tr key={user._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={user.photoURL}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user.displayName}</div>
                                      
                                    </div>
                                </div>
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td>
                                {user.role}
                            </td>
                            <td>
                                {user.role === 'admin' ?
                                    <button
                                       onClick={()=>handleRemoveAdmin(user)}
                                        className='btn bg-red-300'>
                                        <FiShieldOff />
                                    </button> :
                                    <button
                                    onClick={()=>handleMakeAdmin(user)}
                                        className='btn bg-green-400'>
                                        <FaUserShield></FaUserShield>
                                    </button>
                                }
                            </td>
                            <th>
                                Actions
                            </th>
                        </tr>)}



                    </tbody>
             
            </table>
            </div>
        </div>
    );
};

export default UsersManagement;