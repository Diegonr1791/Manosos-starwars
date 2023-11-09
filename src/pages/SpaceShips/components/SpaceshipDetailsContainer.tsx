import LabelDescription from "@/components/labelDescription/LabelDescription";
import spaceshipCardDetails from "@/assets/images/spaceshipCardDetails.png";
import { SpaceshipResult } from "@/api/spaceships/interfaces";

const SpaceshipDetailsContainer = ({
  spaceshipDetails,
}: {
  spaceshipDetails: SpaceshipResult;
}) => {
  return (
    <div className="flex w-full max-h-[820px] text-xs">
      <div className="flex w-full h-full bg-black p-[5px]">
        <div className=" w-full h-full flex-row bg-slate-200 rounded-lg px-2 sm:px-8 pb-14 pt-6 items-center md:items-baseline">
          <div className="flex justify-end">
            <p className=" text-black text-sm sm:text-md sm:text-2xl md:text-3xl  font-semibold">
              Detalles de la nave
            </p>
          </div>
          <div className="flex w-full h-full flex-col">
            <div className="flex w-full bg-black p-[5px] pr-0 rounded-t-lg">
              <div className="flex w-full h-full bg-slate-200 rounded-l-lg rounded-tr-lg items-center p-1">
                <p className="w-full text-black text-lg sm:text-3xl font-semibold">
                  {spaceshipDetails.name}
                </p>
              </div>
            </div>
            <div className="flex w-full  h-full md:h-5/6  flex-col md:flex-row bg-black pl-[5px] md:gap-[5px] rounded-b-lg md:rounded-none">
              <div className=" w-full h-2/4 md:w-5/6 md:h-full pb-[5px] rounded-r-lg">
                <div className="h-full rounded-b-lg">
                  <img
                    src={spaceshipCardDetails}
                    className="w-full h-full rounded-r-lg"
                  />
                </div>
              </div>
              <div className="bg-slate-200 w-full  md:w-2/6 h-full rounded-l-lg">
                <div className="flex w-full h-full flex-col pb-[5px] bg-black rounded-bl-lg md:rounded-none">
                  <div className="flex w-full h-14 bg-slate-200 rounded-tl-lg place-content-center pt-2">
                    <div className="flex w-3/5 sm:w-2/5 md:w-3/4 bg-black rounded-3xl  items-center justify-center md:px-[5px] py-[3px]">
                      <div className="flex w-full h-full  rounded-3xl bg-white  items-center justify-center">
                        <p className="text-lg md:text-2xl text-black m-0 sm:p-1">
                          {spaceshipDetails.crew}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-200 w-full h-full text-2xl text-black p-1 md:pt-3 space-y-4 rounded-bl-lg">
                    <div className="flex h-auto flex-wrap gap-4">
                      <LabelDescription
                        labelName="Modelo"
                        labelDescription={spaceshipDetails.model}
                      />
                      <LabelDescription
                        labelName="Longitud"
                        labelDescription={spaceshipDetails.length}
                      />
                      <LabelDescription
                        labelName="Velocidad atmosférica máxima"
                        labelDescription={
                          spaceshipDetails.max_atmosphering_speed
                        }
                      />
                      <LabelDescription
                        labelName="Cantidad de pasajeros"
                        labelDescription={spaceshipDetails.passengers}
                      />
                      <LabelDescription
                        labelName="Capacidad de carga"
                        labelDescription={spaceshipDetails.cargo_capacity}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex bg-black  h-1/6 md:h-2/6 rounded-b-lg p-[5px] pt-0">
              <div className="bg-slate-200 w-full h-full rounded-b-lg">
                <p className="text-black text-2xl font-semibold text-center">
                  Clase de nave
                </p>
                <div>
                  <p className="text-black text-lg font-semibold text-center">
                    {spaceshipDetails.starship_class}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceshipDetailsContainer;
