import { FC, useEffect } from "react";
import useLayout from "../hooks/useLayout";
import aboutIntroImage from "../assets/images/about-intro-image.jpg";
import TeamCard, { TeamCardProps } from "../components/TeamCard";
import graceCarter from "../assets/images/grace-carter.png";
import isabellaPreston from "../assets/images/isabella-preston.png";
import owenMatthews from "../assets/images/owen-matthews.png";
import Carousel from "../components/Carousel";
import { CollapsibleItemProps } from "../components/CollapsibleItem";
import CollapsibleList from "../components/CollapsibleList";
import Button from "../components/Button";
import logo from "../assets/logo.svg";
import instagramLogo from "../assets/instagram-logo.svg";
import facebookLogo from "../assets/facebook-logo.svg";
import linkedinLogo from "../assets/linkedin-logo.svg";

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

const ourProcess: Array<CollapsibleItemProps> = [
  {
    title: "Initial Consultation",
    body: (
      <>
        The work process for Maison Noir begins with an initial consultation,
        where the client and the design team meet to discuss the project&apos;s
        overall vision. This involves understanding the client&apos;s
        preferences, lifestyle, and goals for the space, whether it&apos;s a
        residential or commercial property. Following this, Maison Noir conducts
        a thorough site visit to evaluate the existing space. They assess the
        structure, lighting, and current layout, determining how best to enhance
        the environment. During this stage, both the client and designer define
        the scope of the project, including the number of rooms, any required
        structural changes, and budget constraints. This first step is all about
        laying the groundwork for a successful design.
      </>
    ),
  },
  {
    title: "design concept development",
    body: (
      <>
        Next comes the design concept development stage. Here, the team creates
        mood boards that capture the overall style and aesthetic direction for
        the project. These boards are filled with inspiration images, color
        palettes, textures, and ideas for furniture styles and lighting. To give
        the client a tangible sense of the design, preliminary sketches and
        basic layouts are also created. These plans help visualize the
        arrangement of furniture, space utilization, and general flow. Client
        feedback is crucial during this phase; the initial concept is refined
        according to the client&apos;s preferences, ensuring the project aligns
        with their expectations.
      </>
    ),
  },
  {
    title: "detailed design & planning",
    body: (
      <>
        The third step involves detailed design and planning. Once the initial
        concept is approved, Maison Noir develops comprehensive 3D renderings
        and floor plans. These visual representations allow the client to see
        how the final space will look and feel, with precise detail on textures,
        colors, and furniture placement. The design team also presents carefully
        curated selections for materials and finishes, including fabrics,
        flooring, lighting, and hardware. Along with these visual and material
        selections, a budget proposal is provided, detailing all costs for
        materials, labor, and design fees. A clear project timeline is then
        outlined, specifying key milestones and deadlines to keep the project on
        track.
      </>
    ),
  },
  {
    title: "procurement & project management",
    body: (
      <>
        With the design finalized, the process moves into procurement and
        project management. This stage involves sourcing all the necessary
        furniture, materials, and décor, often from high-quality suppliers or
        custom-made orders. The project manager works closely with contractors,
        ensuring that the team follows the design specifications accurately.
        They also coordinate with electricians, plumbers, and other specialists
        for any technical work that might be required. Regular site visits
        ensure that the project is progressing smoothly, and the client is kept
        informed with frequent updates on milestones, addressing any changes or
        challenges as they arise.
      </>
    ),
  },
  {
    title: "Installation & styling",
    body: (
      <>
        Once the construction or renovation phase is complete, the focus shifts
        to installation and styling. The design team oversees the installation
        of furniture, lighting, and other decorative elements. They ensure each
        piece is placed optimally for both functionality and aesthetics. The
        final styling stage involves adding personal touches—artwork,
        accessories, textiles, and plants—that breathe life into the space.
        After everything is set, Maison Noir conducts a final walkthrough with
        the client. This is the moment when the client experiences the finished
        design in person, offering feedback and discussing any last-minute
        adjustments.
      </>
    ),
  },
  {
    title: "post-project follow-up",
    body: (
      <>
        Finally, post-project follow-up ensures that the client is fully
        satisfied with the completed design. Maison Noir handles any necessary
        touch-ups or adjustments based on the client&apos;s input after the
        final walkthrough. The team also offers aftercare services, providing
        maintenance tips for materials and ongoing support if the client needs
        additional help down the road. Feedback is collected to continuously
        improve the business, ensuring that future projects benefit from each
        client&apos;s experience. This step ensures lasting client relationships
        and long-term satisfaction with the services provided.
      </>
    ),
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
          <h2 className="about-team__heading">Meet Our Team</h2>
        </div>
        <Carousel
          className="about-team__carousel"
          data={teamMembers}
          renderComponent={(data) => <TeamCard {...data} />}
        ></Carousel>
      </section>
      <section className="about-process">
        <h5 className="about-process__heading">Our Process</h5>
        <div className="about-process__container--process">
          <CollapsibleList items={ourProcess} />
        </div>
        <p className="about-process__desc">
          Our personalized design process provides a seamless experience,
          ensuring each client&apos;s vision is central to every decision. With
          meticulous planning and quality execution, we transform spaces into
          stunning reflections of individual style while delivering projects on
          time and within budget. Clients can confidently watch their dream
          interiors come to life, supported every step of the way.
        </p>
      </section>
      <section className="about-work-w-us">
        <h2 className="about-work-w-us__heading">Work with us</h2>
        <div className="about-work-w-us__content">
          <p className="about-work-w-us__text">
            Ready to create something extraordinary together?
            <br />
            Reach out today, and let&apos;s turn your dream space into a
            stunning reality.
          </p>
          <div className="about-work-w-us__container--button">
            <Button label="Get in touch" />
          </div>
        </div>
      </section>
      <footer className="about-footer">
        <img src={logo} alt="Maison Noir" className="about-footer__logo" />
        <p className="about-footer__copyright">
          Copyright 2024 © MAISON NOIR Interior Design
        </p>
        <div className="about-footer__container--socials">
          <img
            src={instagramLogo}
            alt="Instagram"
            className="about-footer__social"
          />
          <img
            src={facebookLogo}
            alt="Facebook"
            className="about-footer__social"
          />
          <img
            src={linkedinLogo}
            alt="LinkedIn"
            className="about-footer__social"
          />
        </div>
      </footer>
    </main>
  );
};

export default About;
