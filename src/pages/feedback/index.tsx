import "./feedback.scss";
import React, { FunctionComponent, useState } from "react";
import { useSelector } from "react-redux";
import { IFeedback } from "../../interfaces";
import FeedbackForm from "./feedback-form";
import Notice from "../../components/notice";
import FeedbackCard from "./feedback-card";
import { useStoreDispatch } from "../../store";
import { addNewFeedback } from "../../store/feedback";
import { RootState } from "../../types";

const Feedback: FunctionComponent = () => {
  const dispatch = useStoreDispatch();
  const [isNoticeShow, setIsNoticeShow] = useState<boolean>(false);

  const { list } = useSelector((state: RootState) => state.feedback);

  const addFeedback = (formData: IFeedback) => {
    dispatch(addNewFeedback(formData));
    setIsNoticeShow(true);
    setTimeout(() => setIsNoticeShow(false), 2000);
  };

  const createCard = () => {
    const cards = list.map((item: IFeedback) => (
      <FeedbackCard key={item.username} feedback={item} />
    ));
    return <ul className="feedback__list">{cards}</ul>;
  };

  return (
    <>
      <section className="feedback">
        <span className="feedback__img" />
        <div className="wrapper feedback__wrapper">
          <h2 className="feedback__header">Feedback</h2>
          <FeedbackForm addFeedback={(formData: IFeedback) => addFeedback(formData)} />
          {list ? createCard() : null}
        </div>
      </section>
      {isNoticeShow ? <Notice /> : null}
    </>
  );
};

export default Feedback;
