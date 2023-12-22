import Image from "next/image";
import ImageUpload from "@/app/protected/components/ImageUpload";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <Image
          width={512}
          height={512}
          src="/love.svg"
          alt="Platforms on Vercel"
          className="w-48 h-48"
        />
        <div className="text-center max-w-screen-sm mb-10">
          <ImageUpload />
        </div>
      </div>
    </div>
  );
}
