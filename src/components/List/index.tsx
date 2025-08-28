import React, { JSX } from 'react';

type ListProps<T> = {
  data: T[];
  renderItem: (item: T) => JSX.Element;
};

const List = <T,>({ data, renderItem }: ListProps<T>) => {
  return (
    <div>
      {data.map((item, index) => (
        <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
      ))}
    </div>
  );
};

export default List;
