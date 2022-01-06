import PropTypes from "prop-types";
import { List, Items, Dives, Label } from "./ListInfo.styled";
import { getRandomHexColor } from "../../helpers/getRandomHexColor";

export default function ListInfo({ data }) {
  return (
    <List>
      {data.map(({ id, label, percentage }) => {
        return (
          <Items
            key={id}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <Dives>
              <Label>{label}</Label>
              <Label>{percentage}%</Label>
            </Dives>
          </Items>
        );
      })}
    </List>
  );
}

ListInfo.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
