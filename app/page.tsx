import Document from "@/components/layout/document";
import Hero from "@/components/layout/hero";
import Library from "@/components/layout/library";
import Location from "@/components/layout/location";
import Register from "@/components/layout/register";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-15">
      <Hero />
      <Document />
      <Register />
      <Library />
      <Location />
    </div>
  );
}
