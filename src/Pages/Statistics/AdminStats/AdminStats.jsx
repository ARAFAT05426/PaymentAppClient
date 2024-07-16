import { FaUsers, FaUserTag } from "react-icons/fa";
import StatCard from "../../../Components/StatCard/StatCard";
import { TbReportMoney } from "react-icons/tb";

const AdminStats = () => {
  return (
    <div>
      <div className="flex gap-3 w-full">
        <StatCard
          icon={FaUsers}
          title="Total Users"
          value="24"
          className={"from-blue-400 to-blue-700"}
        />
        <StatCard
          icon={FaUserTag}
          title="Total Agents"
          value="11"
          className={"from-blue-400 to-blue-700"}
        />
        <StatCard
          icon={TbReportMoney}
          title="Total Transictions"
          value="$11000"
          className={"from-blue-400 to-blue-700"}
        />
      </div>
    </div>
  );
};

export default AdminStats;
