const PrivacyPage = () => {
  return (
    <div className="container mx-auto p-8 flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-center text-orange-500 mb-20">
        Privacy Policy
      </h1>
      <p className="text-xl md:text-2xl text-orange-300 mb-10">
        At Foodie Delights, we take your privacy seriously. This policy outlines
        how we collect, use, and protect your personal information when you use
        our food ordering services.
      </p>
      <h2 className="text-3xl text-orange-500 font-semibold mb-6">
        Information We Collect
      </h2>
      <p className="text-xl md:text-2xl text-orange-300 mb-10">
        We collect your name, contact details, delivery address, and payment
        information to process your orders. Rest assured, your data is encrypted
        and securely stored.
      </p>
      <h2 className="text-3xl text-orange-500 font-semibold mb-6">
        How We Use Your Data
      </h2>
      <p className="text-xl md:text-2xl text-orange-300 mb-10">
        We use your information solely for order processing, delivery, and
        customer support. We never share or sell your data to third parties.
      </p>
      <h2 className="text-3xl text-orange-500 font-semibold mb-6">Cookies</h2>
      <p className="text-xl md:text-2xl text-orange-300 mb-10">
        We use cookies to enhance your browsing experience. You can adjust your
        browser settings to manage cookies.
      </p>
      <h2 className="text-3xl text-orange-500 font-semibold mb-6">
        Security Measures
      </h2>
      <p className="text-xl md:text-2xl text-orange-300 mb-10">
        Our servers are protected with industry-standard security protocols.
        Your data is safe with us.
      </p>
      <p className="text-orange-300">Last updated: June 2024</p>
    </div>
  );
};

export default PrivacyPage;
