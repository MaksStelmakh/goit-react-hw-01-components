// import PropTypes from "prop-types";
import ListInfo from "./listInfo/ListInfo";
import { Section, Title } from "./Statistics.styled";

export default function Profile({ info }) {
  return (
    <Section>
      <Title>Upload stats</Title>
      <ListInfo data={info} />
    </Section>
  );
}
