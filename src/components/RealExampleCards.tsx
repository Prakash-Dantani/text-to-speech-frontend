import WareHouse from "../assets/images/warehouse-thumbnail.png";

const RealExampleCards = () => {
  const exampleList = [
    {
      image: WareHouse,
      title: "Adevertisement",
    },
    {
      image: WareHouse,
      title: "Adevertisement",
    },
    {
      image: WareHouse,
      title: "Adevertisement",
    },
    {
      image: WareHouse,
      title: "Adevertisement",
    },
    {
      image: WareHouse,
      title: "Adevertisement",
    },
    {
      image: WareHouse,
      title: "Adevertisement",
    },
  ];
  return (
    <div className="w-full grid grid-cols-3  gap-1.5 pt-8">
      {exampleList.map(({ image, title }, index) => (
        <div className="w-full pb-[10%]" key={index}>
          <div className="flex justify-center">
            <img
              src={image}
              alt={title}
              className="h-[80%] w-[80%] object-contain rounded-xl"
            />
          </div>
          <div className="flex pt-2 justify-between items-center px-[10%]">
            <h3 className="text-xl font-bold  text-left">{title}</h3>
            <h3 className="btn  bg-orange-500">{title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RealExampleCards;
