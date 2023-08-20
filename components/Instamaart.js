import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div style={{ margin: "20px", border: "2px solid black", padding: "10px" }}>
      <h1>{title}</h1>
      {isVisible && <p1>{description}</p1>}
      <div>
        {isVisible ? (
          <button
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Hide
          </button>
        ) : (
          <button
            onClick={() => {
              setIsVisible(true);
            }}
          >
            show
          </button>
        )}
      </div>
    </div>
  );
};

const Instamaart = () => {
  const [sectionConfig, setSectionConfig] = useState({
    showAbout: false,
    showTeam: false,
    showCareers: false,
  });
  return (
    <div>
      <Section
        title={"about"}
        description={
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
        isVisible={sectionConfig.showAbout}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: true,
            showTeam: false,
            showCareers: false,
          })
        }
      />
      <Section
        title={"team"}
        description={
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
        isVisible={sectionConfig.showTeam}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: false,
            showTeam: true,
            showCareers: false,
          })
        }
      />
      <Section
        title={"careers"}
        description={
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
        isVisible={sectionConfig.showCareers}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: false,
            showTeam: false,
            showCareers: true,
          })
        }
      />
    </div>
  );
};
export default Instamaart;
