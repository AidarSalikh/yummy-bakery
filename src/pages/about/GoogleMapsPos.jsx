import React from "react";

function GoogleMapsPos() {
  return (
    <div className="map-responsive">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d134217.00198029858!2d48.985042682203684!3d55.869771541520905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415ead2b7caccd99%3A0x7fcb77b9b5ad8c65!2z0JrQsNC30LDQvdGMLCDQoNC10YHQvy4g0KLQsNGC0LDRgNGB0YLQsNC9!5e0!3m2!1sru!2sru!4v1707897860447!5m2!1sru!2sru"
        width="600"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Responsive Google Maps"
      ></iframe>
    </div>
  );
}

export default GoogleMapsPos;
