import { FC, useEffect } from "react";
import useLayout from "../hooks/useLayout";
import aboutIntroImage from "../assets/images/about-intro-image.jpg";
import TeamCard, { TeamCardProps } from "../components/TeamCard";
import graceCarter from "../assets/images/grace-carter.png";
import isabellaPreston from "../assets/images/isabella-preston.png";
import owenMatthews from "../assets/images/owen-matthews.png";
import "react-multi-carousel/lib/styles.css";
import Carousel from "../components/Carousel";

const teamMembers: Array<TeamCardProps> = [
  {
    img: graceCarter,
    name: "Grace Carter",
    role: "Project Manager",
  },
  {
    img: isabellaPreston,
    name: "Isabella Preston",
    role: "Project Manager",
  },
  {
    img: owenMatthews,
    name: "Owen Matthews",
    role: "Project Manager",
  },
];

const About: FC = () => {
  const { isHeaderVisible, showHeader } = useLayout();

  useEffect(() => {
    if (!isHeaderVisible) showHeader();
  }, [isHeaderVisible, showHeader]);

  return (
    <main className="about">
      <section className="about-intro">
        <h1 className="about-intro__heading">ABOUT US</h1>
        <div className="about-intro__container">
          <div>
            <p className="about-intro__desc">
              We specialize in creating bespoke interiors that exude elegance,
              sophistication, and timeless luxury. At Maison Noir, we believe
              that every space tells a story, and our mission is to craft
              environments that reflect your unique narrative.
              <br />
              <br />
              Our design philosophy is rooted in the art of subtle
              opulence—where every detail, texture, and tone is carefully
              curated to evoke a sense of refined living. Whether it&apos;s an
              intimate residence or a grand commercial space, we bring a modern,
              high-fashion approach to every project, combining bold vision with
              meticulous craftsmanship.
            </p>
            <h6 className="about-intro__tagline">
              REDEFINING INTERIORS WITH
              <br />
              TIMELESS LUXURY
            </h6>
            <h4 className="about-intro__name">MAISON NOIR</h4>
          </div>
          <img
            className="about-intro__image"
            src={aboutIntroImage}
            alt="Maison Noir"
          />
          <svg
            className="about-intro__diamond"
            width="802"
            height="802"
            viewBox="0 0 802 802"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 401L401 1L801 401L401 801L1 401Z" stroke="#D9D9D9" />
          </svg>
        </div>
      </section>
      <section className="about-experience">
        <div className="about-experience__container">
          <p className="about-experience__desc">
            With years of expertise in transforming spaces, Maison Noir has
            built a reputation for delivering unparalleled design experiences.
            Our portfolio spans luxury residences, boutique hotels, and high-end
            commercial spaces, each a testament to our commitment to excellence
            and innovation.
            <br />
            <br />
            At Maison Noir, we blend our deep knowledge of design principles
            with an intuitive understanding of our clients&apos; needs. From
            concept to completion, we bring an expert touch to every aspect of
            the process—masterfully balancing form and function while pushing
            the boundaries of modern luxury.
          </p>
          <h4 className="about-experience__tagline">YEARS OF EXPERIENCE</h4>
        </div>
      </section>
      <section className="about-team">
        <div className="about-team__container--heading">
          <h2 className="about-team__heading">MEET OUR TEAM</h2>
        </div>
        <Carousel
          className="about-team__carousel"
          data={teamMembers}
          renderComponent={(data) => <TeamCard {...data} />}
        ></Carousel>
      </section>
    </main>
  );
};

export default About;
