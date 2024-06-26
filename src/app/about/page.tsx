// pages/about.js

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center text-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-10/12">
        <h1 className="text-5xl text-orange-600 font-semibold mb-4">About Us</h1>
        <p className="text-orange-400 text-xl">
          Welcome to our food ordering platform! We are passionate about
          bringing delicious meals right to your doorstep. Our team of chefs and
          food enthusiasts work tirelessly to curate a diverse menu that caters
          to all tastes and preferences.
        </p>
        <p className="mt-4 text-orange-400 text-xl">
          Whether you're craving comfort food, exotic flavors, or healthy
          options, we've got you covered. Explore our menu, place your order,
          and let us take care of the rest!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
