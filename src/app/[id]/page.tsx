import { getSurahById } from "../../../lib/Arango";
import { IParams, ISurah } from "../../../lib/Interfaces";
import Screen from "../../../component/Screen";
import { notFound } from "next/navigation";
import ReadSurah from "../../../component/ReadSurah";
import { Suspense } from "react";
export default async function Surah(props: IParams<{ id: number }>) {
  // @ts-ignore
  if (parseInt(props?.params?.id) > 114) return notFound();

  // @ts-ignore
  const surah: ISurah = await getSurahById(parseInt(props?.params?.id));

  if (!surah) return notFound();

  return (
    <Screen>
      <Suspense fallback={<p>Loading...</p>}>
        <ReadSurah {...surah} />
      </Suspense>
    </Screen>
  );
}
