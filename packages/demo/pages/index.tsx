import { Data } from '@nubo/data';
import nubo from 'nubo';
import { useEffect, useState } from 'react';
import styles from './index.module.css';

export function Index() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const subscription = nubo.lists.subscribe({
      list: 'companies',
      options: {
        orderBy: {
          created: 'desc',
        },
      },
      onUpdate: (data) => {
        setItems(data.items);
      },
    });

    return () => {
      subscription.close();
    };
  }, [setItems]);

  return (
    <div className={styles.page}>
      {items.map((item, itemIndex) => (
        <Data key={item.id} value={`${itemIndex + 1} - ${item.name}`} />
      ))}
    </div>
  );
}

export default Index;
