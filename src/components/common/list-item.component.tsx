import Link from "next/link";
import { TItems } from "types/resume";

function ListItem({
  mainTitle,
  subTitle,
  content,
  link,
  startDate,
  endDate,
}: TItems) {
  return (
    <li className="listItemContainer">
      <span className="lineLeft"></span>
      <div>
        <h4>{mainTitle}</h4>
        <h5>
          <Link target="_blank" rel="noopener noreferrer" href={link}>
            {subTitle}
          </Link>
        </h5>
        <p>{content}</p>
      </div>
      <span className="year">
        <span>{endDate}</span>
        <span>{startDate}</span>
      </span>
    </li>
  );
}

export default ListItem;
