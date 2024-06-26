"use client";

import { useRouter } from "next/navigation";
import SearchBar, { SearchForm } from "./SearchBar";

const GetStarted = () => {
  const router = useRouter();

  const handleSearchSubmit = (formData: SearchForm) => {
    router.push(`/search/${formData.searchQuery}`);
  };

  return (
    <section
      id="get_started"
      className="container mx-auto flex flex-col gap-20 mt-20"
    >
      <div className="bg-white rounded-xl shadow-md py-10 md:px-32 flex flex-col gap-5 text-center border">
        <h2 className="text-2xl md:text-4xl font-bold text-orange-500">
          What&apos;s on your mind?
        </h2>
        <p>
          {" "}
          Feel free to to express your cravings. We have a great selection of
          items in our menu as well as famous restaurants along with their
          specialties.
        </p>
        <SearchBar placeholder="Search by city" onSubmit={handleSearchSubmit} />
      </div>
    </section>
  );
};

export default GetStarted;
