
import Header from "../components/Header"; // adjust path if needed
const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-invenza-mainAccent">
      <Header />
      <main className="pt-16 p-8">
        <h1 className="text-2xl text-invenza-heading font-semibold mb-4">
          Welcome to the Invenza! Logistics Where Data Drives Delivery.
        </h1>
      </main>
    </div>
  );
};

export default AboutUs;