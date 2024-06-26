const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col gap-10 items-center justify-center">
      <p className="text-xl text-center text-orange-500">
        We always welcome your valuable opinion about our services. For any type of opinion that you think will be helpful for a better experience, you can contact us just by filling out the form below.
      </p>
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold text-orange-500 mb-4">Contact Us</h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-orange-500"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-orange-500"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-orange-500"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-500"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
