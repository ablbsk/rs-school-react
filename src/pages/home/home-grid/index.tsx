import "./home-grid.scss";
import React, { FunctionComponent, useEffect, useState } from "react";
import { HomeGridType } from "../../../types";
import { ICharacterWithEpisodes, IEpisode } from "../../../interfaces";
import CharacterCard from "../character-card";
import CharacterModal from "../character-modal";
import Shadow from "../../../components/shadow";
import { getCharacterById, getEpisodeById } from "../../../services";
import Spinner from "../../../components/spinner";

const HomeGrid: FunctionComponent<HomeGridType> = ({ elements }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [id, setId] = useState<number>(1);
  const [character, setCharacter] = useState<ICharacterWithEpisodes | null>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect((): void => {
    (async () => {
      const getIndex = (episode: string): number => {
        return parseInt(episode.slice(episode.lastIndexOf("/") + 1), 10);
      };

      const filterData = (obj: IEpisode) => {
        return { episode: obj.episode, name: obj.name, airDate: obj.air_date };
      };

      setLoading(true);

      const characterData = await getCharacterById(id);
      const firstSeenIn = await getEpisodeById(getIndex(characterData.episode[0]));

      if (characterData.episode.length > 1) {
        const lastSeenInId = getIndex(characterData.episode[characterData.episode.length - 1]);
        const lastSeenIn = await getEpisodeById(lastSeenInId);
        setCharacter({
          character: characterData,
          episodes: [filterData(firstSeenIn), filterData(lastSeenIn)],
        });
      } else {
        setCharacter({
          character: characterData,
          episodes: [filterData(firstSeenIn)],
        });
      }

      setLoading(false);
    })();
  }, [id]);

  // useEffect((): void => {
  //   if (!showModal) {
  //     setCharacter(null);
  //   }
  // }, [showModal]);

  const cardsElement = elements.map((item) => (
    <CharacterCard
      character={item}
      key={`${item.name}-${item.id}`}
      openModal={(isShow, characterId) => {
        setId(characterId);
        setShowModal(isShow);
      }}
    />
  ));

  const spinnerElement = (
    <>
      <Spinner isAbsolute />
      <Shadow closeModal={() => setShowModal(false)} />
    </>
  );

  const modalElement = character && (
    <>
      <CharacterModal characterWithEpisodes={character} closeModal={() => setShowModal(false)} />
      <Shadow closeModal={() => setShowModal(false)} />
    </>
  );

  return (
    <>
      <section id="homeGrid" className="home-grid">
        <div className="wrapper home-grid__wrapper">
          {cardsElement.length ? cardsElement : <h2 className="home-grid__header">No results</h2>}
        </div>
      </section>
      {showModal && (loading ? spinnerElement : modalElement)}
    </>
  );
};

export default HomeGrid;
