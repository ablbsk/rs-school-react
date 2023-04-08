import "./home-grid.scss";
import React, { FunctionComponent, useEffect, useState } from "react";
import { HomeGridType } from "../../../types";
import { ICharacterWithEpisodes } from "../../../interfaces";
import CharacterCard from "../character-card";
import CharacterModal from "../character-modal";
import Shadow from "../../../components/shadow";
import { getCharacterById, getEpisodeById } from "../../../services";

const HomeGrid: FunctionComponent<HomeGridType> = ({ elements }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [id, setId] = useState<number | undefined>();
  const [character, setCharacter] = useState<ICharacterWithEpisodes | undefined>();

  useEffect((): void => {
    // (async () => {
    //   if (id) {
    //     const data = await getCharactersById(id);
    //     setCharacter(data);
    //   }
    // })();

    (async () => {
      if (id) {
        const characterData = await getCharacterById(id);
        const firstEpisode = characterData.episode[0];
        const firstSeenInId = parseInt(firstEpisode.slice(firstEpisode.lastIndexOf("/") + 1), 10);

        const firstSeenIn = await getEpisodeById(firstSeenInId);

        if (characterData.episode.length > 1) {
          const lastEpisode = characterData.episode[characterData.episode.length - 1];
          const lastSeenInId = parseInt(lastEpisode.slice(lastEpisode.lastIndexOf("/") + 1), 10);
          const lastSeenIn = await getEpisodeById(lastSeenInId);
          setCharacter({
            character: characterData,
            episodes: [
              {
                episode: firstSeenIn.episode,
                name: firstSeenIn.name,
                airDate: firstSeenIn.air_date,
              },
              { episode: lastSeenIn.episode, name: lastSeenIn.name, airDate: lastSeenIn.air_date },
            ],
          });
        } else {
          setCharacter({
            character: characterData,
            episodes: [
              {
                episode: firstSeenIn.episode,
                name: firstSeenIn.name,
                airDate: firstSeenIn.air_date,
              },
            ],
          });
        }
      }
    })();
  }, [id]);

  const cards = elements.map((item) => (
    <CharacterCard
      character={item}
      key={`${item.name}-${item.id}`}
      openModal={(isShow, characterId) => {
        setShowModal(isShow);
        setId(characterId);
      }}
    />
  ));

  return (
    <>
      <section id="homeGrid" className="home-grid">
        <div className="wrapper home-grid__wrapper">
          {cards.length ? cards : <h2 className="home-grid__header">No results</h2>}
        </div>
      </section>
      {showModal && character && (
        <>
          <CharacterModal
            characterWithEpisodes={character}
            closeModal={() => setShowModal(false)}
          />
          <Shadow closeModal={() => setShowModal(false)} />
        </>
      )}
    </>
  );
};

export default HomeGrid;
