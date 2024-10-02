import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <h2>
      Welcome here
      <Button>Hero can talk</Button>
      <UserButton/>
     </h2>
    </div>
  )
}
