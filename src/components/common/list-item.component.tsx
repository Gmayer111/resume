import Link from "next/link";

export type TLisItemProps = {
  mainTitle: string;
  subTitle: string;
  link: string;
  content: string;
  startDate: string;
  endDate: string;
};

function ListItem({
  mainTitle,
  subTitle,
  content,
  link,
  startDate,
  endDate,
}: TLisItemProps) {
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
