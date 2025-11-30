import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ViewImagesPage = () => {

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">PG Images</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800"
            className="rounded-xl shadow"
          />
          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"
            className="rounded-xl shadow"
          />
          <img
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800"
            className="rounded-xl shadow"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ViewImagesPage;
