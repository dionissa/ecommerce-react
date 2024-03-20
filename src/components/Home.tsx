import Products from "./Cards";

const Home = () => {
  return (
    <div className="overflow-hidden flex items-center justify-center" style={{ background: '#edf2f7' }}>
      <main className="my-10 w-full">
        <div className="container mx-auto px-6 mt-20">
          <div className="mt-16 mb-36">
            <h3 className="text-gray-600 text-2xl font-medium mb-4">Produtos</h3>
            <Products />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
