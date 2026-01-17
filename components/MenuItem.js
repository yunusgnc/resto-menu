export default function MenuItem({ item }) {
  return (
    <div className="item">
      <img 
        src={item.image} 
        alt={item.alt} 
        loading="lazy"
      />
      <div className="content">
        <h3>{item.name}</h3>
      </div>
    </div>
  );
}
