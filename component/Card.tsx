import { IListSurah } from "../lib/Interfaces";
import Link from "next/link";
const Card = (props: IListSurah) => {
  return (
    <Link href={`/${props.id}`} className="w-full h-44 bg-blue-500 rounded-md">
      {props.transliteration}
    </Link>
  );
};

export default Card;
