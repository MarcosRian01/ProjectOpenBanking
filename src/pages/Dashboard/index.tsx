import ContentDashboard from "../../components/ContentDashboard";
import Navbar from "../../components/Navbar";

export default function Dashboard(){
  
  return (
      <Navbar children={<ContentDashboard />} />
  )
}