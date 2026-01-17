import MenuItem from './MenuItem';

export default function Category({ category }) {
  return (
    <div id={category.id} className="category">
      <h2>{category.title}</h2>
      
      {category.subcategories ? (
        category.subcategories.map((subcategory, index) => (
          <div key={index}>
            <h3 className="subcategory-title">{subcategory.name}</h3>
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
