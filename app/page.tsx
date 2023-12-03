import Image from "next/image";
import Link from "next/link";
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
          <h1 className="font-bold text-2xl">
            <Link
              href="/protected"
              prefetch={false}
              className="underline hover:text-stone-200 transition-all"
            >
              Todolist
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
