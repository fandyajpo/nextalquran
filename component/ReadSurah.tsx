import { ISurah } from "../lib/Interfaces";

const ReadSurah = (props: ISurah) => {
  return (
    <div className="p-4">
      <p className="text-gray-700 text-3xl">{props.transliteration}</p>

      <div className="space-y-8">
        {props.verses.map((s, number) => {
          return (
            <>
              <p className="meh text-3xl break-word font-bold">{s.text}</p>
              <p className="meh text-md break-word font-bold">
                {s.translation}
              </p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ReadSurah;
