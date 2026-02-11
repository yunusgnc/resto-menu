import MenuItem from './MenuItem';

export default function Category({ category }) {
  return (
    <div id={category.id} className="category">
      <div className="category-header">
        <div className="category-accent-line" />
        <h2>{category.title}</h2>
        <div className="category-item-count">
          {category.subcategories
            ? category.subcategories.reduce((sum, sub) => sum + (sub.items?.length || 0), 0)
            : (category.items?.length || 0)
          } ürün
        </div>
      </div>

      {category.subcategories ? (
        category.subcategories.map((subcategory, index) => (
          <div key={index} className="subcategory">
            <div className="subcategory-header">
              <span className="subcategory-dot" />
              <h3 className="subcategory-title">{subcategory.name}</h3>
            </div>
            <div className="items">
              {subcategory.items && subcategory.items.map((item, itemIndex) => (
                <MenuItem key={itemIndex} item={item} />
              ))}
            </div>
          </div>
        ))
      ) : (
        category.items && category.items.length > 0 && (
          <div className="items">
            {category.items.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </div>
        )
      )}
    </div>
  );
}
