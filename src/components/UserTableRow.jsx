import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserTableRow({ user, i }) {
  const navigate = useNavigate();

  return (
    <tr className="hover">
      <th className="text-center">{i + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={user.imageUrl}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{user.fullName}</div>
            <div className="badge badge-ghost badge-sm">{user.occupation}</div>
          </div>
        </div>
      </td>
      <td>{user.totalPurchase}</td>
      <td>{user.orderCount}</td>
      <td>{user.contactNumber}</td>
      <th>
        <button
          onClick={() => navigate(`/user/${user._id}`)}
          className="btn btn-info btn-xs md:btn-sm"
        >
          See Details
        </button>
      </th>
    </tr>
  );
}
