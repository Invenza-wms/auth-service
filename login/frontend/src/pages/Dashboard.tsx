
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl text-invenza-heading font-semibold mb-4">
          Welcome to the Invenza Dashboard!
        </h1>
      </main>
    </div>
  );
};

export default Dashboard;