import PropTypes from "prop-types";
import ListInfo from "./listInfo/ListInfo";
import { Section, Title } from "./Statistics.styled";

export default function Statistics({ info }) {
  return (
    <Section>
      <Title>Upload stats</Title>
      <ListInfo data={info} />
    </Section>
  );
}

Statistics.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
