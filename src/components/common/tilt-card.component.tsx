import Image from "next/image";
import Link from "next/link";
import Restaurant from "../../../public/Images/restaurant.png";

const TiltCard = () => {
  return (
    <div className="tiltCardContainer">
      <Link href="#">
        <Image src={Restaurant} alt="Image de test" />
      </Link>
    </div>
  );
};

export default TiltCard;
