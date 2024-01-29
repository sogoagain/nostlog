"use client";

import { useTranslations } from "next-intl";

import useStore from "@/stores";

export default function IndexPage() {
  const t = useTranslations("IndexPage");

  const bears = useStore.use.bears();
  const fishes = useStore.use.fishes();
  const addBear = useStore.use.addBear();
  const addFish = useStore.use.addFish();
  const eatFish = useStore.use.eatFish();

  return (
    <div>
      <h1>{t("greetings")}</h1>
      <h2>{t("warning")}</h2>
      <h2>
        {t("bearCount")}: {bears}
      </h2>
      <h2>
        {t("fishCount")}: {fishes}
      </h2>
      <button onClick={() => addBear()}>{t("addBearButton")}</button>
      <br />
      <button onClick={() => addFish()}>{t("addFishButton")}</button>
      <br />
      <button onClick={() => eatFish()}>{t("eatFishButton")}</button>
      <br />
    </div>
  );
}
