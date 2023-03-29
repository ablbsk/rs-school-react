import "./feedback.scss";
import React, { FunctionComponent, useEffect, useState } from "react";
import { IFeedback } from "../../interfaces";
import Form from "../../components/form";
import Notice from "../../components/notice";
import Item from "../../components/item";

const Feedback: FunctionComponent = () => {
  const [feedback, setFeedback] = useState<IFeedback[]>([]);
  const [isNoticeShow, setIsNoticeShow] = useState<boolean>(false);

  useEffect(() => {
    if (feedback.length !== 0) {
      setIsNoticeShow(true);
      setTimeout(() => setIsNoticeShow(false), 2000);
    }
  }, [feedback]);

  const addFeedback = (formData: IFeedback) => setFeedback([...feedback, formData]);

  const createCard = () => {
    const cards = feedback.map((item: IFeedback) => <Item key={item.username} feedback={item} />);
    return <ul className="feedback__list">{cards}</ul>;
  };

  return (
    <>
      <section className="feedback">
        <span className="feedback__img" />
        <div className="wrapper feedback__wrapper">
          <h2 className="feedback__header">Feedback</h2>
          <Form addFeedback={(formData: IFeedback) => addFeedback(formData)} />
          {feedback ? createCard() : null}
        </div>
      </section>
      {isNoticeShow ? <Notice /> : null}
    </>
  );
};

export default Feedback;
