import styles from "../Style/CountryItem.module.css";

type Country = { country: { "emoji": string, "country": string } };

function CountryItem({ country }:Country) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
