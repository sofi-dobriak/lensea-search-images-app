import { FormEvent, useState } from 'react';
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
      return notify();
    }

    onSearch(query.trim());
    setQuery('');
  };

  return (
    <header className='mt-5 mb-5'>
      <form onSubmit={handleSubmit} className='flex justify-center gap-[10px]'>
        <input
          className='font-[inherit] text-base border border-solid border-[var(--input-border-color)] text-[var(--input-text-color)] rounded-md py-2.5 px-5 w-[100%] max-w-[324px] h-auto bg-transparent duration-250 ease placeholder:font-[inherit] placeholder:text-base hover:outlibe-none hover:border-[var(--hover-border-color)] focus:outline-none focus:border-[var(--hover-border-color)]'
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
