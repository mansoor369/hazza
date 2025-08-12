import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans  flex justify-center items-center mt-48">
      <iframe title="Seats Analysis" width="1240" height="600.25" src="https://app.powerbi.com/reportEmbed?reportId=7835cfe6-8897-4b0b-8b3b-62b2254a1264&autoAuth=true&ctid=484eedba-e5ac-4bd5-85c5-fc4c8ba6efb9" frameborder="0" allowFullScreen="true"></iframe>
    </div>
  );
}
