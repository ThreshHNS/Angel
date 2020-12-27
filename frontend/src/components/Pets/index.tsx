import { FunctionComponent } from "react";
import { Spinner } from "components";
import { PetProp } from "types/store";
import { BACKEND_URL } from "settings";

import yellowpaws from "assets/icons/yellowpaws.png";
import bluepaws from "assets/icons/bluepaws.png";
import greenpaws from "assets/icons/greenpaws.png";

export interface PetsProps {
  pets: PetProp[];
  isLoading: boolean;
}

const Pets: FunctionComponent<PetsProps> = (props: PetsProps) => {
  const { pets, isLoading } = props;

  if (isLoading) {
    return (
      <div className="Pets">
        <Spinner size="large" />
      </div>
    );
  }

  return (
    <div className="Pets">
      <h3>Дом любимым</h3>
      <div className="Pets__header">
        <h1>
          Они нуждаются в Вашей <br />
          любви прямо сейчас
        </h1>
        <div className="Pets__paws">
          <img className="Pets__paws-item--blue" alt="Pet" src={bluepaws} />
          <img className="Pets__paws-item--green" alt="Pet" src={greenpaws} />
          <img className="Pets__paws-item--yellow" alt="Pet" src={yellowpaws} />
        </div>
      </div>

      <div className="Pets__content">
        {pets &&
          pets.length > 0 &&
          pets.map((pet) => (
            <div className="Pets__card">
              <img
                className="Pets__card-image"
                alt="Pet"
                src={`${BACKEND_URL}${pet.image}`}
              />
              <div className="Pets__card-name">{pet.name}</div>
              <div className="Pets__card-description">{`${pet.gender} / ${pet.age}`}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Pets;
