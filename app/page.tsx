import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <Image
          width={512}
          height={512}
          src="/logo.png"
          alt="Platforms on Vercel"
          className="w-48 h-48"
        />
        <div className="text-center max-w-screen-sm mb-10">
          <h1 className="text-stone-200 font-bold text-2xl">
            <Link
              href="/protected"
              prefetch={false}
              className="text-stone-200 underline hover:text-stone-200 transition-all"
            >
              Todolist
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
