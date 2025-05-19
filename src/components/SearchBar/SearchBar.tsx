import { FormEvent, useState } from 'react';
import styles from './SearchBar.module.css';
import toast from 'react-hot-toast';

const notify = () => toast.error('Please enter your request');

interface SearchBar {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBar) => {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!query.trim()) {
      notify();
      return;
    }

    onSearch(query.trim());
    setQuery('');
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          name='query'
          type='text'
          autoComplete='off'
          autoFocus
          placeholder='Search images and photos'
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
