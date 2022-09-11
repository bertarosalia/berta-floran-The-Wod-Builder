import React, { SyntheticEvent, useState } from "react";
import useExercises from "../../hooks/useExercises";
import Button from "../Button/Button";
import CreateExerciseFormStyle from "./CreateExerciseFormStyle";

const CreateExerciseForm = (): JSX.Element => {
  // let newFormData = new FormData();

  const initialState = {
    name: "",
    body: "",
    description: "",
    image: "",
  };

  const { createExercise } = useExercises();

  const [formData, setFormData] = useState(initialState);

  const onChangeData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const onSubmitData = async (event: SyntheticEvent) => {
    event.preventDefault();
    await createExercise({
      name: formData.name,
      body: formData.body,
      description: formData.description,
      image: formData.image,
      id: "",
    });
    setFormData(initialState);
  };

  // const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   newFormData.append("image", event.target.files![0]);
  //   setFormData({ ...formData, image: event.target.value });
  // };

  return (
    <>
      <CreateExerciseFormStyle>
        <div className="create-form__container">
          <h1 className="create-form__title">Let´s train!</h1>
          <form onSubmit={onSubmitData}>
            <div className="create-form__label--container">
              <label htmlFor="name" className="create-form__label">
                Name
              </label>
              <input
                className="create-form__input"
                type="text"
                id="name"
                required
                autoComplete="off"
                value={formData.name}
                onChange={onChangeData}
              />
            </div>
            <div className="create-form__label--container">
              <label htmlFor="body" className="create-form__label">
                Body
              </label>
              <input
                className="create-form__input"
                type="text"
                id="body"
                required
                autoComplete="off"
                value={formData.body}
                onChange={onChangeData}
              />
            </div>
            <div className="create-form__label--container">
              <label htmlFor="description" className="create-form__label">
                Description
              </label>
              <input
                className="create-form__input"
                type="text"
                id="description"
                minLength={30}
                required
                autoComplete="off"
                value={formData.description}
                onChange={onChangeData}
              />
            </div>
            <div className="create-form__label--container">
              <label htmlFor="exerciseimage" className="create-form__label">
                Image
              </label>
              <input
                className="create-form__input"
                type="url"
                pattern=".+\.com"
                id="exerciseimage"
                placeholder="url image"
                autoComplete="off"
                value={formData.image}
                onChange={onChangeData}
              />
            </div>
            <div className="create-form__button">
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