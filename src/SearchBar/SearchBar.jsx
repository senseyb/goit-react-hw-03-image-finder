import { Component } from 'react';

import styles from './SearchBar.module.css';

export default class SearchBar extends Component {
  state = {
    query: '',
  };

  onSubmitClick = e => {
    e.preventDefault();
    const { query } = this.state;
    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  onChangeQuery = e => {
    const { value } = e.currentTarget;
    this.setState({ query: value });
  };
  render() {
    const { query } = this.state;
    return (
      <header className={styles.Searchbar}>
        <form className={styles.Form} onSubmit={this.onSubmitClick}>
          <button type="submit" className={styles.button}>
            <span className={styles.button__label}>Search</span>
          </button>

          <input
            className={styles.input}
            onChange={this.onChangeQuery}
            type="text"
            value={query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
