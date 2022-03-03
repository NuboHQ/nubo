import { Data } from '@nubo/data';
import nubo from 'nubo';
import { useEffect, useState } from 'react';
import styles from './index.module.css';

export function Index() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const connection = nubo.live.query({
      list: 'users',
      onUpdate: (data) => {
        setItems(data.items);
      },
    });

    return () => {
      connection.close();
    };
  }, [setItems]);

  return (
    <div className={styles.page}>
      {items.map((item) => (
        <Data key={item.id} value={item.name} />
      ))}
    </div>
  );
}

export default Index;
