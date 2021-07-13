import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Seo from "../components/seo";

// markup
const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
       <div className="container">
        <div className="row">
          <div className="col">
            <StaticImage
              alt="Marco, the only man on a team"
              src="../images/team/Marco/marco.jpg"
              layout="fixed"
              width={300}
              height={300}
            />
          </div>

          <div className="col">
            <StaticImage
              alt="Karo, CEO of mindchase"
              src="../images/team/Karo/karo.JPG"
              layout="fixed"
              width={300}
              height={300}
            />
          </div>

          <div className="col">
            <StaticImage
              alt="Phyllis"
              src="../images/team/Phyllis/phyllis.JPG"
              layout="fixed"
              width={300}
              height={400}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <StaticImage
              alt="Kathleen"
              src="../images/team/Kathleen/kathleen.JPEG"
              layout="fixed"
              width={300}
              height={300}
            />
          </div>
          <div className="col">
            <StaticImage
              alt="Franzi, second CEO of mindchase"
              src="../images/team/Franzi/franzi.jpg"
              layout="fixed"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
