import Summary from "../../components/pages/dashboard/Summary/Summary";
import TotalSpent from "../../components/pages/dashboard/TotalSpent/TotalSpent";
import Revenue from "../../components/pages/dashboard/Revenue/Revenue";
import CheckTable from "../../components/pages/dashboard/CheckTable/CheckTable";
import DailyTraffic from "../../components/pages/dashboard/DailyTraffic/DailyTraffic";
import YourPieChart from "../../components/pages/dashboard/YourPieChart/YourPieChart";
import ComplexTable from "../../components/pages/dashboard/ComplexTable/ComplexTable";
import Calendar from "../../components/pages/dashboard/CustomCalendar/CustomCalendar";
import TeamMember from "../../components/pages/dashboard/TeamMember/TeamMember";
import { DashboardScreenWrap } from "./DashboardScreen.styles";

const DashboardScreen = () => {
  return (
    <DashboardScreenWrap>
      <Summary />
      <div className="dboard-blocks-row first-row">
        <TotalSpent />
        <Revenue />
      </div>
      <div className="dboard-blocks-row second-row">
        <CheckTable />
        <DailyTraffic />
        <YourPieChart />
        <ComplexTable />
        <Calendar />
        <TeamMember />
      </div>
    </DashboardScreenWrap>
  );
};

export default DashboardScreen;
