import Link from "next/link";
import { Button } from "./ui/button";

const Error = ({ message }: { message: string }) => {
  return (
    <div className="h-[calc(100vh-82px)] container mx-auto flex flex-col justify-center items-center gap-5">
      {message}
      <Link href="/">
        <Button>Return to Home</Button>
      </Link>
    </div>
  );
};

export default Error;
