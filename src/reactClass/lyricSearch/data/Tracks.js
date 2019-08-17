import React from 'react';
import { Conusmer } from '../Context';
import Loading from '../components/Loding';
import Track from './Track';

const Tracks = () => {
  return (
    <Conusmer>
      {value => {
        const { heading, track_list } = value;
        if (track_list === undefined || track_list.length === 0) {
          return <Loading />;
        } else {
          return (
            <React.Fragment>
              <h3 className="text-center mb-4">{heading}</h3>
              <div className="row">
                {track_list.map(item => (
                  <Track key={item.track.track_id} item={item} />
                ))}
              </div>
            </React.Fragment>
          );
        }
      }}
    </Conusmer>
  );
};
export default Tracks;
