import ReusableComp1 from "./ReusableComp1";
import DashboardGrid from "./DashboardGrid";

export default function GraphSection1({ title, description, items, footer ,iconsColor}) {
  return (
    <section className="mx-auto max-w-screen-xl">
      <div className="p-4 py-6 lg:px-10 lg:py-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
        <div className="bg-white">
          <ReusableComp1
            title={title}
            description={description}
            items={items}
            footer={footer}
          />
        </div>

        <DashboardGrid iconsColor={iconsColor} />
      </div>
    </section>
  );
}
