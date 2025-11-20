import React from 'react';
import { Button, MapComp } from '../../components';
import { useGetLocation } from '../../components/GetLocation';

const MapPage = () => {
  const { location, fetchLocation } = useGetLocation();

  // console.log(location);
  return (
    <div className="p-2">
      {<MapComp location={location} />}

      <Button
        btnText="Get Location"
        variant="primary"
        className="mt-2 cursor-pointer clicked"
        onClick={() => fetchLocation()}
      />
    </div>
  );
};

export default MapPage;
