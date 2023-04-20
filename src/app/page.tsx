import { listSurah } from "../../lib/Arango";
import { IListSurah } from "../../lib/Interfaces";
import Card from "../../component/Card";
import Screen from "../../component/Screen";
export default async function Home() {
  const surah: IListSurah[] = await listSurah();

  return (
    <Screen>
      <div className="grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 grid gap-4 p-4 md:p-0">
        {surah.map((letter: IListSurah) => {
          return <Card {...letter} key={letter.id} />;
        })}
      </div>
    </Screen>
  );
}
