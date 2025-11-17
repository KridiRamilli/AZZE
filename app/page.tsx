import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center  font-sans dark:bg-black'>
      <main className='flex min-h-screen w-full max-w-full flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start'>
        <Navbar />
        <Hero />
      </main>
    </div>
  );
}
