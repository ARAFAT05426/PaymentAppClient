import { MdOutlineEdit } from "react-icons/md";
import Table from "../../Components/Table/Table";
import Td from "../../Components/Table/Td/Td";
import Th from "../../Components/Table/Th/Th";
import Tr from "../../Components/Table/Tr/Tr";
import useRefetch from "../../Hooks/useRefetch/useRefetch";
import dateFormat from "dateformat";
import Modal from "react-modal";
import { useState } from "react";
import Updaterole from "./Updaterole/Updaterole";

const Users = () => {
  const { data } = useRefetch("/users");
  const [isOpen, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openModal = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  return (
    <>
      <div className="overflow-x-auto border max-w-[95%]">
        <Table className="bg-card/75 p-3 border">
          <thead>
            <Tr className="bg-card/75 font-extrabold">
              <Th className="font-extrabold">#</Th>
              <Th className="font-extrabold">Name</Th>
              <Th className="font-extrabold">Email</Th>
              <Th className="font-extrabold">Joined</Th>
              <Th className="font-extrabold">Actions</Th>
            </Tr>
          </thead>
          <tbody>
            {data?.users?.map((user, index) => (
              <Tr
                key={user._id}
                className="bg-card/25 hover:bg-white/75 transition-colors duration-200"
              >
                <Td className="font-medium">{index + 1}</Td>
                <Td className="font-medium">{user.name}</Td>
                <Td className="font-medium text-sm">{user.email}</Td>
                <Td className="font-medium text-sm">
                  {dateFormat(user.timestamp, "dddd, dS mmmm")}
                </Td>
                <Td className="font-medium text-primary/75 text-2xl text-center">
                  <MdOutlineEdit
                    onClick={() => openModal(user)}
                    className="cursor-pointer"
                  />
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Modal for editing user role */}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            width: "80%",
            maxWidth: "400px", // Adjust as per your design
            padding: "20px",
            borderRadius: "8px",
            border: "none",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        {selectedUser && <Updaterole user={selectedUser} />}
      </Modal>
    </>
  );
};

export default Users;
