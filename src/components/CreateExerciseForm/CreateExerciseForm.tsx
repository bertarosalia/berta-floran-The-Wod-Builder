import React, { SyntheticEvent, useState } from "react";
import useExercises from "../../hooks/useExercises/useExercises";
import Button from "../Button/Button";
import CreateExerciseFormStyle from "./CreateExerciseFormStyle";

const CreateExerciseForm = (): JSX.Element => {
  const initialState = {
    name: "",
    body: "",
    description: "",
    image: "",
  };

  const { createExercise } = useExercises();
  const { getAllExercises } = useExercises();

  const [newExercise, setFormData] = useState(initialState);

  const onChangeData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...newExercise, [event.target.id]: event.target.value });
  };

  const createNewExercise = async (event: SyntheticEvent) => {
    event.preventDefault();
    await createExercise(newExercise);
    setFormData(initialState);
    getAllExercises();
  };

  return (
    <>
      <CreateExerciseFormStyle>
        <div className="create-form__container">
          <h1 className="create-form__title">Let´s train!</h1>
          <form onSubmit={createNewExercise}>
            <div className="create-form__label--container">
              <input
                className="create-form__input"
                placeholder="Name"
                type="text"
                id="name"
                required
                autoComplete="off"
                value={newExercise.name}
                onChange={onChangeData}
              />
            </div>
            <div className="create-form__label--container">
              <input
                className="create-form__input"
                placeholder="Body"
                type="text"
                id="body"
                required
                autoComplete="off"
                value={newExercise.body}
                onChange={onChangeData}
              />
            </div>
            <div className="create-form__label--container">
              <input
                className="create-form__input"
                placeholder="Description"
                type="text"
                id="description"
                minLength={20}
                required
                autoComplete="off"
                value={newExercise.description}
                onChange={onChangeData}
              />
            </div>
            <div className="create-form__label--container">
              <input
                className="create-form__input"
                type="text"
                id="image"
                required
                placeholder="Insert an url"
                autoComplete="off"
                value={newExercise.image}
                onChange={onChangeData}
              />
            </div>
            <div className="create-form__button--container">
              <Button
                classNameButton="create-exercise__button"
                type="submit"
                buttonText="CREATE"
              />
            </div>
          </form>
        </div>
      </CreateExerciseFormStyle>
    </>
  );
};

export default CreateExerciseForm;
