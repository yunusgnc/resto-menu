export default function MenuItem({ item }) {
  const formatPrice = (price) => {
    if (!price && price !== 0) return null;
    return new Intl.NumberFormat('tr-TR').format(price);
  };

  return (
    <div className="item">
      <div className="item-img-wrapper">
        {/* eslint-disable-next-line @next/next/no-img-element -- Harici menü resimleri çok sayıda domain'den geliyor, next/image 50 domain sınırına takılıyor */}
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
        />
        <div className="item-overlay" />
        <div className="item-overlay-content">
          <h3 className="item-name">{item.name}</h3>
          {item.price != null && (
            <div className="item-price">
              <span className="item-price-amount">{formatPrice(item.price)}</span>
              <span className="item-price-currency">₺</span>
            </div>
          )}
        </div>
        {item.price != null && (
          <div className="price-badge">
            <span className="price-value">{formatPrice(item.price)}</span>
            <span className="price-currency">₺</span>
          </div>
        )}
      </div>
    </div>
  );
}
