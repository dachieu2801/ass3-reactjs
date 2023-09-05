import Card from "../UI/Card";
import Banner from "../components/HomePage/Banner";
import ListItem from "../components/HomePage/ListItem";
import ListType from "../components/HomePage/ListProduct";
import OtherInfo from "../components/HomePage/OtherInfo";

function HomePage() {
  return (
    <Card>
      <Banner />
      <ListType />
      <ListItem />
      <OtherInfo />
    </Card>
  );
}

export default HomePage;
