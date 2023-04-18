import "./home-grid.scss";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HomeGridType, RootState } from "../../../types";
import CharacterCard from "../character-card";
import CharacterModal from "../character-modal";
import Shadow from "../../../components/shadow";
import Spinner from "../../../components/spinner";
import { useStoreDispatch } from "../../../store";
import { fetchCharacterWithEpisodes } from "../../../services";
import { setCharacterToModal } from "../../../store/main";

const HomeGrid: FunctionComponent<HomeGridType> = ({ elements }) => {
  const dispatch = useStoreDispatch();

  const { character, isLoading } = useSelector((state: RootState) => state.main.modal);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [id, setId] = useState<number | null>(null);

  useEffect((): void => {
    (async () => {
      if (id) {
        setShowModal(true);
        dispatch(setCharacterToModal());
        dispatch(fetchCharacterWithEpisodes(id));
      }
    })();
  }, [dispatch, id]);

  const cardsElement = elements.map((item) => (
    <CharacterCard
      character={item}
      key={`${item.name}-${item.id}`}
      openModal={(characterId) => setId(characterId)}
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
      {showModal && (isLoading ? spinnerElement : modalElement)}
    </>
  );
};

export default HomeGrid;
