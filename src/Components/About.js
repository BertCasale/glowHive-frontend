import laura from "../assets/GH_founder.jpg";
import bert from "../assets/Bert-Casale.jpg";
const About = () => {
  return (
    <>
      <h1>Glow Hive</h1>
      <div className="about">
        <p>
          Welcome to GlowHive, a community-run website for all skin enthusiasts
          out there! At GlowHive, we make it simple for you to find the best
          skincare products that suit your skin type. Our website is unique
          because anyone can add products they like. This means that our
          community members can share their favorite products with others,
          helping to create a database of reliable skincare products. We also
          prioritize certain features such as cruelty-free, vegan, and more,
          making it easier for you to find products that align with your values.{" "}
        </p>
        <p>
          One of the best things about GlowHive is that you can update any
          product information you see on the site. If you notice that a product
          has been updated, you can change it on the site so that others are
          aware. Additionally, if you come across a product that you think
          others would love, you can also add it to the site.
        </p>
        <p>
          Our mission at GlowHive is to create a community of individuals who
          are passionate about skincare and who want to help others achieve
          healthy, glowing skin. We believe that everyone deserves to feel
          confident in their own skin, and we hope to make that a reality
          through our website. Thank you for choosing GlowHive as your go-to
          source for skincare products. We look forward to helping you achieve
          your best skin yet!
        </p>
      </div>
      <div>
        <h2>Founders</h2>
        <img src={bert} alt="Bert Casale headshot" />
        <h3>Bert Casale</h3>

        <img src={laura} alt=" laura williams headshot" />
        <h3>Laura Williams </h3>

        <p>
          Bert and Laura are both pursuit fellows with a strong passion for
          coding. They are currently enrolled in a software engineering bootcamp
          to further develop their skills and knowledge, with the goal of making
          positive changes and increasing diversity in the tech industry. They
          are determined to revamp the industry by using their expertise to
          create innovative solutions and promote inclusivity in the field of
          technology.
        </p>
      </div>
    </>
  );
};
export default About;
