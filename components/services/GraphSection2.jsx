import ReusableComp1 from "./ReusableComp1";
import FeatureGrid from "./FeatureGrid";

export default function GraphSection2({ featureData, textData ,iconsColor}) {
  return (
    <section className="mx-auto max-w-screen-xl">
      <div className="p-4 py-6 lg:px-10 lg:py-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
        <FeatureGrid features={featureData}  iconsColor={iconsColor} />

        <div className="bg-white">
          <ReusableComp1
            title={textData.title}
            description={textData.description}
            items={textData.items}
            footer={textData.footer}
            iconsColor={iconsColor}
          />
        </div>
      </div>
    </section>
  );
}
