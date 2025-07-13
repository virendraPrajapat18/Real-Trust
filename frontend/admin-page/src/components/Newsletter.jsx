import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Newsletter= () => {
  const [subscribers, setSubscribers] = useState([]);

  const fetchSubscribers = async () => {
    try {
      const res = await axios.get("http://localhost:7000/api/newsletter/get");
      setSubscribers(res.data.data); 
    } catch (error) {
      console.error("Error fetching newsletter emails:", error);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        Newsletter Subscribers
      </h2>

      <div className="rounded-md border">
        <Table>
          {/* <TableCaption>All subscribed emails</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Date Subscribed</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscribers.length > 0 ? (
              subscribers.map((sub) => (
                <TableRow key={sub._id}>
                  <TableCell>{sub.email}</TableCell>
                  <TableCell>
                    {new Date(sub.createdAt).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={2}
                  className="text-center text-gray-500 py-6"
                >
                  No subscribers yet.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Newsletter;
