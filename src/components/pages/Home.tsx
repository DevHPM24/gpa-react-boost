import ListGroup from "../components/ListGroup";
import Alert from "../components/Alert";
import Button from "../components/Button";

import { useState } from "react";

const Home = () => {
  const [alertVisible, setVisibility] = useState(false);

  var places = [
    "Saint Louis",
    "Melbourne",
    "Los Angeles",
    "San Francisco",
    "Devil's Castle",
    "British Columbia",
  ];

  return (
    <div className="container-fluid mt-3">
      <div className="card">
        <div className="card-header">
          <h3>List of Places</h3>
        </div>
        <div className="card-body">
          {alertVisible && (
            <Alert onClose={() => setVisibility(false)}>
              <b>Hello World!</b>
              <i> Welcome to my website.</i>
            </Alert>
          )}
          <ListGroup
            items={places}
            onSelectItem={(item: string) => {
              console.log(item);
            }}
          />
          <Button
            onClick={() => {
              if (alertVisible) setVisibility(false);
              else setVisibility(true);
              console.log("Clicked");
            }}
          >
            Click Me!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
