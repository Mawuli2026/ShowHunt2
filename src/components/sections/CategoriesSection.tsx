"use client";

interface Category {
  id: string;
  name: string;
  icon?: string;
}

interface CategoriesSectionProps {
  categories: Category[];
}

export default function CategoriesSection({ categories }: CategoriesSectionProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-darkText mb-8 text-center">Top Categories</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all cursor-pointer text-center group"
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">{category.icon}</div>
              <h3 className="font-semibold text-darkText text-lg">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}