import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => {
  return (
    <main>
      {data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`} passHref>
          <Image alt={ev.title} width={200} height={100} src={ev.image} />
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
        </Link>
      ))}
    </main>
  );
};
